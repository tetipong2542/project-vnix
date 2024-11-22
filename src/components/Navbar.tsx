import React, { useState } from 'react';
import { LogIn, Home, ClipboardList, BarChart2, Menu, X, UserPlus, LogOut } from 'lucide-react';
import { Logo } from './Logo';
import { View } from '../App';

interface NavbarProps {
  currentView: View;
  setCurrentView: (view: View) => void;
  isAuthenticated: boolean;
  onLogout: () => void;
}

export function Navbar({ currentView, setCurrentView, isAuthenticated, onLogout }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  const handleNavigation = (view: View) => {
    setCurrentView(view);
    setIsMenuOpen(false);
    setIsAuthOpen(false);
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Column 1: Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Logo />
          </div>

          {/* Column 2: Navigation */}
          {isAuthenticated && (
            <div className="hidden sm:flex sm:items-center sm:space-x-8">
              <NavLink
                icon={<Home size={18} />}
                text="Home"
                isActive={currentView === 'home'}
                onClick={() => handleNavigation('home')}
              />
              <NavLink
                icon={<ClipboardList size={18} />}
                text="Tasks"
                isActive={currentView === 'tasks'}
                onClick={() => handleNavigation('tasks')}
              />
              <NavLink
                icon={<BarChart2 size={18} />}
                text="Reports"
                isActive={currentView === 'reports'}
                onClick={() => handleNavigation('reports')}
              />
            </div>
          )}

          {/* Column 3: Auth */}
          <div className="hidden sm:flex sm:items-center sm:space-x-2">
            {isAuthenticated ? (
              <button
                onClick={onLogout}
                className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <LogOut size={18} />
                <span>Logout</span>
              </button>
            ) : (
              <div className="relative">
                <button
                  onClick={() => setIsAuthOpen(!isAuthOpen)}
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <LogIn size={18} />
                  <span>Account</span>
                </button>

                {isAuthOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
                    <AuthMenuItem
                      icon={<LogIn size={18} />}
                      text="Login"
                      onClick={() => handleNavigation('login')}
                    />
                    <AuthMenuItem
                      icon={<UserPlus size={18} />}
                      text="Register"
                      onClick={() => handleNavigation('register')}
                    />
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="sm:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {isAuthenticated ? (
              <>
                <MobileNavLink
                  icon={<Home size={18} />}
                  text="Home"
                  onClick={() => handleNavigation('home')}
                />
                <MobileNavLink
                  icon={<ClipboardList size={18} />}
                  text="Tasks"
                  onClick={() => handleNavigation('tasks')}
                />
                <MobileNavLink
                  icon={<BarChart2 size={18} />}
                  text="Reports"
                  onClick={() => handleNavigation('reports')}
                />
                <MobileNavLink
                  icon={<LogOut size={18} />}
                  text="Logout"
                  onClick={onLogout}
                />
              </>
            ) : (
              <>
                <MobileNavLink
                  icon={<LogIn size={18} />}
                  text="Login"
                  onClick={() => handleNavigation('login')}
                />
                <MobileNavLink
                  icon={<UserPlus size={18} />}
                  text="Register"
                  onClick={() => handleNavigation('register')}
                />
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

interface NavLinkProps {
  icon: React.ReactNode;
  text: string;
  isActive?: boolean;
  onClick: () => void;
}

function NavLink({ icon, text, isActive, onClick }: NavLinkProps) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
        isActive
          ? 'bg-indigo-50 text-indigo-700'
          : 'text-gray-700 hover:bg-gray-100'
      }`}
    >
      {icon}
      <span>{text}</span>
    </button>
  );
}

interface MobileNavLinkProps {
  icon: React.ReactNode;
  text: string;
  onClick: () => void;
}

function MobileNavLink({ icon, text, onClick }: MobileNavLinkProps) {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center space-x-2 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100"
    >
      {icon}
      <span>{text}</span>
    </button>
  );
}

function AuthMenuItem({ icon, text, onClick }: MobileNavLinkProps) {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
    >
      {icon}
      <span>{text}</span>
    </button>
  );
}