import React from 'react';
import { useApp } from './context/AppContext';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Modal } from './components/Modal';

import { HomePage } from './pages/HomePage';
import { UniversitiesPage } from './pages/UniversitiesPage';
import { UniversityDetailPage } from './pages/UniversityDetailPage';
import { MajorsPage } from './pages/MajorsPage';
import { ScholarshipsPage } from './pages/ScholarshipsPage';
import { EventsPage } from './pages/EventsPage';
import { AiGuidancePage } from './pages/AiGuidancePage';
import { FavoritesPage } from './pages/FavoritesPage';
import { AdminDashboardPage } from './pages/AdminDashboardPage';

function AppContent() {
  const { currentPage } = useApp();

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'universities':
        return <UniversitiesPage />;
      case 'university-detail':
        return <UniversityDetailPage />;
      case 'majors':
        return <MajorsPage />;
      case 'scholarships':
        return <ScholarshipsPage />;
      case 'events':
        return <EventsPage />;
      case 'guidance':
        return <AiGuidancePage />;
      case 'favorites':
        return <FavoritesPage />;
      case 'admin':
        return <AdminDashboardPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#f8fbfe] text-[#071b38]">
      <Navigation />
      <main className="flex-1 w-full">
        {renderPage()}
      </main>
      <Footer />
      <Modal />
    </div>
  );
}

export default function App() {
  return <AppContent />;
}
