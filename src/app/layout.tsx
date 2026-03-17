import "./globals.css";
import BackToTop from '@/components/BackToTop';

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
      </body>
    </html>
  );
}