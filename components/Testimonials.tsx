"use client";
import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { cn } from "@/lib/utils";
import { useSwipeable } from "react-swipeable";

const testimonials = [
    {
        name: "Nathalie Dupont",
        location: "Nice Centre (06)",
        image: "/icons/user1.webp",
        quote:
            "Intervention rapide pour détecter une fuite d'eau encastrée à Nice Centre. Réponse en urgence 24h/24. Service professionnel, je recommande vivement !",
        color: "black",
    },
    {
        name: "Olivier Martin",
        location: "Nice Ouest (06)",
        image: "/icons/user2.webp",
        quote:
            "Très professionnel, dépannage en urgence sans casse à Nice Ouest. Détection de fuite impeccable, prix raisonnables. Service de plombier recommandé.",
        color: "teal",
    },
    {
        name: "Claire Lefèvre",
        location: "Nice Est (06)",
        image: "/icons/user3.webp",
        quote:
            "Intervention en urgence, détection rapide de la fuite d'eau. Aucun dégât, travail soigné. Plombier expérimenté et fiable à Nice Est.",
        color: "teal",
    },
];

export default function Testimonials() {
    const [index, setIndex] = useState(0);

    const handleSwipe = (dir: "LEFT" | "RIGHT") => {
        if (dir === "LEFT") {
            setIndex((prev) => (prev + 1) % testimonials.length);
        } else {
            setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
        }
    };

    const handlers = useSwipeable({
        onSwipedLeft: () => handleSwipe("LEFT"),
        onSwipedRight: () => handleSwipe("RIGHT"),
        trackMouse: true,
    });

    const visibleCards = 2;
    const visibleTestimonials = testimonials.slice(index, index + visibleCards);

    while (visibleTestimonials.length < visibleCards) {
        visibleTestimonials.push(
            testimonials[(visibleTestimonials.length + index) % testimonials.length]
        );
    }

    return (
        <section className="w-full py-16 bg-white relative overflow-hidden px-16 max-md:px-6">
            <div className="text-center mb-12">
                <p className="text-sm tracking-widest text-gray-500 uppercase">Témoignages</p>
                <h2 className="text-4xl font-bold text-gray-900 mt-2">
                    Avis clients - Plombier Nice Expert
                </h2>
            </div>

            <div
                className="flex items-stretch justify-center gap-6 px-4 flex-wrap md:flex-nowrap cursor-grab active:cursor-grabbing select-none"
                {...handlers}
            >
                {visibleTestimonials.map((t, i) => (
                    <Card
                        key={i}
                        className="bg-[#f4f7f8] rounded-2xl p-8 shadow-md w-full max-w-md transition-transform duration-500 ease-in-out"
                    >
                        <Quote
                            className={cn(
                                "w-6 h-6 mb-4",
                                t.color === "black" ? "text-black" : "text-teal-600"
                            )}
                        />
                        <p className="text-gray-700 text-lg leading-relaxed">{t.quote}</p>
                        <div className="flex items-center gap-4 mt-6">
                            <img
                                src={t.image}
                                alt={`${t.name}, ${t.location}`}
                                className="w-12 h-12 rounded-full object-cover"
                            />
                            <div>
                                <p className="font-semibold text-gray-900">{t.name}</p>
                                <p className="text-sm text-gray-500">{t.location}</p>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>

            <div className="flex justify-center mt-8 gap-2">
                {testimonials.map((_, i) => (
                    <span
                        key={i}
                        className={cn(
                            "h-2 w-2 rounded-full",
                            i === index ? "bg-gray-900" : "bg-gray-300"
                        )}
                    ></span>
                ))}
            </div>

            <div
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black text-white rounded-full p-2 cursor-pointer"
                onClick={() => handleSwipe("RIGHT")}
            >
                <ChevronLeft size={16} />
            </div>
            <div
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black text-white rounded-full p-2 cursor-pointer"
                onClick={() => handleSwipe("LEFT")}
            >
                <ChevronRight size={16} />
            </div>
        </section>
    );
}
