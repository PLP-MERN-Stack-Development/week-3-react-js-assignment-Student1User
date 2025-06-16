import React from 'react';
import { TaskFilter as TaskFilterType } from '../../types';
import { CheckCircle, Circle, List, Sparkles } from 'lucide-react';
import Button from '../ui/Button';

interface TaskFilterProps {
  currentFilter: TaskFilterType;
  onFilterChange: (filter: TaskFilterType) => void;
  taskCounts: {
    all: number;
    active: number;
    completed: number;
  };
}

const TaskFilter: React.FC<TaskFilterProps> = ({ currentFilter, onFilterChange, taskCounts }) => {
  const filters: { 
    key: TaskFilterType; 
    label: string; 
    count: number; 
    icon: React.ComponentType<any>;
    color: string;
    emoji: string;
  }[] = [
    { 
      key: 'all', 
      label: 'All Tasks', 
      count: taskCounts.all, 
      icon: List,
      color: 'from-purple-500 to-blue-500',
      emoji: '📋'
    },
    { 
      key: 'active', 
      label: 'Active', 
      count: taskCounts.active, 
      icon: Circle,
      color: 'from-orange-500 to-red-500',
      emoji: '🔥'
    },
    { 
      key: 'completed', 
      label: 'Completed', 
      count: taskCounts.completed, 
      icon: CheckCircle,
      color: 'from-emerald-500 to-teal-500',
      emoji: '✅'
    },
  ];

  return (
    <div className="flex flex-wrap gap-4 mb-8 animate-fade-in">
      {filters.map(({ key, label, count, icon: Icon, color, emoji }) => (
        <Button
          key={key}
          variant={currentFilter === key ? 'primary' : 'ghost'}
          size="md"
          onClick={() => onFilterChange(key)}
          className={`group relative overflow-hidden transition-all duration-300 transform hover:scale-105 ${
            currentFilter === key 
              ? `bg-gradient-to-r ${color} shadow-lg animate-glow` 
              : 'hover:bg-gradient-to-r hover:from-purple-100 hover:to-blue-100 dark:hover:from-purple-900/30 dark:hover:to-blue-900/30'
          }`}
        >
          <div className="flex items-center space-x-3">
            <span className="text-lg">{emoji}</span>
            <Icon className={`w-4 h-4 ${currentFilter === key ? 'text-white animate-bounce-gentle' : 'text-gray-600 dark:text-gray-400'}`} />
            <span className="font-medium">{label}</span>
            <div className={`px-2.5 py-1 rounded-full text-xs font-bold transition-all duration-300 ${
              currentFilter === key 
                ? 'bg-white/20 text-white' 
                : 'bg-gradient-to-r from-purple-200 to-blue-200 dark:from-purple-800 dark:to-blue-800 text-purple-700 dark:text-purple-300'
            }`}>
              {count}
              {currentFilter === key && <Sparkles className="inline w-3 h-3 ml-1 animate-pulse" />}
            </div>
          </div>
        </Button>
      ))}
    </div>
  );
};

export default TaskFilter;