// D:\Plombier\plombier-nice\components\services\ServicesSection.tsx
import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { services } from "@/lib/service";


export default function ServicesSection() {
  return (
    <section className="w-full py-20 bg-white text-center flex flex-col items-center">
      <p className="text-sm font-medium text-gray-600 tracking-widest uppercase  max-w-7xl text-center Xl:m-auto">
        Plomberie – Chauffage – Climatisation à Nice
      </p>
      <h2 className="text-4xl font-bold text-[#1b1e3f] mb-12 max-w-7xl text-center">
        Nos services de plomberie à Nice et ses environs
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 gap-y-16  max-w-7xl mx-auto">
        {services.map((service, i) => (
          <Link key={i} href={service.link} className="group">
            <div className="flex flex-col items-center text-center">
              <div className="w-44 h-44 rounded-full overflow-hidden mb-6">
                <Image
                  src={service.image}
                  alt={service.alt}
                  width={176}
                  height={176}
                  className="object-cover w-full h-full"
                />
              </div>
              <p className="text-sm text-gray-500">{service.alt}</p>
              <h3 className="text-xl font-semibold text-[#1b1e3f] mt-1 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 text-base leading-relaxed mb-4">
                {service.description}
              </p>
              <button
                aria-label={`En savoir plus sur ${service.title}`}
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100 hover:cursor-pointer transition-colors"
              >
                <ArrowRight className="w-5 h-5 text-gray-700" />
              </button>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
