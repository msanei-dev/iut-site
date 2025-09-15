'use client';

import React from 'react';

const DeveloperProfile: React.FC = () => {
  return (
    <div className="w-full px-8 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500 rounded-full -translate-x-16 -translate-y-16"></div>
            <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500 rounded-full translate-x-12 -translate-y-12"></div>
            <div className="absolute bottom-0 left-1/4 w-20 h-20 bg-green-500 rounded-full translate-y-10"></div>
            <div className="absolute bottom-0 right-1/3 w-16 h-16 bg-orange-500 rounded-full translate-y-8"></div>
          </div>

          <div className="relative z-10">
            <div className="text-center mb-8">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-md rounded-full px-4 py-2 mb-6 border border-white/20">
                <svg className="w-5 h-5 text-blue-400 ml-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span className="text-sm font-medium">توسعه‌دهنده این پروژه</span>
              </div>

              <div className="flex justify-center mb-6">
                <img
                  src="https://avatars.githubusercontent.com/u/179619289?s=120&v=4"
                  alt="msanei-dev"
                  className="w-24 h-24 rounded-full border-4 border-white/20 shadow-xl"
                />
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                متین مجذب صانعی
              </h2>

              <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto leading-relaxed">
                من یک معمار نرم‌افزار ۱۹ ساله هستم که بر روی حل کردن مشکلات پیچیده در تقاطع هوش مصنوعی و معماری سیستم‌ها تمرکز دارم. فلسفه‌ی من، ساختن ابزارهای هوشمندی است که به جای انسان، با پیچیدگی مبارزه می‌کنند.

                پروژه‌های عمومی من از ساخت ابزارهای توسعه‌دهنده‌ی هوشمند (مانند Fusion-engine و XCR-Context-Extension) و پلتفرم‌های کاربردی (مانند IUT-Timelab) تا ابزارهای بهینه‌سازی (DNS_CHANGER) را در بر می‌گیرد.

                در حال حاضر، تمام تمرکز من بر روی پروژه‌ی تحقیقاتی اصلی‌ام، «The Kernel»، است: یک معماری نسل جدید برای هوش عمومی مصنوعی که در یک ریپازیتوری خصوصی (private) در حال توسعه است.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="https://github.com/msanei-dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:-translate-y-1 flex items-center shadow-lg"
                >
                  <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  مشاهده پروفایل گیت‌هاب
                </a>

                <a
                  href="https://t.me/unreal_blue"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 backdrop-blur-md text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:bg-white/20 border border-white/20 flex items-center"
                >
                  <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                  تماس در تلگرام
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeveloperProfile;
