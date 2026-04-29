import { Calendar, Users, MapPin, CheckCircle2, TrendingUp, History, Info, Train, Utensils, Hotel, ClipboardList, ChevronDown, ArrowRight, Star, Search } from 'lucide-react';
import { IMAGES } from '../constants';
import { motion } from 'motion/react';
import { View } from '../types';

interface PackagesPageProps {
  onNavigate: (view: View) => void;
}

export default function PackagesPage({ onNavigate }: PackagesPageProps) {
  const inclusions = [
    { title: 'Premium Accommodation', desc: '7 nights in handpicked 4-star alpine lodges and boutique hotels.', icon: Hotel },
    { title: 'Daily Meals', desc: 'All breakfasts, 4 lunches, and 5 curated dinner experiences.', icon: Utensils },
    { title: 'Internal Transport', desc: 'First-class Swiss Travel Pass including the Glacier Express.', icon: Train },
    { title: 'Visa Assistance', desc: 'Complimentary consultation and review for Schengen visa.', icon: ClipboardList },
  ];

  return (
    <div className="w-full">
      {/* Photo Gallery Bento Grid */}
      <section className="max-w-7xl mx-auto px-6 pt-12 pb-8">
        <div className="grid grid-cols-4 grid-rows-2 gap-4 h-[500px] md:h-[600px] rounded-2xl overflow-hidden shadow-card">
          <div className="col-span-2 row-span-2 relative group cursor-pointer overflow-hidden">
            <img src={IMAGES.swissAlps} alt="Swiss Alps" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all"></div>
          </div>
          <div className="col-span-1 row-span-1 relative group cursor-pointer overflow-hidden">
            <img src={IMAGES.swissTrain} alt="Swiss Train" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all"></div>
          </div>
          <div className="col-span-1 row-span-1 relative group cursor-pointer overflow-hidden">
            <img src={IMAGES.swissChalet} alt="Swiss Chalet" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all"></div>
          </div>
          <div className="col-span-2 row-span-1 relative group cursor-pointer overflow-hidden">
            <img src={IMAGES.swissLake} alt="Swiss Lake" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all"></div>
            <button className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-md px-5 py-2.5 rounded-xl font-bold text-sm text-on-surface shadow-lg hover:bg-white transition-all active:scale-95">
              View All 24 Photos
            </button>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-12 gap-12 relative">
        <div className="col-span-12 lg:col-span-8 flex flex-col gap-12 text-left">
          {/* Package Header */}
          <div>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="bg-surface-high font-bold text-[11px] uppercase tracking-widest px-3 py-1.5 rounded-full text-on-surface/70 border border-outline-variant/30">Europe</span>
              <span className="bg-primary-container text-primary font-bold text-[11px] uppercase tracking-widest px-3 py-1.5 rounded-full flex items-center gap-1.5 border border-primary/10">
                <CheckCircle2 size={14} /> Expert Guided
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-on-surface mb-4 leading-tight">Majestic Swiss Alps Explorer</h1>
            <p className="text-lg text-outline flex items-center gap-2 font-medium">
              <MapPin size={20} className="text-outline" /> Zurich, Interlaken, Zermatt, Geneva
            </p>
            
            <div className="grid grid-cols-3 gap-6 mt-12 bg-surface-low border border-outline-variant/20 rounded-2xl p-8">
              <div className="flex flex-col gap-1.5">
                <Calendar size={32} className="text-primary mb-2" />
                <span className="text-[10px] font-bold text-outline uppercase tracking-widest">Duration</span>
                <span className="text-2xl font-bold text-on-surface">8 Days</span>
              </div>
              <div className="flex flex-col gap-1.5 border-l border-outline-variant/30 pl-8">
                <Users size={32} className="text-primary mb-2" />
                <span className="text-[10px] font-bold text-outline uppercase tracking-widest">Group Size</span>
                <span className="text-2xl font-bold text-on-surface">Max 12</span>
              </div>
              <div className="flex flex-col gap-1.5 border-l border-outline-variant/30 pl-8">
                <TrendingUp size={32} className="text-primary mb-2" />
                <span className="text-[10px] font-bold text-outline uppercase tracking-widest">Activity Level</span>
                <span className="text-2xl font-bold text-on-surface">Moderate</span>
              </div>
            </div>
          </div>

          {/* Overview */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Journey Overview</h2>
            <p className="text-lg text-outline leading-relaxed max-w-4xl">
              Experience the breathtaking beauty of the Swiss Alps on this meticulously curated 8-day adventure. From the vibrant streets of Zurich to the shadow of the iconic Matterhorn, this journey combines exhilarating outdoor activities with the luxurious comfort of premium alpine lodges. Traverse deep valleys on the legendary Glacier Express, hike through pristine alpine meadows, and savor authentic local cuisine in charming mountain villages.
            </p>
          </section>

          {/* Inclusions */}
          <section>
            <h2 className="text-3xl font-bold mb-8">What's Included</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {inclusions.map((item, i) => (
                <div key={i} className="bg-white border-2 border-surface-low hover:border-primary/20 transition-all rounded-2xl p-6 flex items-start gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-primary-container/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <item.icon size={28} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                    <p className="text-sm text-outline leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Itinerary */}
          <section>
            <h2 className="text-3xl font-bold mb-10">Day-by-Day Itinerary</h2>
            <div className="relative pl-10 border-l-4 border-surface-low space-y-12">
              <div className="relative">
                <div className="absolute -left-[54px] top-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold shadow-lg border-4 border-background z-10">1</div>
                <div className="bg-white border border-outline-variant/20 rounded-2xl p-8 shadow-ambient group transition-all hover:border-primary/20">
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-2xl font-bold">Arrival in Zurich</h3>
                    <span className="bg-surface-low text-outline font-bold text-[10px] uppercase tracking-widest px-3 py-1 rounded-lg">Welcome</span>
                  </div>
                  <p className="text-base text-outline leading-relaxed mb-8">Arrive at Zurich Airport where your guide will meet you. Private transfer to your boutique hotel overlooking Lake Zurich. Evening welcome dinner with the group to review the adventure ahead.</p>
                  <div className="w-full h-40 rounded-2xl overflow-hidden">
                    <img src={IMAGES.zurichNight} alt="Zurich" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  </div>
                </div>
              </div>
              <div className="relative opacity-60">
                <div className="absolute -left-[54px] top-0 w-10 h-10 rounded-full bg-surface-high font-bold flex items-center justify-center border-4 border-background z-10">2</div>
                <div className="bg-white border border-outline-variant/10 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold mb-4">The GoldenPass Line to Interlaken</h3>
                  <p className="text-base text-outline leading-relaxed">Board the panoramic GoldenPass train. Journey through lush valleys and past spectacular lakes to Interlaken. Afternoon free for independent exploration.</p>
                </div>
              </div>
              <button className="w-full py-5 rounded-2xl border-2 border-dashed border-outline-variant/40 text-primary font-bold hover:bg-primary-container/10 transition-all flex items-center justify-center gap-3 active:scale-[0.99]">
                View Full 8-Day Itinerary <ChevronDown size={20} />
              </button>
            </div>
          </section>

          {/* Similar Adventures */}
          <section className="mt-20 pt-12 border-t border-outline-variant/10">
            <div className="flex justify-between items-end mb-10">
              <div>
                <h2 className="text-3xl font-bold mb-2">Similar Adventures</h2>
                <p className="text-outline">Explore more curated experiences in Europe.</p>
              </div>
              <button className="text-primary font-bold flex items-center gap-2 hover:underline">
                View all <ArrowRight size={20} />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl border border-outline-variant/10 overflow-hidden group hover:shadow-card transition-all cursor-pointer">
                <div className="h-48 overflow-hidden relative">
                  <img src={IMAGES.italianRiviera} alt="Italy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-widest">10 Days</div>
                </div>
                <div className="p-6 text-left">
                  <h3 className="text-xl font-bold mb-4">Italian Riviera Coastal Tour</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-on-surface">From $4,100</span>
                    <span className="text-primary font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">Explore <ArrowRight size={16} /></span>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl border border-outline-variant/10 overflow-hidden group hover:shadow-card transition-all cursor-pointer">
                <div className="h-48 overflow-hidden relative">
                  <img src={IMAGES.greekAntiquity} alt="Greece" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-widest">7 Days</div>
                </div>
                <div className="p-6 text-left">
                  <h3 className="text-xl font-bold mb-4">Ancient Greek Antiquity</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-on-surface">From $2,650</span>
                    <span className="text-primary font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">Explore <ArrowRight size={16} /></span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Right Sidebar: Sticky Booking */}
        <div className="col-span-12 lg:col-span-4 self-start sticky top-28">
          <div className="bg-white rounded-3xl p-8 shadow-float border border-outline-variant/10 overflow-hidden text-left relative">
            <div className="absolute -left-12 -bottom-12 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
            
            <div className="mb-8">
              <span className="text-[10px] font-bold text-outline uppercase tracking-widest block mb-1">Starting from</span>
              <div className="flex items-baseline gap-2">
                <h2 className="text-5xl font-black text-on-surface">$3,250</h2>
                <span className="text-sm font-bold text-outline">/ person</span>
              </div>
              <p className="text-xs font-bold text-primary mt-3 flex items-center gap-1.5 bg-primary-container/40 w-fit px-2 py-1 rounded">
                <CheckCircle2 size={12} strokeWidth={3} /> NO HIDDEN FEES
              </p>
            </div>

            <div className="space-y-4 mb-10">
              <div className="border-2 border-surface-low hover:border-primary/20 transition-all rounded-xl p-4 cursor-pointer bg-surface/50 group">
                <label className="text-[10px] font-bold text-outline uppercase tracking-widest block mb-1">Select Dates</label>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold">Sep 15 - Sep 22, 2026</span>
                  <Calendar size={18} className="text-outline group-hover:text-primary transition-colors" />
                </div>
              </div>
              <div className="border-2 border-surface-low hover:border-primary/20 transition-all rounded-xl p-4 cursor-pointer bg-surface/50 group">
                <label className="text-[10px] font-bold text-outline uppercase tracking-widest block mb-1">Travelers</label>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold">2 Adults</span>
                  <Users size={18} className="text-outline group-hover:text-primary transition-colors" />
                </div>
              </div>
            </div>

            <button className="w-full bg-secondary hover:bg-secondary-dark text-white font-black py-5 rounded-2xl shadow-xl hover:shadow-2xl transition-all active:scale-95 text-lg">
              Request to Book
            </button>
            <p className="text-center text-[11px] font-bold text-outline mt-5">
              You won't be charged yet.
            </p>

            <hr className="my-10 border-outline-variant/10" />

            <div className="flex items-start gap-5 relative">
              <div className="w-12 h-12 rounded-2xl bg-surface-high flex items-center justify-center flex-shrink-0">
                <Search size={24} className="text-outline" />
              </div>
              <div>
                <h4 className="font-bold text-sm mb-1 leading-tight">Need help deciding?</h4>
                <a href="#" className="text-xs font-bold text-primary hover:underline flex items-center gap-1">Contact our travel experts <ArrowRight size={12} /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
