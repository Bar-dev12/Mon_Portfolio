"use client"; // Ce composant gère l'interactivité

export default function PrintButton() {
  return (
    <button 
      onClick={() => window.print()}
      className="px-6 py-2 bg-cyan-600 text-white rounded-lg font-bold hover:bg-cyan-700 transition-colors print:hidden"
    >
      Télécharger / Imprimer PDF
    </button>
  );
}