import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { 
  Cpu, 
  Shield, 
  Activity,
  Zap,
  Monitor,
  Cloud
} from "lucide-react";

export function SystemArchitecture() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-blue-500/20 text-blue-300 border-blue-500/30">
            系統架構
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            全方位監測解決方案
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            整合高精度感測器、AI預測模型與雲端平台，提供完整的風機監測解決方案
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* System Diagram */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-900/50 to-indigo-900/50 rounded-3xl p-8 backdrop-blur-sm border border-blue-500/20">
              <div className="grid grid-cols-2 gap-6">
                {/* Sensors */}
                <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all duration-300">
                  <CardHeader className="pb-3">
                    <Activity className="w-8 h-8 text-green-400 mb-2" />
                    <CardTitle className="text-white text-lg">感測器</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• 三軸振動</li>
                      <li>• 溫度監測</li>
                      <li>• FFT 分析</li>
                      <li>• 轉速監測</li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Power Monitoring */}
                <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all duration-300">
                  <CardHeader className="pb-3">
                    <Zap className="w-8 h-8 text-yellow-400 mb-2" />
                    <CardTitle className="text-white text-lg">CT電表</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• 電壓監測</li>
                      <li>• 電流監測</li>
                      <li>• 功率計算</li>
                      <li>• 能源追蹤</li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Processing Unit */}
                <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all duration-300">
                  <CardHeader className="pb-3">
                    <Cpu className="w-8 h-8 text-blue-400 mb-2" />
                    <CardTitle className="text-white text-lg">處理單元</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• ARM Cortex-A72</li>
                      <li>• 8GB LPDDR4</li>
                      <li>• 128GB 儲存</li>
                      <li>• AI 預測模型</li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Cloud Platform */}
                <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all duration-300">
                  <CardHeader className="pb-3">
                    <Cloud className="w-8 h-8 text-purple-400 mb-2" />
                    <CardTitle className="text-white text-lg">雲端平台</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• 遠端監控</li>
                      <li>• 數據分析</li>
                      <li>• 報表生成</li>
                      <li>• 多設備管理</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Specifications */}
          <div className="space-y-6">
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Monitor className="w-6 h-6 mr-3 text-blue-400" />
                系統規格
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-white/10">
                  <span className="text-gray-300">核心處理器</span>
                  <span className="text-white font-medium">四核心 64-bit ARM Cortex-A72, 1.5GHz</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/10">
                  <span className="text-gray-300">記憶體</span>
                  <span className="text-white font-medium">8GB LPDDR4 SDRAM</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/10">
                  <span className="text-gray-300">儲存空間</span>
                  <span className="text-white font-medium">128GB</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/10">
                  <span className="text-gray-300">防護等級</span>
                  <span className="text-white font-medium">IP65</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-300">通訊方式</span>
                  <span className="text-white font-medium">Wi-Fi / LoRa / 4G</span>
                </div>
              </div>
            </div>

            <div className="bg-white/5 rounded-2xl p-6 border border-white/10 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Shield className="w-6 h-6 mr-3 text-green-400" />
                AI 預測功能
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                  不平衡檢測與預警
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                  軸彎曲異常監測
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                  設備鬆動檢測
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                  轉子偏心分析
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}