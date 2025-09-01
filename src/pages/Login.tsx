import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Add authentication logic
    console.log({ email, password });
    navigate("/dashboard"); // redirect after login
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-indigo-600">
      <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-md w-full transform hover:scale-105 transition duration-500">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Welcome Back
        </h2>
        <form onSubmit={handleLogin} className="space-y-5">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          />
          <button
            type="submit"
            className="w-full bg-indigo-500 text-white py-3 rounded-lg font-semibold hover:bg-indigo-600 transition"
          >
            Login
          </button>
        </form>
        <p className="mt-5 text-center text-gray-500">
          Don't have an account?{" "}
          <Link to="/register" className="text-indigo-500 font-semibold hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
