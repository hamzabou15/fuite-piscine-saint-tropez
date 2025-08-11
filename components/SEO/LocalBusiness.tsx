// components/SEO/LocalBusiness.tsx
import Head from "next/head";
import React from "react";

const SchemaLocalBusiness: React.FC = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Fuite Piscine Saint-Tropez",
    "alternateName": "Fuite Piscine ST-Tropez - Détection & réparation",
    "url": "https://fuitepiscinesainttropez.fr",
    "logo": "https://fuitepiscinesainttropez.fr/images/logo.png",
    "image": [
      "https://fuitepiscinesainttropez.fr/images/recherche-fuite-piscine-saint-tropez.webp",
      "https://fuitepiscinesainttropez.fr/images/piscine-saint-tropez.webp"
    ],
    "telephone": "+33756935200",
    "email": "contact@fuitepiscinesainttropez.fr",
    "priceRange": "€€",
    "description": "Spécialiste local en recherche et réparation de fuites de piscine à Saint-Tropez — détection non destructive (gaz traceur, fluorescéine, inspection vidéo, tests de pression). Devis sous 24h, rapport sous 48h.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "10 Rue de la Plage",
      "addressLocality": "Saint-Tropez",
      "addressRegion": "Provence-Alpes-Côte d'Azur",
      "postalCode": "83990",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 43.2683,
      "longitude": 6.6361
    },
    "hasMap": "https://www.google.com/maps?q=43.2683,6.6361",
    "areaServed": [
      { "@type": "Place", "name": "Saint-Tropez" },
      { "@type": "Place", "name": "Gassin" },
      { "@type": "Place", "name": "Ramatuelle" },
      { "@type": "Place", "name": "Grimaud" },
      { "@type": "Place", "name": "Sainte-Maxime" }
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"
        ],
        "opens": "07:00",
        "closes": "20:00"
      }
    ],
    "service": [
      {
        "@type": "Service",
        "name": "Recherche de fuite piscine",
        "serviceType": "Recherche de fuite piscine Saint-Tropez",
        "description": "Localisation de fuites (liner, coque, canalisations, skimmer) grâce à gaz traceur, fluorescéine et inspection vidéo."
      },
      {
        "@type": "Service",
        "name": "Chemisage de canalisation",
        "serviceType": "Réparation sans casse",
        "description": "Réparation interne des tuyaux par chemisage pour éviter excavation et casse."
      },
      {
        "@type": "Service",
        "name": "Inspection vidéo & électro-acoustique",
        "serviceType": "Inspection pipeline",
        "description": "Caméra endoscopique et capteurs électro-acoustiques pour localisation précise."
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": 128
    },
    "review": [
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Sophie M." },
        "datePublished": "2024-09-12",
        "reviewBody": "Intervention discrète et efficace sur notre villa à Ramatuelle — rapport complet reçu en 48h.",
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Julien P." },
        "datePublished": "2024-08-03",
        "reviewBody": "Réparation sans casse, technicien soigneux. Je recommande.",
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
      }
    ],
    "sameAs": [
      "https://www.facebook.com/fuitepiscinesainttropez",
      "https://www.instagram.com/fuitepiscinesainttropez",
      "https://www.linkedin.com/company/fuitepiscine-sttropez"
    ],
    "keywords": "fuite piscine saint-tropez, recherche fuite piscine saint-tropez, chemisage canalisation saint-tropez, detection fuite piscine saint-tropez"
  };

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
    </Head>
  );
};

export default SchemaLocalBusiness;
