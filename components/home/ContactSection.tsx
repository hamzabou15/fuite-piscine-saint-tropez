"use client";

import React, { useState } from "react";

const ContactSection = () => {
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xrblqjea", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("Votre demande a bien été envoyée.");
        form.reset();
      } else {
        setStatus("Une erreur est survenue. Veuillez réessayer.");
      }
    } catch (error) {
      console.error(error);
      setStatus("Une erreur est survenue. Veuillez réessayer.");
    }
  };

  return (
    <section
      className="py-20 px-4 relative bg-top bg-no-repeat bg-cover"
      style={{
        backgroundImage: "url('/images/fuite-piscine-expert-nice-7.webp')",
        backgroundColor: "var(--color-background)",
      }}
      aria-label="Recherche de fuite piscine à Nice"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-0 rounded-xl overflow-hidden  ">
        <div></div>
        <div className="bg-white p-10 flex flex-col justify-center">
          <h3 className="uppercase text-sm tracking-widest text-[var(--color-pool-muted)] font-medium mb-2">
            Détection de fuite à Nice
          </h3>
          <h2 className="text-4xl font-extrabold max-md:text-3xl text-[var(--color-pool-dark)] mb-4 leading-tight">
            Une fuite invisible ? <br />
            Nos experts interviennent sans casse
          </h2>
          <p className="text-[var(--color-pool-muted)] mb-6">
            Perte d’eau dans votre bassin ? <strong>Fuite Piscine Expert</strong> intervient à Nice avec des
            technologies <strong>non destructives</strong> pour localiser la fuite sans vider la piscine.
          </p>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <input
              type="hidden"
              name="_subject"
              value="Demande - Fuite Piscine Expert"
            />

            <input
              type="text"
              name="Prénom"
              placeholder="Prénom"
              required
              className="border-b border-gray-300 focus:outline-none focus:border-[var(--color-pool-dark)] py-2"
            />
            <input
              type="text"
              name="Nom"
              placeholder="Nom"
              required
              className="border-b border-gray-300 focus:outline-none focus:border-[var(--color-pool-dark)] py-2"
            />
            <input
              type="email"
              name="Email"
              placeholder="Email"
              required
              className="border-b border-gray-300 focus:outline-none focus:border-[var(--color-pool-dark)] py-2 col-span-2"
            />
            <input
              type="tel"
              name="Téléphone"
              placeholder="Téléphone"
              required
              className="border-b border-gray-300 focus:outline-none focus:border-[var(--color-pool-dark)] py-2 col-span-2"
            />

            <select
              name="Besoin"
              required
              className="border-b border-gray-300 focus:outline-none focus:border-[var(--color-pool-dark)] py-2 col-span-2"
            >
              <option value="">Sélectionnez votre besoin</option>
              <option value="Recherche de fuite piscine enterrée">Fuite piscine enterrée</option>
              <option value="Détection canalisation / skimmer">Détection canalisation / skimmer</option>
              <option value="Fuite piscine coque">Fuite piscine coque</option>
              <option value="Analyse humidité bassin">Analyse humidité bassin</option>
              <option value="Autre besoin">Autre besoin</option>
            </select>

            <button
              type="submit"
              className="mt-4 mx-auto w-fit px-6 py-2 bg-[var(--color-pool-primary)] text-white font-semibold rounded hover:bg-[var(--color-pool-dark)] transition col-span-2"
            >
              Obtenir un diagnostic
            </button>

            {status && (
              <p className="text-sm col-span-2 mt-2 text-green-600">{status}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
