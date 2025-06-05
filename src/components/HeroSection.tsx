import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Play } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-6 z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* Badge */}
          <Badge variant="secondary" className="mb-6 bg-white/10 text-white border-white/20 backdrop-blur-sm">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
            智慧風機監測系統
          </Badge>

          {/* Main heading with gradient text */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent leading-tight">
            air.chiuchau.com
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-4 max-w-3xl mx-auto leading-relaxed">
            及時掌握，主動維護
          </p>
          
          <p className="text-lg text-blue-200/80 mb-12 max-w-4xl mx-auto leading-relaxed">
            數據驅動下的能源管理與設備優化，為永續發展奠定堅實基石
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
              立即體驗
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white/30 text-[rgba(50,50,50,1)] hover:bg-white/10 px-8 py-3 text-lg backdrop-blur-sm"
            >
              <Play className="w-5 h-5 mr-2" />
              觀看演示
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-white/10">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">38年</div>
              <div className="text-blue-200 text-sm">風機生產經驗</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">200+</div>
              <div className="text-blue-200 text-sm">家企業採用</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">20000+</div>
              <div className="text-blue-200 text-sm">生產風機數</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-blue-200 text-sm">不間斷監控</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}