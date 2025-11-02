'use client';

import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    <div className="flex items-center justify-between h-16">
      <div className="flex items-center">
        <span className="text-xl font-semibold text-slate-900">Alice Chen</span>
      </div>
      
      <div className="hidden md:flex items-center space-x-8">
        <a href="#home" className="text-slate-700 hover:text-slate-900 transition-colors duration-200 text-sm font-medium">
          Home
        </a>
        <a href="#services" className="text-slate-700 hover:text-slate-900 transition-colors duration-200 text-sm font-medium">
          Services
        </a>
        <a href="#pricing" className="text-slate-700 hover:text-slate-900 transition-colors duration-200 text-sm font-medium">
          Pricing
        </a>
        <a href="#contact" className="text-slate-700 hover:text-slate-900 transition-colors duration-200 text-sm font-medium">
          Contact
        </a>
      </div>

      <button className="md:hidden text-slate-700 hover:text-slate-900">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
  </div>
</nav>
  );
}