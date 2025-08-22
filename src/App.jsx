import RippleGrid from './components/RippleGrid';
import './App.css';

function App() {
  return (
    <div className="app">
      {/* 背景网格效果 */}
      <RippleGrid
        enableRainbow={false}
        gridColor="#4169e1"
        rippleIntensity={0.05}
        gridSize={10}
        gridThickness={15}
        mouseInteraction={true}
        mouseInteractionRadius={1.2}
        opacity={0.6}
      />
      
      {/* 导航栏 */}
      <nav className="navbar">
        <div className="nav-brand">
          <span className="nav-icon">⚛️</span>
          <span className="nav-title">React Bits</span>
        </div>
        <div className="nav-links">
          <a href="#" className="nav-link">Home</a>
          <a href="#" className="nav-link">Docs</a>
        </div>
      </nav>
      
      {/* 主要内容 */}
      <main className="main-content">
        <div className="hero-section">
          <div className="hero-badge">
            <span>🆕 New Background</span>
          </div>
          <h1 className="hero-title">
            Retro yet futuristic, this is<br />
            Ripple Grid!
          </h1>
          <div className="hero-buttons">
            <button className="primary-button">Get Started</button>
            <button className="secondary-button">Learn More</button>
          </div>
        </div>
      </main>
      
      {/* 底部标识 */}
      <div className="demo-badge">
        <span>Demo Content</span>
        <div className="demo-indicator"></div>
      </div>
    </div>
  );
}

export default App;