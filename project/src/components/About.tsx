import { Code2, Rocket, Users, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Writing maintainable and scalable code with best practices',
    },
    {
      icon: Rocket,
      title: 'Fast Delivery',
      description: 'Efficient development without compromising on quality',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Strong team player with excellent communication skills',
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Always exploring new technologies and methodologies',
    },
  ];

  return (
    <section id="about" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            About <span className="text-cyan-400">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-slate-300 leading-relaxed">
              I'm a passionate developer with a strong focus on creating impactful digital experiences.
              With expertise in modern web technologies and a keen eye for design, I transform ideas
              into functional, beautiful applications.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              My journey in tech has equipped me with a diverse skill set, from front-end development
              to back-end architecture. I thrive on challenges and continuously seek to expand my
              knowledge in emerging technologies like AI and machine learning.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              When I'm not coding, you'll find me contributing to open-source projects, exploring
              new frameworks, or sharing knowledge with the developer community.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700 hover:border-cyan-400/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/10"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-100 mb-2">{item.title}</h3>
                  <p className="text-slate-400 text-sm">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
