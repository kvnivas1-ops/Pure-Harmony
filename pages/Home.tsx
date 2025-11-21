import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Users, ArrowRight, Star } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section - Matching the Gradient Reference */}
      <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Main Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#FBBF24] via-[#A855F7] to-[#22D3EE]"></div>
        
        {/* Content Container */}
        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Logo Mark (White Outline version for Hero) */}
            <div className="mb-10 flex justify-center animate-fade-in-up">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-2xl">
                   <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16">
                      {/* Simplified solid color icon for inside the white circle */}
                      <path d="M45 55 C 45 35, 75 35, 75 55 C 75 75, 55 75, 55 65" stroke="#A855F7" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M55 45 C 55 65, 25 65, 25 45 C 25 25, 45 25, 45 35" stroke="#A855F7" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round"/>
                   </svg>
                </div>
            </div>

            <h1 className="font-serif text-6xl md:text-8xl text-white mb-6 leading-tight drop-shadow-sm animate-fade-in-up delay-100">
              Pure Harmony
            </h1>
            
            <p className="font-sans text-xl md:text-3xl text-white/90 mb-12 font-light tracking-widest uppercase animate-fade-in-up delay-200">
              Find Yourself. Again.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up delay-300">
              <Link 
                to="/book" 
                className="px-10 py-5 bg-white text-slate-900 rounded-full hover:bg-slate-50 transition-all transform hover:-translate-y-1 shadow-2xl font-bold text-lg tracking-wide"
              >
                Book a Session
              </Link>
              <Link 
                to="/therapists" 
                className="px-10 py-5 bg-transparent border-2 border-white text-white rounded-full hover:bg-white/10 transition-all transform hover:-translate-y-1 shadow-lg font-bold text-lg tracking-wide"
              >
                Our Therapists
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative Wave at bottom */}
        <div className="absolute bottom-0 left-0 right-0">
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path fill="#F8FAFC" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
           </svg>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-slate-50 relative">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
             <h2 className="font-serif text-4xl md:text-5xl text-slate-900 mb-6">How We Help</h2>
             <p className="text-slate-600 text-lg leading-relaxed">
               Our center in Kilpauk is designed to be a safe haven. We specialize in helping you navigate life's complexities through dedicated professional support.
             </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Individual Therapy Card */}
            <div className="bg-white p-12 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-100 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-orange-100 rounded-full -mr-32 -mt-32 transition-transform group-hover:scale-150 duration-700 opacity-50"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-orange-100 text-orange-500 rounded-2xl flex items-center justify-center mb-8">
                  <Users size={32} strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-3xl text-slate-900 mb-4">Individual Therapy</h3>
                <p className="text-slate-600 mb-8 leading-relaxed text-lg">
                  A confidential space to explore personal challenges, anxiety, or depression with a compassionate professional dedicated to your growth.
                </p>
                <ul className="space-y-3 mb-8 text-slate-500">
                  <li className="flex items-center gap-3"><Star size={16} className="text-orange-400"/> Anxiety & Stress</li>
                  <li className="flex items-center gap-3"><Star size={16} className="text-orange-400"/> Trauma Recovery</li>
                  <li className="flex items-center gap-3"><Star size={16} className="text-orange-400"/> Personal Growth</li>
                </ul>
                <Link to="/book" className="inline-flex items-center text-slate-900 font-bold border-b-2 border-orange-400 hover:text-orange-600 transition-colors pb-1">
                  Book Individual Session <ArrowRight size={18} className="ml-2"/>
                </Link>
              </div>
            </div>

            {/* Couple Therapy Card */}
            <div className="bg-white p-12 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-100 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-purple-100 rounded-full -mr-32 -mt-32 transition-transform group-hover:scale-150 duration-700 opacity-50"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-purple-100 text-purple-500 rounded-2xl flex items-center justify-center mb-8">
                  <Heart size={32} strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-3xl text-slate-900 mb-4">Couple Therapy</h3>
                <p className="text-slate-600 mb-8 leading-relaxed text-lg">
                  Rebuild trust and improve communication. We provide a neutral ground for partners to understand each other better and resolve conflicts.
                </p>
                <ul className="space-y-3 mb-8 text-slate-500">
                  <li className="flex items-center gap-3"><Star size={16} className="text-purple-400"/> Conflict Resolution</li>
                  <li className="flex items-center gap-3"><Star size={16} className="text-purple-400"/> Pre-marital Counseling</li>
                  <li className="flex items-center gap-3"><Star size={16} className="text-purple-400"/> Intimacy Building</li>
                </ul>
                <Link to="/book" className="inline-flex items-center text-slate-900 font-bold border-b-2 border-purple-400 hover:text-purple-600 transition-colors pb-1">
                  Book Couple Session <ArrowRight size={18} className="ml-2"/>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location / CTA Section */}
      <section className="py-20 bg-white">
         <div className="container mx-auto px-6">
            <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
               {/* Gradient blob overlay */}
               <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-900/50 to-slate-900 z-0"></div>
               <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-500 rounded-full blur-[100px] opacity-30"></div>
               
               <div className="relative z-10 max-w-3xl mx-auto">
                  <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">Visit us at Kilpauk</h2>
                  <p className="text-slate-300 text-lg mb-10">
                     We are conveniently located on Barnaby Road. Drop by or give us a call to start your journey towards harmony.
                  </p>
                  <Link to="/book" className="inline-block px-10 py-4 bg-gradient-to-r from-[#FBBF24] to-[#A855F7] text-white font-bold rounded-full shadow-lg hover:shadow-orange-500/25 transition-all transform hover:-translate-y-1">
                     Schedule an Appointment
                  </Link>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Home;