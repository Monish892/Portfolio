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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10" />

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
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

          <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto mb-12">
            Crafting elegant solutions to complex problems. Passionate about building
            innovative applications that make a difference.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
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

          <div className="flex gap-6 justify-center">
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
              href="jayachitraramesh@gmail.com"
              className="text-slate-400 hover:text-cyan-400 transition-colors transform hover:scale-110 duration-300"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-cyan-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
