// app/contact/page.tsx
import Head from "next/head";
import LocalBusinessSchema from "@/components/SEO/LocalBusiness";
import ContactForm from "@/components/contact/Form";
import { Phone } from "lucide-react";
import Link from "next/link";
import React from "react";

const COLORS = {
  brand500: "#1E3A8A",
  brand600: "#2563EB",
  accent: "#F59E0B",
  accentAlt: "#02BAD6",
  fg: "#0f203f",
  muted: "#6B7280",
  bgLight: "#F8FAFF",
};

export const metadata = {
  title: "Contact — Fuite Piscine Saint-Tropez | Diagnostic & Intervention rapide",
  description:
    "Contactez Fuite Piscine Saint-Tropez pour une intervention rapide et non destructive. Devis sous 24h, rapport sous 48h. Villas & hôtels — intervention discrète.",
};

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content="https://fuitepiscinesainttropez.fr/images/og-fuite-piscine.jpg" />
        <meta property="og:url" content="https://fuitepiscinesainttropez.fr/contact" />
        <meta name="twitter:card" content="summary_large_image" />

        {/* LocalBusiness JSON-LD (Saint-Tropez) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Fuite Piscine Saint-Tropez",
              url: "https://fuitepiscinesainttropez.fr",
              logo: "https://fuitepiscinesainttropez.fr/images/logo.png",
              image: "https://fuitepiscinesainttropez.fr/images/og-fuite-piscine.jpg",
              telephone: "+33756935200",
              address: {
                "@type": "PostalAddress",
                streetAddress: "10 Rue de la Plage",
                addressLocality: "Saint-Tropez",
                postalCode: "83990",
                addressCountry: "FR",
              },
              geo: { "@type": "GeoCoordinates", latitude: 43.2683, longitude: 6.6361 },
              openingHours: "Mo-Su 07:00-20:00",
              areaServed: "Saint-Tropez, Gassin, Ramatuelle, Cogolin, Sainte-Maxime",
            }),
          }}
        />
      </Head>

      <LocalBusinessSchema />

      <main
        className="min-h-screen bg-white"
        style={
          {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            ["--brand-500" as any]: COLORS.brand500,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            ["--brand-600" as any]: COLORS.brand600,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            ["--accent" as any]: COLORS.accent,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            ["--accent-alt" as any]: COLORS.accentAlt,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            ["--fg" as any]: COLORS.fg,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            ["--muted" as any]: COLORS.muted,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            ["--bg-light" as any]: COLORS.bgLight,
          } as React.CSSProperties
        }
      >
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Hero / contact summary */}
            <div className="space-y-6">
              <p className="text-sm font-semibold tracking-widest text-[var(--accent)] uppercase">
                Contact & intervention
              </p>

              <h1 className="text-3xl md:text-4xl font-extrabold text-[var(--fg)] leading-tight">
                Contactez Fuite Piscine Saint-Tropez — Diagnostic gratuit & intervention rapide
              </h1>

              <p className="text-lg text-[var(--muted)]">
                Besoin d&apos;un diagnostic pour une perte d’eau ? Nous intervenons discrètement pour localiser la
                fuite (liner, coque, canalisations, skimmer) avec des techniques non destructives.
                Devis sous 24h, rapport illustré sous 48h.
              </p>

              <div className="flex flex-wrap gap-4 items-center">
                <Link
                  href="tel:+33756935200"
                  className="inline-flex items-center gap-3 px-5 py-3 rounded-lg shadow bg-gradient-to-r from-[var(--brand-500)] to-[var(--brand-600)] text-white font-semibold hover:opacity-95"
                >
                  <Phone className="w-5 h-5" />
                  +33 7 56 93 52 00
                </Link>

                <Link
                  href="/recherche-de-fuite-piscine-saint-tropez"
                  className="inline-flex items-center gap-3 px-5 py-3 rounded-lg border border-[var(--brand-500)] text-[var(--brand-500)] font-semibold hover:bg-[var(--bg-light)]"
                >
                  En savoir plus (services)
                </Link>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4 max-w-md">
                <div className="p-4 bg-[var(--bg-light)] rounded-lg text-center">
                  <p className="text-sm text-[var(--muted)]">Devis</p>
                  <p className="text-xl font-bold text-[var(--accent)]">24h</p>
                </div>
                <div className="p-4 bg-white rounded-lg border text-center">
                  <p className="text-sm text-[var(--muted)]">Rapport technique</p>
                  <p className="text-xl font-bold text-[var(--brand-500)]">48h</p>
                </div>
              </div>
            </div>

            {/* Right: Contact form */}
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <ContactForm />
            </div>
          </div>
        </section>

        {/* Optional footer CTA */}
        <section className="py-8 bg-gradient-to-r from-[var(--ribbon-from,#EEF6FF)] to-[var(--ribbon-to,#FFFFFF)]">
          <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-semibold text-[var(--fg)]">Urgence fuite ?</h3>
              <p className="text-sm text-[var(--muted)]">Intervention prioritaire selon disponibilité</p>
            </div>
            <div className="flex gap-4">
              <Link
                href="tel:+33756935200"
                className="px-5 py-3 rounded-lg bg-[var(--accent)] text-[var(--fg)] font-semibold hover:opacity-95"
              >
                Appeler maintenant
              </Link>
              <Link
                href="/contact"
                className="px-5 py-3 rounded-lg border border-[var(--brand-500)] text-[var(--brand-500)] font-semibold hover:bg-white/50"
              >
                Envoyer une demande
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
