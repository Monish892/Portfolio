import { GraduationCap } from 'lucide-react';

const Experience = () => {
  const education = [
    {
      title: 'Bachelor of Computer Science',
      institution: 'University of Technology',
      period: '2016 - 2020',
      description: 'Graduated with honors. Specialized in Software Engineering and Artificial Intelligence.',
      achievements: [
        'GPA: 3.8/4.0',
        'Dean\'s List all semesters',
        'Led university hackathon team to victory',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-cyan-400">Education</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className="relative pl-8 before:absolute before:left-0 before:top-2 before:w-4 before:h-4 before:bg-cyan-400 before:rounded-full before:ring-4 before:ring-cyan-400/20"
              >
                <div className="bg-slate-800/30 backdrop-blur-sm p-6 rounded-xl border border-slate-700 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-slate-100">{edu.title}</h3>
                      <p className="text-cyan-400 font-medium">{edu.institution}</p>
                      <p className="text-slate-400 text-sm">{edu.period}</p>
                    </div>
                  </div>
                  <p className="text-slate-300 mb-4">{edu.description}</p>
                  <ul className="space-y-2">
                    {edu.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="text-slate-400 text-sm flex items-start gap-2">
                        <span className="text-cyan-400 mt-1">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;


