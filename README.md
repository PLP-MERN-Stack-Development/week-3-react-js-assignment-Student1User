# 🎨 TaskFlow - Modern Task Management Application

> **Week 3: React.js, JSX, and Tailwind CSS – Mastering Front-End Development**

A vibrant, fully-featured React application built with modern web technologies, showcasing advanced component architecture, state management, API integration, and stunning visual design with smooth animations.

![TaskFlow Banner](![image](https://github.com/user-attachments/assets/82bc69ca-60d3-45a5-aace-97fb74e3d08e)

## 🚀 Live Demo

**[View Live Application →](https://taskflowweek3.netlify.app/)**

## 📸 Screenshots

### 🏠 Home Page
(![image](https://github.com/user-attachments/assets/033e64e2-b501-4e91-8f94-4dce59bc2bb2)
(![image](![image](https://github.com/user-attachments/assets/954352ba-49c7-435b-b486-2bb6f0eb8031)
*Beautiful landing page with animated hero section and feature showcase*

### 📝 Task Management
(![image](https://github.com/user-attachments/assets/a6e6f8be-9d7f-47e4-82c3-faf288b9345b)
*Intuitive task management with priority levels, filtering, and progress tracking*

### 🌐 API Data Explorer
(![image](https://github.com/user-attachments/assets/220ab26c-f2f4-4d30-bdd1-8ca7d70901ab)
*Dynamic API data display with search, pagination, and bilingual support*

### 🌙 Dark Mode
(![image](https://github.com/user-attachments/assets/1660cf6c-9699-498a-a724-a5854fa9fa22)
*Seamless dark mode with animated theme transitions*

## ✅ Assignment Completion Status

### Task 1: Project Setup ✅ **COMPLETED**
- [x] ✅ React application created using **Vite**
- [x] ✅ **Tailwind CSS** installed and configured with custom animations
- [x] ✅ **Project structure** organized with components, pages, and utility folders
- [x] ✅ **React Router** configured for navigation between pages

### Task 2: Component Architecture ✅ **COMPLETED**
- [x] ✅ **Button component** with 4 variants (primary, secondary, danger, ghost)
- [x] ✅ **Card component** with hover effects and customizable padding
- [x] ✅ **Navbar component** with responsive design and active state indicators
- [x] ✅ **Footer component** with animated elements and external links
- [x] ✅ **Layout component** wrapping Navbar and Footer with gradient backgrounds
- [x] ✅ **Props-based customization** for all reusable components

### Task 3: State Management and Hooks ✅ **COMPLETED**
- [x] ✅ **TaskManager component** with full CRUD functionality:
  - ✅ Add new tasks with title, description, and priority
  - ✅ Mark tasks as completed with visual feedback
  - ✅ Delete tasks with confirmation animations
  - ✅ Filter tasks (All, Active, Completed) with animated counters
- [x] ✅ **React Hooks Implementation**:
  - ✅ `useState` for component state management
  - ✅ `useEffect` for side effects and data persistence
  - ✅ `useContext` for theme management (light/dark mode)
  - ✅ `useCallback` for performance optimization
- [x] ✅ **Custom Hook**: `useLocalStorage` for task persistence
- [x] ✅ **Additional Custom Hook**: `useTasks` for task management logic

### Task 4: API Integration ✅ **COMPLETED**
- [x] ✅ **JSONPlaceholder API** integration for posts and users
- [x] ✅ **Grid layout** display with responsive design
- [x] ✅ **Loading states** with animated spinners and messages
- [x] ✅ **Error handling** with retry functionality
- [x] ✅ **Pagination** with page navigation controls
- [x] ✅ **Search functionality** for filtering API results
- [x] ✅ **Bilingual support** (English/Spanish) with language switcher

### Task 5: Styling with Tailwind CSS ✅ **COMPLETED**
- [x] ✅ **Responsive design** optimized for mobile, tablet, and desktop
- [x] ✅ **Theme switcher** with smooth dark/light mode transitions
- [x] ✅ **Tailwind utility classes** for comprehensive styling
- [x] ✅ **Custom animations**: 20+ unique animations including:
  - ✅ Fade-in and slide animations
  - ✅ Floating and bouncing effects
  - ✅ Gradient animations and color transitions
  - ✅ Glow effects and micro-interactions
  - ✅ Wiggle and rotation animations

## 🛠️ Technologies Used

### Core Technologies
- **React 18** - Modern React with hooks and concurrent features
- **TypeScript** - Type-safe development with full type coverage
- **Vite** - Lightning-fast build tool and development server
- **React Router DOM** - Client-side routing and navigation

### Styling & UI
- **Tailwind CSS** - Utility-first CSS framework with custom configuration
- **Lucide React** - Beautiful, customizable SVG icons
- **Custom Animations** - 20+ handcrafted CSS animations
- **Responsive Design** - Mobile-first approach with breakpoints

### State Management
- **React Context API** - Theme and language state management
- **Custom Hooks** - Reusable logic for localStorage and tasks
- **Local Storage** - Client-side data persistence

### API & Data
- **JSONPlaceholder API** - External API integration
- **Fetch API** - Modern HTTP client for API requests
- **Error Boundaries** - Graceful error handling

## 🏗️ Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── layout/          # Layout components
│   │   ├── Layout.tsx   # Main layout wrapper
│   │   ├── Navbar.tsx   # Navigation component
│   │   └── Footer.tsx   # Footer component
│   ├── TaskManager/     # Task management components
│   │   ├── TaskManager.tsx    # Main task manager
│   │   ├── TaskForm.tsx       # Task creation form
│   │   ├── TaskItem.tsx       # Individual task item
│   │   └── TaskFilter.tsx     # Task filtering
│   └── ui/              # Basic UI components
│       ├── Button.tsx   # Reusable button component
│       ├── Card.tsx     # Card container component
│       └── LoadingSpinner.tsx # Loading indicator
├── context/             # React Context providers
│   ├── ThemeContext.tsx # Dark/light theme management
│   └── LanguageContext.tsx # Internationalization
├── hooks/               # Custom React hooks
│   ├── useLocalStorage.ts # localStorage persistence
│   └── useTasks.ts      # Task management logic
├── pages/               # Page components
│   ├── Home.tsx         # Landing page
│   ├── Tasks.tsx        # Task management page
│   └── ApiData.tsx      # API data display page
├── types/               # TypeScript type definitions
│   └── index.ts         # Shared interfaces and types
├── utils/               # Utility functions
│   └── api.ts           # API service functions
├── App.tsx              # Main application component
├── main.tsx             # Application entry point
└── index.css            # Global styles and Tailwind imports
```

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v18 or higher)
- **npm** or **yarn** package manager
- Modern web browser with ES6+ support

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/taskflow-react-app.git
   cd taskflow-react-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Available Scripts

```bash
# Development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run ESLint for code quality
npm run lint
```

## 🎨 Features & Functionality

### 🏠 **Home Page**
- **Animated hero section** with floating elements and gradient backgrounds
- **Feature showcase** with hover effects and micro-interactions
- **Statistics section** highlighting technology stack
- **Call-to-action** with smooth navigation transitions

### 📝 **Task Management**
- **Create tasks** with title, description, and priority levels
- **Visual priority indicators** with color-coded badges
- **Task filtering** (All, Active, Completed) with animated counters
- **Progress tracking** with animated progress bars
- **Local storage persistence** - tasks saved automatically
- **Drag-and-drop** visual feedback and animations
- **Completion celebrations** with confetti-like effects

### 🌐 **API Data Explorer**
- **JSONPlaceholder integration** for posts and users
- **Tabbed interface** for switching between data types
- **Advanced search** with real-time filtering
- **Pagination controls** with smooth transitions
- **Loading states** with skeleton screens
- **Error handling** with retry mechanisms
- **Bilingual support** (English/Spanish) with instant switching

### 🎨 **Design System**
- **Consistent color palette** with semantic color usage
- **Typography hierarchy** with proper font weights and sizes
- **8px spacing system** for consistent layouts
- **Responsive breakpoints** optimized for all devices
- **Dark/light theme** with smooth transitions
- **Accessibility features** with proper contrast ratios

### ✨ **Animations & Interactions**
- **20+ custom animations** including:
  - Fade-in and slide effects for page transitions
  - Floating animations for decorative elements
  - Bounce and wiggle effects for interactive feedback
  - Gradient animations for dynamic backgrounds
  - Glow effects for focus states
  - Scale and rotation animations for hover states

## 🧪 Testing & Quality Assurance

### Code Quality
- **TypeScript** for type safety and better developer experience
- **ESLint** configuration for consistent code style
- **Component-based architecture** for maintainability
- **Custom hooks** for reusable logic
- **Error boundaries** for graceful error handling

### Performance Optimizations
- **React.memo** for component memoization
- **useCallback** for function memoization
- **Code splitting** with React.lazy (ready for implementation)
- **Optimized images** with proper sizing and compression
- **Efficient re-renders** with proper dependency arrays

### Browser Compatibility
- **Modern browsers** (Chrome, Firefox, Safari, Edge)
- **Mobile responsive** design tested on various devices
- **Progressive enhancement** for older browsers
- **Accessibility standards** compliance (WCAG 2.1)

## 📱 Responsive Design

### Breakpoints
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+
- **Large Desktop**: 1440px+

### Mobile Features
- **Touch-friendly** interface with proper touch targets
- **Swipe gestures** for navigation (where applicable)
- **Optimized layouts** for small screens
- **Fast loading** with optimized assets

## 🌍 Internationalization

### Supported Languages
- **English** (default)
- **Spanish** (Español)

### Features
- **Context-based** translation system
- **Instant language switching** without page reload
- **Localized content** for API data section
- **Extensible architecture** for additional languages

## 🚀 Deployment

### Build Process
```bash
# Create production build
npm run build

# Preview build locally
npm run preview
```


### Environment Variables
No environment variables required for basic functionality.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **React Team** for the amazing framework
- **Tailwind CSS** for the utility-first approach
- **Lucide** for beautiful icons
- **JSONPlaceholder** for the free API service
- **Pexels** for high-quality stock images

## 📞 Contact

**Your Name** - https://github.com/Student1User



**Live Demo**: [https://your-deployed-url-here.vercel.app](hhttps://taskflowweek3.netlify.app/)

---

<div align="center">
  <p>Made with ❤️ and lots of ✨ for Week 3 React.js Assignment</p>
  <p><strong>TaskFlow</strong> - Where productivity meets beautiful design</p>
</div>
