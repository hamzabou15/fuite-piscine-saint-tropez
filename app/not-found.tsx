// app/not-found.tsx  (ou pages/404.tsx si tu utilises pages router)
"use client";

import Link from "next/link";

export default function NotFound() {
    return (
        <main className="min-h-screen flex items-center justify-center bg-white p-6">
            <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                {/* Illustration / Logo */}
                <div className="flex items-center justify-center">
                    <div
                        aria-hidden
                        className="rounded-2xl p-8"
                        style={{
                            background:
                                "linear-gradient(180deg, rgba(30,58,138,0.03), rgba(245,158,11,0.03))",
                            width: "100%",
                            maxWidth: 520,
                        }}
                    >
                        {/* Simple SVG illustration matching colors #F59E0B and #1E3A8A */}
                        <svg viewBox="0 0 520 360" width="100%" height="100%" aria-hidden>
                            <defs>
                                <linearGradient id="g1" x1="0" x2="1" y1="0" y2="1">
                                    <stop offset="0%" stopColor="#1E3A8A" stopOpacity="0.9" />
                                    <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.9" />
                                </linearGradient>
                            </defs>

                            {/* Background rounded rect */}
                            <rect x="0" y="0" width="520" height="360" rx="18" fill="#f9fafb" />

                            {/* Water + droplet */}
                            <g transform="translate(40,30)">
                                <path
                                    d="M80 200c40-30 90-30 130 0s90 30 130 0"
                                    fill="none"
                                    stroke="#1E3A8A"
                                    strokeWidth="18"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    opacity="0.9"
                                />
                                <path
                                    d="M60 160c36-28 82-28 118 0s82 28 118 0"
                                    fill="none"
                                    stroke="#1E3A8A"
                                    strokeWidth="12"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    opacity="0.7"
                                />

                                <g transform="translate(260,40)">
                                    <path
                                        d="M0 0c24 36 58 52 0 120-58-68-24-84 0-120z"
                                        fill="#F59E0B"
                                        transform="translate(-40,-20) scale(1.05)"
                                    />
                                    <path d="M10 70c18-8 26-4 36 6" stroke="#1E3A8A" strokeWidth="6" fill="none" strokeLinecap="round" />
                                </g>

                                <circle cx="120" cy="80" r="8" fill="#F59E0B" />
                            </g>
                        </svg>
                    </div>
                </div>

                {/* Texte & CTA */}
                <div className="flex flex-col justify-center gap-6">
                    <p className="text-sm font-semibold uppercase tracking-wider" style={{ color: "#1E3A8A" }}>
                        Erreur 404 — Page introuvable
                    </p>

                    <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight" style={{ color: "#1E3A8A" }}>
                        Oups — La page que vous recherchez n&apos;existe pas
                    </h1>

                    <p className="text-gray-700 max-w-xl">
                        Il se peut que l&apos;adresse ait changé ou que la page ait été supprimée. Pas de panique — nous intervenons
                        encore plus vite qu&apos;une équipe de dépannage !
                    </p>

                    <div className="flex flex-wrap gap-3 mt-2">
                        {/* Si tu utilises ton composant Button, remplace <a> par <Button asChild> si besoin */}
                        <Link href="/" style={{ backgroundColor: "#1E3A8A", color: "#fff" }}
                            className="inline-flex items-center justify-center px-5 py-3 rounded-md text-sm font-medium shadow hover:opacity-95 transition"
                            aria-label="Retour à l'accueil">

                            ← Retour à l&apos;accueil
                        </Link>

                        <Link href="/contact" style={{
                            border: "2px solid #F59E0B",
                            color: "#1E3A8A",
                            backgroundColor: "transparent",
                        }}
                            className="inline-flex items-center justify-center px-5 py-3 rounded-md text-sm font-medium hover:bg-[#FFF6ED] transition"
                            aria-label="Contacter le support">

                            Contacter l&apos;équipe
                        </Link>

                        <a
                            href="tel:+33647572021"
                            className="inline-flex items-center justify-center px-5 py-3 rounded-md text-sm font-medium"
                            style={{ backgroundColor: "#F59E0B", color: "#1E3A8A" }}
                        >
                            Appeler +33 6 47 57 20 21
                        </a>
                    </div>

                    <p className="text-xs text-gray-500 mt-4">
                        Si le problème persiste, contacte-nous via la page contact — on s&apos;occupe du reste.
                    </p>
                </div>
            </div>
        </main>
    );
}
