import React, { useState } from 'react';
import { Phone, CheckCircle, Calendar as CalendarIcon, Clock, MapPin } from 'lucide-react';
import { ServiceType } from '../types';

const THERAPIST_NAMES = ["Dr. Ananya Iyer", "Mr. Rajesh Kumar", "Ms. Sara Thomas"];

const Booking: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: '' as ServiceType | '',
    therapist: '',
    date: '',
    time: '',
    name: '',
    email: '',
    phone: ''
  });

  const handleServiceSelect = (service: ServiceType) => {
    setFormData({ ...formData, service });
    setStep(2);
  };

  const handleTherapistSelect = (name: string) => {
    setFormData({ ...formData, therapist: name });
    setStep(3);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(4); // Success state
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col lg:flex-row">
      
      {/* Left Side - Contact & Branding */}
      <div className="lg:w-5/12 bg-slate-900 text-white p-8 lg:p-16 flex flex-col justify-between relative overflow-hidden">
        {/* Gradient Background Effect */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-slate-900 to-slate-800 z-0"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-tr from-purple-900/40 to-transparent z-0"></div>
        
        <div className="relative z-10">
          <h1 className="font-serif text-4xl lg:text-5xl mb-6 leading-tight">
            We're here to <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-purple-400">listen.</span>
          </h1>
          <p className="text-slate-400 text-lg mb-12 leading-relaxed max-w-md">
            Prefer to speak to a human first? We understand that booking therapy can be daunting. Call our care coordinators directly.
          </p>
          
          {/* Phone Card */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 mb-8 hover:bg-white/10 transition-colors cursor-default group">
            <div className="flex items-start gap-5">
              <div className="p-4 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Phone size={28} className="text-white" />
              </div>
              <div>
                <p className="text-sm text-purple-300 uppercase tracking-wider font-bold mb-1">Call for Appointments</p>
                <a href="tel:+919876543210" className="text-3xl font-serif font-medium hover:text-white transition-colors block">
                  +91 98765 43210
                </a>
                <p className="text-sm text-slate-500 mt-2 flex items-center gap-2">
                  <Clock size={14} /> Mon-Sat, 9:00 AM - 7:00 PM
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-start gap-3 text-slate-400">
             <MapPin size={20} className="mt-1 flex-shrink-0" />
             <p className="text-sm">
               Pure Harmony Counseling Center<br/>
               Barnaby Road, Kilpauk<br/>
               Chennai, Tamil Nadu 600010
             </p>
          </div>
        </div>
      </div>

      {/* Right Side - Booking Form */}
      <div className="lg:w-7/12 bg-white p-6 lg:p-16 flex items-center justify-center overflow-y-auto">
        <div className="w-full max-w-2xl">
          
          {/* Progress Bar */}
          {step < 4 && (
             <div className="mb-12">
                <div className="flex items-center justify-between relative">
                   <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-slate-100 -z-10"></div>
                   {[1, 2, 3].map((i) => (
                     <div key={i} className={`flex flex-col items-center gap-2 bg-white px-2 ${step >= i ? 'opacity-100' : 'opacity-40'}`}>
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                           step >= i ? 'bg-slate-900 text-white scale-110' : 'bg-slate-200 text-slate-500'
                        }`}>
                           {i}
                        </div>
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-600">
                           {i === 1 ? 'Service' : i === 2 ? 'Therapist' : 'Time'}
                        </span>
                     </div>
                   ))}
                </div>
             </div>
          )}

          {/* Step 1: Service Selection */}
          {step === 1 && (
            <div className="animate-fade-in">
              <h2 className="font-serif text-4xl text-slate-900 mb-2">Select Service</h2>
              <p className="text-slate-500 mb-8">Choose the type of session you are looking for.</p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <button 
                  onClick={() => handleServiceSelect(ServiceType.INDIVIDUAL)}
                  className="p-8 text-left border-2 border-slate-100 rounded-3xl hover:border-purple-500 hover:bg-purple-50/30 transition-all group flex flex-col h-full"
                >
                  <div className="w-12 h-12 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <span className="font-bold text-xl">I</span>
                  </div>
                  <h3 className="font-serif text-2xl text-slate-900 group-hover:text-purple-700 mb-2">Individual</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    One-on-one sessions for anxiety, depression, stress, or personal growth.
                  </p>
                </button>

                <button 
                  onClick={() => handleServiceSelect(ServiceType.COUPLE)}
                  className="p-8 text-left border-2 border-slate-100 rounded-3xl hover:border-cyan-500 hover:bg-cyan-50/30 transition-all group flex flex-col h-full"
                >
                  <div className="w-12 h-12 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <span className="font-bold text-xl">C</span>
                  </div>
                  <h3 className="font-serif text-2xl text-slate-900 group-hover:text-cyan-700 mb-2">Couple</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Joint sessions to improve communication, resolve conflict, and bond.
                  </p>
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Therapist Selection */}
          {step === 2 && (
            <div className="animate-fade-in">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h2 className="font-serif text-4xl text-slate-900 mb-1">Choose Therapist</h2>
                  <p className="text-slate-500">Select a professional you resonate with.</p>
                </div>
                <button onClick={() => setStep(1)} className="text-sm font-semibold text-slate-500 hover:text-slate-900 underline">Back</button>
              </div>
              
              <div className="space-y-4">
                {THERAPIST_NAMES.map((name) => (
                  <button 
                    key={name}
                    onClick={() => handleTherapistSelect(name)}
                    className="w-full p-4 flex items-center gap-5 border border-slate-200 rounded-2xl hover:border-purple-400 hover:shadow-lg transition-all bg-white text-left group"
                  >
                    <div className="w-16 h-16 bg-slate-200 rounded-full overflow-hidden flex-shrink-0">
                      <img src={`https://picsum.photos/seed/${name.split(' ')[1]}/200/200`} alt={name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif text-xl text-slate-900 group-hover:text-purple-700 transition-colors">{name}</h3>
                      <p className="text-sm text-slate-500">Available Tomorrow</p>
                    </div>
                    <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white transition-all">
                       <span className="text-xl">→</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Details Form */}
          {step === 3 && (
            <form onSubmit={handleSubmit} className="animate-fade-in">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h2 className="font-serif text-4xl text-slate-900 mb-1">Finalize Details</h2>
                  <p className="text-slate-500">Enter your details to request this slot.</p>
                </div>
                <button type="button" onClick={() => setStep(2)} className="text-sm font-semibold text-slate-500 hover:text-slate-900 underline">Back</button>
              </div>
              
              <div className="bg-purple-50/50 border border-purple-100 p-5 rounded-2xl mb-8 flex items-center gap-4">
                 <div className="p-3 bg-white rounded-full text-purple-600 shadow-sm">
                    <CalendarIcon size={20} />
                 </div>
                 <div>
                    <p className="text-xs text-purple-600 font-bold uppercase tracking-wider">Appointment Request</p>
                    <p className="text-slate-900 font-medium">
                       {formData.service} with {formData.therapist}
                    </p>
                 </div>
              </div>

              <div className="grid grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Date</label>
                  <input required type="date" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Time</label>
                  <select className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all appearance-none">
                        <option>10:00 AM</option>
                        <option>11:30 AM</option>
                        <option>02:00 PM</option>
                        <option>04:30 PM</option>
                        <option>06:00 PM</option>
                  </select>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <input 
                  required 
                  type="text" 
                  placeholder="Full Name" 
                  className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all"
                />
                <input 
                  required 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all"
                />
                <input 
                  required 
                  type="tel" 
                  placeholder="Phone Number" 
                  className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all"
                />
              </div>

              <button 
                type="submit"
                className="w-full py-5 bg-slate-900 text-white font-bold text-lg rounded-2xl hover:bg-slate-800 hover:shadow-xl hover:scale-[1.01] transition-all duration-300"
              >
                Confirm Booking Request
              </button>
            </form>
          )}

          {/* Step 4: Success */}
          {step === 4 && (
            <div className="text-center animate-fade-in-up py-10">
              <div className="w-24 h-24 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-sm">
                <CheckCircle size={48} />
              </div>
              <h2 className="font-serif text-4xl text-slate-900 mb-4">Request Received</h2>
              <p className="text-slate-600 text-lg mb-10 max-w-md mx-auto leading-relaxed">
                Thank you for reaching out. Our care team will contact you shortly at your provided number to confirm the appointment.
              </p>
              <div className="flex justify-center gap-4">
                 <button 
                  onClick={() => setStep(1)} 
                  className="px-8 py-3 bg-slate-100 text-slate-900 font-bold rounded-xl hover:bg-slate-200 transition-colors"
                >
                  Book Another
                </button>
                <a 
                  href="/"
                  className="px-8 py-3 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-colors"
                >
                  Return Home
                </a>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default Booking;