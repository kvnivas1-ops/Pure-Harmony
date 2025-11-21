import React from 'react';
import { Link } from 'react-router-dom';
import { Therapist } from '../types';

// Mock Data
const THERAPISTS: Therapist[] = [
  {
    id: 1,
    name: "Ashwini",
    role: "Couple Counsellor",
    bio: "Ashwini is a counselling psychologist who works with couples and individuals to improve communication, resolve conflict, and support emotional well-being. She specialises in marital counselling, relationship issues, anxiety, stress, and personal growth. Her approach is warm, practical, and focused on real, lasting change.",
    image: "<img src="df4a6055c18e457193282ccbde326fd7.webp" alt="Ashwini Rao" />",
    specialties: ["Anxiety", "Trauma", "Individual Therapy"]
  },
  {
    id: 2,
    name: "Mr. Rajesh Kumar",
    role: "Relationship Counselor",
    bio: "Rajesh is passionate about helping couples find their way back to each other. His empathetic, non-judgmental style helps partners communicate effectively and resolve deep-seated conflicts.",
    image: "https://picsum.photos/seed/rajesh/400/500",
    specialties: ["Couples Counseling", "Conflict Resolution", "Pre-marital"]
  },
  {
    id: 3,
    name: "Ms. Sara Thomas",
    role: "Psychotherapist",
    bio: "Sara focuses on emotional regulation and stress management for young adults. Her warm presence creates an immediate sense of safety for her clients.",
    image: "https://picsum.photos/seed/sara/400/500",
    specialties: ["Stress Management", "Depression", "Young Adults"]
  }
];

const Therapists: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-100 to-cyan-100 py-20 px-6">
        <div className="container mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-5xl text-slate-900 mb-4">Our Therapists</h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Compassionate professionals dedicated to your mental well-being.
          </p>
        </div>
      </div>

      {/* Grid */}
      <div className="container mx-auto px-6 -mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {THERAPISTS.map((therapist) => (
            <div key={therapist.id} className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col">
              <div className="h-64 overflow-hidden">
                <img 
                  src={therapist.image} 
                  alt={therapist.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="mb-4">
                  <h2 className="font-serif text-2xl text-slate-900">{therapist.name}</h2>
                  <p className="text-purple-600 font-medium text-sm">{therapist.role}</p>
                </div>
                <p className="text-slate-600 text-sm mb-6 leading-relaxed flex-1">
                  {therapist.bio}
                </p>
                
                <div className="space-y-4">
                   <div className="flex flex-wrap gap-2">
                      {therapist.specialties.map((spec, idx) => (
                        <span key={idx} className="px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-full">
                          {spec}
                        </span>
                      ))}
                   </div>
                   <Link 
                    to="/book" 
                    className="block w-full py-3 text-center rounded-xl border-2 border-slate-900 text-slate-900 font-semibold hover:bg-slate-900 hover:text-white transition-colors"
                   >
                     Book Session
                   </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Therapists;
