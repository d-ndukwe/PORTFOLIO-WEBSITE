import React from 'react';
import { Link } from 'react-router-dom';
import { Info } from 'lucide-react';

const projectsData = [
  {
    id: "swiftpos",
    name: "SwiftPOS Management",
    description: "A comprehensive frontend interface for retail inventory and sales workflows.",
    techStack: ["React", "Tailwind", "TypeScript"],
    image: "/project1.png",
  },

    {
    id: "dataviz-dashboard",
    name: "DataViz",
    description: "An interactive dashboard for visualizing complex datasets with charts and graphs.",
    techStack: ["D3.js", "React", "CSS"],
    image: "/null.png",
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-slate-900 dark:text-white">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <div key={project.id} className="dark:bg-slate-800 border-slate-700 rounded-xl overflow-hidden flex flex-col">
              <img src={project.image} alt={project.name} className="w-full h-48 object-cover" />
              <div className="p-6 grow">
                <h3 className="text-xl font-bold mb-2 dark:text-white">{project.name}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">{project.description}</p>
            
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map(tech => (
                    <span key={tech} className="text-xs dark: text-slate-100 bg-slate-900 px-2 py-1 rounded">{tech}</span>
                  ))}
                </div>

                
                <Link 
                  to={`/project/${project.id}`} 
                  className="inline-flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-indigo-700 transition w-full justify-center"
                >
                  <Info size={16} /> View Project Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;