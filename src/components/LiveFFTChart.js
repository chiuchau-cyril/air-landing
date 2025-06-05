import React from "react";
import {
	ResponsiveContainer,
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ReferenceLine,
} from "recharts";
import "./LiveFFTChart.css";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const LiveFFTChart = React.memo(
	function LiveFFTChart({ sensorName, data, param, maxFreq, maxAmp, unit }) {
		const [activeIndex, setActiveIndex] = React.useState(null);
		const uniqueDataMap = new Map();
		const removedDuplicates = [];
		data.forEach((item, index) => {
			const key = `${item.fre}-${item.amp}`;
			if (uniqueDataMap.has(key)) {
				removedDuplicates.push(item);
			} else {
				uniqueDataMap.set(key, {
					...item,
					uniqueId: `${index}-${item.fre}-${item.amp}`,
				});
			}
		});
		const dataWithId = Array.from(uniqueDataMap.values());
		const getAxisLabel = (param) => {
			const mapping = {
				0: `${sensorName}-V`,
				1: `${sensorName}-A`,
				2: `${sensorName}-H`,
			};
			return mapping[param] || param;
		};
		const getAxisColor = (param) => {
			const colorMapping = {
				0: "red",
				1: "blue",
				2: "green",
			};
			return colorMapping[param] || "#8884d8";
		};
		const getStrokeColor = (param) => {
			const colorMapping = {
				0: "rgb(152,0,0)",
				1: "rgb(0,0,205)",
				2: "rgb(0,87,0)",
			};
			return colorMapping[param] || "#8884d8";
		};
		const CustomTooltip = ({ active, payload }) => {
			if (active && payload && payload.length) {
				const data = payload[0].payload;
				return (
					<div className="custom-tooltip">
						<p className="intro">{`${data.date} ${data.time}`}</p>
						<p className="label">{`${payload[0].name} ( ${data.fre} , ${data.amp} )`}</p>
					</div>
				);
			}
			return null;
		};
		if (data.length === 0) {
			return <div className="no-data-alert">無資料</div>;
		}
		return (
			<div className="live-fft-chart">
				<div className="chart-title" style={{ color: getAxisColor(param) }}>
					{getAxisLabel(param)}
				</div>
				<ResponsiveContainer width="100%" height={300}>
					<BarChart
						data={dataWithId}
						onMouseMove={(e) => {
							if (
								e &&
								e.activeTooltipIndex !== undefined &&
								e.activeTooltipIndex < dataWithId.length
							) {
								if (activeIndex !== e.activeTooltipIndex) {
									setActiveIndex(e.activeTooltipIndex);
								}
							}
						}}
						onMouseLeave={() => {
							setActiveIndex(null);
						}}
					>
						<CartesianGrid strokeDasharray="3 3" />
						<XAxis dataKey="fre" type="number" domain={[0, maxFreq]} />
						<YAxis domain={[0, maxAmp]} />
						<Bar
							dataKey="amp"
							fill={getAxisColor(param)}
							stroke={getStrokeColor(param)}
							strokeWidth={1}
							barSize={1}
							name={getAxisLabel(param)}
							isAnimationActive={false}
						/>
						<Tooltip content={<CustomTooltip />} />
						<text className="chart-text x-axis" x="100%" y={298} textAnchor="end">
							Freq(Hz)
						</text>
						<text className="chart-text y-axis" x={130} y={170} transform="rotate(-90 20 175)">
							Amp({unit})
						</text>
						{activeIndex !== null && dataWithId[activeIndex] && (
							<ReferenceLine
								key={`ref-line-${dataWithId[activeIndex].uniqueId}`}
								x={dataWithId[activeIndex].fre}
								stroke="white"
							/>
						)}
					</BarChart>
				</ResponsiveContainer>
			</div>
		);
	}
);

export default LiveFFTChart;

