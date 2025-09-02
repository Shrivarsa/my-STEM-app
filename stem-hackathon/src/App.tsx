import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div id="root" className="min-h-screen w-full flex flex-col items-center justify-center bg-gray-50 text-gray-800">
      <h1 className="text-5xl font-extrabold mb-8 text-center">
        My STEM Hackathon App
      </h1>

      <div className="card">
        <button
          onClick={() => setCount((count) => count + 1)}
          className="btn"
        >
          Count is {count}
        </button>

        <p className="read-the-docs">
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>

      <p className="text-gray-600 text-center text-lg mt-4">
        Your app is now full-width and ready to customize!
      </p>
    </div>
  );
}

export default App;
