import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Our Therapists', path: '/therapists' },
    { name: 'Book a Session', path: '/book' },
  ];

  // Custom Logo based on the "Interlocking S" shape from references
  const BrandLogo = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Background Circle with Gradient */}
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FBBF24" /> {/* Yellow */}
          <stop offset="50%" stopColor="#A855F7" /> {/* Purple */}
          <stop offset="100%" stopColor="#22D3EE" /> {/* Cyan */}
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="50" fill="url(#logoGradient)" />
      
      {/* White Interlocking Shapes */}
      {/* Top Right Hook */}
      <path 
        d="M45 55 C 45 35, 75 35, 75 55 C 75 75, 55 75, 55 65" 
        stroke="white" 
        strokeWidth="12" 
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Bottom Left Hook */}
      <path 
        d="M55 45 C 55 65, 25 65, 25 45 C 25 25, 45 25, 45 35" 
        stroke="white" 
        strokeWidth="12" 
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-slate-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          
          {/* Logo Area */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-3 group">
               <BrandLogo className="w-12 h-12 shadow-md group-hover:scale-105 transition-transform duration-300" />
               <div className="flex flex-col justify-center">
                  <span className="font-serif text-2xl font-bold text-slate-900 tracking-tight leading-none">
                    Pure Harmony
                  </span>
                  <span className="font-sans text-xs text-slate-500 tracking-widest uppercase mt-1">
                    Find Yourself. Again.
                  </span>
               </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-semibold tracking-wide transition-all duration-200 pb-1 border-b-2 ${
                    isActive(link.path)
                      ? 'text-purple-600 border-purple-600'
                      : 'text-slate-600 border-transparent hover:text-purple-600 hover:border-purple-200'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                to="/book" 
                className="px-6 py-2.5 bg-slate-900 text-white text-sm font-semibold rounded-full hover:bg-slate-800 transition-colors shadow-lg hover:shadow-xl"
              >
                Book Now
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-600 hover:text-purple-600 hover:bg-purple-50 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 absolute w-full shadow-xl">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                  isActive(link.path)
                    ? 'text-purple-700 bg-purple-50'
                    : 'text-slate-600 hover:text-purple-600 hover:bg-slate-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;