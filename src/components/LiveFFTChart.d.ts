import React from "react";

export interface LiveFFTChartProps {
  sensorName: string;
  data: { fre: number; amp: number }[];
  param: number;
  maxFreq: number;
  maxAmp: number;
  unit: string;
}

declare const LiveFFTChart: React.MemoExoticComponent<(
  props: LiveFFTChartProps
) => JSX.Element>;

export default LiveFFTChart;
