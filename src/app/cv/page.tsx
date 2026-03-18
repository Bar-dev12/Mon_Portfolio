"use client"; // Obligatoire pour utiliser des hooks comme useState
import siteConfig from '@/data/siteConfig.json';
import skillsData from '@/data/skills.json';
import parcoursData from '@/data/parcours.json';
import projectsData from '@/data/projects.json';
import { Mail, Phone, MapPin, Globe, Github } from 'lucide-react';
import React from 'react';
import Image from 'next/image';

// 1. Définition de l'interface pour tes projets (Évite le type 'any')
interface Project {
  id: string;
  title: string;
  description: string;
  stack: string[];
  duration?: string;
  // ajoute d'autres champs si nécessaire
}

export default function CVPage() {
  const { personal, contact, languages } = siteConfig;

  // 2. On sélectionne les projets importants (typés proprement)
  const featuredProjects: Project[] = projectsData.slice(0, 4);

  return (
    <main className="min-h-screen bg-white text-slate-900 p-4 md:p-8 print:p-0">
      {/* BOUTON IMPRIMER (Caché à l'impression) */}
        <div className="max-w-[21cm] mx-auto mb-4 flex justify-end print:hidden">
            <button 
            onClick={() => window.print()}
            className="px-6 py-2 bg-cyan-600 text-white rounded-lg font-bold hover:bg-cyan-700 transition-colors"
            >
                Télécharger / Imprimer PDF
            </button>
        </div>

        <div className="max-w-[21cm] mx-auto bg-white shadow-2xl min-h-[29.7cm] flex flex-col md:flex-row print:flex-row border border-slate-100 [print-color-adjust:exact]">
            
            {/* --- COLONNE GAUCHE (SIDEBAR) --- */}
            <div className="w-full md:w-1/3 print:w-1/3 bg-slate-50 p-8 border-r border-slate-100 shrink-0">
                {/* --- AJOUT DE LA PHOTO --- */}
                <div className="flex justify-center md:justify-start mb-6">
                    <div className="relative w-46 h-46 rounded-full overflow-hidden border-4 border-white shadow-lg print:shadow-none">
                    <Image 
                        src={personal.avatar} // Assure-toi que ce chemin est correct dans ton siteConfig.json
                        alt={`${personal.firstName} ${personal.lastName}`}
                        fill
                        className="object-cover"
                        priority // Charge cette image en priorité
                    />
                    </div>
                </div>

                {/* --- INFOS PERSONNELLES --- */}
                <div className="mb-8 text-center md:text-left">
                    <h1 className="text-[20px] font-black text-slate-900 uppercase leading-tight">
                        {personal.firstName} {personal.lastName}
                    </h1>
                    <p className="text-cyan-600 font-bold mt-2">{personal.role}</p>
                </div>

                {/* --- CONTACT ET RÉSEAUX --- */}
                <div className="space-y-4 mb-10 text-sm">
                    <ContactInfo icon={<Mail size={16}/>} text={contact.email} />
                    <ContactInfo icon={<Phone size={16}/>} text={personal.phone} />
                    <ContactInfo icon={<MapPin size={16}/>} text={personal.location} />
                    <ContactInfo icon={<Globe size={16}/>} text={contact.portfolio} />
                </div>

                {/* --- COMPÉTENCES ET LANGUES --- */}
                <section className="mb-10">
                    <h2 className="text-sm font-black uppercase tracking-widest mb-4 border-b-2 border-cyan-500 pb-1 inline-block">Compétences</h2>
                    {skillsData.map((cat) => (
                    <div key={cat.category} className="mb-4">
                        <p className="font-bold text-xs text-slate-500 mb-1">{cat.category}</p>
                        <p className="text-sm">{cat.skills.map(s => s.name).join(', ')}</p>
                    </div>
                    ))}
                </section>

                {/* --- LANGUES --- */}
                <section>
                    <h2 className="text-sm font-black uppercase tracking-widest mb-4 border-b-2 border-cyan-500 pb-1 inline-block">Langues</h2>
                    {languages.map(l => (
                    <div key={l.name} className="flex justify-between text-sm mb-1">
                        <span>{l.name}</span>
                        <span className="text-slate-400 italic">{l.level}</span>
                    </div>
                    ))}
                </section>
            </div>

            {/* --- COLONNE DROITE (CONTENU) --- */}
            <div className="flex-1 md:w-2/3 print:w-2/3 p-8 md:p-12 bg-white">
            <section className="mb-10">
                <h2 className="text-lg font-black uppercase tracking-widest mb-4 flex items-center gap-2">
                <span className="w-8 h-1 bg-cyan-500"></span> Profil
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">{personal.bio}</p>
            </section>

            <section className="mb-10">
                <h2 className="text-lg font-black uppercase tracking-widest mb-6 flex items-center gap-2">
                <span className="w-8 h-1 bg-cyan-500"></span> Éducation
                </h2>
                <div className="space-y-6">
                {parcoursData.map((edu) => (
                    <div key={edu.id}>
                    <div className="flex justify-between items-baseline">
                        <h3 className="font-bold text-slate-900">{edu.degree}</h3>
                        <span className="text-xs font-mono text-cyan-600">{edu.period}</span>
                    </div>
                    <p className="text-sm text-slate-500">{edu.institution} {edu.mention && `| ${edu.mention}`}</p>
                    </div>
                ))}
                </div>
            </section>

            <section>
            <h2 className="text-lg font-black uppercase tracking-widest mb-6 flex items-center gap-2">
            <span className="w-8 h-1 bg-cyan-500"></span> Projets Clés
            </h2>
            <div className="grid grid-cols-1 gap-4">
            {featuredProjects.map((p) => (
                <div key={p.id} className="border-l-2 border-slate-100 pl-4">
                <h3 className="font-bold text-sm">{p.title}</h3>
                <p className="text-xs text-slate-500 mt-1">{p.description}</p>
                <p className="text-[10px] text-cyan-600 mt-1 font-mono">
                    {p.stack.join(' • ')}
                </p>
                </div>
            ))}
            </div>
        </section>
            </div>
        </div>
    </main>
  );
}

function ContactInfo({ icon, text }: { icon: React.ReactNode, text: string }) {
    return (
        <div className="flex items-center gap-3 text-slate-600">
        <span className="text-cyan-600">{icon}</span>
        <span>{text}</span>
        </div>
    );
}