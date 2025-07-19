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
import { Phone, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import Image from "next/image";

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const services = [
        { title: "Installation et rénovation de plomberie", href: "/services/installation-renovation-plomberie" },
        { title: "Dépannage plomberie à Nice", href: "/services/depannage-plomberie" },
        { title: "Salle de bains clé en main", href: "/services/salle-de-bains-cle-en-main" },
        { title: "Salle de bains PMR à Nice", href: "/services/salle-de-bains-pmr" },
        { title: "Installation de chauffage", href: "/services/installation-chauffage" },
        { title: "Remplacement de chaudière", href: "/services/remplacement-chaudiere" },
        { title: "Climatisation réversible à Nice", href: "/services/climatisation-reversible" },
        { title: "Entretien annuel chaudière & climatisation", href: "/services/entretien-chaudiere-climatisation" },
        { title: "Dépannage chauffage & climatisation", href: "/services/depannage-chauffage-climatisation" },
        { title: "Recherche et réparation de fuites", href: "/services/recherche-reparation-fuites" },
        { title: "Désembouage de circuits de chauffage", href: "/services/desembouage-circuits-chauffage" },
        { title: "Installation de chauffe-eau", href: "/services/installation-chauffe-eau" },
    ];

    return (
        <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
            <div className="max-w-6xl mx-auto px-16 max-md:px-6 pl-0 py-3 flex items-center justify-between">
                <Image
                    src="/images/logo.png"
                    alt="Logo Plombier Nice Expert"
                    width={200}
                    height={50}
                    className="max-md:hidden"
                />
                <Image
                    src="/images/logoV2.png"
                    alt="Logo Plombier Nice Expert"
                    width={50}
                    height={50}
                    className="md:hidden "
                />

                <div className="md:hidden">
                    <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                        <Menu className="text-[#13727B] w-6 h-6" />
                    </button>
                </div>

                <NavigationMenu className="hidden md:flex">
                    <NavigationMenuList className="flex gap-6 text-sm font-medium text-[#1b1e3f]">
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild className="hover:text-[#13727B] transition">
                                <Link href="/">Accueil</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuLink asChild className="hover:text-[#13727B] transition">
                                <NavigationMenuTrigger className="hover:text-[#13727B]">
                                    <Link href="/services">Services</Link>
                                </NavigationMenuTrigger>
                            </NavigationMenuLink>

                            <NavigationMenuContent className="bg-[#1b1e3f] text-white rounded-sm shadow-lg p-4 grid gap-2" style={{ width: "300px" }}>
                                {services.map((item) => (
                                    <NavigationMenuLink
                                        key={item.href}
                                        asChild
                                        className={cn(
                                            "block px-3 py-2 text-sm hover:bg-[#13727B] hover:text-white transition rounded-sm"
                                        )}
                                    >
                                        <Link href={item.href}>{item.title}</Link>
                                    </NavigationMenuLink>
                                ))}
                            </NavigationMenuContent>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuLink asChild className="hover:text-[#13727B] transition">
                                <Link href="/a-propos">À propos</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuLink asChild className="hover:text-[#13727B] transition">
                                <Link href="/contact">Contact</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>

                <div className="hidden md:flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#13727B]" />
                    <a href="tel:+33693788807" className="text-sm text-[#13727B] font-medium">
                        +33 6 93 78 88 07
                    </a>
                </div>
            </div>

            {/* MOBILE MENU */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-white border-t text-sm font-medium px-4 py-4 space-y-3">
                    <Link href="/" className="block text-[#1b1e3f] hover:text-[#13727B]">Accueil</Link>
                    <details className="group">
                        <summary className="cursor-pointer text-[#1b1e3f] hover:text-[#13727B]">Services</summary>
                        <div className="mt-2 pl-4 space-y-2">
                            <Link href={"/services"} className="block text-[#13727B] hover:text-[#13727B]">
                                Tous Les Services
                            </Link>
                            {services.map((item) => (
                                <>
                                    <Link key={item.href} href={item.href} className="block text-[#1b1e3f] hover:text-[#13727B]">
                                        {item.title}
                                    </Link>
                                </>
                            ))}
                        </div>
                    </details>
                    <Link href="/a-propos" className="block text-[#1b1e3f] hover:text-[#13727B]">À propos</Link>
                    <Link href="/contact" className="block text-[#1b1e3f] hover:text-[#13727B]">Contact</Link>
                    <div className="flex items-center gap-2 pt-2 border-t">
                        <Phone className="w-4 h-4 text-[#13727B]" />
                        <a href="tel:+33693788807" className="text-sm text-[#13727B] font-medium">
                            +33 6 93 78 88 07
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}
