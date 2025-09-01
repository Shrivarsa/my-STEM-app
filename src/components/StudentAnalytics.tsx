import React from 'react';
import { BarChart3, AlertTriangle } from 'lucide-react';

const studentData = [
  { name: 'Emma Wilson', progress: 92, status: 'excellent', subject: 'Mathematics' },
  { name: 'James Thompson', progress: 78, status: 'good', subject: 'Physics' },
  { name: 'Sofia Garcia', progress: 45, status: 'needs_help', subject: 'Chemistry' },
  { name: 'Michael Brown', progress: 88, status: 'excellent', subject: 'Computer Science' },
  { name: 'Olivia Davis', progress: 65, status: 'average', subject: 'Mathematics' }
];

export const StudentAnalytics: React.FC = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'excellent': return 'bg-green-500';
      case 'good': return 'bg-yellow-500';
      case 'average': return 'bg-gray-400';
      case 'needs_help': return 'bg-red-500';
      default: return 'bg-gray-400';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-gray-800">Student Performance</h3>
        <BarChart3 className="w-5 h-5 text-red-500" />
      </div>

      <div className="space-y-4">
        {studentData.map((student, index) => (
          <div key={index} className="flex flex-col p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-medium">
                    {student.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-gray-800">{student.name}</p>
                  <p className="text-sm text-gray-600">{student.subject}</p>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                {student.status === 'needs_help' && (
                  <AlertTriangle className="w-4 h-4 text-red-500" />
                )}
                <span className={`text-xs px-2 py-1 rounded-full ${student.status === 'excellent' ? 'bg-green-100 text-green-600' :
                  student.status === 'good' ? 'bg-yellow-100 text-yellow-600' :
                  student.status === 'average' ? 'bg-gray-100 text-gray-600' :
                  'bg-red-100 text-red-600'}`}>
                  {student.status.replace('_', ' ')}
                </span>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className={`h-2 rounded-full ${getStatusColor(student.status)}`}
                style={{ width: `${student.progress}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
