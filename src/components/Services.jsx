import React from 'react';
import { Wrench, Shield, Car, Clock } from 'lucide-react';

const items = [
  {
    icon: Wrench,
    title: 'Opravy a výměny autoskel',
    desc: 'Rychlá výměna čelních, bočních i zadních skel z kvalitních materiálů se zárukou.',
  },
  {
    icon: Shield,
    title: 'Pojištění a likvidace škod',
    desc: 'Vyřídíme veškeré náležitosti s pojišťovnou za vás. Bez starostí a zbytečné administrativy.',
  },
  {
    icon: Car,
    title: 'Karosářské práce',
    desc: 'Opravy promáčklin, lakování a detailní péče o karoserii pro perfektní vzhled vašeho vozu.',
  },
  {
    icon: Clock,
    title: 'Expresní servis',
    desc: 'Krátké objednací lhůty a možnost servisu na počkání dle kapacity.',
  },
];

export default function Services() {
  return (
    <section id="sluzby" className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-10 flex items-end justify-between">
        <div>
          <h2 className="font-geist text-3xl font-semibold sm:text-4xl">Naše služby</h2>
          <p className="mt-2 text-gray-600">Kompletní servis autoskel a karoserie pro osobní i užitkové vozy.</p>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="group relative rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
            <div className="mb-4 inline-flex rounded-lg bg-gray-50 p-3 text-gray-900 ring-1 ring-inset ring-gray-200">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="font-medium">{title}</h3>
            <p className="mt-2 text-sm text-gray-600">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
