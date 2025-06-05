"use client";

import { useEffect, useState, useCallback } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { Separator } from "./ui/separator";
import { Activity, Zap, AlertTriangle } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
// @ts-expect-error: JS component, ignore type
import LiveFFTChart from "./LiveFFTChart";

const issueMapping = [
  { name: "不平衡", key: "Unbalance", color: "bg-red-500" },
  { name: "軸彎曲", key: "Shaft_Bow", color: "bg-yellow-500" },
  { name: "轉子偏心", key: "Oil_Whirl", color: "bg-orange-500" },
  { name: "轉動不對心", key: "Misalignment", color: "bg-amber-500" },
  { name: "設備鬆動", key: "Looseness", color: "bg-orange-600" },
];

function displayValue(value: any) {
  return value === null || value === undefined || Number.isNaN(value)
    ? "-"
    : value;
}

function convertFftmmsToChartData(fftmmsObj: unknown, axis: "x" | "y" | "z" = "x"): {fre: number, amp: number}[] {
  const arr: {fre: number, amp: number}[] = [];
  if (typeof fftmmsObj !== 'object' || !fftmmsObj) return arr;
  for (let i = 1; i <= 50; i++) {
    // @ts-expect-error: dynamic key
    const amp = fftmmsObj[`amp_${axis}${i}`];
    arr.push({
      fre: i,
      amp: amp ?? 0,
    });
  }
  return arr;
}

export function DynamicDemo() {
  const [sensorData, setSensorData] = useState([
    { label: "X", value: "-", color: "text-red-500" },
    { label: "Y", value: "-", color: "text-blue-500" },
    { label: "Z", value: "-", color: "text-green-500" },
    { label: "溫度", value: "-", unit: "°C", color: "text-orange-500" },
  ]);
  const [powerData, setPowerData] = useState([
    { label: "頻率(Hz)", value: "-", unit: "Hz" },
    { label: "電流", value: "-", unit: "A" },
    { label: "KWh", value: "-", unit: "kWh" },
    { label: "累積電量", value: "-", unit: "kWh" },
  ]);
  const [anomalyData, setAnomalyData] = useState(
    issueMapping.map((item) => ({ name: item.name, percentage: 0, color: item.color }))
  );
  const [fftData, setFftData] = useState<unknown>([[], [], []]);

  const fetchAllData = useCallback(async () => {
    const response = await fetch("/api/last10seconds", {
      headers: {
        accept: "application/json",
        Authorization: "Bearer EY9pJ7PmAzmqaQKmhOBz",
      },
    });
    if (!response.ok) throw new Error("API 錯誤");
    const data = await response.json();
    // Sensor Data
    const eigen = Array.isArray(data.eigen) ? data.eigen[0] : {};
    setSensorData([
      { label: "X", value: displayValue(eigen.x_speed?.toFixed(2)), color: "text-red-500" },
      { label: "Y", value: displayValue(eigen.y_speed?.toFixed(2)), color: "text-blue-500" },
      { label: "Z", value: displayValue(eigen.z_speed?.toFixed(2)), color: "text-green-500" },
      { label: "溫度", value: displayValue(eigen.temp?.toFixed(2)), unit: "°C", color: "text-orange-500" },
    ]);
    // Power Data
    const em = Array.isArray(data.EM_data) ? data.EM_data[0] : {};
    setPowerData([
      { label: "頻率(Hz)", value: displayValue(em.freq?.toFixed(2)), unit: "Hz" },
      { label: "電流", value: "-", unit: "A" },
      { label: "KWh", value: "-", unit: "kWh" },
      { label: "累積電量", value: "-", unit: "kWh" },
    ]);
    // Anomaly Data
    const health = Array.isArray(data.health_issue) ? data.health_issue[0] : {};
    setAnomalyData(
      issueMapping.map((item) => ({
        name: item.name,
        percentage:
          health[item.key] !== undefined && health[item.key] !== null
            ? Math.round(health[item.key] * 100)
            : 0,
        color: item.color,
      }))
    );
    // FFT Data
    const fftmms = Array.isArray(data.fftmms) ? data.fftmms[0] : null;
    const fftDataX = fftmms ? convertFftmmsToChartData(fftmms, "x") : [];
    const fftDataY = fftmms ? convertFftmmsToChartData(fftmms, "y") : [];
    const fftDataZ = fftmms ? convertFftmmsToChartData(fftmms, "z") : [];
    setFftData([fftDataX, fftDataY, fftDataZ]);
  }, []);

  useEffect(() => {
    fetchAllData();
    const interval = setInterval(fetchAllData, 10000);
    return () => clearInterval(interval);
  }, [fetchAllData]);

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            動態展示
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            即時監控演示
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            體驗我們系統的實時監控能力，從數據收集到異常預警的完整流程
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - System Info and Data */}
          <div className="space-y-8">
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Activity className="w-6 h-6 text-blue-600" />
                  久朝龍潭廠 OC1605-0224
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Sensor Data */}
                <div>
                  <h4 className="font-semibold mb-4 flex items-center gap-2">
                    <Activity className="w-4 h-4" />
                    Sensor 01 - 振動數據
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    {sensorData.map((sensor, index) => (
                      <div key={index} className="bg-gray-50 rounded-lg p-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">{sensor.label}：</span>
                          <span className={`font-mono font-bold ${sensor.color}`}>
                            {sensor.value}
                            {sensor.unit && <span className="text-gray-500 ml-1">{sensor.unit}</span>}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <Separator />
                {/* Power Data */}
                <div>
                  <h4 className="font-semibold mb-4 flex items-center gap-2">
                    <Zap className="w-4 h-4" />
                    電力監測
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    {powerData.map((power, index) => (
                      <div key={index} className="bg-gray-50 rounded-lg p-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">{power.label}:</span>
                          <span className="font-mono font-bold text-gray-900">
                            {power.value}
                            <span className="text-gray-500 ml-1">{power.unit}</span>
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
            {/* Equipment Image */}
            <Card className="border-0 shadow-xl overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center">
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=400&fit=crop"
                    alt="風機設備"
                    className="w-full h-full object-cover"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
          {/* Right Column - Analysis Results */}
          <div className="space-y-8">
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <AlertTriangle className="w-6 h-6 text-orange-600" />
                  設備可能問題
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {anomalyData.map((anomaly, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{anomaly.name}</span>
                      <span className="font-bold">{anomaly.percentage}%</span>
                    </div>
                    <div className="relative">
                      <Progress value={anomaly.percentage} className="h-3" />
                      <div 
                        className={`absolute top-0 left-0 h-3 rounded-full ${anomaly.color} transition-all duration-500`}
                        style={{ width: `${anomaly.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
            {/* Real-time Chart Placeholder */}
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle>FFT 頻譜分析</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                  <div className="w-full flex flex-col md:flex-row gap-4">
                    {["X", "Y", "Z"].map((axis, index) => (
                      <div key={axis} className="flex-1">
                        <LiveFFTChart
                          sensorName={`Sensor1-${axis}`}
                          data={fftData[index] || []}
                          param={index}
                          maxFreq={50}
                          maxAmp={5}
                          unit="mm/s"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}