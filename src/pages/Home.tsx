import React, { useState } from 'react';
import RippleGrid from '../components/RippleGrid';
import { Settings } from 'lucide-react';

const Home: React.FC = () => {
  const [showDemo, setShowDemo] = useState(false);

  return (
    <div className="min-h-screen relative overflow-hidden" style={{backgroundColor: '#000000'}}>
      {/* Background Grid */}
      <div className="absolute inset-0">
        <RippleGrid
          enableRainbow={false}
          gridColor="#6366f1"
          rippleIntensity={0.02}
          gridSize={10}
          gridThickness={15}
          fadeDistance={1.5}
          vignetteStrength={2}
          glowIntensity={0.1}
          opacity={1}
          gridRotation={0}
          mouseInteraction={true}
          mouseInteractionRadius={0.5}
        />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between p-6" style={{pointerEvents: 'none'}}>
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <div className="w-4 h-4 bg-gray-900 rounded-full"></div>
          </div>
          <span className="text-white text-lg font-semibold">YUI.DEV</span>
        </div>
        <div className="flex items-center space-x-8">
          <a href="#" className="text-white hover:text-gray-300 transition-colors" style={{pointerEvents: 'auto'}}>首页</a>
          <a href="#" className="text-white hover:text-gray-300 transition-colors" style={{pointerEvents: 'auto'}}>技术博客</a>
          <a href="#" className="text-white hover:text-gray-300 transition-colors" style={{pointerEvents: 'auto'}}>番剧推荐</a>
          <a href="#" className="text-white hover:text-gray-300 transition-colors" style={{pointerEvents: 'auto'}}>音乐推荐</a>
          <a href="#" className="text-white hover:text-gray-300 transition-colors" style={{pointerEvents: 'auto'}}>旅行足迹</a>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-120px)] text-center px-6" style={{pointerEvents: 'none'}}>


        {/* Main Title */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-12 leading-tight" style={{color: '#FFFFFF'}}>
          欢迎来到悠一的世界
        </h1>

       
      </div>

      {/* Demo Content Toggle */}
      <div className="absolute bottom-6 right-6 z-10">

      </div>
    </div>
  );
};

export default Home;