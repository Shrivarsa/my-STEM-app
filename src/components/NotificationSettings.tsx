import React, { useState } from 'react';
import { Bell, Mail, MessageSquare, Calendar } from 'lucide-react';

export const NotificationSettings: React.FC = () => {
  const [settings, setSettings] = useState({
    lessonReminders: true,
    deadlineAlerts: true,
    achievementUpdates: true,
    studyGroupInvites: true,
    weeklyProgress: false,
    mentorMessages: true
  });

  const toggleSetting = (key: string) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key as keyof typeof prev] }));
  };

  const notificationTypes = [
    { key: 'lessonReminders', label: 'Lesson Reminders', description: 'Get notified about scheduled lessons', icon: Calendar },
    { key: 'deadlineAlerts', label: 'Deadline Alerts', description: 'Reminders for upcoming assignments', icon: Bell },
    { key: 'achievementUpdates', label: 'Achievement Updates', description: 'Notifications about badges and milestones', icon: Bell },
    { key: 'studyGroupInvites', label: 'Study Group Invites', description: 'Invitations to join study sessions', icon: MessageSquare },
    { key: 'weeklyProgress', label: 'Weekly Progress Reports', description: 'Summary of your weekly learning activity', icon: Mail },
    { key: 'mentorMessages', label: 'Mentor Messages', description: 'Messages from peer mentors and tutors', icon: MessageSquare }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3">
        <Bell className="w-6 h-6 text-coral" />
        <h3 className="text-xl font-bold text-charcoal">Notification Preferences</h3>
      </div>

      <div className="space-y-4">
        {notificationTypes.map(notification => (
          <div key={notification.key} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-3">
              <notification.icon className="w-5 h-5 text-mint" />
              <div>
                <p className="font-medium text-charcoal">{notification.label}</p>
                <p className="text-sm text-gray-600">{notification.description}</p>
              </div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                className="sr-only peer" 
                checked={settings[notification.key as keyof typeof settings]}
                onChange={() => toggleSetting(notification.key)}
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-coral/25 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-coral"></div>
            </label>
          </div>
        ))}
      </div>

      <div className="bg-mint/10 border border-mint/20 rounded-lg p-4">
        <h4 className="font-medium text-charcoal mb-2">Quiet Hours</h4>
        <p className="text-sm text-gray-600 mb-3">Set times when you don't want to receive notifications</p>
        <div className="flex space-x-4">
          <div>
            <label className="block text-xs text-gray-600 mb-1">From</label>
            <input type="time" defaultValue="22:00" className="px-3 py-2 border border-gray-300 rounded-lg text-sm" />
          </div>
          <div>
            <label className="block text-xs text-gray-600 mb-1">To</label>
            <input type="time" defaultValue="07:00" className="px-3 py-2 border border-gray-300 rounded-lg text-sm" />
          </div>
        </div>
      </div>
    </div>
  );
};