'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onExploreClick: () => void;
  onAboutClick: () => void;
  onTestRideClick: () => void;
}

export default function Header({ onExploreClick, onAboutClick, onTestRideClick }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <h1 className="text-3xl font-black text-white tracking-wider drop-shadow-lg">
              THRON<span className="text-orange-500">RIDER</span>
            </h1>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={onExploreClick}
              className="text-gray-300 hover:text-orange-500 transition-colors duration-200 font-medium"
            >
              Explore Collection
            </button>
            <button 
              onClick={onAboutClick}
              className="text-gray-300 hover:text-orange-500 transition-colors duration-200 font-medium"
            >
              About
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-gray-300 hover:text-orange-500 transition-colors duration-200 font-medium"
            >
              Contact
            </button>
            <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors duration-200 font-medium">
              Service
            </a>
          </nav>

          <button 
            onClick={onTestRideClick}
            className="hidden md:block bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200"
          >
            Book Test Ride
          </button>

          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => { onExploreClick(); setIsMenuOpen(false); }}
                className="text-gray-300 hover:text-orange-500 transition-colors duration-200 font-medium text-left"
              >
                Explore Collection
              </button>
              <button 
                onClick={() => { onAboutClick(); setIsMenuOpen(false); }}
                className="text-gray-300 hover:text-orange-500 transition-colors duration-200 font-medium text-left"
              >
                About
              </button>
              <button 
                onClick={() => { document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); setIsMenuOpen(false); }}
                className="text-gray-300 hover:text-orange-500 transition-colors duration-200 font-medium text-left"
              >
                Contact
              </button>
              <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors duration-200 font-medium">
                Service
              </a>
              <button 
                onClick={() => { onTestRideClick(); setIsMenuOpen(false); }}
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200 w-fit"
              >
                Book Test Ride
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}