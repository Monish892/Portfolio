import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'AI Resume Builder',
      description: 'A smart resume builder that uses AI to generate tailored resumes and suggestions based on user input. Built with React, Node.js, and OpenAI API.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800', // Professional workspace image
      tags: ['Typescript', 'OpenAI API'],
      github: 'https://github.com/Monish892/AI-Resume-Builder',
      demo: ' https://ai-resume-builder-gilt-five.vercel.app/',
    },
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard. Scalable architecture handling 10k+ daily users.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Typescript', 'RazorPay', ],
      github: 'https://github.com/Monish892/E-Commerce-Website',
      demo: 'https://e-commerce-website-khaki-three.vercel.app/'
    },
    {
      title: 'Social Media App',
      description: 'Real-time social networking application with instant messaging, video calls, and content sharing. Optimized for mobile and desktop.',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React Native', 'Firebase', 'WebRTC', 'Redux'],
      github: 'https://github.com/Monish892/Social-media-hub',
      demo: 'https://social-media-hub-th9q.vercel.app/',
    },
    {
      title: 'Task Management System',
      description: 'Collaborative project management tool with kanban boards, time tracking, and team analytics. Increase productivity by 40%.',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Vue.js', 'Express', 'PostgreSQL', 'Socket.io'],
      github: 'https://github.com/Monish892/Task-Management-System',
      demo: 'https://task-management-system-one-roan.vercel.app/',
    },
    {
      title: 'Weather Forecast App',
      description: 'Beautiful weather application with 7-day forecasts, interactive maps, and severe weather alerts. Data from multiple API sources.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'OpenWeather API',],
      github: 'https://github.com/Monish892/Weather-Forecast',
      demo: 'https://weather-forecast-taupe-mu.vercel.app/',
    },
    {
      title: 'Health Journal App',
      description: 'A personal health journal for tracking daily habits, symptoms, and wellness goals. Includes analytics and reminders for healthy routines.',
      image: 'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=800', // Health/medical journal image
      tags: ['Typescript'],
      github: 'https://github.com/Monish892/Health-Journal-App',
      demo: 'https://health-journal-app-lovat.vercel.app/',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-slate-800/30 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700 hover:border-cyan-400/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/10"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-100 mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-cyan-400/10 text-cyan-400 text-xs rounded-full border border-cyan-400/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;