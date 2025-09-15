'use client';

import React from 'react';

const AdditionalCards: React.FC = () => {
  return (
    <div className="w-full px-8 py-6 grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {/* Card 1: Quick Stats */}
      <div className="bg-white/70 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20">
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center mr-3">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-800">آمار سریع</h3>
        </div>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-gray-600">کل واحدهای انتخابی</span>
            <span className="font-semibold text-blue-600">18 واحد</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">تعداد دروس</span>
            <span className="font-semibold text-green-600">6 درس</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">کلاس‌های امروز</span>
            <span className="font-semibold text-purple-600">3 کلاس</span>
          </div>
        </div>
      </div>

      {/* Card 2: Upcoming Events */}
      <div className="bg-white/70 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20">
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center mr-3">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-800">رویدادهای پیش رو</h3>
        </div>
        <div className="space-y-3">
          <div className="flex items-center p-3 bg-blue-50 rounded-lg">
            <div className="w-2 h-2 bg-blue-500 rounded-full ml-3"></div>
            <div>
              <p className="text-sm font-medium text-gray-800">جلسه مشاوره</p>
              <p className="text-xs text-gray-500">فردا - ساعت ۱۴:۰۰</p>
            </div>
          </div>
          <div className="flex items-center p-3 bg-green-50 rounded-lg">
            <div className="w-2 h-2 bg-green-500 rounded-full ml-3"></div>
            <div>
              <p className="text-sm font-medium text-gray-800">تحویل پروژه</p>
              <p className="text-xs text-gray-500">پنج‌شنبه - ساعت ۲۳:۵۹</p>
            </div>
          </div>
        </div>
      </div>

      {/* Card 3: Notes & Reminders */}
      <div className="bg-white/70 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20">
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center mr-3">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-800">یادداشت‌ها</h3>
        </div>
        <div className="space-y-3">
          <div className="p-3 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
            <p className="text-sm text-gray-700">کتاب ریاضیات پیشرفته را فراموش نکنید</p>
          </div>
          <div className="p-3 bg-red-50 rounded-lg border-l-4 border-red-400">
            <p className="text-sm text-gray-700">تمرین فیزیک را تا فردا حل کنید</p>
          </div>
          <div className="p-3 bg-blue-50 rounded-lg border-l-4 border-blue-400">
            <p className="text-sm text-gray-700">جلسه گروهی برنامه‌نویسی</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdditionalCards;
