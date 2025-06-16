import React, { useState } from 'react';
import { Check, X, Edit3, Save, AlertCircle, Clock, Flag, Sparkles, Heart } from 'lucide-react';
import { Task } from '../../types';
import Button from '../ui/Button';
import Card from '../ui/Card';

interface TaskItemProps {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onUpdate: (id: string, updates: Partial<Task>) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onToggle, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(task.title);
  const [editDescription, setEditDescription] = useState(task.description || '');
  const [editPriority, setEditPriority] = useState(task.priority);

  const handleSave = () => {
    if (editTitle.trim()) {
      onUpdate(task.id, {
        title: editTitle.trim(),
        description: editDescription.trim() || undefined,
        priority: editPriority,
      });
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setEditTitle(task.title);
    setEditDescription(task.description || '');
    setEditPriority(task.priority);
    setIsEditing(false);
  };

  const getPriorityConfig = (priority: Task['priority']) => {
    switch (priority) {
      case 'high':
        return {
          color: 'from-red-500 to-pink-500',
          bgColor: 'bg-gradient-to-r from-red-100 to-pink-100 dark:from-red-900/20 dark:to-pink-900/20',
          textColor: 'text-red-600 dark:text-red-400',
          icon: AlertCircle,
        };
      case 'medium':
        return {
          color: 'from-yellow-500 to-orange-500',
          bgColor: 'bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900/20 dark:to-orange-900/20',
          textColor: 'text-yellow-600 dark:text-yellow-400',
          icon: Clock,
        };
      case 'low':
        return {
          color: 'from-emerald-500 to-teal-500',
          bgColor: 'bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-900/20 dark:to-teal-900/20',
          textColor: 'text-emerald-600 dark:text-emerald-400',
          icon: Flag,
        };
    }
  };

  const priorityConfig = getPriorityConfig(task.priority);
  const PriorityIcon = priorityConfig.icon;

  return (
    <Card 
      hover 
      className={`transition-all duration-500 transform hover:scale-102 ${
        task.completed 
          ? 'opacity-70 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700' 
          : 'bg-gradient-to-r from-white via-purple-50/20 to-blue-50/20 dark:from-gray-800 dark:via-purple-900/10 dark:to-blue-900/10'
      } animate-fade-in`}
    >
      <div className="flex items-start space-x-4">
        <button
          onClick={() => onToggle(task.id)}
          className={`flex-shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-300 transform hover:scale-110 ${
            task.completed
              ? 'bg-gradient-to-r from-emerald-500 to-teal-500 border-transparent text-white shadow-lg animate-glow'
              : 'border-gray-300 dark:border-gray-600 hover:border-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20'
          }`}
        >
          {task.completed && <Check className="w-5 h-5 animate-bounce-gentle" />}
          {!task.completed && <Heart className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />}
        </button>

        <div className="flex-1 min-w-0">
          {isEditing ? (
            <div className="space-y-4 animate-fade-in">
              <input
                type="text"
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
                className="w-full px-4 py-3 bg-gradient-to-r from-white to-purple-50 dark:from-gray-700 dark:to-purple-900/30 border-2 border-purple-200 dark:border-purple-700 rounded-xl focus:outline-none focus:ring-4 focus:ring-purple-500/30 transition-all duration-300"
                autoFocus
              />
              <textarea
                value={editDescription}
                onChange={(e) => setEditDescription(e.target.value)}
                placeholder="✨ Add description..."
                rows={2}
                className="w-full px-4 py-3 bg-gradient-to-r from-white to-blue-50 dark:from-gray-700 dark:to-blue-900/30 border-2 border-blue-200 dark:border-blue-700 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500/30 transition-all duration-300 resize-none"
              />
              <select
                value={editPriority}
                onChange={(e) => setEditPriority(e.target.value as Task['priority'])}
                className="px-4 py-2 bg-gradient-to-r from-white to-gray-50 dark:from-gray-700 dark:to-gray-600 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-4 focus:ring-purple-500/30 transition-all duration-300"
              >
                <option value="low">🟢 Low Priority</option>
                <option value="medium">🟡 Medium Priority</option>
                <option value="high">🔴 High Priority</option>
              </select>
            </div>
          ) : (
            <div className="animate-fade-in">
              <h3 className={`font-semibold text-gray-900 dark:text-white mb-2 ${task.completed ? 'line-through' : ''} transition-all duration-300`}>
                {task.title}
                {task.completed && <Sparkles className="inline w-4 h-4 ml-2 text-emerald-500 animate-pulse" />}
              </h3>
              {task.description && (
                <p className={`text-sm text-gray-600 dark:text-gray-400 mb-3 ${task.completed ? 'line-through' : ''} transition-all duration-300`}>
                  {task.description}
                </p>
              )}
              <div className="flex items-center space-x-4">
                <span className={`inline-flex items-center space-x-2 px-3 py-1.5 rounded-full text-xs font-semibold ${priorityConfig.bgColor} ${priorityConfig.textColor} transition-all duration-300 hover:scale-105`}>
                  <PriorityIcon className="w-3 h-3 animate-pulse" />
                  <span className="capitalize">{task.priority}</span>
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full">
                  📅 {new Date(task.createdAt).toLocaleDateString()}
                </span>
              </div>
            </div>
          )}
        </div>

        <div className="flex items-center space-x-2">
          {isEditing ? (
            <>
              <Button variant="ghost" size="sm" onClick={handleSave} className="group">
                <Save className="w-4 h-4 group-hover:animate-wiggle" />
              </Button>
              <Button variant="ghost" size="sm" onClick={handleCancel} className="group">
                <X className="w-4 h-4 group-hover:animate-wiggle" />
              </Button>
            </>
          ) : (
            <>
              <Button variant="ghost" size="sm" onClick={() => setIsEditing(true)} className="group">
                <Edit3 className="w-4 h-4 group-hover:animate-wiggle" />
              </Button>
              <Button variant="ghost" size="sm" onClick={() => onDelete(task.id)} className="group hover:bg-red-100 dark:hover:bg-red-900/20">
                <X className="w-4 h-4 group-hover:text-red-500 group-hover:animate-wiggle" />
              </Button>
            </>
          )}
        </div>
      </div>
    </Card>
  );
};

export default TaskItem;