import { Search, Plane, Filter, Clock, MoreVertical, CheckCircle, ChevronDown, MoveRight, Bolt } from 'lucide-react';
import { IMAGES } from '../constants';
import { Flight } from '../types';

export default function FlightsPage() {
  const flights: Flight[] = [
    {
      id: '1',
      airline: 'Emirates',
      airlineLogo: IMAGES.emiratesLogo,
      flightNumber: 'EK 201',
      departureTime: '08:30',
      arrivalTime: '20:45',
      origin: 'JFK',
      destination: 'LHR',
      duration: '7h 15m',
      stops: 'Direct',
      price: 450,
      tag: 'Best Value'
    },
    {
      id: '2',
      airline: 'Qatar Airways',
      airlineLogo: IMAGES.qatarLogo,
      flightNumber: 'QR 702',
      departureTime: '22:00',
      arrivalTime: '14:20',
      origin: 'JFK',
      destination: 'LHR',
      duration: '11h 20m',
      stops: '1 Stop (DOH)',
      price: 380,
    },
    {
      id: '3',
      airline: 'Virgin Atlantic',
      flightNumber: 'VS 04',
      airlineLogo: IMAGES.emiratesLogo, // Using Emirates as placeholder logo since I don't have Virgin Atlantic logo link
      departureTime: '19:30',
      arrivalTime: '07:20',
      origin: 'JFK',
      destination: 'LHR',
      duration: '6h 50m',
      stops: 'Direct',
      price: 520,
      tag: 'Fastest'
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row gap-8">
      {/* Sidebar Filters */}
      <aside className="w-full md:w-64 flex-shrink-0 flex flex-col gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-ambient border border-outline-variant/30">
          <h2 className="text-xl font-bold mb-6">Filters</h2>
          
          <div className="mb-8 pb-6 border-b border-surface-low">
            <h3 className="text-sm font-bold text-outline uppercase tracking-wider mb-4">Stops</h3>
            <div className="flex flex-col gap-4">
              {['Direct', '1 Stop', '2+ Stops'].map((stop, i) => (
                <label key={stop} className="flex items-center gap-3 cursor-pointer group">
                  <input type="checkbox" className="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary" defaultChecked={i === 0} />
                  <span className="text-sm font-medium text-on-surface group-hover:text-primary transition-colors">{stop}</span>
                  <span className="ml-auto text-xs font-bold text-outline/60">${450 - i * 70}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="mb-8 pb-6 border-b border-surface-low">
            <h3 className="text-sm font-bold text-outline uppercase tracking-wider mb-4">Price Range</h3>
            <div className="px-1">
              <div className="relative h-1.5 bg-surface-low rounded-full mt-6 mb-4">
                <div className="absolute h-full bg-primary rounded-full left-[20%] right-[30%]"></div>
                <div className="absolute w-5 h-5 bg-white border-2 border-primary shadow-sm rounded-full top-1/2 -translate-y-1/2 left-[20%] cursor-pointer hover:scale-110 transition-transform"></div>
                <div className="absolute w-5 h-5 bg-white border-2 border-primary shadow-sm rounded-full top-1/2 -translate-y-1/2 right-[30%] cursor-pointer hover:scale-110 transition-transform"></div>
              </div>
              <div className="flex justify-between text-xs font-bold text-outline/60">
                <span>$200</span>
                <span>$1,200+</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold text-outline uppercase tracking-wider mb-4">Airlines</h3>
            <div className="flex flex-col gap-4">
              {['Emirates', 'Qatar Airways', 'Singapore Airlines', 'Lufthansa'].map((airline, i) => (
                <label key={airline} className="flex items-center gap-3 cursor-pointer group">
                  <input type="checkbox" className="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary" defaultChecked={i < 2} />
                  <span className="text-sm font-medium text-on-surface group-hover:text-primary transition-colors">{airline}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </aside>

      {/* Flight Results */}
      <div className="flex-grow flex flex-col gap-6">
        <div className="bg-white rounded-2xl p-4 shadow-ambient border border-outline-variant/20 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="bg-primary/10 p-3 rounded-xl text-primary">
              <Plane size={24} />
            </div>
            <div className="text-left">
              <h1 className="text-2xl font-bold flex items-center gap-2">
                New York (JFK) <MoveRight size={20} className="text-outline" /> London (LHR)
              </h1>
              <p className="text-sm text-outline mt-0.5">Oct 15 - Oct 22 • 1 Adult • Economy</p>
            </div>
          </div>
          <button className="px-6 py-2.5 border-2 border-outline-variant/40 rounded-xl font-bold text-primary hover:bg-surface-low transition-all active:scale-95">
            Modify Search
          </button>
        </div>

        <div className="grid grid-cols-3 gap-2 p-1 bg-white rounded-2xl shadow-ambient border border-outline-variant/10">
          <button className="flex flex-col items-center py-4 rounded-xl transition-all border-b-4 border-primary bg-primary/5">
            <span className="text-sm font-bold text-primary">Cheapest</span>
            <span className="text-xs text-outline">$380 • 11h 20m</span>
          </button>
          <button className="flex flex-col items-center py-4 rounded-xl hover:bg-surface-low transition-all">
            <span className="text-sm font-bold">Best Value</span>
            <span className="text-xs text-outline">$450 • 7h 15m</span>
          </button>
          <button className="flex flex-col items-center py-4 rounded-xl hover:bg-surface-low transition-all">
            <span className="text-sm font-bold">Fastest</span>
            <span className="text-xs text-outline">$520 • 6h 50m</span>
          </button>
        </div>

        <div className="flex gap-4 flex-col">
          {flights.map((flight) => (
            <div key={flight.id} className={`group bg-white rounded-2xl shadow-card p-6 border-2 transition-all hover:border-primary/40 relative overflow-hidden ${flight.tag === 'Best Value' ? 'border-primary/20' : 'border-transparent'}`}>
              {flight.tag && (
                <div className={`absolute top-0 left-0 px-4 py-1.5 rounded-br-2xl text-[11px] font-bold uppercase tracking-widest ${flight.tag === 'Best Value' ? 'bg-primary text-white' : 'bg-surface-high text-outline'}`}>
                  {flight.tag}
                </div>
              )}
              {flight.tag === 'Fastest' && (
                <div className="absolute top-4 right-4 flex items-center gap-1 text-[11px] font-bold text-primary bg-primary/10 px-2 py-1 rounded">
                  <Bolt size={12} /> FASTEST
                </div>
              )}
              
              <div className="flex flex-col lg:flex-row items-center gap-8 mt-4 lg:mt-0">
                <div className="w-full lg:w-48 flex items-center gap-4 shrink-0">
                  <div className="w-14 h-14 rounded-xl bg-surface-low border border-outline-variant/20 flex items-center justify-center overflow-hidden p-2">
                    <img src={flight.airlineLogo} alt={flight.airline} className="w-full h-full object-contain" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-bold text-base leading-tight">{flight.airline}</h4>
                    <p className="text-xs text-outline font-medium">{flight.flightNumber}</p>
                  </div>
                </div>

                <div className="flex-grow flex items-center justify-between gap-12 w-full">
                  <div className="text-right">
                    <p className="text-3xl font-bold font-display">{flight.departureTime}</p>
                    <p className="text-sm font-bold text-outline">{flight.origin}</p>
                  </div>
                  
                  <div className="flex-grow flex flex-col items-center px-4">
                    <p className="text-xs font-bold text-outline/60 mb-2">{flight.duration}</p>
                    <div className="w-full flex items-center gap-2">
                      <div className="h-px bg-outline-variant flex-grow"></div>
                      <Plane size={18} className="text-primary rotate-90" />
                      <div className="h-px bg-outline-variant flex-grow"></div>
                    </div>
                    <p className={`text-xs font-bold mt-2 ${flight.stops === 'Direct' ? 'text-primary' : 'text-outline/80'}`}>
                      {flight.stops}
                    </p>
                  </div>

                  <div className="text-left">
                    <p className="text-3xl font-bold font-display">
                      {flight.arrivalTime}
                      <sup className="text-xs text-secondary ml-1">+1</sup>
                    </p>
                    <p className="text-sm font-bold text-outline">{flight.destination}</p>
                  </div>
                </div>

                <div className="w-full lg:w-44 flex flex-col items-end shrink-0 pl-8 border-t lg:border-t-0 lg:border-l border-outline-variant/30 pt-6 lg:pt-0">
                  <p className="text-xs font-medium text-outline">per traveler</p>
                  <p className="text-4xl font-bold text-on-surface my-1.5">${flight.price}</p>
                  <button className={`w-full py-4 rounded-xl font-bold transition-all shadow-sm active:scale-95 ${flight.tag === 'Best Value' ? 'bg-secondary hover:bg-secondary-dark text-white' : 'border-2 border-primary text-primary hover:bg-primary/5'}`}>
                    Select
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <button className="self-center mt-6 px-10 py-4 bg-white border border-outline-variant/30 rounded-xl font-bold text-on-surface hover:bg-surface-low transition-all shadow-ambient active:scale-95">
          Load More Flights
        </button>
      </div>
    </div>
  );
}
