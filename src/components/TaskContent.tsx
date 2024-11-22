import React from 'react';
import { CheckCircle2, Clock, AlertCircle } from 'lucide-react';

export function TaskContent() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Tasks</h1>
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
          Create Task
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <TaskColumn
          title="To Do"
          icon={<Clock className="h-5 w-5 text-gray-400" />}
          tasks={[
            { id: 1, title: "Review Math Quiz", priority: "High", dueDate: "Today" },
            { id: 2, title: "Prepare Physics Lab", priority: "Medium", dueDate: "Tomorrow" },
            { id: 3, title: "Grade Essays", priority: "Low", dueDate: "Mar 15" },
          ]}
        />
        <TaskColumn
          title="In Progress"
          icon={<AlertCircle className="h-5 w-5 text-yellow-400" />}
          tasks={[
            { id: 4, title: "Chemistry Test Setup", priority: "High", dueDate: "Today" },
            { id: 5, title: "Biology Reports", priority: "Medium", dueDate: "Mar 16" },
          ]}
        />
        <TaskColumn
          title="Completed"
          icon={<CheckCircle2 className="h-5 w-5 text-green-400" />}
          tasks={[
            { id: 6, title: "History Quiz Grading", priority: "Medium", dueDate: "Mar 10" },
            { id: 7, title: "Literature Review", priority: "High", dueDate: "Mar 8" },
            { id: 8, title: "Math Homework", priority: "Low", dueDate: "Mar 5" },
          ]}
        />
      </div>
    </div>
  );
}

interface Task {
  id: number;
  title: string;
  priority: string;
  dueDate: string;
}

interface TaskColumnProps {
  title: string;
  icon: React.ReactNode;
  tasks: Task[];
}

function TaskColumn({ title, icon, tasks }: TaskColumnProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center space-x-2">
          {icon}
          <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
          <span className="ml-auto bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-sm">
            {tasks.length}
          </span>
        </div>
      </div>
      <div className="p-4 space-y-4">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}

function TaskCard({ task }: { task: Task }) {
  const priorityColor = {
    High: 'text-red-600 bg-red-50',
    Medium: 'text-yellow-600 bg-yellow-50',
    Low: 'text-green-600 bg-green-50',
  }[task.priority];

  return (
    <div className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-medium text-gray-900">{task.title}</h3>
        <span className={`text-xs px-2 py-1 rounded-full ${priorityColor}`}>
          {task.priority}
        </span>
      </div>
      <div className="flex items-center text-sm text-gray-500">
        <Clock className="h-4 w-4 mr-1" />
        {task.dueDate}
      </div>
    </div>
  );
}