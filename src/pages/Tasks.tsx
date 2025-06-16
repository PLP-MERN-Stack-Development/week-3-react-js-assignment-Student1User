import React from 'react';
import TaskManager from '../components/TaskManager/TaskManager';

const Tasks: React.FC = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8">
      <TaskManager />
    </div>
  );
};

export default Tasks;