import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Top navigation */}
      <header className="fixed inset-x-0 top-0 z-20">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center justify-between rounded-full border border-white/20 bg-white/60 px-4 py-2 backdrop-blur shadow-sm">
            <a href="#" className="font-semibold">Autosklo Zoubek</a>
            <nav className="hidden gap-6 text-sm sm:flex">
              <a href="#sluzby" className="hover:text-blue-600">Služby</a>
              <a href="#o-nas" className="hover:text-blue-600">O nás</a>
              <a href="#kontakt" className="hover:text-blue-600">Kontakt</a>
            </nav>
            <a href="#kontakt" className="hidden rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 sm:inline-block">Objednat</a>
          </div>
        </div>
      </header>

      <main>
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>

      <footer className="border-t bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-8 text-sm text-gray-600">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p>© {new Date().getFullYear()} Autosklo Zoubek. Všechna práva vyhrazena.</p>
            <p>
              IČO 12345678 • <a href="#kontakt" className="hover:text-blue-600">Kontakt</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
