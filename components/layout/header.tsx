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
import { useState } from "react";
import Image from "next/image";
import { services } from "@/lib/service";

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-white border-b shadow-md">
            <div className="max-w-6xl mx-auto px-16 py-3 flex items-center justify-between max-md:px-6">
                {/* Logo */}
                <Link href="/" className="p-0">
                    <Image
                        src="/images/logo-fuites-piscine-saint-tropez.png"
                        alt="Fuite Piscine Expert Saint Tropez"
                        width={300}
                        height={70}
                        className=" w-[150px] h-[70px]  object-cover"
                    />
                </Link>

                {/* Menu Desktop */}
                <NavigationMenu className="hidden md:flex">
                    <NavigationMenuList className="flex gap-10 text-sm font-semibold text-[#1E3A8A]">
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild>
                                <Link
                                    href="/"
                                    className="transition-colors hover:text-[#F59E0B] focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
                                >
                                    Accueil
                                </Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuTrigger className="transition-colors hover:text-[#F59E0B] font-semibold text-[#1E3A8A] focus:outline-none focus:ring-2 focus:ring-[#F59E0B]">
                                <Link
                                    href="/services"
                                    className="transition-colors hover:text-[#F59E0B] focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
                                >  Services</Link>
                            </NavigationMenuTrigger>
                            <NavigationMenuContent
                                className="bg-[#1E3A8A] text-white rounded-md shadow-lg p-5 grid gap-3"
                                style={{ width: "320px" }}
                            >
                                {services.map((item , index) => (
                                    <NavigationMenuLink
                                        key={index}
                                        asChild
                                        className="block px-4 py-2 rounded-md text-sm text-[#1E3A8A] bg-white hover:bg-[#F59E0B] hover:text-[#1E3A8A] transition-colors"
                                    >
                                        <Link href={`/services/${item.slug}`}>{item.title}</Link>
                                    </NavigationMenuLink>
                                ))}
                            </NavigationMenuContent>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuLink asChild>
                                <Link
                                    href="/a-propos"
                                    className="transition-colors hover:text-[#F59E0B] focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
                                >
                                    À propos
                                </Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuLink asChild>
                                <Link
                                    href="/contact"
                                    className="transition-colors hover:text-[#F59E0B] focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
                                >
                                    Contact
                                </Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>

                {/* Contact + tel desktop */}
                <div className="hidden md:flex items-center gap-5">
                    <Link
                        href="/recherche-de-fuite-piscine-saint-tropez"
                        className="text-sm font-semibold text-[#F59E0B] hover:underline"
                    >
                        Recherche fuite piscine
                    </Link>
                    <Phone className="w-5 h-5 text-[#F59E0B]" />
                    <a
                        href="tel:+33647572021"
                        className="text-sm font-semibold text-[#F59E0B] hover:underline"
                    >
                        +33 647 57 20 21
                    </a>
                </div>

                {/* Hamburger mobile */}
                <div className="md:hidden">
                    <button
                        aria-label="Toggle menu"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="text-[#F59E0B] w-7 h-7 focus:outline-none focus:ring-2 focus:ring-[#F59E0B] rounded"
                    >
                        <Menu />
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {mobileMenuOpen && (
                <nav className="md:hidden bg-white border-t px-5 py-5 space-y-5 shadow-lg">
                    <Link
                        href="/"
                        className="block text-[#1E3A8A] font-semibold text-base hover:text-[#F59E0B]"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        Accueil
                    </Link>

                    <details className="group">
                        <summary className="cursor-pointer font-semibold text-[#1E3A8A] hover:text-[#F59E0B]">
                            Services
                        </summary>
                        <div className="mt-2 pl-5 flex flex-col gap-2">
                            {services.map((item) => (
                                <Link
                                    key={item.link}
                                    href={item.link}
                                    className="text-[#1E3A8A] hover:text-[#F59E0B]"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {item.title}
                                </Link>
                            ))}
                        </div>
                    </details>

                    <Link
                        href="/a-propos"
                        className="block text-[#1E3A8A] font-semibold text-base hover:text-[#F59E0B]"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        À propos
                    </Link>
                    <Link
                        href="/contact"
                        className="block text-[#1E3A8A] font-semibold text-base hover:text-[#F59E0B]"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        Contact
                    </Link>

                    <div className="flex items-center gap-3 pt-5 border-t">
                        <Phone className="w-5 h-5 text-[#F59E0B]" />
                        <a
                            href="tel:+33647572021"
                            className="text-[#F59E0B] font-semibold text-base hover:underline"
                        >
                            +33 647 57 20 21
                        </a>
                    </div>
                </nav>
            )}
        </header>
    );
}
