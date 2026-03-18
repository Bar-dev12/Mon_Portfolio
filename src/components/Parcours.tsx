import parcoursData from '@/data/parcours.json';
import { GraduationCap, Calendar, Award } from 'lucide-react';

export default function Parcours() {
  // TRI AUTOMATIQUE : du plus récent au plus ancien
  const sortedParcours = [...parcoursData].sort((a, b) => {
    return b.endDate.localeCompare(a.endDate);
  });

  return (
    <section id="parcours" className="pt-24 bg-[#0f172a]">
        <div className="max-w-7xl mx-auto px-6">
            
            <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="text-cyan-400" size={28} />
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                    Formation <span className="text-cyan-400">& Diplômes</span>
                </h2>
            </div>
            <div className="h-1 w-54 bg-cyan-400 rounded-full mb-12"></div>

            {/* Conteneur de la timeline - La ligne est fixée à gauche */}
            <div className="relative border-l-2 border-slate-800 ml-3 md:ml-6">
                {sortedParcours.map((item) => (
                    <div key={item.id} className="relative pl-8 md:pl-10">
                    
                        {/* Point lumineux sur la ligne */}
                        <div className="absolute -left-2.25 top-0 w-4 h-4 bg-[#0f172a] border-2 border-cyan-400 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.5)] z-10"></div>
                        
                        <div className="group bg-slate-900/30 border border-slate-800/50 p-6 rounded-2xl hover:border-cyan-400/30 transition-all duration-300">
                            
                            {/* Header : Période et Mention (si elle existe) */}
                            <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                            <div className="flex items-center gap-2 text-cyan-400/80 font-mono text-xs">
                                <Calendar size={14} />
                                {item.period}
                            </div>
                            
                            {/* Mention du diplôme obtenue (Affichage conditionnel) */}
                            {item.mention && (
                                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-bold uppercase tracking-wider">
                                <Award size={12} />
                                {item.mention}
                                </div>
                            )}
                            </div>
                            
                            {/* Diplôme et Institution */}
                            <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                            {item.degree}
                            </h3>
                            
                            <div className="flex items-center gap-2 text-slate-300 text-sm mb-4 font-semibold">
                            <GraduationCap size={16} className="text-cyan-500" />
                            {item.institution}
                            </div>

                            <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                            {item.description}
                            </p>

                            {/* Skills acquis */}
                            <div className="flex flex-wrap gap-2">
                            {item.skills.map(skill => (
                                <span key={skill} className="text-[10px] bg-slate-800/50 text-slate-400 border border-slate-700/50 px-2 py-0.5 rounded-md group-hover:border-cyan-400/20 transition-colors">
                                {skill}
                                </span>
                            ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
}