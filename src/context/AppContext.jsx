import React, { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedUniversityId, setSelectedUniversityId] = useState('rupp');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('All locations');
  const [activeModal, setActiveModal] = useState(null); // 'major-detail', 'scholarship-detail', 'event-detail', 'register-event', 'search-modal', 'auth-modal', 'admin-review'
  const [modalData, setModalData] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  // Favorites stored in localStorage
  const [favorites, setFavorites] = useState(() => {
    try {
      const saved = localStorage.getItem('edupath_favorites');
      return saved ? JSON.parse(saved) : {
        universities: ['rupp'],
        majors: ['cs'],
        scholarships: ['stem-access'],
        events: ['engineering-event']
      };
    } catch {
      return { universities: [], majors: [], scholarships: [], events: [] };
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('edupath_favorites', JSON.stringify(favorites));
    } catch (e) {
      console.error(e);
    }
  }, [favorites]);

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const toggleFavorite = (type, id, title = '') => {
    setFavorites(prev => {
      const currentList = prev[type] || [];
      const exists = currentList.includes(id);
      const updated = exists 
        ? currentList.filter(item => item !== id)
        : [...currentList, id];

      showToast(exists ? `Removed from favorites` : `Saved to favorites!`);
      return { ...prev, [type]: updated };
    });
  };

  const isFavorite = (type, id) => {
    return (favorites[type] || []).includes(id);
  };

  const totalFavoritesCount = Object.values(favorites).reduce((acc, list) => acc + list.length, 0);

  const openModal = (type, data = null) => {
    setActiveModal(type);
    setModalData(data);
  };

  const closeModal = () => {
    setActiveModal(null);
    setModalData(null);
  };

  const navigateTo = (page, universityId = null) => {
    if (universityId) {
      setSelectedUniversityId(universityId);
    }
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AppContext.Provider value={{
      currentPage,
      navigateTo,
      selectedUniversityId,
      setSelectedUniversityId,
      searchQuery,
      setSearchQuery,
      selectedLocation,
      setSelectedLocation,
      favorites,
      toggleFavorite,
      isFavorite,
      totalFavoritesCount,
      activeModal,
      modalData,
      openModal,
      closeModal,
      showToast
    }}>
      {children}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#071b38] text-white px-5 py-3 rounded-12 shadow-dropdown flex items-center gap-3 animate-bounce">
          <span className="w-2 h-2 rounded-full bg-[#00a3b3]"></span>
          <span className="text-[14px] font-medium">{toastMessage}</span>
        </div>
      )}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
