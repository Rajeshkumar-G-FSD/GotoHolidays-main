import { Search, MapPin, CheckCircle2, FileText, Upload, PlaneTakeoff, ArrowRight, Clock } from 'lucide-react';
import { IMAGES } from '../constants';
import { motion } from 'motion/react';

export default function VisasPage() {
  const steps = [
    { title: 'Select Country', desc: 'Enter destination for rules.', icon: MapPin, active: false, color: 'text-primary' },
    { title: 'Check Requirements', desc: 'Review criteria and eligibility.', icon: CheckCircle2, active: true, color: 'text-white bg-primary' },
    { title: 'Upload Documents', desc: 'Submit paperwork securely.', icon: Upload, active: false, color: 'text-outline' },
    { title: 'Track Application', desc: 'Monitor real-time updates.', icon: PlaneTakeoff, active: false, color: 'text-outline' },
  ];

  const destinations = [
    { 
      name: 'France', 
      region: 'Schengen Area', 
      duration: '10-15 Days', 
      desc: 'Comprehensive guide for tourist, business, and transit visas for the Schengen zone.',
      imageUrl: IMAGES.eiffelTower,
      large: true
    },
    { 
      name: 'Japan', 
      region: 'E-Visa Available', 
      imageUrl: IMAGES.shibuyaNight,
      large: false
    },
    { 
      name: 'Australia', 
      region: 'ETA Required', 
      imageUrl: IMAGES.sydneyOpera,
      large: false
    }
  ];

  return (
    <div className="w-full flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full relative bg-white overflow-hidden py-24">
        <div className="absolute inset-0 z-0">
          <img src={IMAGES.airplane} alt="Airplane" className="w-full h-full object-cover opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/95 to-background"></div>
        </div>
        <div className="max-w-7xl mx-auto w-full px-6 relative z-10 flex flex-col items-center text-center">
          <span className="text-primary font-bold text-sm uppercase tracking-widest mb-4">Expert Guidance</span>
          <h1 className="text-5xl md:text-6xl font-bold text-on-surface mb-6 max-w-3xl leading-tight">Find Visa Requirements for Any Destination</h1>
          <p className="text-lg text-outline max-w-2xl mb-10 leading-relaxed">Clear, up-to-date documentation requirements to ensure your journey begins with confidence.</p>
          
          <div className="w-full max-w-2xl bg-white rounded-xl p-1 shadow-card flex items-center border border-outline-variant/30 focus-within:border-primary transition-all">
            <Search className="text-outline ml-4 mr-2" size={20} />
            <input className="w-full bg-transparent border-none focus:ring-0 text-base py-4 text-on-surface placeholder:text-outline/60" placeholder="Where are you traveling to?" />
            <button className="bg-primary hover:bg-primary-light text-white px-8 py-4 rounded-lg font-bold transition-all ml-2 whitespace-nowrap">Check Visa</button>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="w-full bg-surface-low py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-3">How It Works</h2>
            <p className="text-outline">Four simple steps to secure your travel documentation.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-outline-variant/30 z-0"></div>
            {steps.map((step, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center text-center">
                <div className={`w-24 h-24 rounded-full border-4 border-surface-low flex items-center justify-center shadow-ambient mb-6 transition-transform hover:scale-105 ${step.active ? 'bg-primary text-white' : 'bg-white ' + step.color}`}>
                  <step.icon size={40} className={step.active ? 'text-white' : ''} />
                </div>
                <h3 className={`text-xl font-bold mb-2 ${step.active ? 'text-on-surface' : 'text-outline/80'}`}>{step.title}</h3>
                <p className={`text-sm ${step.active ? 'text-outline' : 'text-outline/60'}`}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="w-full max-w-7xl mx-auto px-6 py-20">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-2">Popular Destinations</h2>
            <p className="text-outline">Quick access to common visa guides.</p>
          </div>
          <button className="text-primary font-bold flex items-center gap-1 hover:underline">
            View All <ArrowRight size={18} />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 relative h-[400px] rounded-2xl overflow-hidden group border border-outline-variant/10 shadow-card">
            <img src={destinations[0].imageUrl} alt={destinations[0].name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 w-full text-left">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-primary text-white border border-primary-light/30 px-3 py-1 rounded-full text-xs font-bold">{destinations[0].region}</span>
                <span className="bg-white/20 backdrop-blur-md text-white border border-white/20 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                  <Clock size={14} /> {destinations[0].duration}
                </span>
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">{destinations[0].name}</h3>
              <p className="text-white/80 max-w-md text-sm">{destinations[0].desc}</p>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            {destinations.slice(1).map((dest, i) => (
              <div key={i} className="flex-1 relative rounded-2xl overflow-hidden group shadow-card border border-outline-variant/10">
                <img src={dest.imageUrl} alt={dest.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 w-full text-left">
                  <span className="bg-primary text-white border border-primary-light/30 px-3 py-1 rounded-full text-xs font-bold mb-2 inline-block">{dest.region}</span>
                  <h3 className="text-2xl font-bold text-white">{dest.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="w-full bg-primary-container/80 py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <Upload size={48} className="text-primary mb-6 opacity-80" />
          <h2 className="text-3xl font-bold mb-4">Complex Application?</h2>
          <p className="text-lg opacity-80 mb-10 leading-relaxed">Our visa experts are ready to navigate the regulations for you. Ensure your documentation is perfect before submission.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-secondary hover:bg-secondary-dark text-white font-bold px-10 py-4 rounded-xl transition-all shadow-lg active:scale-95">Speak to an Expert</button>
            <button className="bg-transparent border-2 border-outline-variant hover:bg-white/10 text-on-surface font-bold px-10 py-4 rounded-xl transition-all active:scale-95">Browse FAQ</button>
          </div>
        </div>
      </section>
    </div>
  );
}
