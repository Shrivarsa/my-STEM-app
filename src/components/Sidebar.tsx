import React from "react";
import { NavLink } from "react-router-dom";
import { useUser } from "../context/UserContext"; // ✅ adjust path if different
import {
  LayoutDashboard,
  BookOpen,
  BarChart3,
  Users,
  User,
  Shield,
} from "lucide-react";

const Sidebar: React.FC = () => {
  const { user } = useUser();

  if (!user) {
    // ✅ Fallback (shouldn’t happen often because UserProvider sets a default user)
    return (
      <div className="w-64 bg-gray-800 text-white p-6">
        <p className="text-center text-gray-400">No user found</p>
      </div>
    );
  }

  const links = [
    { to: "/dashboard", label: "Dashboard", icon: <LayoutDashboard size={18} /> },
    { to: "/lessons", label: "Lessons", icon: <BookOpen size={18} /> },
    { to: "/progress", label: "Progress", icon: <BarChart3 size={18} /> },
    { to: "/collaboration", label: "Collaboration", icon: <Users size={18} /> },
    { to: "/profile", label: "Profile", icon: <User size={18} /> },
  ];

  // Add admin link if user is educator
  if (user.role === "educator") {
    links.push({ to: "/admin", label: "Admin", icon: <Shield size={18} /> });
  }

  return (
    <aside className="w-64 bg-gray-800 text-white flex flex-col p-6 min-h-screen">
      {/* User Info */}
      <div className="flex items-center space-x-3 mb-8">
        <img
          src={user.avatar || "https://via.placeholder.com/40"}
          alt={user.name}
          className="w-10 h-10 rounded-full border-2 border-gray-600"
        />
        <div>
          <p className="font-semibold">{user.name}</p>
          <p className="text-sm text-gray-400 capitalize">{user.role}</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-2">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `flex items-center px-3 py-2 rounded-lg transition ${
                isActive
                  ? "bg-indigo-600 text-white"
                  : "text-gray-300 hover:bg-gray-700"
              }`
            }
          >
            <span className="mr-3">{link.icon}</span>
            {link.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
