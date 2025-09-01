import React from 'react';
import { Award, Star, Trophy, Target } from 'lucide-react';

const badges = [
  { id: 1, name: 'Quick Learner', icon: Star, earned: true, color: 'gold' },
  { id: 2, name: 'Problem Solver', icon: Target, earned: true, color: 'mint' },
  { id: 3, name: 'Collaborator', icon: Trophy, earned: true, color: 'coral' },
  { id: 4, name: 'Code Master', icon: Award, earned: false, color: 'gray' }
];

export const AchievementBadges: React.FC = () => {
  const getColorClasses = (color: string, earned: boolean) => {
    if (!earned) return 'bg-gray-100 text-gray-400';
    
    switch (color) {
      case 'gold': return 'bg-gold/10 text-gold';
      case 'mint': return 'bg-mint/10 text-mint';
      case 'coral': return 'bg-coral/10 text-coral';
      default: return 'bg-gray-100 text-gray-400';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-charcoal">Achievements</h3>
        <Award className="w-5 h-5 text-gold" />
      </div>
      
      <div className="grid grid-cols-2 gap-3">
        {badges.map(badge => (
          <div
            key={badge.id}
            className={`p-3 rounded-lg text-center transition-all duration-200 ${
              badge.earned ? 'hover:scale-105' : ''
            } ${getColorClasses(badge.color, badge.earned)}`}
          >
            <badge.icon className="w-6 h-6 mx-auto mb-2" />
            <p className="text-xs font-medium">{badge.name}</p>
          </div>
        ))}
      </div>
      
      <button className="w-full mt-4 text-sm text-coral hover:text-coral/80 transition-colors">
        View All Badges
      </button>
    </div>
  );
};