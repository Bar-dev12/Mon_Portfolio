"use client";

import { useEffect, useState } from 'react';
import { ChevronUp } from 'lucide-react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Fonction pour gérer la visibilité au scroll
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Remonter en haut avec fluidité
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed bottom-8 right-8 z-50 p-3 rounded-xl bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/20
        transition-all duration-300 hover:scale-110 hover:bg-cyan-400 active:scale-95
        ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'}
      `}
      aria-label="Retour en haut"
    >
      <ChevronUp size={24} strokeWidth={3} />
    </button>
  );
}