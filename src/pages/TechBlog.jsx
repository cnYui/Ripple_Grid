import React from 'react';
import TextPressure from '../components/TextPressure';

const TechBlog = () => {
  return (
    <div style={{
      backgroundColor: '#000000',
      minHeight: '100vh',
      width: '100%',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#ffffff'
    }}>
      {/* TECH 文字标题 */}
      <div style={{
        position: 'absolute',
        top: '2rem',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '200px',
        height: '80px',
        zIndex: 20
      }}>
        <TextPressure
          text="TECH"
          textColor="#FFFFFF"
          minFontSize={36}
          width={true}
          weight={true}
          italic={true}
          alpha={false}
          flex={false}
          stroke={false}
          scale={false}
        />
      </div>
      
      {/* 页面内容区域 */}
      <div style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {/* 页面内容暂时留空，后续补充 */}
      </div>
    </div>
  );
};

export default TechBlog;