import React from "react";
import { Github, Linkedin, Instagram } from "lucide-react";

interface HeroSectionProps {
  roles?: string[];
  profileImage?: string;
}

const Hero: React.FC<HeroSectionProps> = ({
  roles = ["Frontend Developer", "Python Developer", "Database Administrator"],
  profileImage = 'profilepic.jpeg',
}) => {
  const [currentRoleIndex, setCurrentRoleIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [roles]);

  return (
    <section
      id="home"
      /* Changed to min-h-screen and flex items-center for full-page centering */
      className="w-full min-h-screen flex items-center justify-center py-16 px-6 bg-white dark:bg-slate-900"
    >
      <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* LEFT SIDE: Content */}
        <div className="flex-1 space-y-6 text-center md:text-left order-2 md:order-1">
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white tracking-tight">
            Divine Ndukwe
          </h1>

          <h4 className="text-3xl md:text-5xl font-medium text-slate-700 dark:text-slate-200">
            I'm a{" "}
            <span className="text-indigo-600 font-semibold border-r-4 border-indigo-600 pr-2 animate-pulse">
              {roles[currentRoleIndex]}
            </span>
          </h4>

          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-lg leading-relaxed mx-auto md:mx-0">
            Hello! I'm Divine Ndukwe, a Computer Science student specializing in
            turning design concepts into clean, accessible, and dynamic web
            experiences.
          </p>

          {/* SOCIALS - Functional for CTA requirements */}
          <div className="flex items-center justify-center md:justify-start gap-4 pt-4">
            {[Instagram, Linkedin, Github].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="p-3 rounded-full border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-indigo-600 hover:text-white transition-all duration-300 hover:-translate-y-1"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE: Image */}
        <div className="flex-1 flex justify-center md:justify-end order-1 md:order-2">
          <div className="relative group">
            {/* Decorative background element for "Originality" */}
            <div className="absolute -inset-1 bg-linear-to-r from-indigo-600 to-purple-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800">
              <img
                src={profileImage}
                alt="Divine Ndukwe Profile"
                className="w-full h-full object-fill transition duration-500 group-hover:scale-110"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;