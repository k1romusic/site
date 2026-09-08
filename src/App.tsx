import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { I18nProvider } from './i18n/I18nContext';
import { HomePage } from './pages/HomePage';
import { useSmoothScroll } from './hooks/useSmoothScroll';

const AppContent: React.FC = () => {
  useSmoothScroll(true);

  return (
    <Routes>
      {/* Root redirects to Home */}
      <Route path="/" element={<HomePage />} />
      <Route path="/ru" element={<HomePage />} />
      <Route path="/en" element={<HomePage />} />

      {/* Fallback to Home for phase 1 */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export const App: React.FC = () => {
  return (
    <I18nProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </I18nProvider>
  );
};

export default App;
