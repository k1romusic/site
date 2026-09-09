import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { I18nProvider } from './i18n/I18nContext';
import { HomePage } from './pages/HomePage';
import { PluginsPage } from './pages/PluginsPage';
import { useSmoothScroll, scrollToPosition } from './hooks/useSmoothScroll';

const ScrollToTop: React.FC = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const timer = setTimeout(() => {
        scrollToPosition(hash, false);
      }, 100);
      return () => clearTimeout(timer);
    } else {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      scrollToPosition(0, true);
    }
  }, [pathname, hash]);

  return null;
};

const AppContent: React.FC = () => {
  useSmoothScroll(true);

  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* Root redirects to Home */}
        <Route path="/" element={<HomePage />} />
        <Route path="/ru" element={<HomePage />} />
        <Route path="/en" element={<HomePage />} />
        <Route path="/plugins" element={<PluginsPage />} />
        <Route path="/software" element={<PluginsPage />} />

        {/* Fallback to Home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
};

export const App: React.FC = () => {
  return (
    <I18nProvider>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <AppContent />
      </BrowserRouter>
    </I18nProvider>
  );
};

export default App;

