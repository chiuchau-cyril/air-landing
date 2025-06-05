import { Separator } from "./ui/separator";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        {/* Separator */}
        <Separator className="bg-gray-700 mb-8" />
        
        {/* Copyright and Company Info */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-gray-400 text-sm mb-1">
              © 2025 All rights reserved.
            </p>
            <p className="font-semibold text-gray-200 tracking-wider">
              ChiuChau Enterprise Co. Ltd
            </p>
          </div>

          {/* Additional info */}
          <div className="text-center md:text-right text-gray-400 text-sm">
            <p>Made in Taiwan</p>
            <p>及時掌握，主動維護</p>
            <p>數據驅動下的能源管理與設備優化，為永續發展奠定堅實基石</p>
          </div>
        </div>
      </div>
    </footer>
  );
}