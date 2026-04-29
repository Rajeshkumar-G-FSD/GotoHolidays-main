/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import VisasPage from './pages/VisasPage';
import FlightsPage from './pages/FlightsPage';
import DashboardPage from './pages/DashboardPage';
import PackagesPage from './pages/PackagesPage';
import { View } from './types';

export default function App() {
  const [currentView, setCurrentView] = useState<View>('home');

  const isDashboard = currentView === 'dashboard';

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return <LandingPage onNavigate={setCurrentView} />;
      case 'visas':
        return <VisasPage />;
      case 'flights':
        return <FlightsPage />;
      case 'dashboard':
        return <DashboardPage onNavigate={setCurrentView} />;
      case 'packages':
        return <PackagesPage onNavigate={setCurrentView} />;
      default:
        return <LandingPage onNavigate={setCurrentView} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans selection:bg-primary/20 selection:text-primary">
      {!isDashboard && <Header currentView={currentView} onNavigate={setCurrentView} />}
      <main className={`flex-grow ${!isDashboard ? 'pt-16' : ''}`}>
        {renderView()}
      </main>
      {!isDashboard && <Footer />}
    </div>
  );
}

