"use client"; // Obligatoire pour utiliser useState

import { useState } from 'react';
import Link from 'next/link';
import siteConfig from '@/data/siteConfig.json';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Fonction pour fermer le menu quand on clique sur un lien
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-slate-800 bg-[#0f172a]/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* LOGO */}
        <div className="text-xl font-bold text-cyan-400">
          <Link href="#hero" className="hover:bg-linear-to-r from-cyan-400 to-blue-500 hover:bg-clip-text hover:text-transparent transition-colors">
            {siteConfig.logo}
          </Link>
        </div>
        
        {/* DESKTOP MENU (Caché sur mobile) */}
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
          <Link href="#parcours" className="hover:text-cyan-400 transition-colors">Parcours</Link>
          <Link href="#expertise" className="hover:text-cyan-400 transition-colors">Expertise</Link>
          <Link href="#projets" className="hover:text-cyan-400 transition-colors">Projets</Link>
          <Link href="#contact" className="hover:text-cyan-400 transition-colors">Contact</Link>
        </div>
        <div className='hidden md:flex'>
          <Link 
            href="/cv"
            target="_blank" 
            className="px-4 py-1.5 -mt-1 rounded-full border border-cyan-400/50 text-cyan-400 text-sm font-semibold hover:bg-cyan-400/10 transition-all"
          >
            Mon CV
          </Link>
        </div>

        {/* BURGER BUTTON (Visible uniquement sur mobile) */}
        <button 
          className="md:hidden text-slate-300 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

        {/* MOBILE MENU (Déroulement vertical propre) */}
        <div className={`
        md:hidden absolute top-16 left-0 w-full bg-[#0f172a]/90 backdrop-blur-md border-b border-slate-800 transition-all duration-300 ease-in-out
        ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0 pointer-events-none'}
        `}>
            <div className="flex flex-col p-6 space-y-4">
                <Link 
                href="#parcours" 
                onClick={closeMenu} 
                className="text-lg font-medium text-slate-300 hover:text-cyan-400 py-2 border-b border-slate-800/50"
                >
                Parcours
                </Link>
                <Link 
                href="#expertise" 
                onClick={closeMenu} 
                className="text-lg font-medium text-slate-300 hover:text-cyan-400 py-2 border-b border-slate-800/50"
                >
                Expertise
                </Link>
                <Link 
                href="#projets" 
                onClick={closeMenu} 
                className="text-lg font-medium text-slate-300 hover:text-cyan-400 py-2 border-b border-slate-800/50"
                >
                Projets
                </Link>
                <Link 
                href="#contact" 
                onClick={closeMenu} 
                className="text-lg font-medium text-slate-300 hover:text-cyan-400 py-2"
                >
                Contact
                </Link>
                
                <Link 
                href="/cv"
                target="_blank" 
                onClick={closeMenu}
                className="mt-2 w-full py-4 rounded-xl bg-cyan-500 text-slate-950 hover:bg-cyan-700 transition-all text-center font-bold shadow-lg shadow-cyan-500/20"
                >
                Voir mon CV
                </Link>
            </div>
        </div>
    </nav>
  );
}