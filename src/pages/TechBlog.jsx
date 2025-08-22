import React from 'react';
import TextPressure from '../components/TextPressure';
import ProfileCard from '../components/ProfileCard';

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
        justifyContent: 'center',
        padding: '2rem'
      }}>
        {/* ProfileCard 包装容器 */}
        <div style={{
          width: '450px',
          height: '550px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <ProfileCard
            name="Full-Stack & Visionary Dreamer"
            handle="techdev"
            status="Coding"
            contactText="Contact Me"
            avatarUrl="/主题.png"
            iconUrl="https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=tech%20icon%20pattern%20geometric%20circuit%20board%20design%20minimalist%20blue%20glow&image_size=square"
            showUserInfo={true}
            showBehindGradient={true}
            enableTilt={true}
            enableMobileTilt={true}
            onContactClick={() => console.log('Contact clicked')}
          />
        </div>
      </div>
    </div>
  );
};

export default TechBlog;