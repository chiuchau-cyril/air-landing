import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { 
  Award, 
  Users, 
  Building, 
  Clock,
  Cpu,
  Activity,
  BarChart3,
  Zap
} from "lucide-react";

const achievements = [
  {
    icon: <Award className="w-8 h-8" />,
    number: "38年",
    label: "風機生產經驗",
    description: "深耕行業三十八年的專業技術積累"
  },
  {
    icon: <Users className="w-8 h-8" />,
    number: "200+",
    label: "家企業採用",
    description: "獲得眾多企業信賴的監測解決方案"
  },
  {
    icon: <Building className="w-8 h-8" />,
    number: "20,000+",
    label: "生產風機數",
    description: "豐富的設備製造與運維經驗"
  },
  {
    icon: <Clock className="w-8 h-8" />,
    number: "24/7",
    label: "不間斷收集運行數據",
    description: "全天候監控確保設備穩定運行"
  }
];

const techFeatures = [
  {
    icon: <Cpu className="w-6 h-6" />,
    title: "2顆加速規感測器",
    value: "高精度三軸監測"
  },
  {
    icon: <Activity className="w-6 h-6" />,
    title: "3個軸向",
    value: "全方位振動分析"
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "150筆 FFT特徵值",
    value: "深度頻譜分析"
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "45筆震動+電力特徵值",
    value: "綜合設備診斷"
  }
];

export function TechAdvantages() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            技術優勢
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            業界領先的技術實力
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            結合傳統機械工藝與現代數位技術，打造出業界最專業的風機監測解決方案
          </p>
        </div>

        {/* Data Statistics */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white mb-8">
            <div className="text-5xl md:text-6xl font-bold mb-2">
              ~85,536,000萬
            </div>
            <div className="text-xl opacity-90">
              採集總數據點
            </div>
          </div>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            憑藉豐富的製造經驗和創新技術，我們建立了完整的數據庫和分析模型。
            每一台設備的運行數據都成為優化系統性能的寶貴資源，
            持續提升監測精度和預測準確性。
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <Card key={index} className="text-center border-0 bg-gradient-to-br from-gray-50 to-white hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="text-blue-600 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {achievement.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {achievement.number}
                </div>
                <div className="text-sm font-medium text-gray-900 mb-3">
                  {achievement.label}
                </div>
                <div className="text-sm text-gray-600 leading-relaxed">
                  {achievement.description}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technical Features */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            專業技術規格
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="text-blue-600 mb-3">
                  {feature.icon}
                </div>
                <div className="font-semibold text-gray-900 mb-2">
                  {feature.title}
                </div>
                <div className="text-sm text-gray-600">
                  {feature.value}
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-gray-600 leading-relaxed">
              透過多元化的感測技術和智能分析演算法，
              我們的系統能夠捕捉設備運行的每一個細微變化，
              為客戶提供最精確的設備健康評估。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}