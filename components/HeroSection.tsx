import React from 'react';
import Link from 'next/link';

interface HeroSectionProps {
    title: string;
    subtitle: string;
}

const HeroSection = ({ title, subtitle }: HeroSectionProps) => (
    <section className="relative h-screen bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] text-white flex items-center justify-center text-center px-6 w-full">
        {/* Subtle noise texture for depth */}
        <div className="absolute inset-0 bg-[url('/textures/noise.png')] opacity-10 pointer-events-none"></div>

        <div className="relative max-w-2xl space-y-6">
            <h1 className="text-3xl sm:text-5xl md:text-5xl leading-16 font-extrabold">{title}</h1>
            <p className="leading-relaxed text-lg md:text-xl">{subtitle}</p>
            <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
                <a
                    href="tel:+33756935200"
                    className="inline-block bg-[#F59E0B] text-[#1E3A8A] font-semibold px-8 py-3 rounded-md shadow hover:bg-[#fbbf24] transition">
                    Appeler Saint-Tropez
                </a>
                <Link href="/contact" className="inline-block border-2 border-white text-white font-medium px-8 py-3 rounded-md hover:bg-white hover:text-[#1E3A8A] transition">
                    Obtenir un devis
                </Link>
            </div>
        </div>

        {/* Scroll-down indicator */}
        <div className="absolute bottom-12 animate-bounce">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
        </div>
    </section>
);

export default HeroSection;
