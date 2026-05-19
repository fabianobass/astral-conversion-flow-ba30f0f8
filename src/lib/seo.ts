import { PHONE_SALES_DISPLAY, PHONE_MAINTENANCE_DISPLAY } from "./contact";

export const SITE_URL = "https://astralgas.com.br";
export const SITE_NAME = "Astral Gás Aquecedores";

type RouteSeoInput = {
  path: string;
  title: string;
  description: string;
  image?: string;
};

export function buildRouteMeta({ path, title, description, image }: RouteSeoInput) {
  const url = SITE_URL + path;
  const meta: Array<Record<string, string>> = [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:url", content: url },
    { property: "og:type", content: "website" },
    { property: "og:locale", content: "pt_BR" },
    { property: "og:site_name", content: SITE_NAME },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
  ];
  if (image) {
    const absImage = image.startsWith("http") ? image : SITE_URL + image;
    meta.push({ property: "og:image", content: absImage });
    meta.push({ name: "twitter:image", content: absImage });
  }
  return {
    meta,
    links: [{ rel: "canonical", href: url }],
  };
}

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": SITE_URL + "/#business",
  name: SITE_NAME,
  description:
    "Venda, instalação e manutenção de aquecedores a gás, pressurizadores e bombas de calor em Curitiba e Região Metropolitana.",
  url: SITE_URL,
  telephone: PHONE_SALES_DISPLAY,
  priceRange: "$$",
  sameAs: [
    "https://www.instagram.com/gasastral/",
    "https://www.facebook.com/people/Astral-G%C3%A1s/pfbid078UjkMYXPN2HoKkA3CP1AHXJ1Ekq8RFDTUCqDLnyGezWcz75dF88742F2db1ecJ3l/",
  ],
  areaServed: [
    { "@type": "City", name: "Curitiba" },
    { "@type": "AdministrativeArea", name: "Região Metropolitana de Curitiba" },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Curitiba",
    addressRegion: "PR",
    addressCountry: "BR",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: PHONE_SALES_DISPLAY,
      contactType: "sales",
      areaServed: "BR",
      availableLanguage: "Portuguese",
    },
    {
      "@type": "ContactPoint",
      telephone: PHONE_MAINTENANCE_DISPLAY,
      contactType: "technical support",
      areaServed: "BR",
      availableLanguage: "Portuguese",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "200",
  },
};

export function serviceJsonLd(opts: {
  name: string;
  description: string;
  url: string;
  image?: string;
}) {
  const absImage = opts.image
    ? opts.image.startsWith("http")
      ? opts.image
      : SITE_URL + opts.image
    : undefined;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    url: SITE_URL + opts.url,
    image: absImage,
    provider: { "@id": SITE_URL + "/#business" },
    areaServed: { "@type": "City", name: "Curitiba" },
  };
}

export function breadcrumbJsonLd(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: SITE_URL + item.path,
    })),
  };
}

export function faqJsonLd(items: Array<{ q: string; a: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export function jsonLdScript(data: unknown) {
  return {
    type: "application/ld+json",
    children: JSON.stringify(data),
  };
}
