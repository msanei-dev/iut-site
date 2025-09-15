'use client';

import React from 'react';

const AcademicResources: React.FC = () => {
  return (
    <div className="w-full px-8 py-8">
      <div className="bg-white/60 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/30">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">منابع آموزشی و ابزارهای کاربردی</h2>
          <p className="text-gray-600">ابزارهایی برای بهبود عملکرد تحصیلی شما</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* GPA Calculator */}
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">محاسبه معدل</h3>
            <p className="text-blue-100 text-sm mb-4">محاسبه و پیگیری معدل ترم و کل</p>
            <button className="w-full bg-white/20 hover:bg-white/30 rounded-lg py-2 px-4 text-sm font-medium transition-colors">
              شروع کنید
            </button>
          </div>

          {/* Study Timer */}
          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">تایمر مطالعه</h3>
            <p className="text-green-100 text-sm mb-4">مدیریت زمان مطالعه با تکنیک پومودورو</p>
            <button className="w-full bg-white/20 hover:bg-white/30 rounded-lg py-2 px-4 text-sm font-medium transition-colors">
              شروع تایمر
            </button>
          </div>

          {/* Study Groups */}
          <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">گروه‌های مطالعه</h3>
            <p className="text-purple-100 text-sm mb-4">پیوستن به گروه‌های مطالعه همکلاسی‌ها</p>
            <button className="w-full bg-white/20 hover:bg-white/30 rounded-lg py-2 px-4 text-sm font-medium transition-colors">
              مشاهده گروه‌ها
            </button>
          </div>

          {/* Academic Calendar */}
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-6 text-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">تقویم تحصیلی</h3>
            <p className="text-orange-100 text-sm mb-4">تاریخ امتحانات، تعطیلات و رویدادها</p>
            <button className="w-full bg-white/20 hover:bg-white/30 rounded-lg py-2 px-4 text-sm font-medium transition-colors">
              مشاهده تقویم
            </button>
          </div>
        </div>

        {/* Quick Actions Row */}
        <div className="mt-8 pt-6 border-t border-white/20">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">دسترسی سریع</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-medium transition-colors flex items-center">
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              کتابخانه دیجیتال
            </button>
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-medium transition-colors flex items-center">
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              مشاوره تحصیلی
            </button>
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-medium transition-colors flex items-center">
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              پشتیبانی آنلاین
            </button>
          </div>
        </div>

        {/* News Section */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">اخبار و رویدادهای تحصیلی</h3>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              آخرین اخبار، رویدادها و اطلاعیه‌های تحصیلی را دنبال کنید
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* News Item 1 */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center ml-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">اعلام نتایج ترم بهار</h4>
                  <p className="text-sm text-gray-500">۲ روز پیش</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                نتایج امتحانات ترم بهار ۱۴۰۳ از امروز در سامانه گلستان قابل مشاهده است.
              </p>
              <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors">
                مشاهده جزئیات
              </button>
            </div>

            {/* News Item 2 */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center ml-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">کارگاه مهارت‌های نرم</h4>
                  <p className="text-sm text-gray-500">۵ روز پیش</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                کارگاه آموزشی مهارت‌های ارتباطی و مدیریت زمان برای دانشجویان برگزار می‌شود.
              </p>
              <button className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors">
                ثبت نام کنید
              </button>
            </div>

            {/* News Item 3 */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center ml-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">فرصت‌های پژوهشی</h4>
                  <p className="text-sm text-gray-500">۱ هفته پیش</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                فرصت‌های جدید پژوهشی در زمینه هوش مصنوعی و علوم داده برای دانشجویان ارشد.
              </p>
              <button className="w-full bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors">
                اطلاعات بیشتر
              </button>
            </div>

            {/* News Item 4 */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 border border-orange-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center ml-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">تقویم امتحانات نهایی</h4>
                  <p className="text-sm text-gray-500">۲ هفته پیش</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                تقویم امتحانات نهایی ترم تابستان منتشر شد. برنامه‌ریزی خود را شروع کنید.
              </p>
              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors">
                مشاهده تقویم
              </button>
            </div>

            {/* News Item 5 */}
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-6 border border-red-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center ml-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">مهلت ثبت نام تمدید شد</h4>
                  <p className="text-sm text-gray-500">۳ هفته پیش</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                مهلت ثبت نام دروس ترم تابستان تا پایان هفته جاری تمدید شد.
              </p>
              <button className="w-full bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors">
                ثبت نام کنید
              </button>
            </div>

            {/* News Item 6 */}
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-6 border border-teal-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center ml-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">جلسات مشاوره گروهی</h4>
                  <p className="text-sm text-gray-500">۴ هفته پیش</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                جلسات مشاوره تحصیلی گروهی برای دانشجویان ترم آخر برگزار می‌شود.
              </p>
              <button className="w-full bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors">
                شرکت کنید
              </button>
            </div>
          </div>

          <div className="mt-8 text-center">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:-translate-y-1 shadow-lg">
              مشاهده همه اخبار
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademicResources;
