import Navbar from "@/components/Navbar";
import Hero from '@/components/Hero';
import Parcours from "@/components/Parcours";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <>
      <div className="min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <Parcours />
          <Experience />
          <Skills />
          <Projects />
        </main>
        <Contact />
      </div>

    </>
  );
    }