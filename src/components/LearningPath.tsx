import React, { useState } from 'react';

// ✅ Define Preferences type
type Preferences = {
  learningStyle: 'visual' | 'auditory' | 'kinesthetic';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  audioNarration: boolean;
};

// ✅ Define User type (optional preferences)
interface User {
  preferences?: Preferences;
}

interface PreferencesProps {
  user?: User;
}

const PreferencesComponent: React.FC<PreferencesProps> = ({ user }) => {
  // ✅ State initialization with default fallback
  const [preferences, setPreferences] = useState<Preferences>(
    user?.preferences || {
      learningStyle: 'visual',
      difficulty: 'beginner',
      audioNarration: true,
    }
  );

  // ✅ Handler to update preferences dynamically
  const handleChange = <K extends keyof Preferences>(
    key: K,
    value: Preferences[K]
  ) => {
    setPreferences((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <div className="p-4 border rounded-lg shadow-md bg-white">
      <h2 className="text-lg font-semibold mb-3">User Preferences</h2>

      {/* Learning Style */}
      <label className="block mb-2">
        Learning Style:
        <select
          value={preferences.learningStyle}
          onChange={(e) =>
            handleChange('learningStyle', e.target.value as Preferences['learningStyle'])
          }
          className="ml-2 border p-1 rounded"
        >
          <option value="visual">Visual</option>
          <option value="auditory">Auditory</option>
          <option value="kinesthetic">Kinesthetic</option>
        </select>
      </label>

      {/* Difficulty */}
      <label className="block mb-2">
        Difficulty:
        <select
          value={preferences.difficulty}
          onChange={(e) =>
            handleChange('difficulty', e.target.value as Preferences['difficulty'])
          }
          className="ml-2 border p-1 rounded"
        >
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>
      </label>

      {/* Audio Narration */}
      <label className="block mb-2">
        <input
          type="checkbox"
          checked={preferences.audioNarration}
          onChange={(e) => handleChange('audioNarration', e.target.checked)}
          className="mr-2"
        />
        Enable Audio Narration
      </label>

      {/* Display Current Preferences */}
      <div className="mt-4 p-2 border-t">
        <p>
          <strong>Current Preferences:</strong>
        </p>
        <ul className="list-disc pl-6">
          <li>Learning Style: {preferences.learningStyle}</li>
          <li>Difficulty: {preferences.difficulty}</li>
          <li>
            Audio Narration: {preferences.audioNarration ? 'Enabled' : 'Disabled'}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PreferencesComponent;
