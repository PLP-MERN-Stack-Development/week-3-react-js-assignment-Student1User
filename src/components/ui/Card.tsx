import React from 'react';
import { CardProps } from '../../types';

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hover = false,
  padding = 'md',
}) => {
  const baseClasses = 'bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 dark:border-gray-700/50 transition-all duration-500';
  const hoverClasses = hover ? 'hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2 hover:scale-105 hover:bg-gradient-to-br hover:from-white/95 hover:to-purple-50/50 dark:hover:from-gray-800/95 dark:hover:to-purple-900/20' : '';
  
  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  const classes = `${baseClasses} ${hoverClasses} ${paddingClasses[padding]} ${className}`;

  return (
    <div className={classes}>
      <div className="relative">
        {children}
        {hover && (
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 via-purple-500/5 to-blue-500/5 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
        )}
      </div>
    </div>
  );
};

export default Card;