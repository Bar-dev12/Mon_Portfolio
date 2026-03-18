import Image from 'next/image';
import siteConfig from '@/data/siteConfig.json';
import { Mail, Facebook, Github, Linkedin, MessageCircle } from 'lucide-react';

export default function Contact() {
  const { contact, personal } = siteConfig;

  return (
    <footer id="contact" className="pt-15 pb-5 bg-[#0b1221] border-t border-slate-800/50">
        <div className="max-w-7xl mx-auto px-6">
            
            {/* --- SECTION CONTACT PRINCIPALE --- */}
            <div className="flex flex-col lg:flex-row items-center gap-12 mb-10">
            
                {/* GAUCHE : PHOTO AVEC DESIGN */}
                <div className="relative w-full lg:w-1/3 flex justify-center">
                    {/* Design de fond (cercles) */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>
                    
                    <div className="relative group">
                        {/* Bordure stylisée */}
                        <div className="absolute -inset-2 bg-linear-to-r from-cyan-500 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
                        
                        <div className="relative w-48 h-60 rounded-2xl overflow-hidden border border-slate-700">
                            <Image 
                            src={personal.footeravatar} // On utilise la même image ou une autre définie dans le JSON
                            alt={personal.firstName}
                            fill
                            className="object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* DROITE : TEXTES ET CTA ICONES */}
                <div className="w-full lg:w-2/3 text-center lg:text-left">
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
                    Un projet en <span className="text-cyan-400">tête ?</span>
                    </h2>
                    <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto lg:mx-0 italic">
                    &quot;Besoin d&apos;un site, d&apos;une application web ou Desktop ? Où simplement d&apos;une collaboration sur un projet ? Discutons en.&quot;
                    </p>

                    <div className="flex flex-wrap justify-center lg:justify-start gap-4 w-full max-w-xl mx-auto lg:mx-0">
                        {/* CTA Email */}
                        <a href={`mailto:${contact.email}`} className="flex-1 flex items-center gap-3 px-6 py-3 bg-slate-900 border border-slate-800 rounded-xl text-white hover:border-cyan-400/50 transition-all group">
                            <div className="p-2 bg-cyan-500 rounded-lg text-slate-950 group-hover:scale-110 transition-transform">
                            <Mail size={20} />
                            </div>
                            <span className="font-bold pl-5">Contact par Mail</span>
                        </a>

                        {/* CTA WhatsApp */}
                        <a href={`${contact.socials.whatsapp}`} className="flex-1 flex items-center gap-3 px-6 py-3 bg-slate-900 border border-slate-800 rounded-xl text-white hover:border-green-500/50 transition-all group">
                            <div className="p-2 bg-green-500 rounded-lg text-slate-950 group-hover:scale-110 transition-transform">
                            <MessageCircle size={20} />
                            </div>
                            <span className="font-bold pl-5">Contact WhatsApp</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* --- RÉSEAUX SOCIAUX AVEC TEXTE INCITATIF --- */}
            <div className="text-center mb-8">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500 mb-6 font-bold">
                Suivez mon quotidien de dev
            </p>
            <div className="flex justify-center gap-4">
                <SocialLink href={contact.socials.facebook} icon={<Facebook size={20} />} label="Facebook" />
                <SocialLink href={contact.socials.github} icon={<Github size={20} />} label="GitHub" />
                <SocialLink href={contact.socials.linkedin} icon={<Linkedin size={20} />} label="LinkedIn" />
            </div>
            </div>

            {/* --- COPYRIGHT ET LOGO --- */}
            <div className="pt-8 border-t border-slate-800/50 flex items-center justify-center gap-4">
            <div className="text-xl font-bold text-slate-500">
                {siteConfig.logo}
            </div>
            <div className="bg-cyan-500 h-5 w-1 hidden md:flex"></div>
            <div className="text-[10px] md:text-xs text-slate-500 text-right">
                &copy; {contact.copyright} | {personal.firstName} {personal.lastName}. <br className="md:hidden" />
                Bati avec <span className="text-cyan-600">Next.js</span>
            </div>
            </div>
        </div>
    </footer>
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="p-3 bg-slate-900/50 border border-slate-800 rounded-xl text-slate-400 hover:text-cyan-400 hover:border-cyan-400/50 transition-all"
      aria-label={label}
    >
      {icon}
    </a>
  );
}