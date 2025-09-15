import React from 'react';
import { Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { toast, ToastContainer, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Footer: React.FC = () => {
  // Contact form submission handler
  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success('پیام شما با موفقیت ارسال شد! 🚀', {
      icon: <Mail size={20} />,
      position: 'top-right',
      transition: Slide,
    });
    e.currentTarget.reset();
  };

  return (
    <footer className="relative bg-gray-900 text-white py-16 overflow-hidden">
      <ToastContainer
        position="top-right"
        transition={Slide}
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      {/* Animated Background Particles */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="particle particle-1" />
        <div className="particle particle-2" />
        <div className="particle particle-3" />
        <div className="particle particle-4" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Branding & About */}
          <div className="space-y-6 text-center md:text-right">
            <div className="flex items-center justify-center md:justify-start space-x-3 group">
              <div className="w-14 h-14 bg-white text-gray-900 rounded-2xl flex items-center justify-center shadow-2xl transform transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
                <span className="text-3xl font-bold">🎓</span>
              </div>
              <h2 className="text-4xl font-extrabold text-white animate-text-glow">
                دانشگاه صنعتی اصفهان
              </h2>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed max-w-xs mx-auto md:mx-0 animate-fade-in">
              پیشرو در نوآوری و آموزش، آماده برای فتح آینده! به ما بپیوندید و ستاره خود را در آسمان علم بدرخانید! 🌟
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              {[
                { icon: Instagram, href: 'https://instagram.com', label: 'اینستاگرام' },
                { icon: Twitter, href: 'https://twitter.com', label: 'توییتر' },
                { icon: Linkedin, href: 'https://linkedin.com', label: 'لینکدین' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-125 hover:rotate-6 shadow-md hover:shadow-xl"
                  aria-label={label}
                >
                  <Icon size={22} className="animate-pulse-slow" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6 text-center">
            <h3 className="text-2xl font-bold text-white animate-text-glow">لینک‌های سریع</h3>
            <ul className="space-y-4 text-gray-300">
              {[
                { name: 'صفحه اصلی', href: '/' },
                { name: 'دانشکده‌ها', href: '/faculties' },
                { name: 'پورتال دانشجویی', href: '/student-portal' },
                { name: 'کتابخانه دیجیتال', href: '/library' },
                { name: 'تماس با ما', href: '/contact' },
              ].map((link, index) => (
                <li key={link.name} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-white transition-colors duration-300 hover:underline hover:scale-105 inline-block transform"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Form */}
          <div className="space-y-6 text-center md:text-right">
            <h3 className="text-2xl font-bold text-white animate-text-glow">تماس با ما</h3>
            <form onSubmit={handleContactSubmit} className="space-y-4 animate-fade-in">
              <div>
                <input
                  type="email"
                  placeholder="ایمیل شما"
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300 hover:shadow-glow"
                />
              </div>
              <div>
                <textarea
                  placeholder="پیام شما"
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300 hover:shadow-glow resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-white text-gray-900 py-3 rounded-xl font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:bg-gray-200 flex items-center justify-center space-x-2"
              >
                <span>ارسال پیام</span>
                <Mail size={18} />
              </button>
            </form>
            <div className="space-y-3 text-sm text-gray-300 animate-fade-in">
              <p className="flex items-center justify-center md:justify-start">
                <Mail className="h-5 w-5 ml-2 animate-bounce-slow" /> info@iut.ac.ir
              </p>
              <p className="flex items-center justify-center md:justify-start">
                <Phone className="h-5 w-5 ml-2 animate-bounce-slow" /> 031-3391-5000
              </p>
              <p className="flex items-center justify-center md:justify-start">
                <MapPin className="h-5 w-5 ml-2 animate-bounce-slow" /> اصفهان، دانشگاه صنعتی
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/20 text-center">
          <p className="text-sm text-gray-300 animate-fade-in">
            © ۲۰۲۵ دانشگاه صنعتی اصفهان. تمامی حقوق محفوظ است.
            <a
              href="/privacy"
              className="mx-2 hover:text-white transition-colors duration-300 hover:underline"
            >
              سیاست حریم خصوصی
            </a>
            |
            <a
              href="/terms"
              className="mx-2 hover:text-white transition-colors duration-300 hover:underline"
            >
              شرایط استفاده
            </a>
          </p>
          <p className="text-sm text-gray-200 mt-3 animate-text-glow">
            توسعه‌یافته توسط{' '}
            <span className="font-bold text-white hover:text-yellow-300 transition-colors duration-300 cursor-pointer">
              متین صانعی
            </span>{' '}
            با عشق
          </p>
        </div>
      </div>

      <style jsx>{`
        /* Particle Animation */
        .particle {
          position: absolute;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          animation: float 15s infinite linear;
          box-shadow: 0 0 15px rgba(255, 255, 255, 0.5);
        }
        .particle-1 {
          width: 20px;
          height: 20px;
          top: 10%;
          left: 15%;
          animation-duration: 12s;
        }
        .particle-2 {
          width: 15px;
          height: 15px;
          top: 30%;
          left: 70%;
          animation-duration: 18s;
          animation-delay: 2s;
        }
        .particle-3 {
          width: 25px;
          height: 25px;
          top: 60%;
          left: 30%;
          animation-duration: 15s;
          animation-delay: 1s;
        }
        .particle-4 {
          width: 10px;
          height: 10px;
          top: 80%;
          left: 85%;
          animation-duration: 20s;
          animation-delay: 3s;
        }

        @keyframes float {
          0% { transform: translateY(0) translateX(0); opacity: 0.2; }
          50% { opacity: 0.5; }
          100% { transform: translateY(-100vh) translateX(10vw); opacity: 0.2; }
        }

        /* Text Glow Animation */
        @keyframes text-glow {
          0% { text-shadow: 0 0 5px rgba(255, 255, 255, 0.5); }
          50% { text-shadow: 0 0 20px rgba(255, 255, 255, 0.8), 0 0 30px rgba(255, 255, 255, 0.5); }
          100% { text-shadow: 0 0 5px rgba(255, 255, 255, 0.5); }
        }
        .animate-text-glow {
          animation: text-glow 2s infinite ease-in-out;
        }

        /* Fade In Animation */
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }

        /* Bounce Slow Animation */
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s infinite ease-in-out;
        }

        /* Pulse Slow Animation */
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 2s infinite ease-in-out;
        }

        /* Shadow Glow Effect */
        .hover\:shadow-glow:hover {
          box-shadow: 0 0 20px rgba(255, 255, 255, 0.5), 0 0 30px rgba(255, 255, 255, 0.3);
        }

        /* Scrollbar Styling */
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #1f2937;
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb {
          background: #ffffff;
          border-radius: 4px;
          box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #e5e7eb;
        }
      `}</style>
    </footer>
  );
};

export default Footer;