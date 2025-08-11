"use client";

import React, { useState } from "react";
import Head from "next/head";

const PHONE = "+33756935200";

const ContactSection: React.FC = () => {
  const [status, setStatus] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mrblronp", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("Votre demande a bien été envoyée. Nous reviendrons vers vous sous 24h.");
        form.reset();
      } else {
        setStatus("Une erreur est survenue. Veuillez réessayer ou appelez-nous au " + PHONE + ".");
      }
    } catch (error) {
      console.error(error);
      setStatus("Une erreur est survenue. Veuillez réessayer ou appelez-nous au " + PHONE + ".");
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
              "telephone": PHONE,
              "contactType": "customer service",
              "areaServed": "FR",
              "availableLanguage": ["French", "English"],
              "hoursAvailable": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                  "opens": "07:00",
                  "closes": "19:00"
                }
              ]
            })
          }}
        />
      </Head>

      <section
        className="py-20 px-4"
        aria-label="Contactez Fuite Piscine Saint-Tropez"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 rounded-xl overflow-hidden">
          {/* Visuel gauche: image + overlay (harmonisé mais distinct du Hero) */}
          <div
            className="relative bg-gradient-to-br from-[#1E3A8A]/90 to-[#2563EB]/80"
            style={{
              backgroundImage: "url('/images/fuite-piscine-expert-saint-tropez-7.webp')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-[#1E3A8A]/60 to-[#2563EB]/40 mix-blend-multiply" />
            <div className="relative p-10 h-full flex flex-col justify-center text-white">
              <span className="inline-block bg-[#F59E0B] text-[#1E3A8A] px-3 py-1 rounded-full text-sm font-semibold mb-4 self-start">
                Intervention prioritaire
              </span>

              <h3 className="text-3xl md:text-4xl font-extrabold mb-3">
                Besoin d’un diagnostic rapide ?
              </h3>

              <p className="text-sm md:text-base text-white/90 mb-6 max-w-md leading-relaxed">
                Envoi du devis sous 24 h — rapport technique et photos sous 48 h. Interventions discrètes pour villas, résidences et hôtels du Golfe.
              </p>

              <div className="flex items-center gap-3">
                <a
                  href={`tel:${PHONE.replace(/\s/g, "")}`}
                  className="inline-flex items-center gap-3 px-4 py-2 rounded-md bg-white text-[#1E3A8A] font-semibold shadow"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.86 19.86 0 0 1 3.08 6.18 2 2 0 0 1 5 4h3a2 2 0 0 1 2 1.72c.12 1.06.38 2.09.75 3.06a2 2 0 0 1-.45 2.11L9.91 12.09a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.12-.45c.97.37 2 .63 3.06.75A2 2 0 0 1 22 16.92z" fill="#1E3A8A"/>
                  </svg>
                  <span>{PHONE}</span>
                </a>

                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-white/30 text-white hover:bg-white/10 transition"
                >
                  Prendre rendez-vous
                </a>
              </div>
            </div>
          </div>

          {/* Formulaire droit: card blanche */}
          <div className="bg-white p-10 flex flex-col justify-center">
            <h3 className="uppercase text-sm tracking-widest text-[#1E3A8A] font-semibold mb-2">
              Contactez nos experts
            </h3>

            <h2 className="text-3xl font-extrabold text-[#0f203f] mb-4">
              Une fuite ? Obtenez un diagnostic professionnel
            </h2>

            <p className="text-gray-600 mb-6">
              Remplissez le formulaire ci-dessous ou appelez-nous pour une prise en charge rapide. Pour accélérer le diagnostic, joignez photos et indication du lieu (skimmer, margelle, local technique).
            </p>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4" aria-label="Formulaire de contact">
              {/* Hidden fields */}
              <input type="hidden" name="_subject" value="Demande - Fuite Piscine Saint-Tropez" />
              <input type="hidden" name="source" value="site-st-tropez" />

              {/* Prenom */}
              <label className="sr-only" htmlFor="prenom">Prénom</label>
              <input
                id="prenom"
                name="prenom"
                type="text"
                placeholder="Prénom"
                required
                className="border-b border-gray-300 focus:outline-none focus:border-[#1E3A8A] py-2"
              />

              {/* Nom */}
              <label className="sr-only" htmlFor="nom">Nom</label>
              <input
                id="nom"
                name="nom"
                type="text"
                placeholder="Nom"
                required
                className="border-b border-gray-300 focus:outline-none focus:border-[#1E3A8A] py-2"
              />

              {/* Email full width */}
              <label className="sr-only" htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                required
                className="col-span-2 border-b border-gray-300 focus:outline-none focus:border-[#1E3A8A] py-2"
              />

              {/* Téléphone */}
              <label className="sr-only" htmlFor="telephone">Téléphone</label>
              <input
                id="telephone"
                name="telephone"
                type="tel"
                placeholder="Téléphone"
                required
                className="col-span-2 border-b border-gray-300 focus:outline-none focus:border-[#1E3A8A] py-2"
              />

              {/* Besoin */}
              <label className="sr-only" htmlFor="besoin">Besoin</label>
              <select
                id="besoin"
                name="besoin"
                required
                className="border-b border-gray-300 focus:outline-none focus:border-[#1E3A8A] py-2 col-span-2"
                defaultValue=""
              >
                <option value="" disabled>Sélectionnez votre besoin</option>
                <option>Recherche fuite piscine enterrée</option>
                <option>Détection canalisation / skimmer</option>
                <option>Fuite sur liner / coque</option>
                <option>Analyse humidité autour du bassin</option>
                <option>Autre (précisez dans le message)</option>
              </select>

              {/* Message */}
              <label className="sr-only" htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Décrivez votre situation (optionnel). Indiquez adresse approximative pour chiffrage."
                rows={4}
                className="col-span-2 resize-none border-b border-gray-300 focus:outline-none focus:border-[#1E3A8A] py-2"
              />

              {/* CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`mt-4 mx-auto w-fit px-6 py-3 rounded-md font-semibold col-span-2 transition ${isSubmitting ? "bg-[#D97706] text-white opacity-80" : "bg-[#F59E0B] text-[#1E3A8A] hover:bg-[#D97706]"}`}
                aria-live="polite"
              >
                {isSubmitting ? "Envoi..." : "Obtenir un diagnostic"}
              </button>

              {/* Feedback */}
              {status && (
                <p className="text-sm col-span-2 mt-2 text-green-600" role="status">{status}</p>
              )}

              {/* Petit texte RGPD / confidentialité */}
              <p className="text-xs text-gray-500 col-span-2 mt-2">
                En envoyant ce formulaire vous acceptez que nous utilisions vos informations pour traiter votre demande. Nous ne partageons pas vos données. Pour une réponse plus rapide, joignez des photos via le formulaire de contact.
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
