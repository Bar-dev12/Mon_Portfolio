import Image from 'next/image';
import Link from 'next/link';
import siteConfig from '@/data/siteConfig.json';

export default function Hero() {
  const { personal } = siteConfig;

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* --- CÔTÉ GAUCHE : TEXTES --- */}
        <div className="order-2 lg:order-1 text-left">
            <p>
            <span className="text-2xl animate-waving-hand origin-[70%_70%] inline-block">
                👋
            </span>
            <span className="text-sm uppercase tracking-widest text-cyan-400 font-bold">
              Salut, je suis
            </span>
            </p>
          <h1 className="text-4xl md:text-7xl font-black text-white leading-none tracking-normal">
            {personal.firstName} <br />
            <span className="text-cyan-400">{personal.lastName}</span>
          </h1>
          
          <h2 className="mt-4 text-xl md:text-2xl font-medium text-slate-300">
            {personal.role}
          </h2>
          
          <p className="mt-6 text-slate-400 text-md max-w-lg leading-relaxed italic">
            {personal.description}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="#projets" className="px-8 py-4 bg-cyan-500 text-slate-950 font-bold rounded-xl hover:scale-105 transition-transform">
              Mes réalisations
            </Link>
            <Link href="#contact" className="px-8 py-4 border border-slate-700 text-white font-semibold rounded-xl hover:bg-slate-800 transition-all">
              Me contacter
            </Link>
          </div>
        </div>

        {/* --- CÔTÉ DROIT : PHOTO ET DESIGN --- */}
        <div className="order-1 lg:order-2 flex justify-center items-center relative">
          {/* Cercles animés en arrière-plan de la photo */}
          <div className="absolute w-72 h-72 md:w-96 md:h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
          
          <div className="relative group">
            {/* Cadre décoratif */}
            <div className="absolute -inset-4 border-2 border-dashed border-cyan-400/30 rounded-full animate-[spin_20s_linear_infinite]"></div>
            
            {/* Conteneur de la photo */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-slate-800 overflow-hidden bg-slate-900 shadow-2xl shadow-cyan-500/20">
              <Image 
                src={personal.avatar}
                alt={`${personal.firstName} ${personal.lastName}`}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                priority
              />
            </div>

            {/* Petit badge flottant */}
            <div className="absolute bottom-4 -right-4 bg-slate-800 border border-slate-700 p-4 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-xs font-bold text-white uppercase tracking-widest">Disponible</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}