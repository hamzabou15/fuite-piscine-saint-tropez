// components/services/ContactSaintTropez.tsx
"use client";

import React, { useState } from "react";
import Head from "next/head";

const PHONE = "+33756935200";

export default function ContactSaintTropez() {
  const [status, setStatus] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    const form = e.currentTarget;
    const fd = new FormData(form);

    // Reconstruire le numéro complet avant envoi
    const rawPhone = fd.get("telephone") as string;
    if (rawPhone) {
      fd.set("telephone", `+33${rawPhone}`);
    }

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
        setStatus("Erreur lors de l'envoi. Essayez à nouveau ou appelez-nous au " + PHONE);
      }
    } catch (err) {
      console.error(err);
      setStatus("Erreur réseau. Appelez-nous au " + PHONE);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Head>
        {/* ContactPoint JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ContactPoint",
              telephone: PHONE,
              contactType: "customer service",
              areaServed: "FR",
              availableLanguage: ["French", "English"],
              hoursAvailable: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                  opens: "07:00",
                  closes: "19:00"
                }
              ]
            })
          }}
        />
      </Head>

      <section className="py-16 bg-white" aria-label="Formulaire de contact Saint-Tropez">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-2xl font-semibold">Contact & Diagnostic</h3>
          <p className="text-gray-700 mt-2">
            Appelez-nous ou remplissez le formulaire pour un diagnostic local à Saint-Tropez.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4"
            aria-label="Formulaire de contact Saint-Tropez"
          >
            <input type="hidden" name="_subject" value="Demande - Fuite Piscine Saint-Tropez" />
            <input type="hidden" name="source" value="site-st-tropez" />

            <label htmlFor="prenom" className="sr-only">Prénom</label>
            <input
              id="prenom"
              name="prenom"
              placeholder="Prénom"
              required
              className="border-b py-2 focus:outline-none"
            />

            <label htmlFor="nom" className="sr-only">Nom</label>
            <input
              id="nom"
              name="nom"
              placeholder="Nom"
              required
              className="border-b py-2 focus:outline-none"
            />

            <label htmlFor="email" className="sr-only">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              required
              className="col-span-2 border-b py-2 focus:outline-none"
            />

            {/* Champ téléphone avec préfixe +33 */}
            <label htmlFor="telephone" className="sr-only">Téléphone</label>
            <div className="col-span-2 flex">
              <span className="inline-flex items-center px-3 rounded-l-md border border-gray-200 bg-gray-50 text-gray-500 text-sm">
                +33
              </span>
              <input
                id="telephone"
                name="telephone"
                type="tel"
                required
                placeholder="693788807"
                pattern="\d{9}"
                maxLength={9}
                onInput={(e) => {
                  e.currentTarget.value = e.currentTarget.value.replace(/\D/g, "");
                }}
                className="w-full border border-gray-200 rounded-r-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
              />
            </div>

            <label htmlFor="besoin" className="sr-only">Besoin</label>
            <select
              id="besoin"
              name="besoin"
              required
              defaultValue=""
              className="col-span-2 border-b py-2 focus:outline-none"
            >
              <option value="" disabled>Sélectionnez votre besoin</option>
              <option>Recherche fuite piscine enterrée</option>
              <option>Test canalisation / skimmer</option>
              <option>Fuite liner / coque</option>
              <option>Autre</option>
            </select>

            <label htmlFor="message" className="sr-only">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Description (optionnel)"
              rows={4}
              className="col-span-2 border-b py-2 focus:outline-none resize-none"
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className={`col-span-2 rounded-md font-semibold px-6 py-3 transition ${
                isSubmitting
                  ? "bg-[#D97706] text-white opacity-80"
                  : "bg-[#F59E0B] text-[#1E3A8A] hover:bg-[#D97706]"
              }`}
              aria-live="polite"
            >
              {isSubmitting ? "Envoi..." : "Obtenir un diagnostic"}
            </button>

            {status && (
              <p className="col-span-2 text-sm mt-2 text-green-600" role="status">
                {status}
              </p>
            )}

            <p className="text-xs text-gray-500 col-span-2 mt-2">
              En envoyant ce formulaire vous acceptez que nous utilisions vos informations pour traiter votre demande.
              Nous ne partageons pas vos données.
            </p>
          </form>
        </div>
      </section>
    </>
  );
}
