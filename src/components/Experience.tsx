import experiencesData from '@/data/experiences.json';
import { Briefcase, Calendar } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="pt-24 bg-[#0f172a]">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex items-center gap-3 mb-4">
          <Briefcase className="text-cyan-400" size={28} />
          <h2 className="text-3xl font-bold text-white uppercase tracking-tight">
            Parcours <span className="text-cyan-400">Pro</span>
          </h2>
        </div>
        <div className="h-1 w-50 bg-cyan-400 rounded-full mb-12"></div>

        <div className="space-y-8">
          {experiencesData.map((exp) => (
            <div key={exp.id} className="relative pl-8 border-l-2 border-slate-800 hover:border-cyan-400/50 transition-colors group md:ml-6 ml-4">
              
                {/* Le point sur la ligne de temps */}
                <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full border-2 border-[#0f172a] 
                    ${exp.current ? 'bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]' : 'bg-slate-700'}`} 
                />

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                    <div className=" text-white group-hover:text-cyan-400 transition-colors">
                        <h3 className="text-xl font-bold">{exp.role}</h3>
                        <p className="text-sm font-normal">{exp.company}</p>
                    </div>
                    
                    <div className="flex flex-col items-end gap-2 text-slate-400 text-sm font-medium">
                        <div className="flex items-center gap-2">    
                            <Calendar size={14} />
                            <span>{exp.period}</span>
                        </div>
                        {exp.current && (
                            <span className="ml-2 px-2 py-0.5 bg-cyan-500/10 text-cyan-400 text-[10px] uppercase font-bold rounded-full border border-cyan-500/20 animate-pulse">
                            En poste
                            </span>
                        )}
                    </div>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed max-w-2xl">
                    {exp.description}
                </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}