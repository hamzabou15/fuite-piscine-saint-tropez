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
import { Phone } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Header() {
    return (
        <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
            <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                <Link href="/" className="text-xl font-bold text-orange-600">
                    Plombier Nice Expert
                </Link>

                <NavigationMenu>
                    <NavigationMenuList className="flex gap-6 text-sm font-medium text-[#1b1e3f]">
                        <NavigationMenuItem>
                            <NavigationMenuLink
                                asChild
                                className="hover:text-orange-600 transition"
                            >
                                <Link href="/">Accueil</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuTrigger className="hover:text-orange-600">
                                Services
                            </NavigationMenuTrigger>
                            <NavigationMenuContent className="bg-[#1b1e3f] text-white rounded-sm shadow-lg p-4 grid gap-2" style={{ width: "300px" }}>
                                {[
                                    {
                                        title: "Dépannage plomberie 24h/24",
                                        href: "/services/depannage-plomberie-nice",
                                    },
                                    {
                                        title: "Recherche et réparation de fuites",
                                        href: "/services/recherche-fuite-nice",
                                    },
                                    {
                                        title: "Débouchage de canalisations",
                                        href: "/services/debouchage-canalisation-nice",
                                    },
                                    {
                                        title: "Installation de chauffe-eau",
                                        href: "/services/chauffe-eau-nice",
                                    },
                                    {
                                        title: "Rénovation de salle de bains",
                                        href: "/services/renovation-salle-de-bain-nice",
                                    },
                                    {
                                        title: "Climatisation & pompe à chaleur",
                                        href: "/services/climatisation-nice",
                                    },
                                    {
                                        title: "Couverture & zinguerie",
                                        href: "/services/couverture-zinguerie-nice",
                                    },
                                ].map((item) => (
                                    <NavigationMenuLink
                                        key={item.href}
                                        asChild
                                        className={cn(
                                            "block px-3 py-2 text-sm hover:bg-orange-600 hover:text-white transition rounded-sm"
                                        )}
                                    >
                                        <Link href={item.href}>{item.title}</Link>
                                    </NavigationMenuLink>
                                ))}
                            </NavigationMenuContent>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuLink
                                asChild
                                className="hover:text-orange-600 transition"
                            >
                                <Link href="/a-propos">À propos</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuLink
                                asChild
                                className="hover:text-orange-600 transition"
                            >
                                <Link href="/contact">Contact</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>

                <div className="hidden md:flex items-center gap-2">
                    <Phone className="w-4 h-4 text-orange-600" />
                    <a href="tel:0612345678" className="text-sm text-orange-600 font-medium">
                        06 12 34 56 78
                    </a>
                </div>
            </div>
        </header>
    );
}
