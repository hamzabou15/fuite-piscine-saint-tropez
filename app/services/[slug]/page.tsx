// app/services/[slug]/page.tsx
import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { services } from "@/lib/service";
import ContactForm from "@/components/services/ContactSection";


interface ServicesProps {
  params: Promise<{ slug: string }>;

}

export async function generateMetadata({ params }: ServicesProps) {
  const { slug } = await params;

  console.log("slig", slug)

  console.log("services" , services)

  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Service - Fuite Piscine Saint-Tropez",
      description: "Services de détection et réparation de fuites piscine à Saint-Tropez.",
    };
  }

  const canonical = `https://fuitepiscinesainttropez.fr${service.link || `/services/${service.slug}`}`;
  const imageUrl = `https://fuitepiscinesainttropez.fr${service.image || "/images/og-fuite-piscine.jpg"}`;

  return {
    title: service.metaTitle ?? service.title,
    description: service.metaDescription ?? service.excerpt ?? service.description,
    alternates: { canonical },
    openGraph: {
      title: service.metaTitle ?? service.title,
      description: service.metaDescription ?? service.excerpt ?? service.description,
      url: canonical,
      images: [{ url: imageUrl, width: 1200, height: 630, alt: service.alt ?? "Fuite Piscine Saint-Tropez" }],
      siteName: "Fuite Piscine Saint-Tropez",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: service.metaTitle ?? service.title,
      description: service.metaDescription ?? service.excerpt ?? service.description,
      images: [imageUrl],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
    // Optionnel: structured data simplifié dans metadata si nécessaire
    // You can return other metadata fields here (authors, icons, etc.)
  };
}


