import React from 'react';
import { Play, BookOpen, Users, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';

export const QuickActions: React.FC = () => {
  const actions = [
    { icon: Play, label: 'Continue Learning', to: '/lessons/1', color: 'coral' },
    { icon: BookOpen, label: 'Browse Lessons', to: '/lessons', color: 'mint' },
    { icon: Users, label: 'Join Study Group', to: '/collaboration', color: 'gold' },
    { icon: Brain, label: 'Take Quiz', to: '/quiz', color: 'charcoal' }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'coral': return 'bg-coral hover:bg-coral/90';
      case 'mint': return 'bg-mint hover:bg-mint/90';
      case 'gold': return 'bg-gold hover:bg-gold/90';
      case 'charcoal': return 'bg-charcoal hover:bg-charcoal/90';
      default: return 'bg-gray-500 hover:bg-gray-600';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h3 className="text-lg font-bold text-charcoal mb-4">Quick Actions</h3>
      <div className="grid grid-cols-2 gap-3">
        {actions.map((action, index) => (
          <Link
            key={index}
            to={action.to}
            className={`${getColorClasses(action.color)} text-white p-4 rounded-lg transition-all duration-200 hover:shadow-md group`}
          >
            <action.icon className="w-6 h-6 mb-2 group-hover:scale-110 transition-transform" />
            <p className="text-sm font-medium">{action.label}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};