// D:\Plombier\plombier-nice\components\services\ServicesSection.tsx
import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { services } from "@/lib/service";
import { Button } from "../ui/button";


export default function ServicesSection() {
  return (
    <section className="w-full py-20 bg-white text-center flex flex-col items-center">
      <p className="text-sm max-md:text-[12px] max-md:text-center font-medium text-gray-600 tracking-widest uppercase  max-w-7xl text-center Xl:m-auto">
        Plomberie – Chauffage – Climatisation à Nice
      </p>
      <h2 className="text-4xl max-sm:text-2xl font-bold text-[#1b1e3f] mb-12 max-w-7xl text-center">
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
                <Link href="/a-propos">
                            <Button size={"lg"} variant="submit" >
                                En savoir plus
                            </Button>
                        </Link>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
