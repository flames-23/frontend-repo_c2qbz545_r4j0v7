import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section id="kontakt" className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-10 text-center">
        <h2 className="font-geist text-3xl font-semibold sm:text-4xl">Kontaktujte nás</h2>
        <p className="mt-2 text-gray-600">Ozveme se vám co nejdříve a domluvíme vhodný termín.</p>
      </div>

      <div className="grid gap-10 md:grid-cols-2">
        <form onSubmit={handleSubmit} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="grid gap-4">
            <div>
              <label className="mb-1 block text-sm font-medium">Jméno a příjmení</label>
              <input required type="text" className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none ring-blue-500 focus:ring-2" placeholder="Jan Novák" />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm font-medium">E-mail</label>
                <input required type="email" className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none ring-blue-500 focus:ring-2" placeholder="jan@example.com" />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">Telefon</label>
                <input type="tel" className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none ring-blue-500 focus:ring-2" placeholder="+420 777 123 456" />
              </div>
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">Zpráva</label>
              <textarea required rows={4} className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none ring-blue-500 focus:ring-2" placeholder="Popište prosím váš požadavek" />
            </div>
            <button type="submit" className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700">
              <Send className="h-4 w-4" /> Odeslat
            </button>
            {sent && (
              <p className="text-sm text-green-600">Děkujeme! Vaše zpráva byla odeslána.</p>
            )}
          </div>
        </form>

        <div className="grid content-start gap-4">
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-lg font-medium">Rychlý kontakt</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-3"><Phone className="h-4 w-4" /> +420 777 123 456</li>
              <li className="flex items-center gap-3"><Mail className="h-4 w-4" /> info@autosklozoubek.cz</li>
              <li className="flex items-center gap-3"><MapPin className="h-4 w-4" /> Ulice 123, 110 00 Praha</li>
            </ul>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-lg font-medium">Otevírací doba</h3>
            <ul className="grid grid-cols-2 gap-2 text-gray-700">
              <li>Pondělí–Pátek</li><li>8:00–17:00</li>
              <li>Sobota</li><li>9:00–13:00</li>
              <li>Neděle</li><li>Zavřeno</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
