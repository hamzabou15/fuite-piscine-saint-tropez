"use client";

import { insights } from "@/lib/insights";
import Image from "next/image";
import { notFound, useParams } from "next/navigation";

export default function PiscineFuiteSection() {
  const { slug } = useParams();
  const insight = insights.find((p) => p.slug === slug);

  if (!insight) return notFound();

  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-10">
        
        {/* Image à gauche */}
        <div className="w-full lg:w-1/2 lg:sticky lg:top-20">
          <Image
            src={insight.img}
            alt={insight.imgAlt}
            width={600}
            height={400}
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Contenu à droite */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-pool-dark)] mb-6 leading-snug">
            {insight.title}
          </h2>
          <div
            className="space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed"
            dangerouslySetInnerHTML={{ __html: insight.description }}
          />
        </div>
      </div>
    </section>
  );
}
