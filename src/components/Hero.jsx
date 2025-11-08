import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4Tf9WOIaWs6LOezG/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl items-end px-6 pb-12 text-white">
        <div className="max-w-3xl">
          <span className="mb-3 inline-block rounded-full bg-white/10 px-3 py-1 text-sm backdrop-blur">Autosklo • Karoserie • Pneuservis</span>
          <h1 className="font-geist text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            Autosklo Zoubek
          </h1>
          <p className="mt-4 text-base text-white/85 sm:text-lg">
            Profesionální opravy a výměny autoskel, karosářské práce a rychlý servis na počkání. 
            Spolehlivě, precizně a za férové ceny.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a href="#kontakt" className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-sm font-medium text-gray-900 shadow hover:bg-white/90 transition">
              Objednat termín
            </a>
            <a href="#sluzby" className="inline-flex items-center justify-center rounded-md border border-white/30 px-5 py-3 text-sm font-medium text-white hover:bg-white/10 transition">
              Prohlédnout služby
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
