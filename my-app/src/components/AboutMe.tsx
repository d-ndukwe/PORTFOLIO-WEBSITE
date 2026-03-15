
import { Code2, Terminal, Cpu, GraduationCap } from "lucide-react";

const AboutMe = () => {
  const skills = [
    { icon: <Code2 className="text-indigo-600" />, title: "Frontend", desc: "React, TypeScript, Tailwind" },
    { icon: <Terminal className="text-indigo-600" />, title: "Backend", desc: "Node.js, Express, PostgreSQL" },
    { icon: <Cpu className="text-indigo-600" />, title: "Tools", desc: "Git, Docker, Figma" },
    { icon: <GraduationCap className="text-indigo-600" />, title: "Education", desc: "BSc Computer Science" },
  ];

  return (
    <section id="about" className="py-20 px-6 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
              About Me
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              I am a passionate developer focused on building high-performance web applications. 
              My journey in Computer Science has led me to specialize in frontend engineering, 
              where I bridge the gap between complex backend logic and intuitive user interfaces.
            </p>
            <p className="text-slate-600 dark:text-slate-400">
              When I'm not coding, I'm exploring data trends or refining my UI/UX design skills. 
              I believe in writing semantic, accessible code that provides a seamless experience 
              for every user.
            </p>
          </div>

          {/* Skills/Focus Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <div 
                key={index} 
                className="p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-md transition-shadow"
              >
                <div className="mb-4">{skill.icon}</div>
                <h3 className="font-bold text-slate-900 dark:text-white mb-1">{skill.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">{skill.desc}</p>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default AboutMe;