import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { LoginForm, RegisterForm, ForgotPasswordForm } from './components/AuthForms';
import { HomeContent } from './components/HomeContent';
import { TaskContent } from './components/TaskContent';
import { ReportContent } from './components/ReportContent';

export type View = 'login' | 'register' | 'forgot-password' | 'home' | 'tasks' | 'reports';

function App() {
  const [currentView, setCurrentView] = useState<View>('login');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
    setCurrentView('home');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentView('login');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar currentView={currentView} setCurrentView={setCurrentView} isAuthenticated={isAuthenticated} onLogout={handleLogout} />
      
      <main className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center justify-center">
          {!isAuthenticated ? (
            <>
              <div className="w-full max-w-md">
                {currentView === 'login' && <LoginForm onLogin={handleLogin} onRegister={() => setCurrentView('register')} onForgot={() => setCurrentView('forgot-password')} />}
                {currentView === 'register' && <RegisterForm onLogin={() => setCurrentView('login')} />}
                {currentView === 'forgot-password' && <ForgotPasswordForm onBack={() => setCurrentView('login')} />}
              </div>
            </>
          ) : (
            <div className="w-full max-w-6xl">
              {currentView === 'home' && <HomeContent />}
              {currentView === 'tasks' && <TaskContent />}
              {currentView === 'reports' && <ReportContent />}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;