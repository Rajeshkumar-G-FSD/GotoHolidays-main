import { LayoutDashboard, Plane, ClipboardCheck, FolderOpen, Settings, MoreVertical, Calendar, CheckCircle2, History, RefreshCw, Eye, Star } from 'lucide-react';
import { IMAGES } from '../constants';
import { motion } from 'motion/react';
import { View } from '../types';

interface DashboardPageProps {
  onNavigate: (view: View) => void;
}

export default function DashboardPage({ onNavigate }: DashboardPageProps) {
  const stats = [
    { label: 'Upcoming Trips', value: '2', sub: 'booked', color: 'bg-primary', icon: Plane },
    { label: 'Active Visas', value: '1', sub: 'in progress', color: 'bg-secondary', icon: ClipboardCheck },
    { label: 'Travel Points', value: '4,250', sub: 'pts', color: 'bg-primary-light', icon: Star },
  ];

  return (
    <div className="flex h-full min-h-screen bg-background">
      {/* Sidebar - Local to Dashboard for design accuracy */}
      <aside className="hidden lg:flex flex-col w-64 border-r border-outline-variant/30 bg-white py-8 sticky top-0 h-screen overflow-y-auto">
        <div className="px-6 mb-10">
          <button 
            onClick={() => onNavigate('home')}
            className="cursor-pointer mb-8 block"
          >
            <img src={IMAGES.logo} alt="Goto Holidays" className="h-8 object-contain" />
          </button>
          
          <div className="flex items-center gap-4 mb-2">
            <img 
              src={IMAGES.userSarah} 
              alt="Sarah" 
              className="w-14 h-14 rounded-full object-cover border-2 border-primary-container" 
            />
            <div className="text-left">
              <p className="font-bold text-base leading-tight">Sarah Jenkins</p>
              <p className="text-xs text-outline font-medium">Expert Guidance</p>
            </div>
          </div>
        </div>
        
        <nav className="flex-1 px-3 space-y-1">
          {[
            { label: 'Overview', icon: LayoutDashboard, active: true },
            { label: 'My Bookings', icon: Plane },
            { label: 'Visa Tracker', icon: ClipboardCheck },
            { label: 'Documents', icon: FolderOpen },
            { label: 'Settings', icon: Settings },
          ].map((item) => (
            <button
              key={item.label}
              className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl font-bold transition-all ${
                item.active 
                ? 'bg-primary-container text-primary border-r-4 border-primary' 
                : 'text-outline hover:bg-surface-low hover:text-primary'
              }`}
            >
              <item.icon size={20} />
              <span className="text-sm">{item.label}</span>
            </button>
          ))}
        </nav>
        
        <div className="px-6 mt-auto pt-10">
          <button 
            onClick={() => onNavigate('home')}
            className="w-full py-4 bg-secondary text-white rounded-xl font-bold hover:bg-secondary-dark transition-all shadow-sm active:scale-95 text-sm"
          >
            Plan New Trip
          </button>
        </div>
      </aside>

      {/* Main Dashboard Area */}
      <main className="flex-1 p-8 lg:p-12 max-w-7xl">
        <div className="text-left mb-10">
          <h1 className="text-4xl font-bold text-on-surface mb-2">Welcome back, Sarah</h1>
          <p className="text-lg text-outline">Here is an overview of your upcoming travels and visa statuses.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white rounded-2xl p-8 shadow-ambient border border-outline-variant/10 relative overflow-hidden group">
              <div className="absolute -right-6 -top-6 w-24 h-24 bg-surface-low rounded-full blur-2xl group-hover:bg-primary-container/20 transition-all"></div>
              <div className="flex items-center gap-4 mb-6 relative">
                <div className={`w-12 h-12 rounded-full ${stat.color} text-white flex items-center justify-center p-2.5`}>
                  <stat.icon size={24} />
                </div>
                <h3 className="text-sm font-bold text-outline uppercase tracking-wider">{stat.label}</h3>
              </div>
              <div className="flex items-baseline gap-2 relative">
                <span className="text-5xl font-bold text-on-surface font-display">{stat.value}</span>
                <span className="text-sm font-bold text-outline">{stat.sub}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Bookings */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-2xl font-bold">My Bookings</h2>
              <button className="text-sm font-bold text-primary hover:underline">View All</button>
            </div>
            
            <div className="bg-white rounded-2xl overflow-hidden shadow-card border border-outline-variant/10 flex flex-col sm:flex-row group transition-transform hover:translate-y-[-4px]">
              <div className="sm:w-1/3 h-48 sm:h-auto relative">
                <img src={IMAGES.eiffelTower} alt="Paris" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-on-surface px-3 py-1 rounded-lg text-xs font-bold shadow-sm">Upcoming</span>
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col justify-between text-left">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-2xl font-bold">Paris Getaway</h3>
                    <button className="text-outline hover:text-primary transition-colors"><MoreVertical size={20} /></button>
                  </div>
                  <div className="flex items-center gap-2 text-outline font-semibold text-sm mb-6">
                    <Calendar size={16} />
                    <span>Oct 15 - Oct 22, 2026</span>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-6 border-t border-outline-variant/20">
                  <div className="flex items-center gap-6">
                    <div className="flex flex-col">
                      <span className="text-[10px] font-bold text-outline uppercase tracking-wider mb-1">Flight</span>
                      <span className="text-xs font-bold text-primary flex items-center gap-1">
                        <CheckCircle2 size={14} /> Confirmed
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-bold text-outline uppercase tracking-wider mb-1">Accommodation</span>
                      <span className="text-xs font-bold text-primary flex items-center gap-1">
                        <CheckCircle2 size={14} /> Confirmed
                      </span>
                    </div>
                  </div>
                  <button className="text-sm font-bold text-secondary hover:text-secondary-dark transition-colors">Itinerary</button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-ambient border border-outline-variant/10 flex flex-col sm:flex-row opacity-80 hover:opacity-100 transition-all">
              <div className="sm:w-1/3 h-48 sm:h-auto relative">
                <img src={IMAGES.shibuyaNight} alt="Tokyo" className="w-full h-full object-cover grayscale-[20%]" />
              </div>
              <div className="p-8 flex-1 flex flex-col justify-between text-left">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Tokyo Explorer</h3>
                  <div className="flex items-center gap-2 text-outline font-semibold text-sm mb-4">
                    <History size={16} />
                    <span>Mar 10 - Mar 24, 2026</span>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-outline-variant/20">
                  <span className="text-xs font-bold text-outline bg-surface-low px-3 py-1 rounded-lg">Completed</span>
                  <button className="text-sm font-bold text-primary hover:underline">Rebook</button>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Visa Tracker */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <h2 className="text-2xl font-bold text-left mb-2">Visa Application Tracker</h2>
            <div className="bg-white rounded-2xl p-8 shadow-float border-l-8 border-l-secondary relative text-left">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="text-xl font-bold leading-tight">Schengen Visa<br/>(France)</h3>
                  <p className="text-xs font-bold text-outline mt-2 tracking-wide uppercase">App ID: FR-8924-VL</p>
                </div>
                <span className="bg-secondary/10 text-secondary px-4 py-1.5 rounded-full text-xs font-bold flex items-center gap-2 border border-secondary/20">
                  <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                  Under Review
                </span>
              </div>

              <div className="relative pl-6 border-l-2 border-outline-variant/30 ml-2 space-y-10">
                <div className="relative">
                  <div className="absolute -left-[35px] top-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center ring-4 ring-white border-2 border-primary-light/20">
                    <CheckCircle2 size={16} />
                  </div>
                  <h4 className="text-sm font-bold mb-1">Documents Submitted</h4>
                  <p className="text-xs text-outline font-medium">Sep 12, 2026</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-[35px] top-0 w-8 h-8 rounded-full bg-secondary text-white flex items-center justify-center ring-4 ring-white border-2 border-secondary-container/20">
                    <RefreshCw size={16} className="animate-spin-slow" />
                  </div>
                  <h4 className="text-sm font-bold mb-1">Embassy Review</h4>
                  <p className="text-xs text-outline font-medium leading-relaxed">Processing ongoing. Usually takes 5-7 business days for completion.</p>
                </div>
                <div className="relative opacity-30">
                  <div className="absolute -left-[35px] top-0 w-8 h-8 rounded-full bg-outline-variant text-white flex items-center justify-center ring-4 ring-white border-2 border-outline-variant/20">
                    <CheckCircle2 size={16} />
                  </div>
                  <h4 className="text-sm font-bold mb-1">Approval Decision</h4>
                  <p className="text-xs text-outline font-medium">Expected within 48 hours after review.</p>
                </div>
              </div>

              <div className="mt-12 pt-6 border-t border-outline-variant/20">
                <button className="w-full py-4 border-2 border-outline-variant/40 hover:border-primary/40 text-on-surface rounded-xl font-bold transition-all flex items-center justify-center gap-2 text-sm active:scale-95 group">
                  <Eye size={18} className="text-outline group-hover:text-primary transition-colors" />
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
