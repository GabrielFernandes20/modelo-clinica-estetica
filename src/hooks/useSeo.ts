import { useEffect } from "react";
import { company } from "../data/company";

function setMeta(name: string, content: string, attr: "name" | "property" = "name") {
  let el = document.querySelector(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

export function useSeo() {
  useEffect(() => {
    document.title = company.seo.title;
    setMeta("description", company.seo.description);

    // Open Graph
    setMeta("og:title", company.seo.title, "property");
    setMeta("og:description", company.seo.description, "property");
    setMeta("og:type", "website", "property");
    setMeta("og:locale", "pt_BR", "property");
    setMeta("og:site_name", company.name, "property");
    setMeta("og:image", `${window.location.origin}/images/hero-main.jpg`, "property");

    // Twitter
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", company.seo.title);
    setMeta("twitter:description", company.seo.description);
    setMeta("twitter:image", `${window.location.origin}/images/hero-main.jpg`);

    // Schema.org LocalBusiness / BeautySalon
    let ld = document.getElementById("ld-local-business");
    if (!ld) {
      ld = document.createElement("script");
      ld.id = "ld-local-business";
      ld.setAttribute("type", "application/ld+json");
      document.head.appendChild(ld);
    }
    ld.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BeautySalon",
      name: company.name,
      image: `${window.location.origin}/images/hero-main.jpg`,
      telephone: company.whatsappNumber,
      url: window.location.origin,
      address: {
        "@type": "PostalAddress",
        streetAddress: company.address.street,
        addressLocality: company.address.city,
        addressRegion: company.address.state,
        postalCode: company.address.zip,
        addressCountry: "BR",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: -23.0044,
        longitude: -46.8427,
      },
      priceRange: "$$",
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "19:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Saturday"],
          opens: "09:00",
          closes: "17:00",
        },
      ],
    });
  }, []);
}
