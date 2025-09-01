import { useState } from "react";
import { Outlet, useLocation, Link } from "react-router-dom";
import {
  Home,
  BookOpen,
  BarChart2,
  Users,
  User,
  Settings,
} from "lucide-react";

const DashboardLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  // Navigation links
  const links = [
    { name: "Dashboard", path: "/", icon: <Home size={20} /> },
    { name: "Lessons", path: "/lessons", icon: <BookOpen size={20} /> },
    { name: "Progress", path: "/progress", icon: <BarChart2 size={20} /> },
    {
      name: "Collaboration",
      path: "/collaboration",
      icon: <Users size={20} />,
    },
    { name: "Profile", path: "/profile", icon: <User size={20} /> },
    { name: "Admin", path: "/admin", icon: <Settings size={20} /> },
  ];

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div
        className={`bg-gray-800 text-white transition-all duration-300 ${
          collapsed ? "w-20" : "w-64"
        } flex flex-col`}
      >
        {/* Toggle button */}
        <div className="flex justify-end p-2">
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="text-white focus:outline-none"
          >
            {collapsed ? "➡️" : "⬅️"}
          </button>
        </div>

        {/* Logo / Header */}
        {!collapsed && <div className="text-2xl font-bold p-4">My Dashboard</div>}

        {/* Navigation links */}
        <nav className="flex-1 mt-4">
          <ul className="space-y-2">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className={`flex items-center p-2 hover:bg-gray-700 rounded transition-colors ${
                    location.pathname === link.path ? "bg-gray-700" : ""
                  }`}
                >
                  {link.icon}
                  {!collapsed && <span className="ml-3">{link.name}</span>}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer */}
        {!collapsed && <div className="p-4 text-sm text-gray-400">v1.0.0</div>}
      </div>

      {/* Main content */}
      <main className="flex-1 p-6 bg-gray-50">
        {/* THIS IS THE KEY: nested routes render here */}
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
