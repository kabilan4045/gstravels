import { useEffect } from "react";
import { company } from "../data/siteData";

function setMetaTag(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

export default function Seo({ title, description }) {
  useEffect(() => {
    const fullTitle = title
      ? `${title} | GS Travels`
      : "GS Travels | Tours, Travels & Corporate Cabs in Gummidipoondi";
    document.title = fullTitle;

    const desc =
      description ||
      "GS Travels offers tours & travels, corporate travel, self drive, airport pickup & drop, and cab rental across Gummidipoondi, Chennai, Bangalore, Tada, Sullurpeta and all over Tamil Nadu.";

    setMetaTag("name", "description", desc);
    setMetaTag("property", "og:title", fullTitle);
    setMetaTag("property", "og:description", desc);
    setMetaTag("property", "og:type", "website");
    setMetaTag("property", "og:image", "/og-placeholder.jpg"); // TODO: replace with real OG image
  }, [title, description]);

  useEffect(() => {
    const existing = document.getElementById("local-business-jsonld");
    if (existing) return;

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "local-business-jsonld";
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: company.name,
      email: company.email,
      telephone: company.phones.map((p) => `+91${p}`),
      foundingDate: String(company.founded),
      founder: {
        "@type": "Person",
        name: company.owner,
      },
      address: [
        {
          "@type": "PostalAddress",
          streetAddress: "No. 772, Kovil Street, Thervazhi (PO)",
          addressLocality: "Gummidipoondi",
          postalCode: "601201",
          addressRegion: "Tamil Nadu",
          addressCountry: "IN",
        },
        {
          "@type": "PostalAddress",
          streetAddress:
            "No. 01, NH 16, GNT Road, Karur Mitta Village, Karur Post",
          addressLocality: "Tada",
          postalCode: "524401",
          addressRegion: "Andhra Pradesh",
          addressCountry: "IN",
        },
      ],
    });
    document.head.appendChild(script);
  }, []);

  return null;
}
