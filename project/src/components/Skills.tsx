import React, { useState, useRef, useEffect } from 'react';

const Skills = () => {
  const skills = [
    { name: 'React', level: 90, icon: '⚛️' },
    { name: 'TypeScript', level: 85, icon: 'TS' },
    { name: 'Tailwind', level: 90, icon: '🎨' },
    { name: 'Next.js', level: 80, icon: '▲' },
    { name: 'Vue.js', level: 75, icon: 'V' },
    { name: 'Node.js', level: 85, icon: '⬢' },
    { name: 'Python', level: 80, icon: '🐍' },
    { name: 'PostgreSQL', level: 85, icon: '🐘' },
    { name: 'MongoDB', level: 75, icon: '🍃' },
    { name: 'REST API', level: 90, icon: '🔌' },
    { name: 'Git', level: 90, icon: '📦' },
    { name: 'Docker', level: 75, icon: '🐋' },
    { name: 'AWS', level: 70, icon: '☁️' },
    { name: 'CI/CD', level: 80, icon: '🔄' },
    { name: 'Figma', level: 75, icon: '✏️' },
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-20 px-4 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-white">Skills & </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Expertise
            </span>
          </h2>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
        </div>

        {/* Infinite scrolling skills */}
        <div className="relative">
          <div className="flex gap-6 overflow-hidden py-8">
            <div className="flex gap-6 animate-scroll">
              {[...skills, ...skills].map((skill, index) => (
                <Skill3DCard key={`first-${index}`} skill={skill} />
              ))}
            </div>
            <div className="flex gap-6 animate-scroll" aria-hidden="true">
              {[...skills, ...skills].map((skill, index) => (
                <Skill3DCard key={`second-${index}`} skill={skill} />
              ))}
            </div>
          </div>

          {/* Reverse direction row */}
          <div className="flex gap-6 overflow-hidden py-8">
            <div className="flex gap-6 animate-scroll-reverse">
              {[...skills, ...skills].map((skill, index) => (
                <Skill3DCard key={`third-${index}`} skill={skill} />
              ))}
            </div>
            <div className="flex gap-6 animate-scroll-reverse" aria-hidden="true">
              {[...skills, ...skills].map((skill, index) => (
                <Skill3DCard key={`fourth-${index}`} skill={skill} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        @keyframes scroll-reverse {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll {
          animation: scroll 40s linear infinite;
        }

        .animate-scroll-reverse {
          animation: scroll-reverse 40s linear infinite;
        }
      `}</style>
    </section>
  );
};

const Skill3DCard = ({ skill }) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glowX, setGlowX] = useState(50);
  const [glowY, setGlowY] = useState(50);
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateXValue = ((y - centerY) / centerY) * -20;
    const rotateYValue = ((x - centerX) / centerX) * 20;
    
    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
    setGlowX((x / rect.width) * 100);
    setGlowY((y / rect.height) * 100);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setGlowX(50);
    setGlowY(50);
    setIsHovered(false);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative group flex-shrink-0 w-48"
      style={{ perspective: '1500px' }}
    >
      {/* Animated particles around card */}
      <div className="absolute -inset-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute top-0 left-0 w-2 h-2 bg-cyan-400 rounded-full animate-particle-1" />
        <div className="absolute top-0 right-0 w-2 h-2 bg-blue-400 rounded-full animate-particle-2" />
        <div className="absolute bottom-0 left-0 w-2 h-2 bg-purple-400 rounded-full animate-particle-3" />
        <div className="absolute bottom-0 right-0 w-2 h-2 bg-pink-400 rounded-full animate-particle-4" />
      </div>

      {/* Enhanced neon glow with pulsing */}
      <div
        className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-xl opacity-0 group-hover:opacity-70 blur-xl transition-all duration-500 animate-pulse-glow"
        style={{
          background: `radial-gradient(circle at ${glowX}% ${glowY}%, rgba(34, 211, 238, 0.6), rgba(59, 130, 246, 0.4), rgba(168, 85, 247, 0.2), transparent 70%)`,
        }}
      />

      {/* Card */}
      <div
        className="relative bg-gradient-to-br from-slate-800/80 via-slate-800/60 to-slate-900/80 backdrop-blur-xl rounded-xl border border-slate-700/50 p-6 transition-all duration-300 ease-out overflow-hidden"
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(${isHovered ? 40 : 20}px) scale(${isHovered ? 1.05 : 1})`,
          transformStyle: 'preserve-3d',
          boxShadow: `
            0 ${isHovered ? 30 : 20}px ${isHovered ? 60 : 50}px -12px rgba(0, 0, 0, 0.7),
            0 0 0 1px rgba(34, 211, 238, ${Math.abs(rotateX) + Math.abs(rotateY) > 5 ? 0.5 : 0}),
            inset 0 1px 0 0 rgba(255, 255, 255, 0.15),
            inset 0 0 30px rgba(34, 211, 238, ${isHovered ? 0.1 : 0})
          `,
        }}
      >
        {/* Animated grid background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-blue-500/10" 
               style={{ 
                 backgroundImage: 'linear-gradient(rgba(34, 211, 238, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(34, 211, 238, 0.1) 1px, transparent 1px)',
                 backgroundSize: '20px 20px',
                 animation: isHovered ? 'grid-move 20s linear infinite' : 'none'
               }} 
          />
        </div>

        {/* Moving gradient overlay */}
        <div
          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${glowX}% ${glowY}%, rgba(34, 211, 238, 0.2), rgba(59, 130, 246, 0.1), transparent 50%)`,
          }}
        />

        {/* Floating orbs */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-cyan-400/20 rounded-full blur-xl animate-float-1" />
          <div className="absolute bottom-1/4 right-1/4 w-12 h-12 bg-blue-400/20 rounded-full blur-xl animate-float-2" />
        </div>

        {/* Content */}
        <div className="relative flex flex-col items-center text-center" style={{ transform: 'translateZ(50px)' }}>
          {/* Icon with enhanced 3D effect */}
          <div 
            className="w-16 h-16 mb-3 flex items-center justify-center text-3xl bg-gradient-to-br from-slate-700/80 to-slate-800/80 rounded-lg border border-slate-600/50 group-hover:border-cyan-400/70 transition-all duration-300 relative overflow-hidden"
            style={{ 
              transform: `translateZ(${isHovered ? 60 : 40}px) rotateX(${rotateX * 0.5}deg) rotateY(${rotateY * 0.5}deg)`,
              boxShadow: isHovered ? '0 10px 30px rgba(34, 211, 238, 0.3), inset 0 0 20px rgba(34, 211, 238, 0.1)' : 'none'
            }}
          >
            {/* Icon glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/0 via-cyan-400/20 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10 group-hover:scale-110 transition-transform duration-300 filter drop-shadow-lg">{skill.icon}</span>
          </div>

          {/* Name with 3D text effect */}
          <h3 
            className="text-sm font-bold text-slate-200 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-500 transition-all duration-300"
            style={{ 
              transform: `translateZ(${isHovered ? 50 : 35}px)`,
              textShadow: isHovered ? '0 0 20px rgba(34, 211, 238, 0.5), 0 5px 10px rgba(0, 0, 0, 0.5)' : 'none'
            }}
          >
            {skill.name}
          </h3>

          {/* Progress with enhanced 3D */}
          <div className="w-full" style={{ transform: `translateZ(${isHovered ? 45 : 30}px)` }}>
            <div className="flex justify-between items-center mb-1.5">
              <span className="text-xs font-semibold text-slate-400 group-hover:text-cyan-400 transition-colors duration-300">
                {skill.level}%
              </span>
            </div>
            <div className="h-2 bg-slate-700/50 rounded-full overflow-hidden backdrop-blur-sm border border-slate-600/30">
              <div
                className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full transition-all duration-500 relative overflow-hidden"
                style={{
                  width: `${skill.level}%`,
                  boxShadow: '0 0 15px rgba(34, 211, 238, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
                }}
              >
                {/* Animated progress shimmer */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced shine effect with multiple layers */}
        <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none overflow-hidden">
          <div
            className="absolute inset-0 animate-shine-1"
            style={{
              background: 'linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.15) 50%, transparent 70%)',
            }}
          />
          <div
            className="absolute inset-0 animate-shine-2"
            style={{
              background: 'linear-gradient(-45deg, transparent 30%, rgba(34, 211, 238, 0.15) 50%, transparent 70%)',
            }}
          />
        </div>

        {/* Edge highlights for 3D depth */}
        <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent" />
          <div className="absolute top-0 bottom-0 left-0 w-px bg-gradient-to-b from-transparent via-cyan-400/50 to-transparent" />
          <div className="absolute top-0 bottom-0 right-0 w-px bg-gradient-to-b from-transparent via-blue-400/50 to-transparent" />
        </div>
      </div>

      <style jsx>{`
        @keyframes shine-1 {
          0% {
            transform: translateX(-100%) translateY(-100%) rotate(45deg);
          }
          100% {
            transform: translateX(200%) translateY(200%) rotate(45deg);
          }
        }

        @keyframes shine-2 {
          0% {
            transform: translateX(100%) translateY(-100%) rotate(-45deg);
          }
          100% {
            transform: translateX(-200%) translateY(200%) rotate(-45deg);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(200%);
          }
        }

        @keyframes float-1 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(30px, -30px) scale(1.2);
          }
        }

        @keyframes float-2 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(-20px, 20px) scale(1.3);
          }
        }

        @keyframes particle-1 {
          0%, 100% {
            transform: translate(0, 0);
            opacity: 0;
          }
          50% {
            transform: translate(-20px, -20px);
            opacity: 1;
          }
        }

        @keyframes particle-2 {
          0%, 100% {
            transform: translate(0, 0);
            opacity: 0;
          }
          50% {
            transform: translate(20px, -20px);
            opacity: 1;
          }
        }

        @keyframes particle-3 {
          0%, 100% {
            transform: translate(0, 0);
            opacity: 0;
          }
          50% {
            transform: translate(-20px, 20px);
            opacity: 1;
          }
        }

        @keyframes particle-4 {
          0%, 100% {
            transform: translate(0, 0);
            opacity: 0;
          }
          50% {
            transform: translate(20px, 20px);
            opacity: 1;
          }
        }

        @keyframes pulse-glow {
          0%, 100% {
            opacity: 0.5;
          }
          50% {
            opacity: 0.8;
          }
        }

        @keyframes grid-move {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 20px 20px;
          }
        }

        .animate-shine-1 {
          animation: shine-1 3s infinite;
        }

        .animate-shine-2 {
          animation: shine-2 4s infinite;
        }

        .animate-shimmer {
          animation: shimmer 2s infinite;
        }

        .animate-float-1 {
          animation: float-1 6s ease-in-out infinite;
        }

        .animate-float-2 {
          animation: float-2 8s ease-in-out infinite;
        }

        .animate-particle-1 {
          animation: particle-1 2s ease-in-out infinite;
        }

        .animate-particle-2 {
          animation: particle-2 2s ease-in-out infinite 0.2s;
        }

        .animate-particle-3 {
          animation: particle-3 2s ease-in-out infinite 0.4s;
        }

        .animate-particle-4 {
          animation: particle-4 2s ease-in-out infinite 0.6s;
        }

        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Skills;