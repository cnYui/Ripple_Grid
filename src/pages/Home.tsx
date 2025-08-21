import React, { useState } from 'react';
import RippleGrid from '../components/RippleGrid';
import { Settings } from 'lucide-react';

const Home: React.FC = () => {
  const [showDemo, setShowDemo] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0">
        <RippleGrid
          enableRainbow={false}
          gridColor="#6366f1"
          rippleIntensity={0.05}
          gridSize={10}
          gridThickness={15}
          fadeDistance={1.5}
          vignetteStrength={2}
          glowIntensity={0.1}
          opacity={1}
          gridRotation={0}
          mouseInteraction={true}
          mouseInteractionRadius={0.8}
        />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between p-6">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <div className="w-4 h-4 bg-gray-900 rounded-full"></div>
          </div>
          <span className="text-white text-lg font-semibold">React Bits</span>
        </div>
        <div className="flex items-center space-x-8">
          <a href="#" className="text-white hover:text-gray-300 transition-colors">
            Home
          </a>
          <a href="#" className="text-white hover:text-gray-300 transition-colors">
            Docs
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-120px)] text-center px-6">
        {/* New Background Badge */}
        <div className="mb-8">
          <div className="inline-flex items-center px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-full text-sm text-gray-300">
            <Settings className="w-4 h-4 mr-2" />
            New Background
          </div>
        </div>

        {/* Main Title */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-12 leading-tight">
          Retro yet futuristic, this is{' '}
          <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Ripple Grid!
          </span>
        </h1>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="px-8 py-3 bg-white text-gray-900 rounded-full font-semibold hover:bg-gray-100 transition-colors">
            Get Started
          </button>
          <button className="px-8 py-3 bg-transparent border border-gray-600 text-white rounded-full font-semibold hover:bg-gray-800 transition-colors">
            Learn More
          </button>
        </div>
      </div>

      {/* Demo Content Toggle */}
      <div className="absolute bottom-6 right-6 z-10">
        <div className="flex items-center space-x-3">
          <span className="text-gray-400 text-sm">Demo Content</span>
          <button
            onClick={() => setShowDemo(!showDemo)}
            className={`w-12 h-6 rounded-full transition-colors ${
              showDemo ? 'bg-blue-500' : 'bg-gray-600'
            } relative`}
          >
            <div
              className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform ${
                showDemo ? 'translate-x-6' : 'translate-x-0.5'
              }`}
            ></div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;