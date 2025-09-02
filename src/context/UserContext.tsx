import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

interface User {
  id: string;
  name: string;
  email: string;
  role: "student" | "educator";
  avatar?: string;
  preferences: {
    learningStyle: "visual" | "auditory" | "kinesthetic" | "reading";
    difficulty: "beginner" | "intermediate" | "advanced";
    notifications: boolean;
  };
}

interface UserContextType {
  user: User | null;
  updateUser: (updates: Partial<User>) => void;
  logout: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

// eslint-disable-next-line react-refresh/only-export-components
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true); // ✅ loading state

  // Load from localStorage on first render
  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (stored) {
      setUser(JSON.parse(stored));
    } else {
      // ✅ fallback default user
      setUser({
        id: "1",
        name: "Alex Johnson",
        email: "alex.johnson@email.com",
        role: "student",
        preferences: {
          learningStyle: "visual",
          difficulty: "intermediate",
          notifications: true,
        },
      });
    }
    setLoading(false); // ✅ mark as finished
  }, []);

  // Persist changes to localStorage
  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    }
  }, [user]);

  const updateUser = (updates: Partial<User>) => {
    setUser((prev) =>
      prev
        ? {
            ...prev,
            ...updates,
            preferences: {
              ...prev.preferences,
              ...(updates.preferences || {}),
            },
          }
        : null
    );
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  if (loading) {
    // ✅ prevents Sidebar / Secure from crashing before user loads
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-gray-500 text-xl">Loading...</p>
      </div>
    );
  }

  return (
    <UserContext.Provider value={{ user, updateUser, logout }}>
      {children}
    </UserContext.Provider>
  );
};
