"use client";

import React, { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import { Menu, X, Home, BookOpen, Users, Phone, Camera } from 'lucide-react';

// Define types
interface NavItem {
  name: string;
  id: string;
  icon: React.ReactNode;
}

// Navbar Component with scroll navigation
const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('home');

  const navItems: NavItem[] = useMemo(() => [
    { name: 'Home', id: 'home', icon: <Home size={20} /> },
    { name: 'About Us', id: 'about', icon: <Users size={20} /> },
    { name: 'Programs', id: 'programs', icon: <BookOpen size={20} /> },
    { name: 'Gallery', id: 'gallery', icon: <Camera size={20} /> },
    { name: 'Contact Us', id: 'contact', icon: <Phone size={20} /> },
  ], []);

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'home') {
      // For home, scroll to the very top
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      // Add a small delay to ensure DOM is ready
      setTimeout(() => {
        let element = document.getElementById(sectionId);
        
        // Fallback: try to find element by data-section attribute or class
        if (!element) {
          element = document.querySelector(`[data-section="${sectionId}"]`) as HTMLElement;
        }
        
        // Another fallback: try to find by className that includes the section name
        if (!element) {
          element = document.querySelector(`.${sectionId}-section`) as HTMLElement;
        }
        
        if (element) {
          const navbarHeight = 64; // Height of fixed navbar
          const elementPosition = element.offsetTop - navbarHeight - 20; // Extra padding
          
          window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
          });
        } else {
          // Log error if element not found for debugging
          console.warn(`Section with id "${sectionId}" not found. Make sure you have a section with id="${sectionId}" in your content.`);
          console.info(`To fix this, add id="${sectionId}" to your ${sectionId} component's main container.`);
        }
      }, 100);
    }
    setIsOpen(false); // Close mobile menu
  };

  // Track active section while scrolling
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id);
      const navbarHeight = 64;
      const scrollPosition = window.scrollY;
      
      // If we're at the very top, set home as active
      if (scrollPosition < 100) {
        setActiveSection('home');
        return;
      }
      
      // Check other sections
      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        
        // Skip home section in this loop since we handle it above
        if (sectionId === 'home') continue;
        
        const section = document.getElementById(sectionId);
        if (section) {
          const sectionTop = section.offsetTop - navbarHeight - 100;
          if (scrollPosition >= sectionTop) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50 top-0 left-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center flex-wrap gap-2 sm:gap-3">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Image 
                src="/media/nobackground.png" 
                alt="EDWARD ATHIYO FOUNDATION Logo" 
                width={56}
                height={56}
                className="h-24 w-24 sm:h-14 sm:w-14 rounded-full object-cover flex-shrink-0"
                // onError={(e) => { 
                //   const target = e.target as HTMLImageElement;
                //   target.onerror = null; 
                //   target.src = "https://placehold.co/40x40/22c55e/ffffff?text=EAF"; 
                // }}
              />
              <span className="text-sm sm:text-lg md:text-xl font-bold text-gray-800 ml-2 sm:ml-3 whitespace-nowrap">
                <span className="hidden sm:inline">EDWARD ATHIYO FOUNDATION</span>
                <span className="sm:hidden">EAF</span>
              </span>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ease-in-out ${
                    activeSection === item.id
                      ? 'bg-green-500 text-white shadow-md'
                      : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                  } flex items-center`}
                >
                  {item.icon}
                  <span className="ml-2">{item.name}</span>
                </button>
              ))}
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ease-in-out ${
                  activeSection === item.id
                    ? 'bg-green-500 text-white shadow-md'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                } flex items-center`}
              >
                {item.icon}
                <span className="ml-2">{item.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;