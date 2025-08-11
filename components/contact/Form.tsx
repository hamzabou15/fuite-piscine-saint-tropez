// components/contact/Form.tsx
"use client";
import React, { useState } from "react";


/**
 * Remplace `FORMSPREE_ENDPOINT` par ton ID Formspree (ou un endpoint API).
 * Ex: https://formspree.io/f/xxxxxxx  OR leave as is to edit.
 */
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mrblronp";

export default function ContactForm() {
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<null | { ok: boolean; message: string }>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setStatus(null);

    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      if (res.ok) {
        setStatus({ ok: true, message: "Merci — votre demande a bien été envoyée. Nous répondons sous 24h." });
        form.reset();
      } else {
        const json = await res.json().catch(() => null);
        setStatus({
          ok: false,
          message: json?.error || "Une erreur est survenue, veuillez réessayer plus tard.",
        });
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setStatus({ ok: false, message: "Erreur réseau — veuillez réessayer." });
    } finally {
      setSending(false);
    }
  }

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-[var(--fg)]">Demandez un diagnostic gratuit</h2>
        <p className="text-sm text-[var(--muted)]">Décrivez le problème : nous vous recontactons sous 24h.</p>
      </div>

      <form onSubmit={onSubmit} className="grid grid-cols-1 gap-4">
        <input type="hidden" name="_subject" value="Nouvelle demande - Fuite Piscine Saint-Tropez" />
        {/* spam honeypot */}
        <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

        <label className="sr-only" htmlFor="name">Nom complet</label>
        <input
          id="name"
          name="name"
          required
          placeholder="Nom complet"
          className="w-full border border-gray-200 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--accent-alt)]"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label className="sr-only" htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="Email"
            className="w-full border border-gray-200 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--accent-alt)]"
          />

          <label className="sr-only" htmlFor="phone">Téléphone</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="Téléphone"
            className="w-full border border-gray-200 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--accent-alt)]"
          />
        </div>

        <label className="sr-only" htmlFor="service">Type d&#39;intervention</label>
        <select
          id="service"
          name="service"
          required
          className="w-full border border-gray-200 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--accent-alt)]"
        >
          <option value="">Sélectionnez le besoin</option>
          <option>Recherche de fuite piscine (liner / coque)</option>
          <option>Test pression / canalisations</option>
          <option>Inspection vidéo / électro-acoustique</option>
          <option>Devis / rapport</option>
          <option>Autre</option>
        </select>

        <label className="sr-only" htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Décrivez la fuite suspectée (ex : baisse niveau, emplacement, travaux récents...)"
          className="w-full border border-gray-200 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--accent-alt)] resize-none"
        />

        <div className="flex items-center gap-4">
          <button
            type="submit"
            disabled={sending}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-lg bg-[var(--accent)] text-[var(--fg)] font-semibold hover:brightness-95 transition"
          >
            {sending ? "Envoi..." : "Envoyer ma demande"}
          </button>

          <a
            href="tel:+33756935200"
            className="inline-flex items-center gap-2 px-4 py-3 rounded-lg border border-[var(--brand-500)] text-[var(--brand-500)] font-semibold hover:bg-[var(--bg-light)]"
          >
            Appeler: +33 7 56 93 52 00
          </a>
        </div>

        {status && (
          <div
            role="status"
            className={`mt-3 rounded-md px-4 py-3 text-sm ${status.ok ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"}`}
          >
            {status.message}
          </div>
        )}

        <p className="text-xs text-[var(--muted)] mt-4">
          En envoyant ce formulaire vous acceptez que nous utilisions vos informations pour vous recontacter. Données traitées selon notre politique de confidentialité.
        </p>
      </form>
    </div>
  );
}
