
import { ArrowLeft } from "lucide-react";
import { Link } from 'react-router-dom';

const DataVizDetails = () => {
  return (
    <div id="posProject" className="min-h-screen bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200">
      {/* HEADER SECTION */}
      <header className="pt-24 pb-12 px-6 bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-5xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-indigo-600 mb-6 hover:gap-3 transition-all font-medium">
            <ArrowLeft size={18} /> Back to Portfolio
          </Link>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
            DataViz
          </h1>
          <div className="flex flex-wrap gap-3">
            {["React", "Tailwind CSS", "D3.js", "React Router", "Responsive Design"].map((tech) => (
              <span key={tech} className="px-4 py-1.5 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-semibold border border-indigo-200 dark:border-indigo-800">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12 space-y-20">
        
        <section className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">DataViz</h2>
            <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400">
              DataViz is a comprehensive data visualization tool designed to make complex datasets accessible and understandable. 
              As the <strong>Frontend Developer</strong>, my goal was to create an intuitive interface that allows users to explore and interact with data in meaningful ways.
            </p>
            {/* <div className="p-6 bg-indigo-50 dark:bg-indigo-900/10 rounded-2xl border-l-4 border-indigo-600">
              <h3 className="font-bold text-indigo-900 dark:text-indigo-400 mb-2">The Problem Solved</h3>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Most POS systems are cluttered and difficult to navigate. Small business owners needed a system that visually 
                distinguished between roles while keeping the inventory tracking and checkout process fast and error-free. 
              </p>
            </div> */}
          </div>
          {/* <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-700">
            <img src="/project1.png" alt="SwiftPOS Login Page" className="w-full h-auto" />
            <p className="p-4 text-xs text-center bg-slate-100 dark:bg-slate-800 text-slate-500 italic">
              User authentication screen designed for clarity and focus. 
            </p>
          </div> */}
        </section>

        {/* <section className="space-y-8">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Workflow Logic</h2>
          <p className="text-slate-600 dark:text-slate-400">
            Based on the system requirements, I built the frontend to handle three distinct user flows. Each flow had unique needs:
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="p-6 border border-slate-200 dark:border-slate-700 rounded-xl">
              <Zap className="text-indigo-600 mb-3" size={28} />
              <h4 className="font-bold mb-2">Cashier Flow</h4>
              <p className="text-xs opacity-75 italic">Checkout, Process Returns, and Daily Transaction Logs.</p>
            </div>
            <div className="p-6 border border-slate-200 dark:border-slate-700 rounded-xl">
              <GitMerge className="text-indigo-600 mb-3" size={28} />
              <h4 className="font-bold mb-2">Manager Flow</h4>
              <p className="text-xs opacity-75 italic">Inventory Management, Purchase Orders, and Stock Receiving.</p>
            </div>
          </div>
        </section> */}

        {/* <section className="bg-slate-900 text-white p-8 md:p-12 rounded-3xl space-y-10">
          <h2 className="text-3xl font-bold">Frontend Features</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="mt-1"><Layout className="text-indigo-400" /></div>
              <div>
                <h4 className="font-bold text-lg">Role-Based Dashboard Routing</h4>
                <p className="text-slate-400 text-sm">Implemented conditional rendering and protected routes using React Router to ensure users only see the dashboards relevant to their roles.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="mt-1"><Smartphone className="text-indigo-400" /></div>
              <div>
                <h4 className="font-bold text-lg">Mobile-First UI</h4>
                <p className="text-slate-400 text-sm">Ensured the cashier terminal remains functional on tablets for mobile checkout, meeting the strict responsiveness requirement.</p>
              </div>
            </div>
          </div>
        </section> */}

        {/* 4. WHAT I LEARNED  */}
        {/* <section className="max-w-3xl space-y-6">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">What I'm Learning</h2>
          <ul className="space-y-4 list-disc pl-6 text-slate-600 dark:text-slate-400">
            <li><strong>State Management for Complex UX:</strong> Managing the state of a "suspended sale" versus a "processed refund" taught me how to handle multi-step workflows in React. </li>
            <li><strong>Visualizing Data Hierarchy:</strong> Translating a complex workflow (Login → Auth → Dashboards → Reports) into a clean UI required a deep understanding of content organization.</li>
            <li><strong>Atomic Design:</strong> Building reusable components for buttons, inputs, and cards to maintain visual consistency across all three dashboards.</li>
          </ul>
        </section> */}

        <footer className="pt-10 border-t border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="text-center sm:text-left">
            <h3 className="font-bold text-xl">Divine Ndukwe</h3>
            <p className="text-sm opacity-60">Matric No: [22120613105]</p>
          </div>
          {/* <div className="flex gap-4">
            <a href="#" className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-6 py-3 rounded-lg font-bold hover:opacity-90 transition">
              Live Demo
            </a>
            <a href="#" className="border border-slate-300 dark:border-slate-700 px-6 py-3 rounded-lg font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition">
              View Source
            </a>
          </div> */}
        </footer>
      </main>
    </div>
  );
};

export default DataVizDetails;