import projectsData from '@/data/projects.json';
import { ExternalLink, Github, Users, CheckCircle2, Construction } from 'lucide-react';
import Image from 'next/image';

interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  thumbnail: string;
  github?: string;
  link?: string;
  collaborators: string[];
  stack: string[];
  duration: string;
}

export default function Projects() {
  // On sépare les projets selon leur statut
  const completedProjects = projectsData.filter(p => p.duration !== "En cours");
  const activeProjects = projectsData.filter(p => p.duration === "En cours");

  // Composant réutilisable pour une carte de projet
  const ProjectCard = ({ project, isPending }: { project: Project, isPending: boolean }) => (
    <div className="group bg-slate-900/40 border border-slate-800 rounded-3xl overflow-hidden hover:border-cyan-400/30 transition-all duration-500 flex flex-col">
      <div className="relative h-48 w-full overflow-hidden">
        <Image 
          src={project.thumbnail}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {isPending && (
          <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-[2px] flex items-center justify-center">
            <span className="bg-amber-500/20 border border-amber-500/50 text-amber-500 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
              <Construction size={14} /> En développement
            </span>
          </div>
        )}
      </div>

      <div className="p-6 flex flex-col grow">
        <div className="flex justify-between items-start mb-4">
          <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest bg-cyan-400/10 px-2 py-1 rounded">
            {project.category}
          </span>
          <div className="flex gap-3 text-slate-400">
            {project.github !== "#" && <a href={project.github} className="hover:text-white transition-colors" title="Voir sur GitHub"><Github size={18} /></a>}
            {project.link !== "#" && <a href={project.link} className="hover:text-white transition-colors" title="Voir sur le site"><ExternalLink size={18} /></a>}
          </div>
        </div>

        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
        <p className="text-slate-400 text-sm mb-6 grow">{project.description}</p>

        {project.collaborators.length > 0 && (
          <div className="flex items-center gap-2 mb-4 text-slate-500 text-[11px] italic">
            <Users size={12} />
            <span>Avec {project.collaborators.join(', ')}</span>
          </div>
        )}

        <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/50">
          {project.stack.map((tech: string) => (
            <span key={tech} className="text-[10px] text-slate-500 bg-slate-800/30 px-2 py-1 rounded border border-slate-700/50">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section id="projets" className="py-24 bg-[#0f172a]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- SECTION RÉALISATIONS (TERMINÉES) --- */}
        <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
                <CheckCircle2 className="text-cyan-400" size={24} />
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Mes <span className="text-cyan-400">Réalisations</span>
                    </h2>
                    <div className="h-1 w-17 bg-cyan-400 rounded-full"></div>
                </div>
            </div>
            <p className="text-slate-400 mb-8 max-w-2xl">Projets finalisés et déployés avec succès.</p>
            
            <div className="flex flex-col md:flex-row md:flex-wrap lg:justify-center gap-8">
                {completedProjects.map(project => (
                    <div key={project.id} className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-100">
                    <ProjectCard project={project} isPending={false} />
                    </div>
                ))}
            </div>
        </div>

        <div className="h-px w-full bg-slate-800 my-16 opacity-50"></div>

        {/* --- SECTION PROJETS (EN COURS) --- */}
        <div>
          <div className="flex items-center gap-3 mb-4 text-amber-500">
            <Construction size={24} />
            <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Projets <span className="text-cyan-400">en cours</span>
                </h2>
                <div className="h-1 w-30 bg-cyan-400 rounded-full"></div>
            </div>
          </div>
          <p className="text-slate-400 mb-8 max-w-2xl">Ce sur quoi je travaille actuellement au quotidien.</p>
          
          <div className="flex flex-wrap justify-center gap-8">
            {activeProjects.map((project) => (
                <div 
                key={project.id} 
                className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-100"
                >
                <ProjectCard project={project} isPending={true} />
                </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}