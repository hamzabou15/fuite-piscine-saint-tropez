"use client";

import { Droplet, Handshake, Pipette, Wrench } from "lucide-react";

const services = [
  {
    title: "Installation plomberie",
    icon: <Wrench className="w-12 h-12 text-[#13727B]" />,
    description: "Pose experte de vos équipements sanitaires et tuyauteries à Nice.",
  },
  {
    title: "Détection de fuites",
    icon: <Droplet className="w-12 h-12 text-[#13727B]" />,
    description: "Détection rapide de fuites d’eau avec matériel professionnel.",
  },
  {
    title: "Raccordements fiables",
    icon: <Handshake className="w-12 h-12 text-[#13727B]" />,
    description: "Connexion sécurisée des installations pour une plomberie durable.",
  },
  {
    title: "Remplacement de canalisation",
    icon: <Pipette className="w-12 h-12 text-[#13727B]" />,
    description: "Renouvellement complet des réseaux de canalisations usés.",
  },
];

export default function ServiceSection() {
  return (
    <section className="bg-[#f7f9fa] py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <p className="uppercase text-sm tracking-widest text-gray-500 font-medium mb-2">
          Nos services
        </p>
        <h2 className="text-4xl font-extrabold text-[#1b1e3f] mb-12">
          Plombier Expert à Nice 24/7
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
              <h3 className="text-lg font-semibold text-[#1b1e3f] group-hover:text-[#13727B] transition">
                {service.title}
              </h3>
              <p className="text-sm text-gray-500 mt-2">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
