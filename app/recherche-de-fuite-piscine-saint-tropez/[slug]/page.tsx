// app/recherche-de-fuite-piscine-saint-tropez/cas/[slug]/page.tsx
import { notFound } from 'next/navigation';
import { Phone } from 'lucide-react';
import { caseStudies } from '@/lib/s';
import { Metadata } from 'next';

interface RechercheFuiteProps {
  params: Promise<{ slug: string }>;

}

export default async function CaseStudyDetail({ params }: RechercheFuiteProps) {
  const { slug } = await params;

  const study = caseStudies.find((s) => s.slug === slug);

  if (!study) return notFound();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-12 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-[#0f203f] mb-4">
          {study.title}
        </h1>
        <div className="h-1 w-24 bg-[#F59E0B] mx-auto"></div>
      </div>

      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div
          className={`h-64 bg-gradient-to-r ${study.gradient} flex items-center justify-center relative`}
        >
          <h2 className="text-2xl font-bold text-white text-center px-4">
            Étude de cas - {study.title}
          </h2>
        </div>

        <div className="p-6 md:p-8">
          <div
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: study.details }}
          />

          <div className="mt-12 bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] rounded-xl p-6 text-white">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div>
                <h3 className="text-xl font-bold mb-2">Un problème similaire ?</h3>
                <p>Nos experts sont à votre disposition pour un diagnostic précis</p>
              </div>
              <a
                href="tel:+33756935200"
                className="flex items-center gap-3 px-6 py-3 bg-[#F59E0B] text-[#1E3A8A] font-bold rounded-lg hover:bg-[#D97706] transition whitespace-nowrap"
              >
                <Phone className="w-5 h-5" />
                <span>07 56 93 52 00</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



// Génération des paths statiques
export async function generateStaticParams() {
  return caseStudies.map(study => ({
    slug: study.slug
  }));
}
export async function generateMetadata({ params }: RechercheFuiteProps) {

  const { slug } = await params;

  const study = caseStudies.find(s => s.slug === slug);

  return {
    title: `${study?.title} | Fuite Piscine Saint-Tropez`,
    description: `Cas concret : ${study?.problem} - Solution : ${study?.solution}`,
    openGraph: {
      images: [`/images/case-studies/${study?.slug}.jpg`],
    },
  };
}