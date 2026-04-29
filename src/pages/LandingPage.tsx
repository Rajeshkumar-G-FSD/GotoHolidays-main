import { useState, useRef, useEffect } from 'react';
import { Search, MapPin, Calendar, Plane, Luggage, ArrowRight, Loader2, Phone, Mail, Clock } from 'lucide-react';
import { IMAGES } from '../constants';
import { motion } from 'motion/react';
import { View } from '../types';

interface LandingPageProps {
  onNavigate: (view: View) => void;
}

export default function LandingPage({ onNavigate }: LandingPageProps) {
  const [isSearching, setIsSearching] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;

    const attempt = () => {
      video.play().catch(() => {});
    };

    attempt();

    video.addEventListener('loadedmetadata', attempt);

    const onInteraction = () => {
      if (video.paused) video.play().catch(() => {});
      window.removeEventListener('click', onInteraction);
      window.removeEventListener('touchstart', onInteraction);
    };
    window.addEventListener('click', onInteraction);
    window.addEventListener('touchstart', onInteraction);

    return () => {
      video.removeEventListener('loadedmetadata', attempt);
      window.removeEventListener('click', onInteraction);
      window.removeEventListener('touchstart', onInteraction);
    };
  }, []);

  const handleSearch = () => {
    setIsSearching(true);
    setTimeout(() => setIsSearching(false), 2000);
  };
  return (
    <div className="w-full relative">
      {/* Hero Section */}
      <section className="relative min-h-[75vh] md:min-h-[85vh] flex flex-col justify-center px-6 overflow-hidden bg-black">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover opacity-80 md:opacity-100"
        >
          <source src="/thailand.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/70 md:from-black/70 md:via-black/30 md:to-black/60"></div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center text-center pb-64 md:pb-40">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-4 md:mb-8"
          >
            <span className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-white text-[9px] md:text-xs font-bold uppercase tracking-widest border border-white/20">
              Premium Travel Experiences
            </span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display text-4xl md:text-7xl lg:text-8xl text-white mb-3 md:mb-6 drop-shadow-lg font-black leading-[1.2] md:leading-[1.1] tracking-tight"
          >
            Discover the World <br className="hidden md:block" /> <span className="text-secondary">With Confidence</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-base md:text-2xl text-white/90 mb-4 md:mb-12 max-w-3xl drop-shadow-sm font-medium leading-relaxed px-4 md:px-0"
          >
            Expert visa processing, curated holiday packages, and seamless flight bookings tailored specifically for your next adventure.
          </motion.p>
        </div>

        {/* Overlapping Search Card */}
        <div className="absolute left-0 right-0 bottom-0 translate-y-1/2 z-30 px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="bg-white rounded-2xl md:rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] p-1 md:p-4 w-full border border-outline-variant/10"
            >
              <div className="p-3 md:p-4 md:px-8">
                <div className="flex space-x-6 md:space-x-8 border-b border-outline-variant/10 mb-4 md:mb-6 pb-2">
                  <button 
                    onClick={() => onNavigate('flights')}
                    className="flex items-center space-x-2 text-primary border-b-2 border-primary pb-2 md:pb-3 -mb-[9px] md:-mb-[11px] font-bold text-xs md:text-sm cursor-pointer transition-all"
                  >
                    <Plane size={18} className="md:w-5 md:h-5" />
                    <span>Flights</span>
                  </button>
                  <button 
                    onClick={() => onNavigate('packages')}
                    className="flex items-center space-x-2 text-outline hover:text-primary transition-all pb-2 md:pb-3 font-bold text-xs md:text-sm cursor-pointer group"
                  >
                    <Luggage size={18} className="md:w-5 md:h-5 group-hover:translate-y-[-2px] transition-transform" />
                    <span>Packages</span>
                  </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-7 gap-3 md:gap-4 font-sans">
                  <div className="md:col-span-1 lg:col-span-2 group">
                    <label className="block text-[9px] md:text-[10px] font-bold text-outline/70 uppercase tracking-wider mb-1 md:mb-2 ml-1 text-left group-focus-within:text-primary transition-colors">From</label>
                    <div className="flex items-center border border-outline-variant/20 rounded-xl md:rounded-2xl px-3 md:px-4 py-2 md:py-3 bg-surface-low focus-within:border-primary focus-within:ring-4 focus-within:ring-primary/5 transition-all cursor-text" onClick={(e) => (e.currentTarget.querySelector('input') as HTMLInputElement).focus()}>
                      <MapPin size={18} className="text-outline group-focus-within:text-primary transition-colors mr-2 md:mr-3" />
                      <input className="w-full bg-transparent border-none p-0 focus:ring-0 text-sm md:text-base font-medium placeholder-outline/40" placeholder="Origin city" />
                    </div>
                  </div>
                  <div className="md:col-span-1 lg:col-span-2 group">
                    <label className="block text-[9px] md:text-[10px] font-bold text-outline/70 uppercase tracking-wider mb-1 md:mb-2 ml-1 text-left group-focus-within:text-primary transition-colors">To</label>
                    <div className="flex items-center border border-outline-variant/20 rounded-xl md:rounded-2xl px-3 md:px-4 py-2 md:py-3 bg-surface-low focus-within:border-primary focus-within:ring-4 focus-within:ring-primary/5 transition-all cursor-text" onClick={(e) => (e.currentTarget.querySelector('input') as HTMLInputElement).focus()}>
                      <MapPin size={18} className="text-outline group-focus-within:text-primary transition-colors mr-2 md:mr-3" />
                      <input className="w-full bg-transparent border-none p-0 focus:ring-0 text-sm md:text-base font-medium placeholder-outline/40" placeholder="Destination" />
                    </div>
                  </div>
                  <div className="md:col-span-1 lg:col-span-2 group">
                    <label className="block text-[9px] md:text-[10px] font-bold text-outline/70 uppercase tracking-wider mb-1 md:mb-2 ml-1 text-left group-focus-within:text-primary transition-colors">Dates</label>
                    <div className="flex items-center border border-outline-variant/20 rounded-xl md:rounded-2xl px-3 md:px-4 py-2 md:py-3 bg-surface-low focus-within:border-primary focus-within:ring-4 focus-within:ring-primary/5 transition-all cursor-text" onClick={(e) => (e.currentTarget.querySelector('input') as HTMLInputElement).focus()}>
                      <Calendar size={18} className="text-outline group-focus-within:text-primary transition-colors mr-2 md:mr-3" />
                      <input className="w-full bg-transparent border-none p-0 focus:ring-0 text-sm md:text-base font-medium placeholder-outline/40" placeholder="Add dates" />
                    </div>
                  </div>
                  <div className="md:col-span-1 lg:col-span-1 flex items-end">
                    <button 
                      onClick={handleSearch}
                      disabled={isSearching}
                      className="w-full bg-secondary hover:bg-secondary-dark text-white transition-all py-2.5 md:py-3.5 rounded-xl md:rounded-2xl font-bold flex justify-center items-center h-[44px] md:h-[52px] shadow-lg shadow-secondary/20 active:scale-[0.98] cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed text-sm md:text-base mt-2 md:mt-0"
                    >
                      {isSearching ? (
                        <>
                          <Loader2 size={20} className="md:w-6 md:h-6 mr-2 animate-spin" />
                        </>
                      ) : (
                        <>
                          <Search size={20} className="md:w-6 md:h-6 mr-2" />
                          <span className="hidden lg:inline">Search</span>
                          <span className="lg:hidden">Find</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Spacer for overlapping search */}
      <div className="h-56 md:h-32 lg:h-36"></div>

      {/* Banner Section */}
      <section className="max-w-7xl mx-auto px-6 relative z-20 mb-20">
        <div className="bg-white rounded-2xl shadow-card border border-outline-variant/30 p-8 flex flex-col md:flex-row items-center justify-between overflow-hidden relative">
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="flex items-center space-x-6 mb-6 md:mb-0 relative z-10">
            <div className="w-16 h-16 rounded-full bg-primary-container flex items-center justify-center flex-shrink-0">
              <Luggage size={32} className="text-primary" />
            </div>
            <div className="text-left">
              <h2 className="text-xl font-bold text-on-surface mb-1">Visa Simplified</h2>
              <p className="text-sm text-outline max-w-md">Navigate global visa requirements with our expert guidance. Check your eligibility and apply seamlessly.</p>
            </div>
          </div>
          <div className="flex gap-4 relative z-10 w-full md:w-auto">
            <button 
              onClick={() => onNavigate('visas')}
              className="flex-1 md:flex-none px-6 py-3 border border-primary text-primary hover:bg-primary/5 rounded-full font-bold text-sm transition-all whitespace-nowrap cursor-pointer"
            >
              Check Requirements
            </button>
            <button 
              onClick={() => onNavigate('visas')}
              className="flex-1 md:flex-none px-6 py-3 bg-primary text-white hover:bg-primary-light rounded-full font-bold text-sm transition-all shadow-sm flex items-center justify-center cursor-pointer"
            >
              Start Application <ArrowRight size={18} className="ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* Global Contact & Map Section */}
      <section className="max-w-7xl mx-auto px-6 mb-24" id="contact-section">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Details */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-black text-on-surface mb-4 tracking-tight">Visit Our Office</h2>
              <p className="text-outline text-lg max-w-md mb-8">
                Drop by our Chennai office for a personalized consultation on your next international journey.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin size={24} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-on-surface text-base mb-1">Our Location</h4>
                  <p className="text-outline text-sm leading-relaxed">
                    33-13, Brindavan St Ext, Vivekanandapuram,<br />
                    West Mambalam, Chennai, Tamil Nadu 600033
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <Phone size={24} className="text-secondary" />
                </div>
                <div>
                  <h4 className="font-bold text-on-surface text-base mb-1">Call Us</h4>
                  <p className="text-outline text-sm leading-relaxed">
                    +91 98404 54601
                  </p>
                  <p className="text-xs text-outline/60 mt-1 italic font-medium">Available Mon-Sat: 10:00 AM - 7:00 PM</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail size={24} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-on-surface text-base mb-1">Email Us</h4>
                  <p className="text-outline text-sm leading-relaxed">
                    gotoholidaysandvisa@gmail.com
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button 
                onClick={() => window.open('https://maps.app.goo.gl/9S8S8v8888888888', '_blank')}
                className="inline-flex items-center space-x-3 text-secondary font-bold text-sm group"
              >
                <span>Get Directions on Google Maps</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

          {/* Map Preview */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white h-[350px] md:h-[450px] relative z-10"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m12!1d3886.918!2d80.222!3d13.040!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526703565017ed%3A0x7d6a5c3789060662!2s33-13%2C%20Brindavan%20St%20Ext%2C%20Vivekanandapuram%2C%20West%20Mambalam%2C%20Chennai%2C%20Tamil%20Nadu%20600033!5e0!3m2!1sen!2sin!4v1714371451000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location Map"
            ></iframe>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

