'use client';

import React, { useState } from 'react';
import AdvancedCalendarView from './AdvancedCalendarView';
import type { Day } from '../shared/types';
import Footer from './Footer';
import LeftPanel from './LeftPanel';
import DeveloperProfile from './DeveloperProfile';
import AcademicResources from './AcademicResources';
import AdditionalCards from './AdditionalCards';

// Local enhanced types (shared/types.ts has minimal types; we need richer shapes here)
interface EnhancedSection {
  courseCode: string;
  sectionCode: string;
  courseName: string;
  professor: { name: string; rating?: number };
  schedule: { day: Day; start: string; end: string }[];
  capacity: number;
  currentCapacity: number;
  credits: number;
  department: string;
  prerequisites: string[];
  location: string;
  syllabus?: string;
}

interface EnhancedSchedule {
  sections: EnhancedSection[];
}

// REMOVED: days array (was only used for ICS export)

// Enhanced mock schedule with richer data
const mockSchedule: EnhancedSchedule = {
  sections: [
    {
      courseCode: 'MATH101',
      sectionCode: '01',
      courseName: 'ریاضیات پیشرفته',
      professor: { name: 'دکتر احمدی', rating: 4.8 },
      schedule: [
        { day: 'Saturday' as Day, start: '08:00', end: '09:30' },
        { day: 'Monday' as Day, start: '10:00', end: '11:30' },
      ],
      capacity: 40,
      currentCapacity: 35,
      credits: 3,
      department: 'ریاضی',
      prerequisites: ['ریاضی عمومی'],
      location: 'ساختمان علوم ریاضی، کلاس 101',
      syllabus: 'https://example.com/math101-syllabus.pdf',
    },
    {
      courseCode: 'PHYS101',
      sectionCode: '02',
      courseName: 'فیزیک کلاسیک',
      professor: { name: 'دکتر رضایی', rating: 4.5 },
      schedule: [
        { day: 'Sunday' as Day, start: '09:00', end: '10:30' },
        { day: 'Tuesday' as Day, start: '14:00', end: '15:30' },
      ],
      capacity: 50,
      currentCapacity: 45,
      credits: 4,
      department: 'فیزیک',
      prerequisites: [],
      location: 'آزمایشگاه فیزیک، سالن A',
      syllabus: 'https://example.com/phys101-syllabus.pdf',
    },
    {
      courseCode: 'CS101',
      sectionCode: '03',
      courseName: 'برنامه‌نویسی پیشرفته',
      professor: { name: 'دکتر کریمی', rating: 4.9 },
      schedule: [
        { day: 'Monday' as Day, start: '13:00', end: '14:30' },
        { day: 'Wednesday' as Day, start: '16:00', end: '17:30' },
      ],
      capacity: 30,
      currentCapacity: 28,
      credits: 3,
      department: 'کامپیوتر',
      prerequisites: ['مبانی برنامه‌نویسی'],
      location: 'دانشکده کامپیوتر، کلاس 305',
      syllabus: 'https://example.com/cs101-syllabus.pdf',
    },
    {
      courseCode: 'CHEM101',
      sectionCode: '04',
      courseName: 'شیمی آلی پیشرفته',
      professor: { name: 'دکتر حسینی', rating: 4.2 },
      schedule: [
        { day: 'Tuesday' as Day, start: '11:00', end: '12:30' },
        { day: 'Thursday' as Day, start: '15:00', end: '16:30' },
      ],
      capacity: 35,
      currentCapacity: 30,
      credits: 3,
      department: 'شیمی',
      prerequisites: ['شیمی عمومی'],
      location: 'آزمایشگاه شیمی، سالن B',
      syllabus: 'https://example.com/chem101-syllabus.pdf',
    },
    {
      courseCode: 'ENG101',
      sectionCode: '05',
      courseName: 'زبان انگلیسی تخصصی',
      professor: { name: 'دکتر نوری', rating: 4.7 },
      schedule: [
        { day: 'Wednesday' as Day, start: '08:00', end: '09:30' },
        { day: 'Friday' as Day, start: '10:00', end: '11:30' },
      ],
      capacity: 25,
      currentCapacity: 20,
      credits: 2,
      department: 'زبان',
      prerequisites: [],
      location: 'دانشکده ادبیات، کلاس 202',
      syllabus: 'https://example.com/eng101-syllabus.pdf',
    },
  ],
};

