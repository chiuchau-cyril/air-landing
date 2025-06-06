import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

const highlights = [
  {
    title: "儀表板總覽",
    description: "即時監控數據、異常預警與長期趨勢分析，幫助提升鼓風機運行效能",
    image: "/dashboard.jpg"
  },
  {
    title: "原始數據表格（Raw Data）",
    description: "振動、溫度、電壓電流即時呈現，提供完整的設備運行數據",
    image: "/table.jpg"
  },
  {
    title: "異常事件完整記錄",
    description: "詳細記錄每一次異常事件，建立完整的設備健康檔案",
    image: "/record.jpg"
  },
  {
    title: "碳排追蹤",
    description: "監控設備能源消耗，計算碳排放量，支持企業ESG目標",
    image: "/carbon-emission.jpg"
  },
  {
    title: "異常事件完整記錄",
    description: "建立事件時間軸，追蹤問題處理進度和解決方案效果",
    image: "/feature-trend.jpg"
  },
  {
    title: "長期趨勢圖 + FFT頻譜分析",
    description: "深度分析設備運行趨勢，預測未來可能的維護需求",
    image: "/fft-trend.jpg"
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
                <img 
                  src={highlight.image}
                  alt={highlight.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  draggable="false"
                />
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
              <a
                href="https://phrygian-colossus-769.notion.site/199377d64b61806199bddd875a74b26d?source=copy_link"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white text-black border border-gray-400 rounded-xl hover:bg-gray-100 transition-all duration-300 inline-block"
              >
                下載功能手冊
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}