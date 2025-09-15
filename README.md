# IUT-Timelab: Smart Academic Scheduling System

A modern, intelligent academic scheduling and time management application built for Isfahan University of Technology (IUT) students. This application helps students optimize their course schedules, manage study time effectively, and improve their academic performance using advanced algorithms and AI-powered insights.

## 🌟 Features

### 📅 Smart Course Scheduling
- **Intelligent Conflict Detection**: Automatically detects and resolves time conflicts between courses
- **Optimal Schedule Generation**: Uses genetic algorithms to find the best possible course combinations
- **Professor Ratings Integration**: Considers professor ratings when suggesting schedules
- **Capacity Management**: Real-time capacity tracking and availability updates

### ⏰ Time Management Tools
- **Study Timer**: Pomodoro-style study sessions with customizable intervals
- **Academic Calendar**: Integrated calendar view with course schedules and deadlines
- **Study Groups**: Connect with fellow students for collaborative learning
- **GPA Calculator**: Real-time GPA calculation and academic performance tracking

### 📊 Performance Analytics
- **Progress Tracking**: Monitor academic progress with detailed analytics
- **AI-Powered Insights**: Get personalized recommendations for improvement
- **Visual Reports**: Beautiful charts and graphs showing performance trends
- **Goal Setting**: Set and track academic goals with milestone tracking

### 🎨 Modern UI/UX
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Persian (Farsi) Support**: Full RTL support with native Persian localization
- **Glassmorphism Effects**: Modern glass-like UI with backdrop blur effects
- **Dark/Light Theme**: Automatic theme switching based on system preferences

## 🚀 Quick Start

### Prerequisites
- Node.js 18.x or higher
- npm, yarn, or pnpm package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/msanei-dev/iut-site.git
   cd iut-term
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 🛠️ Tech Stack

### Frontend Framework
- **Next.js 14**: React framework with App Router for optimal performance
- **React 18**: Latest React with concurrent features and hooks
- **TypeScript**: Type-safe development with full IntelliSense support

### Styling & UI
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Tailwind CSS Animations**: Smooth animations and transitions
- **Custom Fonts**: Optimized font loading with next/font

### Development Tools
- **ESLint**: Code linting and formatting
- **PostCSS**: CSS processing and optimization
- **TypeScript Compiler**: Advanced type checking

### Key Dependencies
- **React Icons**: Beautiful, customizable icons
- **Lucide Icons**: Modern icon library
- **Custom Components**: Reusable UI components with TypeScript

## 📁 Project Structure

```
iut-term/
├── app/                    # Next.js App Router pages
│   ├── globals.css        # Global styles and Tailwind imports
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Home page
├── components/            # Reusable React components
│   ├── AdvancedCalendarDemo.tsx    # Main application component
│   ├── AdvancedCalendarView.tsx    # Calendar visualization
│   ├── AcademicResources.tsx       # Academic tools section
│   ├── AdditionalCards.tsx         # Quick stats and info cards
│   ├── DeveloperProfile.tsx        # Developer showcase
│   └── ui/                         # UI component library
├── public/                 # Static assets
│   ├── fonts/             # Custom fonts
│   └── icons/             # SVG icons
├── src/                   # Source code
│   ├── components/        # Additional components
│   ├── shared/           # Shared types and utilities
│   ├── solver/           # Scheduling algorithms
│   └── utils/            # Utility functions
├── types/                 # TypeScript type definitions
└── utils/                 # Additional utilities
```

## 🎯 Core Components

### AdvancedCalendarDemo
The main application component that orchestrates all features:
- Course scheduling with genetic algorithm optimization
- Real-time conflict detection
- Professor rating integration
- Capacity management

### AcademicResources
Comprehensive academic tools section:
- GPA Calculator
- Study Timer with Pomodoro technique
- Study Groups finder
- Academic Calendar integration
- News section with latest academic updates

### DeveloperProfile
Showcase section for the development team:
- GitHub integration
- Social media links
- Project contribution tracking

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file in the root directory:

```env
# Add your environment variables here
NEXT_PUBLIC_API_URL=your_api_url
```

### Build Configuration
The project uses Next.js configuration for optimal performance:
- **SWC Compiler**: Fast compilation and bundling
- **Image Optimization**: Automatic image optimization
- **Font Optimization**: Optimized font loading

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Deploy automatically on every push
3. Get a production URL instantly

### Manual Deployment
```bash
npm run build
npm start
```

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Use TypeScript for all new code
- Follow ESLint configuration
- Write meaningful commit messages
- Test your changes thoroughly

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Isfahan University of Technology**: For providing the academic context
- **Next.js Team**: For the amazing React framework
- **Tailwind CSS**: For the utility-first CSS framework
- **React Community**: For the vibrant ecosystem

## 📞 Contact

**Mohammad Sanei**
- GitHub: [@msanei-dev](https://github.com/msanei-dev)
- LinkedIn: [Your LinkedIn Profile]
- Email: your.email@example.com

---

**⭐ Star this repository if you find it helpful!**

Made with ❤️ for IUT students
