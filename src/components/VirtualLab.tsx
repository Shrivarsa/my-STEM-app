import React, { useState } from 'react';
import { FlaskConical, Play, Pause, RotateCcw, Thermometer } from 'lucide-react';

export const VirtualLab: React.FC = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [temperature, setTemperature] = useState(25);
  const [concentration, setConcentration] = useState(0.5);

  const startExperiment = () => {
    setIsRunning(!isRunning);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold text-charcoal">Virtual Chemistry Lab</h3>
        <div className="flex space-x-2">
          <button
            onClick={startExperiment}
            className="inline-flex items-center space-x-2 px-4 py-2 bg-mint text-white rounded-lg hover:bg-mint/90 transition-colors"
          >
            {isRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            <span>{isRunning ? 'Pause' : 'Start'} Experiment</span>
          </button>
          <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <RotateCcw className="w-4 h-4 text-charcoal" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Lab Equipment */}
        <div className="bg-gray-50 rounded-lg p-6">
          <h4 className="font-medium text-charcoal mb-4">Lab Equipment</h4>
          
          <div className="space-y-4">
            <div className="flex items-center justify-center h-32 bg-white rounded-lg border-2 border-dashed border-gray-300">
              <div className="text-center">
                <FlaskConical className={`w-12 h-12 mx-auto mb-2 ${isRunning ? 'text-coral animate-pulse' : 'text-gray-400'}`} />
                <p className="text-sm text-gray-600">Reaction Chamber</p>
              </div>
            </div>
            
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">
                  Temperature (°C)
                </label>
                <div className="flex items-center space-x-3">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={temperature}
                    onChange={(e) => setTemperature(Number(e.target.value))}
                    className="flex-1"
                  />
                  <div className="flex items-center space-x-1">
                    <Thermometer className="w-4 h-4 text-coral" />
                    <span className="text-sm font-medium text-charcoal">{temperature}°C</span>
                  </div>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">
                  Concentration (M)
                </label>
                <input
                  type="range"
                  min="0"
                  max="2"
                  step="0.1"
                  value={concentration}
                  onChange={(e) => setConcentration(Number(e.target.value))}
                  className="w-full"
                />
                <span className="text-sm text-gray-600">{concentration} M</span>
              </div>
            </div>
          </div>
        </div>

        {/* Observation Log */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h4 className="font-medium text-charcoal mb-4">Observation Log</h4>
          
          <div className="space-y-3 text-sm">
            <div className="p-3 bg-mint/10 rounded-lg">
              <p className="text-charcoal">
                <strong>0:00</strong> - Initial conditions set: {temperature}°C, {concentration}M concentration
              </p>
            </div>
            
            {isRunning && (
              <>
                <div className="p-3 bg-gold/10 rounded-lg">
                  <p className="text-charcoal">
                    <strong>0:15</strong> - Reaction initiated, color change observed
                  </p>
                </div>
                <div className="p-3 bg-coral/10 rounded-lg">
                  <p className="text-charcoal">
                    <strong>0:30</strong> - Temperature rising due to exothermic reaction
                  </p>
                </div>
              </>
            )}
          </div>
          
          <div className="mt-4 p-3 bg-charcoal/5 rounded-lg">
            <p className="text-sm text-charcoal">
              <strong>Hypothesis:</strong> Increasing temperature should accelerate the reaction rate 
              according to the Arrhenius equation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};