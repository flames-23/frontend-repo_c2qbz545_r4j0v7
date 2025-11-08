import React from 'react';

export default function About() {
  return (
    <section id="o-nas" className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="font-geist text-3xl font-semibold sm:text-4xl">Proč si vybrat Autosklo Zoubek</h2>
            <p className="mt-4 text-gray-600">
              Jsme specializovaný servis s dlouholetými zkušenostmi. Používáme certifikované postupy, 
              kvalitní materiály a moderní technologie, abychom zajistili maximální bezpečnost a spokojenost zákazníků.
            </p>
            <ul className="mt-6 grid gap-3 text-gray-700 sm:grid-cols-2">
              <li className="rounded-lg bg-white p-4 shadow-sm ring-1 ring-gray-200">Certifikovaní technici</li>
              <li className="rounded-lg bg-white p-4 shadow-sm ring-1 ring-gray-200">Záruka na práci i materiál</li>
              <li className="rounded-lg bg-white p-4 shadow-sm ring-1 ring-gray-200">Spolupráce s pojišťovnami</li>
              <li className="rounded-lg bg-white p-4 shadow-sm ring-1 ring-gray-200">Rychlé termíny a férové ceny</li>
            </ul>
          </div>
          <div className="relative h-72 w-full overflow-hidden rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 p-1">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,0,0,0.05),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(0,0,0,0.05),transparent_40%)]" />
            <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
              <p className="text-4xl font-bold">10+ let</p>
              <p className="text-gray-600">praxe v oboru</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
