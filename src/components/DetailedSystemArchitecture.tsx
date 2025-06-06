import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { 
  Cpu, 
  Wifi, 
  Activity, 
  // Zap, 
  // Monitor, 
  // Router,
  Cloud,
  // Shield
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const systemSpecs = [
  { label: "產品尺寸", value: "模組電控箱總成：400mm x 300mm x 180mm" },
  { label: "核心處理器", value: "四核心 64-bit ARM Cortex-A72, 1.5GHz" },
  { label: "記憶體", value: "8GB LPDDR4 SDRAM" },
  { label: "儲存", value: "128GB" },
  { label: "電源模組", value: "UPS擴充模組(B)，5V，具備斷電保護功能" },
  { label: "感測器", value: "三軸加速度感測器 (X, Y, Z 軸)，頻寬 3.8kHz，±8g，IP67 防水防塵" },
  { label: "通訊方式", value: "Model One: USB/RJ45、有線傳輸 | Model Air: Wi-Fi, 最遠 80m | Model Lora: LoRa, 最遠 10km" },
  { label: "防護等級", value: "IP65: 防塵防低壓水柱噴射" },
  { label: "電表支援", value: "高精度 RJ45 CT 輸入電表，支援電壓、電流、功率與能耗監測" },
  { label: "AI 預測功能", value: "設備健康狀態監測，不平衡、軸彎曲、鬆動等異常偵測" },
  { label: "即時通知功能", value: "LINE 群組、Email 通知，依 ISO 20816 標準發送異常警報" },
  { label: "報表輸出", value: "自動生成月報表，支援 PDF 和 CSV 匯出" },
  { label: "操作溫度範圍", value: "-20°C ~ 85°C" },
  { label: "選配配件", value: "三色狀態燈、4G LTE 路由器與網卡、觸控顯示器" },
  { label: "雲端支援", value: "air.chiuchau.com 平台，支援遠端監測、多設備管理" }
];

const components = [
  {
    name: "監測模組總成",
    description: "核心處理單元與感測器整合模組",
    image: "/module.svg"
  },
  {
    name: "三軸振動感測器",
    description: "三軸振動、溫度、FFT、轉速",
    image: "/sensor.jpg"
  },
  {
    name: "CT電表",
    description: "電壓、電流、能源追蹤",
    image: "/e-meter.jpg"
  },
  {
    name: "三色狀態燈",
    description: "設備狀態視覺指示",
    image: "/status-light.jpg"
  },
  {
    name: "觸控顯示器",
    description: "本地監控與操作介面",
    image: "/screen.jpg"
  },
  {
    name: "4G LTE 路由器",
    description: "遠端連接與數據傳輸",
    image: "/router.jpg"
  }
];

export function DetailedSystemArchitecture() {
  return (
    <section className="py-24 bg-gradient-to-b from-green-500 via-blue-600 to-indigo-700">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column - System Specifications */}
          <div className="text-white">
            <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
              系統架構
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              完整解決方案
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              整合硬體、軟體與雲端服務的一站式監測平台，
              提供從數據採集到智能分析的完整解決方案。
            </p>
            
            <div className="space-y-6">
              {systemSpecs.map((spec, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <div className="flex flex-col gap-2">
                    <span className="font-semibold text-blue-100">{spec.label}</span>
                    <span className="text-white leading-relaxed">{spec.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Component Showcase */}
          <div>
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-8 text-center">
                系統組件展示
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {components.map((component, index) => (
                  <Card key={index} className="bg-white/95 border-0 hover:shadow-xl transition-all duration-300 group">
                    <div className="relative aspect-[4/3] h-48 overflow-hidden rounded-t-lg bg-gray-100">
                      <ImageWithFallback 
                        src={component.image}
                        alt={component.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">{component.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm">{component.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Connection Diagram */}
              <div className="mt-8 pt-8 border-t border-white/20">
                <h4 className="text-lg font-semibold text-white mb-6 text-center">
                  連接架構圖
                </h4>
                <div className="bg-white/5 rounded-xl p-6">
                  <div className="flex items-center justify-center space-x-4 flex-wrap gap-4">
                    <div className="flex items-center space-x-2 bg-blue-600 rounded-lg px-3 py-2">
                      <Activity className="w-4 h-4 text-white" />
                      <span className="text-white text-sm">感測器</span>
                    </div>
                    <div className="text-white">→</div>
                    <div className="flex items-center space-x-2 bg-green-600 rounded-lg px-3 py-2">
                      <Cpu className="w-4 h-4 text-white" />
                      <span className="text-white text-sm">處理器</span>
                    </div>
                    <div className="text-white">→</div>
                    <div className="flex items-center space-x-2 bg-purple-600 rounded-lg px-3 py-2">
                      <Wifi className="w-4 h-4 text-white" />
                      <span className="text-white text-sm">通訊</span>
                    </div>
                    <div className="text-white">→</div>
                    <div className="flex items-center space-x-2 bg-indigo-600 rounded-lg px-3 py-2">
                      <Cloud className="w-4 h-4 text-white" />
                      <span className="text-white text-sm">雲端</span>
                    </div>
                  </div>
                  <p className="text-center text-gray-300 text-sm mt-4">
                    模組化設計，支援彈性配置與擴展
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}