export default async function ServicePage({ params }: ServicesProps) {
  const { slug } = await params;

  const service = services.find((s) => s.slug === slug);
  if (!service) return notFound();

  // const canonical = `https://fuitepiscinesainttropez.fr${service.link || `/services/${service.slug}`}`;
  const imageUrl = `https://fuitepiscinesainttropez.fr${service.image || "/images/og-fuite-piscine.jpg"}`;

  // JSON-LD for Service + LocalBusiness + AggregateRating
  const jsonLdService = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.metaDescription ?? service.excerpt ?? service.description,
    provider: {
      "@type": "LocalBusiness",
      name: "Fuite Piscine Saint-Tropez",
      url: "https://fuitepiscinesainttropez.fr",
      telephone: "+33756935200",
      address: {
        "@type": "PostalAddress",
        streetAddress: "10 Rue de la Plage",
        addressLocality: "Saint-Tropez",
        postalCode: "83990",
        addressCountry: "FR",
      },
    },
    image: imageUrl,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: String(service.rating ?? 5),
      reviewCount: String(service.reviewCount ?? 0),
    },
  };

  const jsonLdLocalBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Fuite Piscine Saint-Tropez",
    url: "https://fuitepiscinesainttropez.fr",
    telephone: "+33756935200",
    address: {
      "@type": "PostalAddress",
      streetAddress: "10 Rue de la Plage",
      addressLocality: "Saint-Tropez",
      postalCode: "83990",
      addressCountry: "FR",
    },
  };


  return (
    <>
      {/* JSON-LD scripts */}
      <script
        key="service-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }}
      />
      <script
        key="localbusiness-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdLocalBusiness) }}
      />

      <main className="min-h-screen bg-gray-50">
        {/* Hero */}
        <section className="relative bg-gradient-to-b from-[#EEF6FF] to-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12 py-14 lg:py-20">
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2">
                <p className="text-sm font-semibold tracking-widest text-[#1E3A8A] uppercase">
                  {service.title.split("—")[0] || "Service"}
                </p>
                <h1 className="mt-3 text-3xl md:text-4xl font-extrabold text-[#0f203f] leading-tight">
                  {service.title}
                </h1>
                <p className="mt-4 text-lg text-gray-700 max-w-3xl">{service.excerpt}</p>

                <div className="mt-6 flex flex-wrap gap-4 items-center">
                  <a
                    href="tel:+33756935200"
                    className="inline-flex items-center gap-3 px-6 py-3 rounded-md shadow bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] text-white font-semibold hover:opacity-95 transition"
                    aria-label="Appeler Fuite Piscine Saint-Tropez"
                  >
                    Appeler Saint-Tropez
                  </a>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-[#1E3A8A] text-[#1E3A8A] font-semibold bg-white hover:bg-[#f8fafb] transition"
                  >
                    Demander un devis
                    <ChevronRight className="w-4 h-4" />
                  </Link>

                  <span className="ml-2 inline-block px-3 py-2 rounded-md bg-[#F59E0B]/10 text-[#F59E0B] font-semibold text-sm">
                    Réponse en 24h
                  </span>
                </div>

                {/* Breadcrumb small */}
                <nav className="mt-6 text-sm text-gray-500" aria-label="Breadcrumb">
                  <ol className="flex items-center gap-2">
                    <li>
                      <Link href="/" className="hover:underline">
                        Accueil
                      </Link>
                    </li>
                    <li>/</li>
                    <li>
                      <Link href="/services" className="hover:underline">
                        Services
                      </Link>
                    </li>
                    <li>/</li>
                    <li className="text-gray-700">{service.title}</li>
                  </ol>
                </nav>
              </div>

              <div className="hidden lg:block">
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    width={900}
                    height={600}
                    className="w-full h-56 object-cover"
                    priority
                  />
                </div>

                <div className="mt-4 bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500">Satisfaction</p>
                      <p className="text-lg font-bold text-[#1E3A8A]">
                        {service.rating ?? "5.0"} ★ ({service.reviewCount ?? 0})
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500">Rapport</p>
                      <p className="text-lg font-bold text-[#0f203f]">48h</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main content + aside */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-12">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Main column */}
            <article className="lg:col-span-2 space-y-8">
              <div className="rounded-lg overflow-hidden shadow-sm">
                <Image
                  src={service.image}
                  alt={service.alt}
                  width={1400}
                  height={700}
                  className="w-full h-64 object-cover"
                />
              </div>

              <div className="prose max-w-none text-gray-700">
                <h2 className="text-2xl font-semibold text-[#0f203f]">Description</h2>
                <p>{service.description}</p>

                {/* child section 1 */}
                {service.child?.title1 && (
                  <>
                    <h3 className="mt-6 text-xl font-semibold text-[#0f203f]">
                      {service.child.title1}
                    </h3>
                    <div
                      className="mt-2"
                      dangerouslySetInnerHTML={{ __html: service.child.description1 }}
                    />
                  </>
                )}

                {/* images row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                  <div className="rounded-lg overflow-hidden">
                    <Image
                      src="/images/inspection-video-piscine.webp"
                      alt="Inspection vidéo"
                      width={900}
                      height={600}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden">
                    <Image
                      src="/images/recherche-fuite-piscine-saint-tropez.webp"
                      alt="Détection de fuite"
                      width={900}
                      height={600}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                </div>

                {/* child section 2 */}
                {service.child?.title2 && (
                  <>
                    <h3 className="mt-8 text-xl font-semibold text-[#0f203f]">
                      {service.child.title2}
                    </h3>
                    <div
                      className="mt-2"
                      dangerouslySetInnerHTML={{ __html: service.child.description2 ?? "" }}
                    />
                  </>
                )}

                {/* case study (factice) */}
                {service.caseStudy && (
                  <div className="mt-8 bg-[#FFF8E6] border border-[#F59E0B]/20 rounded-lg p-6">
                    <h4 className="font-semibold text-[#0f203f]">Cas client (exemple)</h4>
                    <p className="mt-2 text-gray-700">{service.caseStudy}</p>
                  </div>
                )}

                {/* FAQ suggestion -> small CTA to expand later */}
                <div className="mt-8">
                  <h4 className="font-semibold text-[#0f203f]">Besoin d&apos;aide ?</h4>
                  <p className="text-gray-600 mt-2">
                    Si vous souhaitez un diagnostic rapide, appelez-nous ou demandez un devis : nous
                    intervenons souvent en <strong>24–48h</strong> dans le Golfe de Saint-Tropez.
                  </p>
                </div>
              </div>
            </article>

            {/* Aside - sticky contact */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                  <h4 className="text-lg font-semibold text-[#0f203f]">Obtenir un diagnostic</h4>
                  <p className="text-sm text-gray-600 mt-2">
                    Devis gratuit en 24h — rapport technique sous 48h. Intervention discrète pour villas
                    et hôtels.
                  </p>

                  <div className="mt-4 flex gap-3">
                    <a
                      href="tel:+33756935200"
                      className="flex-1 inline-flex items-center justify-center gap-3 px-4 py-3 rounded-md shadow bg-[#F59E0B] text-[#1E3A8A] font-semibold hover:bg-[#fbbf24] transition"
                      aria-label="Appeler Fuite Piscine Saint-Tropez"
                    >
                      Appeler Saint-Tropez
                    </a>

                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 px-4 py-3 rounded-md border border-[#1E3A8A] text-[#1E3A8A] font-semibold hover:bg-[#f8fafb] transition"
                    >
                      Devis
                    </Link>
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <div className="bg-[#F8FAFF] p-3 rounded-md text-center">
                      <p className="text-sm text-gray-600">Taux de détection</p>
                      <p className="font-bold text-[#1E3A8A]">98%</p>
                    </div>
                    <div className="bg-[#fff8f0] p-3 rounded-md text-center">
                      <p className="text-sm text-gray-600">Rapport</p>
                      <p className="font-bold text-[#0f203f]">48h</p>
                    </div>
                  </div>
                </div>

                {/* Contact form (client component) */}
                <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                  <ContactForm />
                </div>

                <div className="text-sm text-gray-500">
                  <p className="font-medium text-gray-700">Zones d&apos;intervention</p>
                  <p>Pampelonne · Ramatuelle · Gassin · Port Grimaud · Sainte-Maxime</p>
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* Related services strip */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 pb-20">
          <h3 className="text-xl font-semibold text-[#0f203f] mb-6">Services connexes</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services
              .filter((s) => s.slug !== service.slug)
              .slice(0, 4)
              .map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="block bg-white border border-gray-100 rounded-xl p-4 hover:shadow-lg transition"
                >
                  <div className="flex items-center gap-4">
                    <Image
                      src={s.image}
                      alt={s.alt}
                      width={120}
                      height={80}
                      className="w-20 h-14 object-cover rounded"
                    />
                    <div>
                      <h4 className="font-semibold text-[#0f203f]">{s.title}</h4>
                      <p className="text-sm text-gray-600 mt-1 line-clamp-2">{s.excerpt}</p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </section>
      </main>
    </>
  );
}
