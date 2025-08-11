// components/KeyPointsSectionSaintTropez.tsx
"use client";

import { Phone } from "lucide-react";

export default function KeyPointsSectionSaintTropez() {
  return (
    <section className="py-20 bg-[#F8FAFF]">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f203f] mb-6">
            Pourquoi choisir notre service à Saint-Tropez
          </h2>
          <p className="text-lg text-[#475565]">
            Une approche professionnelle adaptée aux propriétés haut de gamme de la Côte d&apos;Azur
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "Discrétion absolue",
              desc: "Interventions respectueuses pour villas et hôtels prestigieux",
              icon: "👂"
            },
            {
              title: "Technologies avancées",
              desc: "Équipement dernier cri pour diagnostics précis sans casse",
              icon: "🔍"
            },
            {
              title: "Rapidité d'intervention",
              desc: "Déplacement sous 24h sur Saint-Tropez et environs",
              icon: "⏱️"
            },
            {
              title: "Expertise locale",
              desc: "Connaissance spécifique des piscines de la presqu'île",
              icon: "🏆"
            },
            {
              title: "Rapport complet",
              desc: "Documentation technique avec preuves de la fuite",
              icon: "📄"
            },
            {
              title: "Garantie écrite",
              desc: "2 ans sur toutes nos réparations",
              icon: "✍️"
            },
            {
              title: "7j/7 en saison",
              desc: "Disponibilité maximale pendant la période estivale",
              icon: "📅"
            },
            {
              title: "Devis gratuit",
              desc: "Estimation précise sans engagement",
              icon: "💰"
            }
          ].map((item, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-[#0f203f] mb-3">{item.title}</h3>
              <p className="text-[#475565]">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] rounded-2xl p-10 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Besoin d&apos;une intervention urgente à Saint-Tropez ?
            </h3>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Nos techniciens se déplacent 7j/7 pour préserver votre piscine et vos aménagements
            </p>
            <a 
              href="tel:+33756935200" 
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#F59E0B] text-[#1E3A8A] font-bold rounded-lg hover:bg-[#D97706] transition text-lg"
            >
              <Phone className="w-5 h-5" />
              <span>07 56 93 52 00</span>
            </a>
            <p className="mt-4 text-sm opacity-80">Appel non surtaxé - Disponible 7j/7</p>
          </div>
        </div>
      </div>
    </section>
  );
}