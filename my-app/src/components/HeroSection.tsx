import React from "react";
import { Github, Linkedin, Instagram } from "lucide-react";
import Grainient from "./ui/Grainient";

interface HeroSectionProps {
  roles?: string[];
  profileImage?: string;
}

const Hero: React.FC<HeroSectionProps> = ({
  roles = ["Frontend Developer", "Python Developer", "Database Administrator"],
  // profileImage = 'profilepic.jpeg',
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
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-slate-900"
    >

      <div className="absolute inset-0 z-0">
              <Grainient 
                className="w-full h-full"
                // You can pass specific colors here to match your brand
                color1="#4f46e5" // Indigo
                color2="#1e293b" // Slate
                color3="#0f172a" 
              />
            </div>

      {/* 2. CONTENT LAYER */}
      <div className="container relative z-10 mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 max-w-6xl mx-auto">
          
          {/* LEFT SIDE: Content */}
          <div className="flex-1 space-y-6 text-center md:text-left order-2 md:order-1">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white tracking-tight">
              Divine Ndukwe
            </h1>

            <h4 className="text-3xl md:text-5xl font-medium text-slate-700 dark:text-slate-200 min-h-[1.2em]">
              I'm a{" "}
              <span className="text-teal-300 font-semibold border-r-4 border-indigo-600 pr-2 animate-pulse">
                {roles[currentRoleIndex]}
              </span>
            </h4>

            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed mx-auto md:mx-0">
              Hello! I'm Divine, a Final Year Computer Science student turning design concepts into 
              clean, accessible, and dynamic web experiences.
            </p>

            {/* SOCIALS */}
            <div className="flex items-center justify-center md:justify-start gap-6 pt-4">
              {[
                { Icon: Instagram, href: "#" },
                { Icon: Linkedin, href: "#" },
                { Icon: Github, href: "#" }
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="p-3 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-transparent hover:text-white hover:border-teal-300 transition-all duration-300 hover:-translate-y-1 shadow-sm"
                >
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;