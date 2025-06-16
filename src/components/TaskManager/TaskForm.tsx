import React, { useState } from 'react';
import { Plus, Sparkles, Target, Zap } from 'lucide-react';
import Button from '../ui/Button';
import Card from '../ui/Card';
import { Task } from '../../types';

interface TaskFormProps {
  onAddTask: (title: string, description?: string, priority?: Task['priority']) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onAddTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState<Task['priority']>('medium');
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      onAddTask(title.trim(), description.trim() || undefined, priority);
      setTitle('');
      setDescription('');
      setPriority('medium');
      setIsExpanded(false);
    }
  };

  const priorityConfig = {
    low: { color: 'from-emerald-500 to-teal-500', icon: Target, label: 'Low Priority' },
    medium: { color: 'from-yellow-500 to-orange-500', icon: Zap, label: 'Medium Priority' },
    high: { color: 'from-red-500 to-pink-500', icon: Sparkles, label: 'High Priority' },
  };

  return (
    <Card className="mb-8 bg-gradient-to-r from-white via-purple-50/30 to-blue-50/30 dark:from-gray-800 dark:via-purple-900/20 dark:to-blue-900/20 animate-fade-in">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="relative">
          <input
            type="text"
            placeholder="✨ Add a magical new task..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onFocus={() => setIsExpanded(true)}
            className="w-full px-6 py-4 text-lg bg-gradient-to-r from-white to-purple-50/50 dark:from-gray-700 dark:to-purple-900/30 border-2 border-purple-200 dark:border-purple-700 rounded-2xl focus:outline-none focus:ring-4 focus:ring-purple-500/30 focus:border-purple-400 transition-all duration-300 placeholder-purple-400 dark:placeholder-purple-300"
            required
          />
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
            <Sparkles className="w-6 h-6 text-purple-400 animate-pulse" />
          </div>
        </div>

        {isExpanded && (
          <div className="space-y-6 animate-fade-in-up">
            <div className="relative">
              <textarea
                placeholder="🎯 Add a detailed description (optional)..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={3}
                className="w-full px-6 py-4 bg-gradient-to-r from-white to-blue-50/50 dark:from-gray-700 dark:to-blue-900/30 border-2 border-blue-200 dark:border-blue-700 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-500/30 focus:border-blue-400 transition-all duration-300 resize-none placeholder-blue-400 dark:placeholder-blue-300"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-4">
                🎨 Choose Priority Level
              </label>
              <div className="grid grid-cols-3 gap-4">
                {Object.entries(priorityConfig).map(([key, config]) => {
                  const Icon = config.icon;
                  return (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setPriority(key as Task['priority'])}
                      className={`p-4 rounded-2xl border-2 transition-all duration-300 transform hover:scale-105 ${
                        priority === key
                          ? `bg-gradient-to-r ${config.color} text-white border-transparent shadow-lg animate-glow`
                          : 'bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 hover:border-purple-300 dark:hover:border-purple-500'
                      }`}
                    >
                      <Icon className={`w-6 h-6 mx-auto mb-2 ${priority === key ? 'text-white animate-bounce-gentle' : 'text-gray-500'}`} />
                      <div className={`text-sm font-medium ${priority === key ? 'text-white' : 'text-gray-700 dark:text-gray-300'}`}>
                        {key.charAt(0).toUpperCase() + key.slice(1)}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Button type="submit" className="flex-1 group">
                <Plus className="w-5 h-5 mr-2 group-hover:animate-wiggle" />
                Create Awesome Task
                <Sparkles className="w-4 h-4 ml-2 group-hover:animate-pulse" />
              </Button>
              <Button
                type="button"
                variant="ghost"
                onClick={() => {
                  setIsExpanded(false);
                  setDescription('');
                  setPriority('medium');
                }}
                className="group"
              >
                Cancel
              </Button>
            </div>
          </div>
        )}

        {!isExpanded && title && (
          <Button type="submit" className="w-full group animate-scale-in">
            <Plus className="w-5 h-5 mr-2 group-hover:animate-wiggle" />
            Add Task
            <Sparkles className="w-4 h-4 ml-2 group-hover:animate-pulse" />
          </Button>
        )}
      </form>
    </Card>
  );
};

export default TaskForm;