export default function Head() {
  return (
    <>
      <title>Plombier sur Nice - Interventions Rapides & Efficaces</title>
      <meta
        name="description"
        content="Besoin d’un plombier sur Nice ? PlombierNice Expert intervient rapidement pour tous vos dépannages, fuites, installations sanitaires. Contactez-nous 24/7 !"
      />
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content="Plombier sur Nice - Interventions Rapides & Efficaces" />
      <meta property="og:description" content="Dépannage rapide et efficace par votre plombier local à Nice. Disponibilité 24h/24 et 7j/7." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://plombiernice-expert.fr/services" />
      <meta property="og:image" content="https://plombiernice-expert.fr/images/plombier-nice-hero.webp" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "PlombierNice Expert",
            image: "https://plombiernice-expert.fr/images/plombier-nice-hero.webp",
            "@id": "https://plombiernice-expert.fr/",
            url: "https://plombiernice-expert.fr/",
            telephone: "+33612345678",
            address: {
              "@type": "PostalAddress",
              streetAddress: "12 Rue de France",
              addressLocality: "Nice",
              postalCode: "06000",
              addressCountry: "FR"
            },
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday"
                ],
                opens: "08:00",
                closes: "20:00"
              }
            ],
            sameAs: []
          })
        }}
      />
    </>
  );
}
