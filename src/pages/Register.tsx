import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const learningPaths = ["C++", "Java", "Python"];

const Register: React.FC = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedPath, setSelectedPath] = useState<string | null>(null);

  const navigate = useNavigate();

  const handleNext = () => setStep((prev) => prev + 1);
  const handleBack = () => setStep((prev) => prev - 1);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Add registration logic
    console.log({ name, email, password, selectedPath });
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500">
      <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-md w-full transform hover:scale-105 transition duration-500">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Create Account
        </h2>

        <form onSubmit={handleRegister} className="space-y-5">
          {/* Step 1: Personal Info */}
          {step === 1 && (
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                required
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                required
              />
            </div>
          )}

          {/* Step 2: Select Learning Path */}
          {step === 2 && (
            <div className="space-y-4">
              <p className="text-gray-700 font-semibold">Select Your Learning Path:</p>
              <div className="flex gap-3">
                {learningPaths.map((path) => (
                  <button
                    key={path}
                    type="button"
                    onClick={() => setSelectedPath(path)}
                    className={`flex-1 py-3 rounded-lg border text-center font-medium transition ${
                      selectedPath === path
                        ? "bg-green-500 text-white border-green-500"
                        : "bg-white text-gray-800 border-gray-300 hover:bg-green-100"
                    }`}
                  >
                    {path}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-5">
            {step > 1 && (
              <button
                type="button"
                onClick={handleBack}
                className="px-5 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
              >
                Back
              </button>
            )}
            {step < 2 && (
              <button
                type="button"
                onClick={handleNext}
                className="ml-auto px-5 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
              >
                Next
              </button>
            )}
            {step === 2 && (
              <button
                type="submit"
                disabled={!selectedPath}
                className={`ml-auto px-5 py-2 rounded-lg font-semibold transition ${
                  selectedPath ? "bg-green-500 text-white hover:bg-green-600" : "bg-gray-300 text-gray-600 cursor-not-allowed"
                }`}
              >
                Register
              </button>
            )}
          </div>

          {/* Step Progress */}
          <div className="mt-5">
            <div className="w-full bg-gray-200 h-2 rounded-full">
              <div
                className="bg-green-500 h-2 rounded-full transition-all"
                style={{ width: step === 1 ? "50%" : "100%" }}
              ></div>
            </div>
          </div>
        </form>

        <p className="mt-5 text-center text-gray-500">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-green-500 font-semibold hover:underline cursor-pointer"
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
