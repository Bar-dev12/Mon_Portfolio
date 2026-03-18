import skillsData from '@/data/skills.json';
import * as Icons from 'lucide-react'; // On importe toutes les icônes

export default function Skills() {
  return (
    <section id="expertise" className="pt-24 bg-[#0f172a]">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex items-center gap-3 mb-4">
          <Icons.Cpu className="text-cyan-400" size={28} />
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Mon <span className="text-cyan-400">Expertise</span>
          </h2>
        </div>
        <div className="h-1 w-28 bg-cyan-400 rounded-full mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillsData.map((group, index) => {
            // On récupère dynamiquement l'icône du JSON
            const IconComponent = (Icons as unknown as Record<string, React.ComponentType<{size: number}>>)[group.icon] || Icons.Code;

            return (
              <div 
                key={index} 
                className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-cyan-400/50 transition-all duration-300 group hover:-translate-y-2"
              >
                {/* Icône stylisée */}
                <div className="w-12 h-12 bg-cyan-400/10 rounded-xl flex items-center justify-center mb-6 text-cyan-400 group-hover:bg-cyan-400 group-hover:text-slate-950 transition-colors">
                  <IconComponent size={28} />
                </div>

                <h3 className="text-xl font-bold text-white mb-6">
                  {group.category}
                </h3>
                
                <div className="space-y-5">
                  {group.skills.map((skill, sIndex) => (
                    <div key={sIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="text-slate-300 text-sm font-medium">{skill.name}</span>
                        <span className="text-cyan-400 text-[10px] font-bold uppercase tracking-widest">{skill.level}</span>
                      </div>
                      <div className="w-full bg-slate-800/50 h-1.5 rounded-full overflow-hidden">
                        <div 
                          className="bg-linear-to-r from-cyan-500 to-blue-500 h-full rounded-full transition-all duration-1000" 
                          style={{ width: skill.level === 'Expert' ? '95%' : skill.level === 'Avancé' ? '80%' : skill.level === 'Très bon' ? '70%' : skill.level === 'Bon' ? '50%' : skill.level === 'Intermédiaire' ? '25%' : skill.level === 'Débutant' ? '10%' : '0%' }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}