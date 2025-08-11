// components/services/ContactSaintTropez.tsx
"use client";
import React, { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<string | null>(null);
  const PHONE = "+33756935200";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/mrblronp", {
        method: "POST",
        body: fd,
        headers: { Accept: "application/json" }
      });
      if (res.ok) {
        setStatus("Merci — votre demande a bien été envoyée. Nous vous contactons sous 24 h.");
        form.reset();
      } else {
        setStatus("Erreur lors de l'envoi. Essayez de nouveau ou appelez " + PHONE);
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setStatus("Erreur réseau. Appelez " + PHONE);
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h3 className="text-2xl font-semibold">Contact & Diagnostic</h3>
        <p className="text-gray-700 mt-2">Appelez-nous ou remplissez le formulaire pour un diagnostic local à Saint-Tropez.</p>

        <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="hidden" name="_subject" value="Demande - Fuite Piscine Saint-Tropez" />
          <input name="prenom" placeholder="Prénom" required className="border-b py-2 focus:outline-none" />
          <input name="nom" placeholder="Nom" required className="border-b py-2 focus:outline-none" />
          <input name="email" type="email" placeholder="Email" required className="col-span-2 border-b py-2 focus:outline-none" />
          <input name="telephone" placeholder="Téléphone" required className="col-span-2 border-b py-2 focus:outline-none" />
          <select name="besoin" required className="col-span-2 border-b py-2 focus:outline-none">
            <option value="">Sélectionnez votre besoin</option>
            <option>Recherche fuite piscine enterrée</option>
            <option>Test canalisation / skimmer</option>
            <option>Fuite liner / coque</option>
            <option>Autre</option>
          </select>
          <textarea name="message" placeholder="Description (optionnel)" rows={4} className="col-span-2 border-b py-2 focus:outline-none" />
          <button type="submit" className="col-span-2 bg-[#F59E0B] text-[#1E3A8A] px-6 py-3 rounded-md font-semibold">Obtenir un diagnostic</button>
          {status && <p className="col-span-2 text-sm text-green-600">{status}</p>}
        </form>
      </div>
    </section>
  );
}
