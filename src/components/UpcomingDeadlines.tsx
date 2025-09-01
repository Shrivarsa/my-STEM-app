import React from 'react';
import { Calendar, AlertCircle } from 'lucide-react';

const deadlines = [
  {
    id: 1,
    title: 'Physics Lab Report',
    subject: 'Physics',
    dueDate: 'Tomorrow',
    priority: 'high',
    timeLeft: '18 hours'
  },
  {
    id: 2,
    title: 'Calculus Problem Set',
    subject: 'Mathematics',
    dueDate: 'Mar 25',
    priority: 'medium',
    timeLeft: '3 days'
  },
  {
    id: 3,
    title: 'Chemistry Quiz',
    subject: 'Chemistry',
    dueDate: 'Mar 28',
    priority: 'low',
    timeLeft: '6 days'
  }
];

export const UpcomingDeadlines: React.FC = () => {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-500 bg-red-50';
      case 'medium': return 'text-yellow-500 bg-yellow-100';
      case 'low': return 'text-green-500 bg-green-100';
      default: return 'text-gray-500 bg-gray-50';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-gray-800">Upcoming Deadlines</h3>
        <Calendar className="w-5 h-5 text-gray-400" />
      </div>

      <div className="space-y-4">
        {deadlines.map(deadline => (
          <div key={deadline.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className={`p-2 rounded-lg ${getPriorityColor(deadline.priority)}`}>
                <AlertCircle className="w-4 h-4" />
              </div>
              <div>
                <p className="font-medium text-gray-800">{deadline.title}</p>
                <p className="text-sm text-gray-600">{deadline.subject}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-gray-800">{deadline.dueDate}</p>
              <p className="text-xs text-gray-500">{deadline.timeLeft}</p>
            </div>
          </div>
        ))}
      </div>

      <button className="w-full mt-4 text-sm text-red-500 hover:text-red-400 transition-colors">
        View All Deadlines
      </button>
    </div>
  );
};
