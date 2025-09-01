import React from 'react';
import { Menu, Bell, User, Search } from 'lucide-react';
import { useUser } from '../context/UserContext';

interface HeaderProps {
  onMenuClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  const { user } = useUser();

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button
            onClick={onMenuClick}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors md:hidden"
          >
            <Menu className="w-5 h-5 text-charcoal" />
          </button>
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-coral rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            <h1 className="text-xl font-bold text-charcoal">STEM Learning Hub</h1>
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-4 flex-1 max-w-md mx-8">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search lessons, topics, or ask a question..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coral focus:border-transparent"
            />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors relative">
            <Bell className="w-5 h-5 text-charcoal" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-coral rounded-full"></span>
          </button>
          <div className="flex items-center space-x-3">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-medium text-charcoal">{user.name}</p>
              <p className="text-xs text-gray-500 capitalize">{user.role}</p>
            </div>
            <div className="w-8 h-8 bg-mint rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};