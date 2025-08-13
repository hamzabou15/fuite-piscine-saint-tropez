// components/contact/Form.tsx
"use client";
import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css';

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mrblronp";

export default function ContactForm() {
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<null | { ok: boolean; message: string }>(null);
  const [phone, setPhone] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setStatus(null);

    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);

    // Injecte le numéro complet au format international
    formData.set("phone", phone);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      if (res.ok) {
        setStatus({ ok: true, message: "Merci — votre demande a bien été envoyée. Nous répondons sous 24h." });
        form.reset();
        setPhone("");
      } else {
        const json = await res.json().catch(() => null);
        setStatus({
          ok: false,
          message: json?.error || "Une erreur est survenue, veuillez réessayer plus tard.",
        });
      }
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

        <input
          id="name"
          name="name"
          required
          placeholder="Nom complet"
          className="w-full border border-gray-200 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--accent-alt)]"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="Email"
            className="w-full border border-gray-200 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--accent-alt)]"
          />

          <PhoneInput
            country={"fr"}
            value={phone}
            onChange={(value) => setPhone(value)}
            enableSearch={true}
            inputProps={{
              name: "phone",
              required: true,
            }}
            containerClass="w-full h-[52px!important]"
            inputClass="!w-full !border  h-[52px!important] pl-[50px!important] !border-gray-200 !rounded-md  !px-4 !py-3 !text-base !focus:outline-none !focus:ring-2 !focus:ring-[var(--accent-alt)]"
            buttonClass="!border-gray-200 !bg-gray-50 mr-[70px]"
          />
        </div>

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
