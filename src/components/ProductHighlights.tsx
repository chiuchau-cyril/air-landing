import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { 
  Gauge, 
  BarChart3, 
  Bell, 
  Leaf, 
  Archive, 
  TrendingUp 
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const highlights = [
  {
    title: "儀表板總覽",
    description: "即時監控數據、異常預警與長期趨勢分析，幫助提升鼓風機運行效能",
    icon: <Gauge className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    title: "原始數據表格（Raw Data）",
    description: "振動、溫度、電壓電流即時呈現，提供完整的設備運行數據",
    icon: <BarChart3 className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    title: "異常事件完整記錄",
    description: "詳細記錄每一次異常事件，建立完整的設備健康檔案",
    icon: <Bell className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=400&h=300&fit=crop",
    gradient: "from-orange-500 to-red-500"
  },
  {
    title: "碳排追蹤",
    description: "監控設備能源消耗，計算碳排放量，支持企業ESG目標",
    icon: <Leaf className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop",
    gradient: "from-green-600 to-teal-600"
  },
  {
    title: "異常事件完整記錄",
    description: "建立事件時間軸，追蹤問題處理進度和解決方案效果",
    icon: <Archive className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop",
    gradient: "from-purple-500 to-violet-500"
  },
  {
    title: "長期趨勢圖 + FFT頻譜分析",
    description: "深度分析設備運行趨勢，預測未來可能的維護需求",
    icon: <TrendingUp className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
    gradient: "from-indigo-500 to-blue-500"
  }
];

export function ProductHighlights() {
  return (
    <section className="py-24 bg-gradient-to-b from-yellow-50 via-green-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 bg-green-100 text-green-700 border-green-300">
            產品亮點
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            智慧監控六大功能
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            即時監控數據、異常預警與長期趨勢分析，幫助提升鼓風機運行效能，確保設備穩定運作
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:-translate-y-4 overflow-hidden"
            >
              {/* Image Section */}
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback 
                  src={highlight.image}
                  alt={highlight.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${highlight.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />
                
                {/* Icon Overlay */}
                <div className="absolute top-4 right-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${highlight.gradient} p-3 shadow-lg`}>
                    <div className="text-white">
                      {highlight.icon}
                    </div>
                  </div>
                </div>
              </div>

              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                  {highlight.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {highlight.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-white/40 inline-block">
            <p className="text-lg text-gray-700 mb-4">
              想了解更多功能細節？
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:shadow-lg transition-all duration-300">
                預約產品演示
              </button>
              <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-all duration-300">
                下載功能手冊
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}