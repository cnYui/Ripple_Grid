import React from 'react';
import TextPressure from '../components/TextPressure';
import ChromaGrid from '../components/ChromaGrid';

const MusicRecommend = () => {
  return (
    <div style={{
      backgroundColor: '#000000',
      minHeight: '200vh',
      width: '100%',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      color: '#ffffff'
    }}>
      {/* MUSIC 文字标题 */}
      <div style={{
        position: 'fixed',
        top: '3rem',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '250px',
        height: '80px',
        zIndex: 1000,
        padding: '1rem 2rem',
        borderRadius: '10px'
      }}>
        <TextPressure
          text="MUSIC"
          textColor="#FFFFFF"
          minFontSize={48}
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
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '8rem',
        paddingBottom: '5rem',
        width: '100%'
      }}>
        {/* ChromaGrid 音乐组件 */}
        <div style={{
          height: '2400px',
          width: '100%',
          position: 'relative'
        }}>
          <ChromaGrid 
            items={[
              {
                image: "/images/music_pic/截屏2025-08-23 14.26.27.png",
                title: "The Dreamer",
                subtitle: "方大同",
                handle: "@khalil",
                location: "方大同",

                borderColor: "#3B82F6",
                gradient: "linear-gradient(145deg, #3B82F6, #000)"
              },
              {
                image: "/images/music_pic/截屏2025-08-23 14.32.33.png",
                title: "400 metres",
                subtitle: "Chinese Football",
                handle: "@chinesefootball",
                location: "Chinese Football",
                borderColor: "#8B5CF6",
                gradient: "linear-gradient(210deg, #8B5CF6, #000)"
              },
              {
                image: "/images/music_pic/截屏2025-08-23 14.33.50.png",
                title: "电动少女",
                subtitle: "Chinese Football",
                handle: "@chinesefootball",
                location: "Chinese Football",
                borderColor: "#10B981",
                gradient: "linear-gradient(165deg, #10B981, #000)"
              },
              {
                image: "/images/music_pic/截屏2025-08-23 14.34.24.png",
                title: "嗵嗵",
                subtitle: "DUODUO",
                handle: "@duoduo",
                location: "DUODUO",
                borderColor: "#F59E0B",
                gradient: "linear-gradient(195deg, #F59E0B, #000)"
              },
              {
                image: "/images/music_pic/截屏2025-08-23 14.34.50.png",
                title: "Finger",
                subtitle: "大象体操",
                handle: "@elephantgym",
                location: "大象体操",
                borderColor: "#EF4444",
                gradient: "linear-gradient(225deg, #EF4444, #000)"
              },
              {
                image: "/images/music_pic/截屏2025-08-23 14.35.19.png",
                title: "地球上最后一个emo男孩",
                subtitle: "失去爱情的摩托车手",
                handle: "@emobiker",
                location: "失去爱情的摩托车手",
                borderColor: "#06B6D4",
                gradient: "linear-gradient(135deg, #06B6D4, #000)"
              },
              {
                image: "/images/music_pic/截屏2025-08-23 14.37.41.png",
                title: "cream soda",
                subtitle: "Supercar",
                handle: "@supercar",
                location: "Supercar",
                borderColor: "#06B6D4",
                gradient: "linear-gradient(180deg, #06B6D4, #000)"
              },
              {
                image: "/images/music_pic/截屏2025-08-23 14.38.46.png",
                title: "My Instincts Are the Enemy",
                subtitle: "American Football",
                handle: "@americanfootball",
                location: "American Football",
                borderColor: "#4F46E5",
                gradient: "linear-gradient(150deg, #4F46E5, #000)"
              },
              {
                image: "/images/music_pic/截屏2025-08-23 14.39.09.png",
                title: "Episode 33",
                subtitle: "She Her Her Hers",
                handle: "@sheherherhers",
                location: "She Her Her Hers",
                borderColor: "#EC4899",
                gradient: "linear-gradient(170deg, #EC4899, #000)"
              },
              {
                image: "/images/music_pic/截屏2025-08-23 14.39.42.png",
                title: "манго нектар",
                subtitle: "Corn Wave",
                handle: "@cornwave",
                location: "Corn Wave",
                borderColor: "#F97316",
                gradient: "linear-gradient(190deg, #F97316, #000)"
              },
              {
                image: "/images/music_pic/截屏2025-08-23 14.40.14.png",
                title: "Cloud Dwellers",
                subtitle: "you you you all the same",
                handle: "@clouddwellers",
                location: "you you you all the same",
                borderColor: "#14B8A6",
                gradient: "linear-gradient(200deg, #14B8A6, #000)"
              },
              {
                image: "/images/music_pic/截屏2025-08-23 14.40.37.png",
                title: "an association game+1",
                subtitle: "how to count one to ten",
                handle: "@howtocount",
                location: "how to count one to ten",
                borderColor: "#84CC16",
                gradient: "linear-gradient(220deg, #84CC16, #000)"
              },
              {
                image: "/images/music_pic/截屏2025-08-23 14.41.05.png",
                title: "past and language",
                subtitle: "toe",
                handle: "@toeband",
                location: "toe",
                borderColor: "#8B5CF6",
                gradient: "linear-gradient(240deg, #8B5CF6, #000)"
              },
              {
                image: "/images/music_pic/截屏2025-08-23 14.41.39.png",
                title: "two moon",
                subtitle: "toe",
                handle: "@toeband",
                location: "toe",
                borderColor: "#0EA5E9",
                gradient: "linear-gradient(260deg, #0EA5E9, #000)"
              },
              {
                image: "/images/music_pic/截屏2025-08-23 14.42.02.png",
                title: "you go",
                subtitle: "toe",
                handle: "@toeband",
                location: "toe",
                borderColor: "#F43F5E",
                gradient: "linear-gradient(280deg, #F43F5E, #000)"
              },
              {
                image: "/images/music_pic/截屏2025-08-23 14.42.38.png",
                title: "Midnight City",
                subtitle: "M83",
                handle: "@m83official",
                location: "M83",
                borderColor: "#F59E0B",
                gradient: "linear-gradient(300deg, #F59E0B, #000)"
              },
              {
                image: "/images/music_pic/截屏2025-08-23 14.43.11.png",
                title: "Holocene",
                subtitle: "Bon Iver",
                handle: "@boniver",
                location: "Bon Iver",
                borderColor: "#64748B",
                gradient: "linear-gradient(320deg, #64748B, #000)"
              },
              {
                image: "/images/music_pic/截屏2025-08-23 14.43.41.png",
                title: "Flightless Bird",
                subtitle: "Iron & Wine",
                handle: "@ironandwine",
                location: "Iron & Wine",
                borderColor: "#78716C",
                gradient: "linear-gradient(340deg, #78716C, #000)"
              },
              {
                image: "/images/music_pic/截屏2025-08-23 14.44.28.png",
                title: "Svefn-g-englar",
                subtitle: "Sigur Rós",
                handle: "@sigurros",
                location: "Sigur Rós",
                borderColor: "#71717A",
                gradient: "linear-gradient(360deg, #71717A, #000)"
              },
              {
                image: "/images/music_pic/截屏2025-08-23 14.45.29.png",
                title: "Weightless",
                subtitle: "Marconi Union",
                handle: "@marconiunion",
                location: "Marconi Union",
                borderColor: "#737373",
                gradient: "linear-gradient(30deg, #737373, #000)"
              },
              {
                image: "/images/music_pic/截屏2025-08-23 14.46.02.png",
                title: "Aqueous Transmission",
                subtitle: "Incubus",
                handle: "@incubus",
                location: "Incubus",
                borderColor: "#6B7280",
                gradient: "linear-gradient(60deg, #6B7280, #000)"
              },
              {
                image: "/images/music_pic/截屏2025-08-23 14.46.32.png",
                title: "Porcelain",
                subtitle: "Moby",
                handle: "@moby",
                location: "Moby",
                borderColor: "#60A5FA",
                gradient: "linear-gradient(90deg, #60A5FA, #000)"
              },
              {
                image: "/images/music_pic/截屏2025-08-23 14.47.15.png",
                title: "Teardrop",
                subtitle: "Massive Attack",
                handle: "@massiveattack",
                location: "Massive Attack",
                borderColor: "#C084FC",
                gradient: "linear-gradient(120deg, #C084FC, #000)"
              },
              {
                image: "/images/music_pic/截屏2025-08-23 14.47.41.png",
                title: "Mad World",
                subtitle: "Gary Jules",
                handle: "@garyjules",
                location: "Gary Jules",
                borderColor: "#4ADE80",
                gradient: "linear-gradient(150deg, #4ADE80, #000)"
              }
            ]}
            columns={3}
            rows={8}
            radius={150}
            damping={0.45}
            fadeOut={0.6}
            ease="power3.out"
          />
        </div>
      </div>
    </div>
  );
};

export default MusicRecommend;