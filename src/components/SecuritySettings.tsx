import React, { useState } from 'react';
import { Lock, Eye, EyeOff, Shield, Key } from 'lucide-react';

export const SecuritySettings: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [passwordData, setPasswordData] = useState({
    current: '',
    new: '',
    confirm: ''
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3">
        <Lock className="w-6 h-6 text-coral" />
        <h3 className="text-xl font-bold text-charcoal">Security & Privacy</h3>
      </div>

      <div className="space-y-6">
        <div className="bg-gray-50 rounded-lg p-6">
          <h4 className="font-medium text-charcoal mb-4">Change Password</h4>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-charcoal mb-2">Current Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={passwordData.current}
                  onChange={(e) => setPasswordData(prev => ({ ...prev, current: e.target.value }))}
                  className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coral focus:border-transparent"
                />
                <button
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2"
                >
                  {showPassword ? <EyeOff className="w-4 h-4 text-gray-500" /> : <Eye className="w-4 h-4 text-gray-500" />}
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-charcoal mb-2">New Password</label>
              <input
                type={showPassword ? 'text' : 'password'}
                value={passwordData.new}
                onChange={(e) => setPasswordData(prev => ({ ...prev, new: e.target.value }))}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coral focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-charcoal mb-2">Confirm New Password</label>
              <input
                type={showPassword ? 'text' : 'password'}
                value={passwordData.confirm}
                onChange={(e) => setPasswordData(prev => ({ ...prev, confirm: e.target.value }))}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coral focus:border-transparent"
              />
            </div>

            <button className="inline-flex items-center space-x-2 px-4 py-2 bg-coral text-white rounded-lg hover:bg-coral/90 transition-colors">
              <Key className="w-4 h-4" />
              <span>Update Password</span>
            </button>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-6">
          <h4 className="font-medium text-charcoal mb-4">Privacy Settings</h4>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-charcoal">Profile Visibility</p>
                <p className="text-sm text-gray-600">Allow other students to see your profile</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-coral/25 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-coral"></div>
              </label>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-charcoal">Share Progress</p>
                <p className="text-sm text-gray-600">Allow mentors to see your learning progress</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-coral/25 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-coral"></div>
              </label>
            </div>
          </div>
        </div>

        <div className="bg-mint/10 border border-mint/20 rounded-lg p-4">
          <div className="flex items-start space-x-3">
            <Shield className="w-5 h-5 text-mint mt-0.5" />
            <div>
              <p className="font-medium text-charcoal">Data Protection</p>
              <p className="text-sm text-gray-600">Your learning data is encrypted and secure. We never share personal information with third parties.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};