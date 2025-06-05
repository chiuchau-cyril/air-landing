import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { 
  Activity, 
  BarChart3, 
  Zap, 
  Gauge,
  TrendingUp,
  AlertTriangle 
} from "lucide-react";

const features = [
  {
    icon: <Gauge className="w-8 h-8" />,
    title: "儀表板總覽",
    description: "即時監控數據、異常預警與長期趨勢分析",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: <Activity className="w-8 h-8" />,
    title: "振動監測",
    description: "三軸振動、溫度、FFT 頻譜分析",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: "數據分析",
    description: "原始數據表格，振動、溫度、電壓電流即時呈現",
    color: "from-purple-500 to-violet-500"
  },
  {
    icon: <AlertTriangle className="w-8 h-8" />,
    title: "異常預警",
    description: "AI 異常預測模型，提前發現潛在故障",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "趨勢分析",
    description: "長期趨勢圖分析，設備健康狀態追蹤",
    color: "from-indigo-500 to-blue-500"
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "能源追蹤",
    description: "電壓、電流、功率監測與碳排放追蹤",
    color: "from-yellow-500 to-orange-500"
  }
];

export function FeaturesSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            產品亮點
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            智慧監控解決方案
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            即時監控數據、異常預警與長期趨勢分析，幫助提升鼓風機運行效能，確保設備穩定運作
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white/60 backdrop-blur-sm hover:-translate-y-2"
            >
              <CardHeader className="pb-4">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} p-4 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {feature.icon}
                  </div>
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}