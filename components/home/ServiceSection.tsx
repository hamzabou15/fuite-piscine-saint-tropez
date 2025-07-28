"use client";

import { Camera, Droplet, Wrench, Shield, Search, Hammer, FileText, Phone } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

const services = [
  {
    title: "Détection de fuites non destructive",
    icon: <Droplet className="w-12 h-12 text-[var(--color-pool-primary)]" />,
    description: "Utilisation de techniques avancées pour localiser les fuites sans endommager votre piscine.",
  },
  {
    title: "Inspection par caméra endoscopique",
    icon: <Camera className="w-12 h-12 text-[var(--color-pool-primary)]" />,
    description: "Examen visuel des zones difficiles d'accès pour identifier les fuites cachées.",
  },
  {
    title: "Test de pression des canalisations",
    icon: <Wrench className="w-12 h-12 text-[var(--color-pool-primary)]" />,
    description: "Vérification de l'étanchéité des canalisations pour détecter toute anomalie.",
  },
  {
    title: "Recherche sur liner et coque",
    icon: <Shield className="w-12 h-12 text-[var(--color-pool-primary)]" />,
    description: "Inspection des revêtements pour identifier les microfissures ou décollements.",
  },
  {
    title: "Détection sur skimmers et bonde de fond",
    icon: <Search className="w-12 h-12 text-[var(--color-pool-primary)]" />,
    description: "Examen des skimmers et bondes de fond pour détecter d'éventuelles fuites.",
  },
  {
    title: "Recherche sur pièces à sceller",
    icon: <Hammer className="w-12 h-12 text-[var(--color-pool-primary)]" />,
    description: "Inspection des pièces à sceller telles que buses et projecteurs pour localiser les fuites.",
  },
  {
    title: "Rapport d'intervention détaillé",
    icon: <FileText className="w-12 h-12 text-[var(--color-pool-primary)]" />,
    description: "Fourniture d'un rapport complet après chaque intervention, incluant diagnostics et recommandations.",
  },
  {
    title: "Devis gratuit sous 24h",
    icon: <Phone className="w-12 h-12 text-[var(--color-pool-primary)]" />,
    description: "Obtenez un devis personnalisé et gratuit dans les 24 heures suivant votre demande.",
  },
];

export default function ServiceSection() {
  return (
    <section className=" py-16 px-16 max-md:px-6">
      <div className="max-w-6xl mx-auto text-center">
        <p className="uppercase text-sm tracking-widest text-[var(--color-pool-muted)] font-medium mb-2">
          Nos services
        </p>
        <h2 className="text-4xl font-extrabold max-md:text-3xl text-[var(--color-pool-dark)] mb-12">
          Spécialistes en détection de fuites de piscine à Nice
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-lg shadow-md transition-all hover:shadow-xl hover:-translate-y-1 cursor-pointer group"
            >
              <div className="flex justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold text-[var(--color-pool-dark)] group-hover:text-[var(--color-pool-primary)] transition">
                {service.title}
              </h3>
              <p className="text-sm text-[var(--color-pool-muted)] mt-2">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <Link href="/contact" className="inline-block">
            <Button
              size="lg"
              variant="default"
              className="bg-[var(--color-pool-primary)] text-white hover:bg-[var(--color-pool-dark)] transition duration-200"
            >
              Demandez votre devis gratuit
            </Button>
          </Link>

        </div>
      </div>
    </section>
  );
}
