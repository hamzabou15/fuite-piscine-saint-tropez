import Head from "next/head";

const SchemaLocalBusiness = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Plumber", // Le type "Plumber" est plus pertinent ici qu'"LocalBusiness"
    "name": "Fuite Piscine Expert Nice",
    "image": "https://fuite-piscine-nice.fr/images/technicien-piscine-nice.webp",
    "url": "https://fuite-piscine-nice.fr",
    "telephone": "++33647572021",
    "priceRange": "€€",
    "description": "Spécialiste en détection et réparation de fuites de piscine à Nice. Intervention rapide, équipements de haute technologie, techniciens qualifiés.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "45 Avenue Jean Médecin",
      "addressLocality": "Nice",
      "addressRegion": "Provence-Alpes-Côte d’Azur",
      "postalCode": "06000",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 43.7031,
      "longitude": 7.2661
    },
    "areaServed": {
      "@type": "Place",
      "name": "Nice"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "08:00",
        "closes": "20:00"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.97",
      "reviewCount": "175"
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Laurent M."
        },
        "reviewBody": "Détection de fuite piscine rapide et efficace à Nice. Très pro et ponctuel."
      },
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "4.9",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Sabrina T."
        },
        "reviewBody": "Technicien piscine à Nice au top. Il a trouvé la fuite et réparé dans la journée."
      },
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Yassine R."
        },
        "reviewBody": "Service impeccable pour la réparation de ma piscine à Nice. Je recommande fortement."
      }
    ],
    "keywords": "fuite piscine Nice, recherche fuite piscine Nice, technicien piscine Nice, réparation piscine Nice, détection fuite piscine Nice"
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
