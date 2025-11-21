import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const roles = ['Full Stack Developer', 'AI Engineer', 'Problem Solver', 'Tech Enthusiast'];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      if (currentIndex <= currentRole.length) {
        setDisplayedText(currentRole.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [currentRoleIndex]);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-slate-900">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10" />

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="animate-fade-in text-center lg:text-left order-2 lg:order-1">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Monish
              </span>
            </h1>

            <div className="h-16 mb-8">
              <p className="text-2xl sm:text-3xl lg:text-4xl text-slate-300">
                <span className="text-cyan-400">{displayedText}</span>
                <span className="animate-blink">|</span>
              </p>
            </div>

            <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto lg:mx-0 mb-12">
              Crafting elegant solutions to complex problems. Passionate about building
              innovative applications that make a difference.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12">
              <button
                onClick={scrollToContact}
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-medium hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:-translate-y-1"
              >
                Get In Touch
              </button>
              <a
                href="/resume.pdf"
                download
                className="px-8 py-3 border border-cyan-400 text-cyan-400 rounded-lg font-medium hover:bg-cyan-400/10 transition-all duration-300"
              >
                Download Resume
              </a>
            </div>

            <div className="flex gap-6 justify-center lg:justify-start">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-cyan-400 transition-colors transform hover:scale-110 duration-300"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/gr-monish-291006359/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-cyan-400 transition-colors transform hover:scale-110 duration-300"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:jayachitraramesh@gmail.com"
                className="text-slate-400 hover:text-cyan-400 transition-colors transform hover:scale-110 duration-300"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Right Side - Professional Photo */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Glowing Border Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              
              {/* Image Container */}
              <div className="relative">
                <div className="relative w-80 h-96 sm:w-96 sm:h-[28rem] rounded-2xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 shadow-2xl">
                  <img
                    src="https://i.ibb.co/ZHWzJGq/image.jpg"
                    alt="Monish - Full Stack Developer"
                    className="w-full h-full object-cover object-center mix-blend-lighten"
                    style={{
                      filter: 'contrast(1.1) brightness(1.1)',
                      maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)'
                    }}
                  />
                  {/* Overlay gradient for better blending */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-cyan-500/20 rounded-full blur-2xl"></div>
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden lg:block">
          <ChevronDown className="w-6 h-6 text-cyan-400" />
        </div>
      </div>

      <style jsx>{`
        @keyframes blink {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1s infinite;
        }
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Hero;