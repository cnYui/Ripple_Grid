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
          height: '1600px',
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
                url: "https://music.163.com/",
                borderColor: "border-blue-500",
                gradient: "from-blue-400 to-purple-600"
              },
              {
                image: "/images/music_pic/截屏2025-08-23 14.32.33.png",
                title: "400 metres",
                subtitle: "Chinese Football",
                handle: "@chinesefootball",
                url: "https://music.163.com/",
                borderColor: "border-purple-500",
                gradient: "from-purple-400 to-pink-600"
              },
              {
                image: "/images/music_pic/截屏2025-08-23 14.33.50.png",
                title: "电动少女",
                subtitle: "Chinese Football",
                handle: "@chinesefootball",
                url: "https://music.163.com/",
                borderColor: "border-green-500",
                gradient: "from-green-400 to-blue-600"
              },
              {
                image: "/images/music_pic/截屏2025-08-23 14.34.24.png",
                title: "嗵嗵",
                subtitle: "DUODUO",
                handle: "@duoduo",
                url: "https://music.163.com/",
                borderColor: "border-yellow-500",
                gradient: "from-yellow-400 to-orange-600"
              },
              {
                image: "/images/music_pic/截屏2025-08-23 14.34.50.png",
                title: "Finger",
                subtitle: "大象体操",
                handle: "@elephantgym",
                url: "https://music.163.com/",
                borderColor: "border-red-500",
                gradient: "from-red-400 to-purple-600"
              },
              {
                image: "/images/music_pic/截屏2025-08-23 14.35.19.png",
                title: "地球上最后一个emo男孩",
                subtitle: "失去爱情的摩托车手",
                handle: "@emobiker",
                url: "https://music.163.com/",
                borderColor: "border-emerald-500",
                gradient: "from-emerald-400 to-teal-600"
              },
              {
                image: "/images/music_pic/截屏2025-08-23 14.37.41.png",
                title: "cream soda",
                subtitle: "Supercar",
                handle: "@supercar",
                url: "https://music.163.com/",
                borderColor: "border-cyan-500",
                gradient: "from-cyan-400 to-blue-600"
              },
              {
                image: "/images/music_pic/截屏2025-08-23 14.38.46.png",
                title: "My Instincts Are the Enemy",
                subtitle: "American Football",
                handle: "@americanfootball",
                url: "https://music.163.com/",
                borderColor: "border-indigo-500",
                gradient: "from-indigo-400 to-purple-600"
              },
              {
                image: "/images/music_pic/截屏2025-08-23 14.39.09.png",
                title: "Episode 33",
                subtitle: "She Her Her Hers",
                handle: "@sheherherhers",
                url: "https://music.163.com/",
                borderColor: "border-pink-500",
                gradient: "from-pink-400 to-rose-600"
              },
              {
                image: "/images/music_pic/截屏2025-08-23 14.39.42.png",
                title: "манго нектар",
                subtitle: "Corn Wave",
                handle: "@cornwave",
                url: "https://music.163.com/",
                borderColor: "border-orange-500",
                gradient: "from-orange-400 to-red-600"
              },
              {
                image: "/images/music_pic/截屏2025-08-23 14.40.14.png",
                title: "Cloud Dwellers",
                subtitle: "you you you all the same",
                handle: "@clouddwellers",
                url: "https://music.163.com/",
                borderColor: "border-teal-500",
                gradient: "from-teal-400 to-green-600"
              },
              {
                image: "/images/music_pic/截屏2025-08-23 14.40.37.png",
                title: "an association game+1",
                subtitle: "how to count one to ten",
                handle: "@howtocount",
                url: "https://music.163.com/",
                borderColor: "border-lime-500",
                gradient: "from-lime-400 to-green-600"
              },
              {
                image: "/images/music_pic/截屏2025-08-23 14.41.05.png",
                title: "past and language",
                subtitle: "toe",
                handle: "@toeband",
                url: "https://music.163.com/",
                borderColor: "border-violet-500",
                gradient: "from-violet-400 to-purple-600"
              },
              {
                image: "/images/music_pic/截屏2025-08-23 14.41.39.png",
                title: "two moon",
                subtitle: "toe",
                handle: "@toeband",
                url: "https://music.163.com/",
                borderColor: "border-sky-500",
                gradient: "from-sky-400 to-blue-600"
              },
              {
                image: "/images/music_pic/截屏2025-08-23 14.42.02.png",
                title: "you go",
                subtitle: "toe",
                handle: "@toeband",
                url: "https://music.163.com/",
                borderColor: "border-rose-500",
                gradient: "from-rose-400 to-pink-600"
              },
              {
                image: "/images/music_pic/截屏2025-08-23 14.42.38.png",
                title: "Midnight City",
                subtitle: "M83",
                handle: "@m83official",
                url: "https://music.163.com/",
                borderColor: "border-amber-500",
                gradient: "from-amber-400 to-orange-600"
              },
              {
                image: "/images/music_pic/截屏2025-08-23 14.43.11.png",
                title: "Holocene",
                subtitle: "Bon Iver",
                handle: "@boniver",
                url: "https://music.163.com/",
                borderColor: "border-slate-500",
                gradient: "from-slate-400 to-gray-600"
              },
              {
                image: "/images/music_pic/截屏2025-08-23 14.43.41.png",
                title: "Flightless Bird",
                subtitle: "Iron & Wine",
                handle: "@ironandwine",
                url: "https://music.163.com/",
                borderColor: "border-stone-500",
                gradient: "from-stone-400 to-neutral-600"
              },
              {
                image: "/images/music_pic/截屏2025-08-23 14.44.28.png",
                title: "Svefn-g-englar",
                subtitle: "Sigur Rós",
                handle: "@sigurros",
                url: "https://music.163.com/",
                borderColor: "border-zinc-500",
                gradient: "from-zinc-400 to-slate-600"
              },
              {
                image: "/images/music_pic/截屏2025-08-23 14.45.29.png",
                title: "Weightless",
                subtitle: "Marconi Union",
                handle: "@marconiunion",
                url: "https://music.163.com/",
                borderColor: "border-neutral-500",
                gradient: "from-neutral-400 to-gray-600"
              },
              {
                image: "/images/music_pic/截屏2025-08-23 14.46.02.png",
                title: "Aqueous Transmission",
                subtitle: "Incubus",
                handle: "@incubus",
                url: "https://music.163.com/",
                borderColor: "border-gray-500",
                gradient: "from-gray-400 to-zinc-600"
              },
              {
                image: "/images/music_pic/截屏2025-08-23 14.46.32.png",
                title: "Porcelain",
                subtitle: "Moby",
                handle: "@moby",
                url: "https://music.163.com/",
                borderColor: "border-blue-400",
                gradient: "from-blue-300 to-indigo-500"
              },
              {
                image: "/images/music_pic/截屏2025-08-23 14.47.15.png",
                title: "Teardrop",
                subtitle: "Massive Attack",
                handle: "@massiveattack",
                url: "https://music.163.com/",
                borderColor: "border-purple-400",
                gradient: "from-purple-300 to-violet-500"
              },
              {
                image: "/images/music_pic/截屏2025-08-23 14.47.41.png",
                title: "Mad World",
                subtitle: "Gary Jules",
                handle: "@garyjules",
                url: "https://music.163.com/",
                borderColor: "border-green-400",
                gradient: "from-green-300 to-emerald-500"
              }
            ]}
            columns={3}
            rows={8}
            radius={300}
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