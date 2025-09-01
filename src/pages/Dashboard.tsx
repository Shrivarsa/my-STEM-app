import React from 'react';
import { ProgressCard } from '../components/ProgressCard';
import { QuickActions } from '../components/QuickActions';
import { RecentActivity } from '../components/RecentActivity';
import { UpcomingDeadlines } from '../components/UpcomingDeadlines';
import { AchievementBadges } from '../components/AchievementBadges';
import { WellnessReminder } from '../components/WellnessReminder';
import { useUser } from '../context/UserContext';

export const Dashboard: React.FC = () => {
  const { user } = useUser();

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-charcoal">
            Welcome back, {user.name}!
          </h1>
          <p className="text-gray-600 mt-1">Ready to continue your STEM journey?</p>
        </div>
        <WellnessReminder />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProgressCard />
        <QuickActions />
        <AchievementBadges />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RecentActivity />
        <UpcomingDeadlines />
      </div>
    </div>
  );
};