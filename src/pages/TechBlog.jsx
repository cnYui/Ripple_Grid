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
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
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
      
      {/* 左侧 ProfileCard 区域 */}
      <div style={{
        width: '40%',
        minWidth: '450px',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem'
      }}>
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

      {/* 右侧文本内容区域 */}
      <div style={{
        width: '60%',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem 4rem 2rem 2rem'
      }}>
        <div style={{
          maxWidth: '600px',
          width: '100%',
          textAlign: 'left'
        }}>
          <p style={{
            fontSize: '22px',
            lineHeight: '1.8',
            color: '#ffffff',
            margin: 0,
            fontFamily: 'system-ui, -apple-system, sans-serif',
            letterSpacing: '0.5px',
            opacity: 0.9
          }}>
            技术博客内容将在此展示，这里将包含最新的技术文章、开发心得、项目经验分享以及前沿技术探索。我们致力于为开发者提供有价值的技术内容，帮助大家在技术成长路上不断进步。
          </p>
        </div>
      </div>
    </div>
  );
};

export default TechBlog;