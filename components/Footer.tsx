import React from 'react';
import { Phone, MapPin, Mail, Instagram, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Brand & Desc */}
          <div className="space-y-4">
            <h3 className="font-serif text-2xl text-white">Pure Harmony</h3>
            <p className="text-sm leading-relaxed max-w-xs">
              Find Yourself. Again. <br/>
              We provide a safe, confidential, and empathetic space for you to heal and grow.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="hover:text-white transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Facebook size={20} /></a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold uppercase tracking-wider text-sm">Contact Us</h4>
            <ul className="space-y-3">
               <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 flex-shrink-0 text-purple-400" />
                <span className="text-sm">
                  Barnaby Road, Kilpauk<br />
                  Chennai, Tamil Nadu 600010
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-purple-400" />
                <span className="text-sm">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-purple-400" />
                <span className="text-sm">hello@pureharmony.in</span>
              </li>
            </ul>
          </div>

          {/* Quick Links (Mock) */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold uppercase tracking-wider text-sm">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><span className="hover:text-purple-300 cursor-pointer transition-colors">Individual Therapy</span></li>
              <li><span className="hover:text-purple-300 cursor-pointer transition-colors">Couple Therapy</span></li>
              <li><span className="hover:text-purple-300 cursor-pointer transition-colors">Workshops</span></li>
              <li><span className="hover:text-purple-300 cursor-pointer transition-colors">FAQ</span></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-xs text-slate-500">
          &copy; {new Date().getFullYear()} Pure Harmony Counseling. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;