import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

const features = [
  {
    img: "/dashboard.jpg",
    title: "儀表板總覽",
    description: "即時監控數據、異常預警與長期趨勢分析"
  },
  {
    img: "/table.jpg",
    title: "原始數據表格（RAW DATA）：振動、溫度、電壓電流即時呈現",
    description: "原始數據表格，振動、溫度、電壓電流即時呈現"
  },
  {
    img: "/record.jpg",
    title: "異常事件完整記錄",
    description: "異常事件完整記錄，建立完整的設備健康檔案"
  },
  {
    img: "/carbon-emission.jpg",
    title: "碳排追蹤",
    description: "監控設備能源消耗，計算碳排放量，支持企業ESG目標"
  },
  {
    img: "/feature-trend.jpg",
    title: "特徵趨勢",
    description: "長期趨勢圖分析，設備健康狀態追蹤"
  },
  {
    img: "/fft-trend.jpg",
    title: "FFT 頻譜趨勢",
    description: "FFT 頻譜分析，預測未來可能的維護需求"
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
                <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden bg-white mb-4 group-hover:scale-105 transition-transform duration-300 flex items-center justify-center">
                  <img src={feature.img} alt={feature.title} className="object-contain w-full h-full" draggable="false" />
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