"use client";

import Script from "next/script";
import schemaLocalBusiness from "@/public/schema-local-business.json";

export default function LocalBusinessSchema() {
  return (
    <Script
      type="application/ld+json"
      id="local-business-schema"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schemaLocalBusiness),
      }}
    />
  );
}
