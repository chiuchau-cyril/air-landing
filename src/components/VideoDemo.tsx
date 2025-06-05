import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Play } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function VideoDemo() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-blue-500/20 text-blue-300 border-blue-500/30">
            AI 技術展示
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            泛用風機檢測模型
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            基於深度學習的智能診斷系統，能夠識別各種風機異常狀況
          </p>
        </div>

        {/* Video Section */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <div className="aspect-video bg-gradient-to-br from-blue-900 to-indigo-900 flex items-center justify-center relative">
              {/* Video Thumbnail */}
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1200&h=675&fit=crop"
                alt="風機檢測演示"
                className="w-full h-full object-cover"
              />
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <Button 
                  size="lg" 
                  className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border-white/30 text-white rounded-full p-6"
                  variant="outline"
                >
                  <Play className="w-8 h-8 ml-1" fill="currentColor" />
                </Button>
              </div>

              {/* Video Info Overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-black/50 backdrop-blur-sm rounded-lg p-4">
                  <h3 className="text-white font-semibold mb-2">
                    ÆIR 1 檢測模型演示
                  </h3>
                  <p className="text-gray-300 text-sm">
                    展示皮帶鬆動、軸承座鬆動等異常檢測能力
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            ÆIR 1 模型採用先進的機器學習演算法，針對風機常見的機械故障進行專門訓練。
            系統能夠自動識別設備不平衡、軸承磨損、皮帶鬆動等多種異常模式，
            提供準確的故障分類和嚴重程度評估。
          </p>
          
          <p className="text-lg text-gray-300 leading-relaxed">
            透過持續學習機制，模型會根據實際運行數據不斷優化檢測精度，
            適應不同環境和設備條件的變化。這種自適應能力確保了檢測系統的長期穩定性和可靠性，
            為維護團隊提供精準的決策支援。
          </p>
        </div>
      </div>
    </section>
  );
}