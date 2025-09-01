import React, { useState } from 'react';
import { User as UserIcon, Mail as MailIcon, Save as SaveIcon } from 'lucide-react';
import { useUser } from '../context/UserContext';

export const PersonalInfo: React.FC = () => {
  const { user, updateUser } = useUser();

  // Initialize form data safely
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    grade: '12th Grade',
    school: 'Central High School',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    updateUser(formData);
    alert('Personal info saved!');
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 w-full max-w-md">
      <h3 className="text-lg font-bold mb-4">Personal Information</h3>

      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <UserIcon className="w-5 h-5 text-gray-400" />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div className="flex items-center gap-2">
          <MailIcon className="w-5 h-5 text-gray-400" />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <input
          type="text"
          name="grade"
          value={formData.grade}
          onChange={handleChange}
          placeholder="Grade"
          className="w-full border border-gray-300 rounded px-3 py-2"
        />

        <input
          type="text"
          name="school"
          value={formData.school}
          onChange={handleChange}
          placeholder="School"
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
      </div>

      <button
        onClick={handleSave}
        className="mt-4 inline-flex items-center px-4 py-2 bg-mint text-white rounded-lg hover:bg-mint/90 transition-colors"
      >
        <SaveIcon className="w-4 h-4 mr-2" />
        Save
      </button>
    </div>
  );
};