const AdvancedCalendarDemo: React.FC = () => {
  const [schedule, setSchedule] = useState<EnhancedSchedule>(mockSchedule);

  // REMOVED: All header panel functions (toggleDarkMode, resetSchedule, saveSchedule, loadSchedule, exportToICS)

  // REMOVED: Auto-save effect

  // REMOVED: Unused table styles and functions

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 text-[15px] relative overflow-hidden">
      {/* REMOVED: ToastContainer */}

      {/* Header */}
      {/* REMOVED: برنامه‌ریز دانشگاهی هوشمند header panel */}

      {/* Hero Introduction Section */}
      <div className="w-full px-8 py-12 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-md rounded-full px-6 py-2 mb-6 border border-white/30">
              <svg className="w-5 h-5 text-blue-600 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="text-sm font-medium text-gray-700">برنامه‌ریز هوشمند دانشگاهی</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              مدیریت زمان تحصیلی
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                به صورت هوشمند
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              با استفاده از فناوری‌های پیشرفته، برنامه درسی خود را بهینه‌سازی کنید،
              زمان مطالعه را مدیریت کنید و عملکرد تحصیلی خود را بهبود بخشید.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center">
                <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                شروع برنامه‌ریزی
              </button>

              <button className="bg-white/70 backdrop-blur-md text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-white/30 flex items-center">
                <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.586a1 1 0 01.707.293l.707.707A1 1 0 0012.414 11H15m-3 7.5A9.5 9.5 0 1121.5 12 9.5 9.5 0 0112 2.5z" />
                </svg>
                مشاهده راهنما
              </button>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="bg-white/60 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/30 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">برنامه‌ریزی هوشمند</h3>
              <p className="text-gray-600 leading-relaxed">
                سیستم هوشمند برای انتخاب بهترین ترکیب دروس با توجه به تداخل زمانی و محدودیت‌های تحصیلی
              </p>
            </div>

            <div className="bg-white/60 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/30 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">مدیریت زمان</h3>
              <p className="text-gray-600 leading-relaxed">
                ابزارهای پیشرفته برای مدیریت زمان مطالعه، یادآوری کلاس‌ها و بهینه‌سازی برنامه روزانه
              </p>
            </div>

            <div className="bg-white/60 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/30 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">تحلیل عملکرد</h3>
              <p className="text-gray-600 leading-relaxed">
                گزارش‌های تحلیلی از عملکرد تحصیلی، روند پیشرفت و پیشنهادهای بهبود با استفاده از هوش مصنوعی
              </p>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-16 bg-white/40 backdrop-blur-md rounded-2xl p-8 border border-white/30">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">۱۰۰۰+</div>
                <div className="text-gray-600">دانشجو فعال</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">۵۰+</div>
                <div className="text-gray-600">دروس ارائه شده</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">۹۵%</div>
                <div className="text-gray-600">رضایت دانشجویان</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600 mb-2">۲۴/۷</div>
                <div className="text-gray-600">پشتیبانی آنلاین</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow w-full px-0 py-8 flex relative z-10">
        <LeftPanel />
        <main className="flex-grow">
          <AdvancedCalendarView schedule={schedule} />
        </main>
      </div>

      <AdditionalCards />

      <AcademicResources />

      <DeveloperProfile />

      <Footer />

      {/* REMOVED: Unused CSS styles */}
    </div>
  );
};

export default AdvancedCalendarDemo;