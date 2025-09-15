import React, { useState, useEffect } from 'react';
import { Calendar, Menu, X, Code, Star, Share2, User } from 'lucide-react';
import { toast, ToastContainer, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MainHeader: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; vx: number; vy: number }>>([]);

  // Generate subtle floating particles
  useEffect(() => {
    const generateParticles = () => {
      const newParticles = Array.from({ length: 6 }, (_, i) => ({
        id: Date.now() + i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * -100,
        vx: (Math.random() - 0.5) * 1.5,
        vy: Math.random() * 1.5 + 0.5,
      }));
      setParticles(prev => [...prev.slice(-15), ...newParticles]); // Keep last 15
    };

    generateParticles();
    const interval = setInterval(generateParticles, 4000);
    return () => clearInterval(interval);
  }, []);

  // Animate particles
  useEffect(() => {
    const animate = () => {
      setParticles(prev =>
        prev.map(p => ({
          ...p,
          x: p.x + p.vx,
          y: p.y + p.vy,
          vy: p.vy + 0.01, // Subtle gravity
        })).filter(p => p.y < window.innerHeight + 50) // Remove off-screen
      );
    };

    const raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [particles]);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'انتخاب واحد دانشگاه صنعتی اصفهان',
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.success('لینک با موفقیت کپی شد.', {
        icon: <Share2 size={18} />,
        transition: Slide,
      });
    }
  };

  const handleDeveloperClick = () => {
    toast.info('توسعه‌یافته توسط متین صانعی', {
      icon: <User size={18} />,
      transition: Slide,
      autoClose: 2000,
    });
  };

  return (
    <header className="backdrop-blur-xl bg-white/90 dark:bg-gray-800/90 text-gray-900 dark:text-gray-100 shadow-lg sticky top-0 z-50 border-b border-gray-200/20 dark:border-gray-700/20 w-full rounded-xl overflow-hidden mx-4 my-2">
      <ToastContainer
        position="top-center"
        transition={Slide}
        autoClose={3000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      {/* Subtle Particle Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {particles.map(particle => (
          <div
            key={particle.id}
            className="w-1.5 h-1.5 bg-gray-300/50 dark:bg-gray-500/50 rounded-full shadow-sm absolute"
            style={{
              left: particle.x,
              top: particle.y,
              animation: 'float 8s infinite ease-in-out',
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 py-2 flex justify-between items-center relative z-10">
        {/* Logo & Title */}
        <div className="flex items-center space-x-4 group animate-fade-in">
          <div className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center shadow-md border border-gray-200/50 dark:border-gray-600/50 transition-all duration-300 group-hover:shadow-lg">
            <Calendar className="h-5 w-5 text-gray-700 dark:text-gray-300 animate-pulse-slow" />
          </div>
          <div className="space-y-1">
            <h1 className="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
              سامانه انتخاب واحد دانشگاه صنعتی اصفهان
            </h1>
            <p className="text-[10px] text-gray-500 dark:text-gray-400 font-medium animate-fade-in-up">
              مدیریت هوشمند برنامه‌های تحصیلی
            </p>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-4 rounded-lg bg-gray-50/50 dark:bg-gray-700/50 p-1 shadow-sm">
          {[
            { name: 'اشتراک‌گذاری', action: handleShare, icon: Share2 },
            { name: 'توسعه‌دهنده: متین صانعی', action: handleDeveloperClick, icon: Code },
          ].map(({ name, action, icon: Icon }) => (
            <button
              key={name}
              onClick={action}
              className="px-3 py-1.5 bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200 font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 text-sm"
            >
              <Icon className="h-3 w-3" />
              <span>{name}</span>
            </button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden rounded-lg p-2.5 bg-gray-100/50 dark:bg-gray-700/50 transition-all duration-300 transform hover:scale-110"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6 text-gray-700 dark:text-gray-300" /> : <Menu className="h-6 w-6 text-gray-700 dark:text-gray-300" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl py-6 px-6 border-t border-gray-200/20 dark:border-gray-700/20 animate-slide-down">
          <nav className="flex flex-col space-y-4">
            <div className="space-y-3">
              {[
                { name: 'اشتراک‌گذاری', action: handleShare, icon: Share2 },
                { name: 'توسعه‌دهنده: متین صانعی', action: handleDeveloperClick, icon: Code },
              ].map(({ name, action, icon: Icon }) => (
                <button
                  key={name}
                  onClick={action}
                  className="w-full px-5 py-2.5 bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200 font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 text-sm"
                >
                  <Icon className="h-4 w-4" />
                  <span>{name}</span>
                </button>
              ))}
              <div className="flex items-center justify-center space-x-2 pt-3 animate-fade-in">
                <Star className="h-4 w-4 text-gray-500 dark:text-gray-400 animate-pulse" />
                <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                  طراحی‌شده با دقت و حرفه‌ای‌گری
                </span>
              </div>
            </div>
          </nav>
        </div>
      )}

      <style jsx>{`
        /* Particle Animation */
        @keyframes float {
          0% { transform: translateY(0) translateX(0); opacity: 0.4; }
          50% { opacity: 0.7; }
          100% { transform: translateY(-40px) translateX(15px); opacity: 0.4; }
        }

        /* Fade In */
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }

        /* Fade In Up */
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.5s ease-out 0.1s both;
        }

        /* Slide Down */
        @keyframes slide-down {
          from { opacity: 0; transform: translateY(-15px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-down {
          animation: slide-down 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

        /* Pulse Slow */
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.1); opacity: 1; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s infinite ease-in-out;
        }

        /* Scrollbar */
        ::-webkit-scrollbar {
          width: 6px;
        }
        ::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 3px;
        }
        ::-webkit-scrollbar-thumb {
          background: #6b7280;
          border-radius: 3px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #4b5563;
        }
      `}</style>
    </header>
  );
};

export default MainHeader;