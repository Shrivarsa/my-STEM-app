import { useState } from 'react';
import './styles/index.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-800">
      <h1 className="text-5xl font-extrabold mb-8 text-center">
        My STEM Hackathon App
      </h1>

      <div className="w-full max-w-3xl p-8 bg-white rounded-xl shadow-lg text-center mb-8">
        <button
          onClick={() => setCount((count) => count + 1)}
          className="px-8 py-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
        >
          Count is {count}
        </button>

        <p className="mt-6 text-gray-500 text-lg">
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>

      <p className="text-gray-600 text-center text-lg">
        Your app is now full width and ready to customize!
      </p>
    </div>
  );
}

export default App;
