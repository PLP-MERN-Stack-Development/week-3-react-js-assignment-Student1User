import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CheckSquare, Sun, Moon, Menu, X, Home, List, Database, Sparkles } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import Button from '../ui/Button';

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Home', icon: Home, color: 'text-pink-500' },
    { path: '/tasks', label: 'Tasks', icon: List, color: 'text-blue-500' },
    { path: '/api-data', label: 'API Data', icon: Database, color: 'text-purple-500' },
  ];

  const isActiveRoute = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border-b border-gradient-to-r from-pink-200 via-purple-200 to-blue-200 dark:from-pink-800 dark:via-purple-800 dark:to-blue-800 sticky top-0 z-50 shadow-lg shadow-purple-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 text-xl font-bold group">
            <div className="relative">
              <CheckSquare className="w-8 h-8 text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text animate-float" />
              <Sparkles className="w-4 h-4 absolute -top-1 -right-1 text-yellow-400 animate-pulse" />
            </div>
            <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent animate-gradient-x group-hover:animate-rainbow">
              TaskFlow
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(({ path, label, icon: Icon, color }) => (
              <Link
                key={path}
                to={path}
                className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                  isActiveRoute(path)
                    ? 'bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white shadow-lg shadow-purple-500/30 animate-glow'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-pink-100 hover:via-purple-100 hover:to-blue-100 dark:hover:from-pink-900/30 dark:hover:via-purple-900/30 dark:hover:to-blue-900/30'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActiveRoute(path) ? 'text-white animate-bounce-gentle' : color}`} />
                <span>{label}</span>
              </Link>
            ))}
          </div>

          {/* Theme Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
            >
              {theme === 'light' ? 
                <Moon className="w-5 h-5 animate-wiggle" /> : 
                <Sun className="w-5 h-5 animate-rotate-slow" />
              }
            </Button>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:from-pink-600 hover:to-purple-600 transform hover:scale-110 transition-all duration-300 shadow-lg"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? 
                <X className="w-6 h-6 animate-wiggle" /> : 
                <Menu className="w-6 h-6 animate-pulse" />
              }
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-slide-in">
            <div className="flex flex-col space-y-3">
              {navItems.map(({ path, label, icon: Icon, color }) => (
                <Link
                  key={path}
                  to={path}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 transform hover:scale-105 ${
                    isActiveRoute(path)
                      ? 'bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white shadow-lg animate-glow'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-pink-100 hover:via-purple-100 hover:to-blue-100 dark:hover:from-pink-900/30 dark:hover:via-purple-900/30 dark:hover:to-blue-900/30'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Icon className={`w-5 h-5 ${isActiveRoute(path) ? 'text-white animate-bounce-gentle' : color}`} />
                  <span>{label}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;