import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // Icons for the 3 lines and the close button

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Close menu when a link is clicked
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-slate-900 text-slate-100 z-50 border-b border-slate-800">
      <nav className="p-4 flex justify-between items-center max-w-6xl mx-auto">
        {/* LOGO */}
        <div className="text-xl font-bold">
          <Link to="/" onClick={closeMenu}>
            Divine <span className="text-indigo-500">Ndukwe</span>
          </Link>
        </div>

        {/* DESKTOP MENU (Hidden on Mobile) */}
        <ul className="hidden md:flex list-none gap-8 text-sm font-medium">
          <li className="hover:text-indigo-400 transition-colors">
            <a href="/#about">About</a>
          </li>
          <li className="hover:text-indigo-400 transition-colors">
            <a href="/#projects">Projects</a>
          </li>
          <li className="hover:text-indigo-400 transition-colors">
            <a href="/#contact">Contact</a>
          </li>
        </ul>

        {/* HAMBURGER ICON (Visible only on Mobile) */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={toggleMenu} 
            className="text-slate-100 hover:text-indigo-400 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* MOBILE OVERLAY MENU */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-900 border-b border-slate-800 animate-in slide-in-from-top duration-300">
          <ul className="flex flex-col items-center py-8 gap-6 text-lg font-medium">
            <li>
              <a href="/#about" onClick={closeMenu} className="hover:text-indigo-400">About</a>
            </li>
            <li>
              <a href="/#projects" onClick={closeMenu} className="hover:text-indigo-400">Projects</a>
            </li>

            <li>
              <a href="/#contact" onClick={closeMenu} className="hover:text-indigo-400">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;