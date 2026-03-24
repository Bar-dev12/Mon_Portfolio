import "./globals.css";
import BackToTop from '@/components/BackToTop';
import { Analytics } from '@vercel/analytics/next';
import type { Metadata } from "next";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        {children}
        <BackToTop />
        <Analytics />
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "Jérémie Baruti | Développeur Full-Stack junior",
  description: "Je suis Jérémie Baruti, développeur web junior Full-Stack. Découvrez mes projets, compétences et expériences dans le développement web.",
  // Optionnel : pour les réseaux sociaux
  openGraph: {
    title: "Jérémie Baruti | Portfolio",
    description: "Découvrez mes projets et réalisations web.",
  },
};