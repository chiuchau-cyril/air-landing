import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink,
  ArrowRight
} from "lucide-react";

export function ContactSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-white/10 text-white border-white/20">
            聯繫我們
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            開始您的智慧監控之旅
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            立即聯繫我們的專業團隊，獲得客製化的風機監測解決方案
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-500 rounded-lg p-3">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">電子郵件</h3>
                    <p className="text-blue-200">info@chiuchau.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-500 rounded-lg p-3">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">聯繫電話</h3>
                    <p className="text-blue-200">+886-3-123-4567</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-500 rounded-lg p-3">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">公司地址</h3>
                    <p className="text-blue-200">台灣桃園市龍潭區</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-indigo-500 rounded-lg p-3">
                    <ExternalLink className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">監控平台</h3>
                    <p className="text-blue-200">air.chiuchau.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA Card */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-6">
              免費諮詢服務
            </h3>
            <p className="text-blue-100 mb-8 leading-relaxed">
              我們的專業團隊將為您提供客製化的風機監測解決方案，
              幫助您提升設備效率、降低維護成本，實現智慧化管理目標。
            </p>

            <div className="space-y-4">
              <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                預約免費諮詢
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full border-white/30 text-[rgba(59,59,59,1)] hover:bg-white/10 backdrop-blur-sm"
              >
                下載產品手冊
              </Button>
            </div>

            <div className="mt-8 pt-8 border-t border-white/20">
              <p className="text-sm text-blue-200 text-center">
                * 提供完整的系統評估與客製化建議
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}