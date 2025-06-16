import React from 'react';
import { CheckSquare, Github, ExternalLink, Heart, Sparkles } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-50 via-pink-50 to-blue-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-blue-900/20 border-t border-gradient-to-r from-purple-200 via-pink-200 to-blue-200 dark:from-purple-800 dark:via-pink-800 dark:to-blue-800 mt-auto relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-gradient-to-r from-pink-400/20 to-purple-400/20 rounded-full animate-float"></div>
        <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2 animate-fade-in">
            <div className="flex items-center space-x-3 text-2xl font-bold mb-6 group">
              <div className="relative">
                <CheckSquare className="w-10 h-10 text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text animate-float" />
                <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-yellow-400 animate-pulse" />
              </div>
              <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent group-hover:animate-rainbow">
                TaskFlow
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md leading-relaxed">
              A modern task management application built with React, TypeScript, and Tailwind CSS. 
              <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent font-semibold"> Manage your tasks efficiently</span> with a beautiful, responsive interface.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>and lots of</span>
              <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              ✨ Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { href: '/', label: '🏠 Home' },
                { href: '/tasks', label: '📝 Tasks' },
                { href: '/api-data', label: '🌐 API Data' },
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-600 dark:text-gray-400 hover:bg-gradient-to-r hover:from-pink-600 hover:to-purple-600 hover:bg-clip-text hover:text-transparent transition-all duration-300 font-medium group flex items-center space-x-2"
                  >
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              🚀 Resources
            </h3>
            <ul className="space-y-3">
              {[
                { href: 'https://react.dev', label: '⚛️ React', external: true },
                { href: 'https://tailwindcss.com', label: '🎨 Tailwind CSS', external: true },
                { href: 'https://vitejs.dev', label: '⚡ Vite', external: true },
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    className="text-gray-600 dark:text-gray-400 hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-600 hover:bg-clip-text hover:text-transparent transition-all duration-300 font-medium group inline-flex items-center space-x-2"
                  >
                    <span>{link.label}</span>
                    {link.external && <ExternalLink className="w-3 h-3 group-hover:animate-wiggle" />}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gradient-to-r from-purple-200 via-pink-200 to-blue-200 dark:from-purple-800 dark:via-pink-800 dark:to-blue-800 pt-8 mt-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 TaskFlow. Built for Week 3 React.js Assignment with 
              <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent font-semibold"> extra sparkle</span> ✨
            </p>
            <div className="flex items-center space-x-6">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 transform hover:scale-110 group"
              >
                <Github className="w-6 h-6 group-hover:animate-wiggle" />
              </a>
              <div className="flex items-center space-x-2 text-xs text-gray-500 dark:text-gray-400">
                <span>Powered by</span>
                <Sparkles className="w-3 h-3 text-yellow-400 animate-pulse" />
                <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent font-semibold">Magic</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;