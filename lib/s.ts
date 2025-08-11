// data/caseStudies.ts
export const caseStudies = [
  {
    id: 1,
    slug: "villa-ramatuelle",
    title: "Villa de luxe à Ramatuelle",
    problem: "Fissure structurelle sous margelle en pierre naturelle (perte: 3cm/jour)",
    solution: "Détection électro-acoustique + réparation par résine époxy alimentaire",
    img:"/images/fissure-structurelle-sous-margelle-en-pierre.webp",
    result: "Fuite colmatée en 48h sans endommager le travertin",
    gradient: "from-[#1E3A8A] to-[#2563EB]",
    details: `
      <h3 class="text-2xl font-bold text-[#0f203f] mb-4">Contexte</h3>
      <p class="mb-6 text-[#475565]">
        Propriété de 8M€ avec piscine béton de 12×5m, revêtement en travertin vieilli. 
        Le propriétaire avait constaté une perte d'eau persistante malgré plusieurs interventions.
      </p>
      
      <h3 class="text-2xl font-bold text-[#0f203f] mb-4">Notre intervention</h3>
      <p class="mb-6 text-[#475565]">
        Après analyse électro-acoustique, nous avons localisé une microfissure de 0.2mm sous la margelle. 
        La réparation a été effectuée par injection de résine époxy via un forage de seulement 8mm, 
        parfaitement dissimulé dans le joint de silicone.
      </p>
      
      <h3 class="text-2xl font-bold text-[#0f203f] mb-4">Résultats</h3>
      <ul class="list-disc pl-6 mb-6 space-y-2 text-[#475565]">
        <li>Fuite colmatée en 48h sans démontage de la margelle</li>
        <li>Économie de 58 000€ par rapport à une rénovation complète</li>
        <li>Garantie décennale sur la réparation</li>
      </ul>
      
      <div class="bg-[#F8FAFF] p-6 rounded-xl">
        <p class="font-bold text-[#0f203f]">Technologies utilisées :</p>
        <p class="text-[#475565]">Scanner électro-acoustique HD40, résine époxy alimentaire EPOFLEX</p>
      </div>
    `
  },
  {
    id: 2,
    slug: "hotel-gassin",
    title: "Hôtel 5* à Gassin",
    problem: "Fuite intermittente dans un système hydraulique complexe",
    solution: "Cartographie réseau + gaz traceur → fuite localisée dans une vanne multivoies",
    result: "Économie de 20 000€/an en eau pour l'établissement",
    img:"/images/fuite-intermittente-dans-un-systeme-hydraulique.webp",
    gradient: "from-[#F59E0B] to-[#FBBF24]",
    details: `
      <h3 class="text-2xl font-bold text-[#0f203f] mb-4">Contexte</h3>
      <p class="mb-6 text-[#475565]">
        Palace de 50 chambres avec piscine de 25m et système hydraulique complexe. 
        La fuite intermittente résistait aux diagnostics depuis 3 mois.
      </p>
      
      <h3 class="text-2xl font-bold text-[#0f203f] mb-4">Notre intervention</h3>
      <p class="mb-6 text-[#475565]">
        Cartographie complète du réseau (142m de canalisations) et injection de gaz traceur à l'hydrogène. 
        Localisation précise d'une micro-fuite sur une vanne multivoies cachée derrière un mur technique.
      </p>
      
      <h3 class="text-2xl font-bold text-[#0f203f] mb-4">Résultats</h3>
      <ul class="list-disc pl-6 mb-6 space-y-2 text-[#475565]">
        <li>Réparation en 3h sans perturbation de l'activité hôtelière</li>
        <li>Économie de 20 000€/an sur la consommation d'eau</li>
        <li>Installation d'un système de monitoring connecté</li>
      </ul>
      
      <div class="bg-[#F8FAFF] p-6 rounded-xl">
        <p class="font-bold text-[#0f203f]">Technologies utilisées :</p>
        <p class="text-[#475565]">Gaz traceur H2, détecteur ultra-sensible H2000, système de monitoring WATERGUARD</p>
      </div>
    `
  },
  {
    id: 3,
    slug: "piscine-debordement-cogolin",
    title: "Piscine à débordement à Cogolin",
    problem: "Surconsommation d'eau malgré entretien rigoureux",
    solution: "Endoscope HD → micro-fuite dans un joint de vanne",
    img:"/images/endoscope.webp",
    result: "Réparation sans vidange + installation d'un système de monitoring",
    gradient: "from-[#0f203f] to-[#1E3A8A]",
    details: `
      <h3 class="text-2xl font-bold text-[#0f203f] mb-4">Contexte</h3>
      <p class="mb-6 text-[#475565]">
        Propriété contemporaine avec piscine miroir de 18m et système hydraulique enterré. 
        Surconsommation de 15 000L/mois malgré un entretien professionnel.
      </p>
      
      <h3 class="text-2xl font-bold text-[#0f203f] mb-4">Notre intervention</h3>
      <p class="mb-6 text-[#475565]">
        Inspection par endoscope HD (diamètre 6mm) des vannes multivoies. 
        Détection d'une micro-fuite sur un joint torique défectueux dans une vanne de régulation.
      </p>
      
      <h3 class="text-2xl font-bold text-[#0f203f] mb-4">Résultats</h3>
      <ul class="list-disc pl-6 mb-6 space-y-2 text-[#475565]">
        <li>Réparation sans vidange du bassin</li>
        <li>Économie de 180 000L d'eau par an</li>
        <li>Installation d'un système d'alerte connecté</li>
      </ul>
      
      <div class="bg-[#F8FAFF] p-6 rounded-xl">
        <p class="font-bold text-[#0f203f]">Technologies utilisées :</p>
        <p class="text-[#475565]">Endoscope HD 4K étanche, système de monitoring WATERALERT</p>
      </div>
    `
  },
  {
    id: 4,
    slug: "residence-grimaud",
    title: "Résidence de prestige à Grimaud",
    problem: "Fuite invisible sur piscine liner de grand volume",
    solution: "Gaz traceur + caméra thermique → défaut d'étanchéité sur couture",
    result: "Réparation non invasive préservant le liner original",
    img:"/images/detection-fluoresceine-gaz.webp",
    gradient: "from-[#8B5CF6] to-[#EC4899]",
    details: `
      <h3 class="text-2xl font-bold text-[#0f203f] mb-4">Contexte</h3>
      <p class="mb-6 text-[#475565]">
        Piscine liner de 10×4m avec perte de 4cm/jour. Tous les diagnostics précédents avaient échoué, 
        menaçant de nécessiter le remplacement complet du liner (coût estimé à 8 500€).
      </p>
      
      <h3 class="text-2xl font-bold text-[#0f203f] mb-4">Notre intervention</h3>
      <p class="mb-6 text-[#475565]">
        Combinaison de gaz traceur et de caméra thermique haute résolution. 
        Localisation d'un défaut d'étanchéité sur une couture du liner, invisible à l'œil nu.
      </p>
      
      <h3 class="text-2xl font-bold text-[#0f203f] mb-4">Résultats</h3>
      <ul class="list-disc pl-6 mb-6 space-y-2 text-[#475565]">
        <li>Réparation en 6h sans vidange complète</li>
        <li>Économie de 7 200€ (remplacement liner évité)</li>
        <li>Garantie 2 ans sur la réparation</li>
      </ul>
      
      <div class="bg-[#F8FAFF] p-6 rounded-xl">
        <p class="font-bold text-[#0f203f]">Technologies utilisées :</p>
        <p class="text-[#475565]">Gaz traceur H2, caméra thermique FLIR T1020, kit de réparation liner professionnel</p>
      </div>
    `
  },
  {
    id: 5,
    slug: "villa-sainte-maxime",
    title: "Villa contemporaine à Sainte-Maxime",
    problem: "Fuite sur skimmer avant l'ouverture estivale",
    solution: "Remplacement du joint sans dépose du carrelage",
    img:'/images/remplacement-du-joint-sans-depose-du-carrelage.webp',
    result: "Piscine opérationnelle en 24h pour la saison",
    gradient: "from-[#10B981] to-[#059669]",
    details: `
      <h3 class="text-2xl font-bold text-[#0f203f] mb-4">Contexte</h3>
      <p class="mb-6 text-[#475565]">
        Urgence saisonnière : fuite importante (5cm/jour) sur skimmer, 3 jours avant la location estivale 
        de la villa (valeur locative : 15 000€/semaine).
      </p>
      
      <h3 class="text-2xl font-bold text-[#0f203f] mb-4">Notre intervention</h3>
      <p class="mb-6 text-[#475565]">
        Diagnostic par caméra endoscopique → joint défectueux sur collier de skimmer. 
        Remplacement par technique non destructive sans déposer le carrelage en grès cérame.
      </p>
      
      <h3 class="text-2xl font-bold text-[#0f203f] mb-4">Résultats</h3>
      <ul class="list-disc pl-6 mb-6 space-y-2 text-[#475565]">
        <li>Intervention express en 4h</li>
        <li>Piscine opérationnelle pour le début de la location</li>
        <li>Économie de 15 000€ de perte locative</li>
      </ul>
      
      <div class="bg-[#F8FAFF] p-6 rounded-xl">
        <p class="font-bold text-[#0f203f]">Technologies utilisées :</p>
        <p class="text-[#475565]">Endoscope HD étanche, joints haute performance SKIMSEAL, scellant polyuréthane</p>
      </div>
    `
  },
  {
    id: 6,
    slug: "domaine-cavalaire",
    title: "Domaine viticole à Cavalaire",
    problem: "Fuites multiples sur piscine béton ancienne",
    solution: "Réhabilitation complète avec membrane d'étanchéité",
    img:"/images/rehabilitation-complete.webp",
    result: "Piscine comme neuve avec garantie 10 ans",
    gradient: "from-[#F97316] to-[#EA580C]",
    details: `
      <h3 class="text-2xl font-bold text-[#0f203f] mb-4">Contexte</h3>
      <p class="mb-6 text-[#475565]">
        Piscine béton de 30 ans présentant des fuites multiples (perte de 8cm/jour) et des problèmes 
        structurels. Le client hésitait entre la réhabilitation et la démolition.
      </p>
      
      <h3 class="text-2xl font-bold text-[#0f203f] mb-4">Notre intervention</h3>
      <p class="mb-6 text-[#475565]">
        Diagnostic complet (scanner laser + tests d'étanchéité) puis réhabilitation avec membrane 
        armée en polyurée projetée. Colmatage des fissures structurelles par injections de résine époxy.
      </p>
      
      <h3 class="text-2xl font-bold text-[#0f203f] mb-4">Résultats</h3>
      <ul class="list-disc pl-6 mb-6 space-y-2 text-[#475565]">
        <li>Étanchéité totale garantie 10 ans</li>
        <li>Coût 60% inférieur à une reconstruction</li>
        <li>Délai de réalisation : 1 semaine</li>
      </ul>
      
      <div class="bg-[#F8FAFF] p-6 rounded-xl">
        <p class="font-bold text-[#0f203f]">Technologies utilisées :</p>
        <p class="text-[#475565]">Scanner laser FARO, membrane polyurée AQUAFIN, résine époxy EPOJET</p>
      </div>
    `
  }
];