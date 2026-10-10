import React, { useState } from 'react';
import { LandingLayout } from './layouts/LandingLayout';
import { HomePage } from './pages/HomePage';
import { CheckoutPage } from './pages/CheckoutPage';
import { SuccessPage } from './pages/SuccessPage';
import { Modal } from './components/UI/Modal';
import { Login } from './components/Auth/Login';
import { Register } from './components/Auth/Register';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState('login');

  return (
    <LandingLayout onNavigate={setCurrentPage} onOpenAuth={() => setIsAuthOpen(true)}>
      {currentPage === 'home' && <HomePage onBuyNow={() => setCurrentPage('checkout')} />}
      {currentPage === 'checkout' && (
        <CheckoutPage onSuccess={() => setCurrentPage('success')} onBack={() => setCurrentPage('home')} />
      )}
      {currentPage === 'success' && <SuccessPage onGoHome={() => setCurrentPage('home')} />}

      <Modal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} title={authMode === 'login' ? 'Log In' : 'Register'}>
        {authMode === 'login' ? (
          <Login onSuccess={() => setIsAuthOpen(false)} onSwitchToRegister={() => setAuthMode('register')} />
        ) : (
          <Register onSuccess={() => setIsAuthOpen(false)} onSwitchToLogin={() => setAuthMode('login')} />
        )}
      </Modal>
    </LandingLayout>
  );
}