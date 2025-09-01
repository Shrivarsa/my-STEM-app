import React from 'react';
import { Activity, Clock, MessageSquare, Users } from 'lucide-react';

export const EngagementMetrics: React.FC = () => {
  const metrics = [
    { label: 'Daily Active Students', value: '142', change: '+12%', icon: Users, color: 'mint' },
    { label: 'Avg. Session Duration', value: '24 min', change: '+5%', icon: Clock, color: 'gold' },
    { label: 'Discussion Posts', value: '89', change: '+18%', icon: MessageSquare, color: 'coral' },
    { label: 'Lesson Completions', value: '234', change: '+8%', icon: Activity, color: 'charcoal' }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'mint': return 'bg-mint/10 text-mint';
      case 'gold': return 'bg-gold/10 text-gold';
      case 'coral': return 'bg-coral/10 text-coral';
      case 'charcoal': return 'bg-charcoal/10 text-charcoal';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h3 className="text-lg font-bold text-charcoal mb-6">Engagement Metrics</h3>
      
      <div className="grid grid-cols-2 gap-4">
        {metrics.map((metric, index) => (
          <div key={index} className="text-center">
            <div className={`inline-flex p-3 rounded-lg mb-3 ${getColorClasses(metric.color)}`}>
              <metric.icon className="w-6 h-6" />
            </div>
            <p className="text-2xl font-bold text-charcoal">{metric.value}</p>
            <p className="text-sm text-gray-600 mb-1">{metric.label}</p>
            <span className="text-xs text-mint font-medium">{metric.change}</span>
          </div>
        ))}
      </div>
    </div>
  );
};