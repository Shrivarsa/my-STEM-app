import React from 'react';
import { Clock, CheckCircle, Star, MessageCircle } from 'lucide-react';

const activities = [
  {
    id: 1,
    type: 'completion',
    title: 'Completed "Linear Algebra Basics"',
    time: '2 hours ago',
    icon: CheckCircle,
    color: 'mint'
  },
  {
    id: 2,
    type: 'achievement',
    title: 'Earned "Problem Solver" badge',
    time: '1 day ago',
    icon: Star,
    color: 'gold'
  },
  {
    id: 3,
    type: 'discussion',
    title: 'Replied in "Quantum Physics" discussion',
    time: '2 days ago',
    icon: MessageCircle,
    color: 'coral'
  },
  {
    id: 4,
    type: 'completion',
    title: 'Completed "Python Functions" lab',
    time: '3 days ago',
    icon: CheckCircle,
    color: 'mint'
  }
];

export const RecentActivity: React.FC = () => {
  const getColorClasses = (color: string) => {
    switch (color) {
      case 'coral': return 'bg-coral/10 text-coral';
      case 'mint': return 'bg-mint/10 text-mint';
      case 'gold': return 'bg-gold/10 text-gold';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-charcoal">Recent Activity</h3>
        <Clock className="w-5 h-5 text-gray-400" />
      </div>
      
      <div className="space-y-4">
        {activities.map(activity => (
          <div key={activity.id} className="flex items-start space-x-3">
            <div className={`p-2 rounded-lg ${getColorClasses(activity.color)}`}>
              <activity.icon className="w-4 h-4" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-charcoal">{activity.title}</p>
              <p className="text-xs text-gray-500">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
      
      <button className="w-full mt-4 text-sm text-coral hover:text-coral/80 transition-colors">
        View All Activity
      </button>
    </div>
  );
};