"use client";
import { notFound, useParams } from "next/navigation";
import Image from "next/image";
import { services } from "@/lib/service";
import ContactForm from "@/components/services/ContactSection";



export default function PipelinesPage() {
  const { slug } = useParams();
  const service = services.find((p) => p.slug === slug);

  if (!service) return notFound();

  return (
    <main className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8 p-6 max-lg:items-center">
        <div className="md:col-span-2">
          <Image
            src={service.image}
            alt={service.alt}
            width={800}
            height={500}
            className="w-full h-auto max-h-[500px] object-cover rounded"
          />
          <h2 className="text-4xl font-bold max-lg:text-3xl mt-6 text-[#1b1e3f]">
            {service.title}
          </h2>
          <p className="text-[#4d5562] mt-4">{service.description}</p>

          {service.child && (
            <>
              <h3 className="text-xl font-semibold mt-6 text-[#1b1e3f]">
                {service.child.title1}
              </h3>
              <div
                className="mt-2"
                dangerouslySetInnerHTML={{ __html: service.child.description1 }}
              />
              <div className="flex gap-6 mt-6 max-lg:flex-col">
                <Image
                  className="mt-4 object-cover w-full max-lg:max-h-64"
                  src={
                    "/images/inspection-video-piscine.webp"
                  }
                  alt="Pipeline 1"
                  width={300}
                  height={200}
                />
                <Image
                  className="mt-4 object-cover w-full max-lg:max-h-64"
                  src={

                    "/images/fuite-piscine-sur-nice-repartaion.webp"
                  }
                  alt="Pipeline 2"
                  width={300}
                  height={200}
                />
              </div>

              <h3 className="text-xl font-semibold mt-6 text-[#1b1e3f]">
                {service.child.title2}
              </h3>
              <div
                className="mt-2"
                dangerouslySetInnerHTML={{
                  __html: service.child.description2 ?? "",
                }}
              />
            </>
          )}
        </div>

        <div className="min-h-[calc(100vh-40px)] sticky top-[100px] self-start bg-white p-6 max-lg:min-h-auto">
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
