
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import AuthModal from './AuthModal';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [authModal, setAuthModal] = useState<'signin' | 'signup' | null>(null);

  return (
    <>
      <nav className="bg-white shadow-sm relative z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-gray-900">RentSetu</h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#" className="text-gray-900 hover:text-[#0d9488] px-3 py-2 text-sm font-medium transition-colors">
                  Home
                </a>
                <a href="#" className="text-gray-700 hover:text-[#0d9488] px-3 py-2 text-sm font-medium transition-colors">
                  Our Services
                </a>
                <a href="#" className="text-gray-700 hover:text-[#0d9488] px-3 py-2 text-sm font-medium transition-colors">
                  How it works
                </a>
              </div>
            </div>

            {/* Desktop Auth Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <button 
                onClick={() => setAuthModal('signup')}
                className="bg-[#0d9488] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#0d9488]/90 transition-colors"
              >
                List Your Property
              </button>
              <button 
                onClick={() => setAuthModal('signin')}
                className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors border border-gray-300 rounded-lg"
              >
                Sign-in
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-gray-900 p-2"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg border-t">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a href="#" className="text-gray-900 block px-3 py-2 text-base font-medium">
                  Home
                </a>
                <a href="#" className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium">
                  Our Services
                </a>
                <a href="#" className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium">
                  How it works
                </a>
                <div className="pt-4 pb-3 border-t border-gray-200">
                  <button 
                    onClick={() => setAuthModal('signup')}
                    className="bg-[#0d9488] text-white px-4 py-2 rounded-lg text-sm font-medium w-full mb-2"
                  >
                    List Your Property
                  </button>
                  <button 
                    onClick={() => setAuthModal('signin')}
                    className="text-gray-700 px-3 py-2 text-sm font-medium w-full border border-gray-300 rounded-lg"
                  >
                    Sign-in
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      <AuthModal 
        type={authModal} 
        onClose={() => setAuthModal(null)} 
        onSwitchMode={(mode) => setAuthModal(mode)}
      />
    </>
  );
};

export default Navigation;
