import React, { useState } from 'react';
import { User, Bell, Lock, Palette } from 'lucide-react';
import { PersonalInfo } from '../components/PersonalInfo';
import LearningPath from '../components/LearningPath';
import { NotificationSettings } from '../components/NotificationSettings';
import { SecuritySettings } from '../components/SecuritySettings';

interface Tab {
  id: string;
  label: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export const Profile: React.FC = () => {
  const [activeTab, setActiveTab] = useState('personal');

  const tabs: Tab[] = [
    { id: 'personal', label: 'Personal Info', icon: User },
    { id: 'path', label: 'Learning Path', icon: Palette },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'security', label: 'Security', icon: Lock }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-charcoal mb-2">Profile Settings</h1>
        <p className="text-gray-600">Customize your learning experience</p>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-xl shadow-sm">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-6 px-6 overflow-x-auto">
            {tabs.map(tab => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 py-4 px-2 border-b-2 transition-all duration-300 ease-in-out
                    ${activeTab === tab.id
                      ? 'border-coral text-coral scale-105'
                      : 'border-transparent text-gray-500 hover:text-charcoal hover:scale-105'}
                  `}
                >
                  <Icon className="w-5 h-5 transition-colors duration-300" />
                  <span className="font-medium">{tab.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Tab Content */}
        <div className="p-6">
          {activeTab === 'personal' && <PersonalInfo />}
          {activeTab === 'preferences' && <LearningPath/>}
          {activeTab === 'notifications' && <NotificationSettings />}
          {activeTab === 'security' && <SecuritySettings />}
        </div>
      </div>
    </div>
  );
};
