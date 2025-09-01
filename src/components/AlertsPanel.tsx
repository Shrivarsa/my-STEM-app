import React from 'react';
import { AlertTriangle, User, Clock } from 'lucide-react';


const alerts = [
  {
    id: 1,
    type: 'urgent',
    student: 'Sofia Garcia',
    message: 'Struggling with Chemistry concepts - 3 failed attempts',
    time: '2 hours ago',
    action: 'Recommend tutor'
  },
  {
    id: 2,
    type: 'info',
    student: 'James Thompson',
    message: 'Consistently high performance in Physics',
    time: '1 day ago',
    action: 'Suggest advanced content'
  },
  {
    id: 3,
    type: 'warning',
    student: 'Michael Brown',
    message: 'Missing 3 consecutive coding assignments',
    time: '2 days ago',
    action: 'Send reminder'
  }
];

export const AlertsPanel: React.FC = () => {
  const getAlertColor = (type: string) => {
    switch (type) {
      case 'urgent': return 'border-red-200 bg-red-50';
      case 'warning': return 'border-gold/30 bg-gold/5';
      case 'info': return 'border-mint/30 bg-mint/5';
      default: return 'border-gray-200 bg-gray-50';
    }
  };

  const getIconColor = (type: string) => {
    switch (type) {
      case 'urgent': return 'text-red-500';
      case 'warning': return 'text-gold';
      case 'info': return 'text-mint';
      default: return 'text-gray-500';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-charcoal">Student Alerts</h3>
        <AlertTriangle className="w-5 h-5 text-coral" />
      </div>
      
      <div className="space-y-4">
        {alerts.map(alert => (
          <div key={alert.id} className={`border rounded-lg p-4 ${getAlertColor(alert.type)}`}>
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-start space-x-3">
                <User className={`w-4 h-4 mt-1 ${getIconColor(alert.type)}`} />
                <div>
                  <p className="font-medium text-charcoal">{alert.student}</p>
                  <p className="text-sm text-gray-600">{alert.message}</p>
                </div>
              </div>
              <div className="flex items-center space-x-1 text-gray-500">
                <Clock className="w-3 h-3" />
                <span className="text-xs">{alert.time}</span>
              </div>
            </div>
            
            <div className="flex justify-end space-x-2">
              <button className="text-sm text-gray-600 hover:text-charcoal transition-colors">
                Dismiss
              </button>
              <button className="text-sm text-coral hover:text-coral/80 transition-colors">
                {alert.action}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};