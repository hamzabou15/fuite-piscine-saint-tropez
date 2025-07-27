"use client";

import Link from "next/link";
import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuTrigger,
    NavigationMenuContent,
    NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Phone, Search, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import Image from "next/image";

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const services = [
        { title: "Recherche de fuite piscine à Nice", href: "/recherche-de-fuite-piscine-nice" },
        { title: "Diagnostic avant rénovation", href: "/services/diagnostic-avant-renovation" },
        { title: "Chemisage canalisation piscine", href: "/services/chemisage-canalisation-piscine" },
        { title: "Inspection vidéo et électro‑acoustique", href: "/services/inspection-video-electroacoustique" },
        { title: "Test pression canalisations piscine", href: "/services/test-pression-canalisations" },
        { title: "Détection fluorescéine / gaz traceur", href: "/services/detection-fluoresceine-gaz" },
        { title: "Réparation sans casse immédiate", href: "/services/reparation-sans-casse" },
        { title: "Devis sous 24h & rapport 48h", href: "/services/devis-rapport" },
    ];

    return (
        <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
            <div className="max-w-6xl mx-auto px-16 py-3 flex items-center justify-between max-md:px-6">
                <Link href="/">
                    <Image src="/images/logo-fuites-piscine.png" alt="Fuite Piscine Expert Nice" width={200} height={50} className="h-[70px] object-cover" />
                </Link>

                <NavigationMenu className="hidden md:flex">
                    <NavigationMenuList className="flex gap-8 text-sm font-medium text-[#1b1e3f]">
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild>
                                <Link href="/">Accueil</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>
                                Services
                            </NavigationMenuTrigger>
                            <NavigationMenuContent className="bg-[#1b1e3f] text-white rounded-sm shadow-lg p-4 grid gap-2" style={{ width: "320px" }}>
                                {services.map((item) => (
                                    <NavigationMenuLink
                                        key={item.href}
                                        asChild
                                        className="block px-3 py-2 text-sm hover:bg-[#02BAD6] hover:text-white rounded-sm"
                                    >
                                        <Link href={item.href}>{item.title}</Link>
                                    </NavigationMenuLink>
                                ))}
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild>
                                <Link href="/a-propos">À propos</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild>
                                <Link href="/contact">Contact</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>

                <div className="hidden md:flex items-center gap-4">
                    <Link href="/recherche-de-fuite-piscine-nice" className="text-sm text-[#02BAD6] font-medium hover:underline">
                        Recherche fuite piscine
                    </Link>
                    <Phone className="w-4 h-4 text-[#02BAD6]" />
                    <a href="tel:+33647572021" className="text-sm text-[#02BAD6] font-medium">
                        +33 647 57 20 21
                    </a>
                </div>

                <div className="md:hidden">
                    <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                        <Menu className="text-[#02BAD6] w-6 h-6" />
                    </button>
                </div>
            </div>

            {/* MENU MOBILE */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-white border-t text-sm font-medium px-4 py-4 space-y-3">
                    <Link href="/" className="block text-[#1b1e3f] hover:text-[#02BAD6]" onClick={() => setMobileMenuOpen(false)}>
                        Accueil
                    </Link>

                    <details className="group">
                        <summary className="cursor-pointer text-[#1b1e3f] hover:text-[#02BAD6]">Services</summary>
                        <div className="mt-2 pl-4 space-y-2">
                            {services.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="block text-[#1b1e3f] hover:text-[#02BAD6]"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {item.title}
                                </Link>
                            ))}
                        </div>
                    </details>

                    <Link href="/a-propos" className="block text-[#1b1e3f] hover:text-[#02BAD6]" onClick={() => setMobileMenuOpen(false)}>
                        À propos
                    </Link>
                    <Link href="/contact" className="block text-[#1b1e3f] hover:text-[#02BAD6]" onClick={() => setMobileMenuOpen(false)}>
                        Contact
                    </Link>

                    <div className="flex items-center gap-2 pt-4 border-t">
                        <Phone className="w-4 h-4 text-[#02BAD6]" />
                        <a href="tel:+33647572021" className="text-sm text-[#02BAD6] font-medium">
                            +33 647 57 20 21
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}
