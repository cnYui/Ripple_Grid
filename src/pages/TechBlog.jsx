import React from 'react';
import TextPressure from '../components/TextPressure';
import ProfileCard from '../components/ProfileCard';
import ScrollReveal from '../components/ScrollReveal';

const TechBlog = () => {
  return (
    <div style={{
      backgroundColor: '#000000',
      minHeight: '100vh',
      width: '100%',
      position: 'relative',
      color: '#ffffff'
    }}>
      {/* TECH 文字标题 */}
      <div style={{
        position: 'fixed',
        top: '2rem',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '200px',
        height: '80px',
        zIndex: 999
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
        position: 'fixed',
        left: 0,
        top: 0,
        width: '40%',
        minWidth: '450px',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        paddingTop: '8rem',
        zIndex: 10
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

      {/* ScrollReveal组件区域 */}
      <div style={{
        marginLeft: '40%',
        width: '60%',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: '2rem 4rem 2rem 2rem',
        paddingTop: '16rem',
        paddingBottom: '4rem',
        overflowY: 'auto'
      }}>
        <div style={{
          maxWidth: '800px',
          width: '100%',
          textAlign: 'left'
        }}>
          {/* 个人介绍 */}
          <div style={{ marginBottom: '1.5rem' }}>
            <ScrollReveal
              enableBlur={true}
              baseOpacity={0.1}
              baseRotation={3}
              blurStrength={4}
              textClassName="text-white/90"
            >
              <div style={{ fontSize: '6rem', lineHeight: '1.2', color: '#e8e8e8' }}>
                我是一名充满激情的技术开发者，专注于前端开发与人工智能应用的深度融合。在这个数字化的世界里，我致力于通过代码创造美好的用户体验，分享技术探索的心得与生活中的感悟。
              </div>
            </ScrollReveal>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <ScrollReveal
              enableBlur={true}
              baseOpacity={0.1}
              baseRotation={3}
              blurStrength={4}
              textClassName="text-white/90"
            >
              <div style={{ fontSize: '6rem', lineHeight: '1.2', color: '#e8e8e8' }}>
                对新兴技术保持着永不熄灭的好奇心，我喜欢动手实践，从绚丽的3D可视化到智能的AI应用，不断挑战自己的技术边界。每一次技术突破都是对未知领域的勇敢探索，每一行代码都承载着对完美的不懈追求。
              </div>
            </ScrollReveal>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <ScrollReveal
              enableBlur={true}
              baseOpacity={0.1}
              baseRotation={3}
              blurStrength={4}
              textClassName="text-white/90"
            >
              <div style={{ fontSize: '6rem', lineHeight: '1.2', color: '#d0d0d0' }}>
                <div style={{ marginBottom: '1.5rem' }}>
                  <strong style={{ color: '#4ecdc4' }}>前端开发：</strong>React、Vue.js、TypeScript、Vite —— 构建现代化的用户界面
                </div>
                <div style={{ marginBottom: '1.5rem' }}>
                  <strong style={{ color: '#45b7d1' }}>后端技术：</strong>Node.js、Python、Go —— 打造高性能的服务端架构
                </div>
                <div style={{ marginBottom: '1.5rem' }}>
                  <strong style={{ color: '#96ceb4' }}>AI/ML领域：</strong>TensorFlow、PyTorch、OpenAI API —— 探索人工智能的无限可能
                </div>
                <div style={{ marginBottom: '1.5rem' }}>
                  <strong style={{ color: '#ffd93d' }}>开发工具：</strong>Git、Docker、Vite、Webpack —— 提升开发效率的利器
                </div>
                <div style={{ marginBottom: '1.5rem' }}>
                  <strong style={{ color: '#ff6b6b' }}>开发环境：</strong>Windsurf、Cursor、Trae、CodeBuddy —— 现代化的编程体验
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div style={{ marginBottom: '0.5rem' }}>
            <ScrollReveal
              enableBlur={true}
              baseOpacity={0.1}
              baseRotation={3}
              blurStrength={4}
              textClassName="text-white/90"
            >
              <div style={{ fontSize: '6rem', lineHeight: '1.2', color: '#e8e8e8' }}>
                目前正在深入探索Web3、区块链技术和智能合约等前沿领域，相信这些技术将重新定义数字世界的未来。在技术的海洋中，我始终保持学习的热情，与时代同步前行。
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechBlog;