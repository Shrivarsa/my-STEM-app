import React from "react";
import { Link } from "react-router-dom";

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Dashboard</h1>
        <p className="mb-4">You are logged in!</p>
        <Link to="/login" className="text-blue-500 hover:underline">Logout</Link>
      </div>
    </div>
  );
};

export default Dashboard;
