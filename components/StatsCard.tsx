"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const StatsCard = () => {
  const stats = [
    { value: 99, label: "Taux de détection des fuites garanti %" },
    { value: 48, label: "Rapport et devis envoyés sous 48 h" },
    { value: 10, label: "Années d’expérience à Saint Tropez et 06" },
    { value: 5, label: "Méthodes de détection technologiques" },
  ];

  return (
    <section
      className="bg-white w-full px-16 max-sm:px-6 py-12 max-w-[1300px] mx-auto"
      aria-label="Statistiques expertise fuite piscine Saint tropez Alpes‑Maritimes"
      id="chiffres-fuite-piscine-saint-tropez"
    >
      <div className="flex flex-wrap justify-between max-md:flex-col items-center ">
        {stats.map((stat, idx) => (
          <StatItem key={idx} {...stat} isLast={idx === stats.length - 1} />
        ))}
      </div>
    </section>
  );
};

const StatItem = ({
  value,
  label,
  isLast,
}: {
  value: number;
  label: string;
  isLast: boolean;
}) => {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    const startTime = performance.now();
    const duration = 2000;
    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [visible, value]);

  return (
    <div
      ref={ref}
      className={`flex flex-col items-center py-6 px-4 w-1/4 max-md:w-full ${
        !isLast && "border-l border-dashed border-gray-300"
      } max-sm:w-full`}
    >
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="text-6xl font-bold text-[#1b1e3f]"
        aria-label={`${count} ${label}`}
      >
        {count}
      </motion.h1>
      <span className="text-lg text-center text-[#1b1e3f]">{label}</span>
    </div>
  );
};

export default StatsCard;
