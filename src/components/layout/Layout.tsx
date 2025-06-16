import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-pink-100 via-purple-50 via-blue-50 to-cyan-100 dark:from-gray-900 dark:via-purple-900 dark:to-blue-900 animate-gradient-xy">
      <div className="absolute inset-0 bg-gradient-to-r from-pink-300/20 via-purple-300/20 via-blue-300/20 to-cyan-300/20 dark:from-pink-900/20 dark:via-purple-900/20 dark:to-blue-900/20 animate-pulse-slow"></div>
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;