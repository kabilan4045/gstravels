import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import Seo from "../components/Seo";
import ContactForm from "../components/ContactForm";
import { company, telLink, mailLink, waLink } from "../data/siteData";

function mapSrc(address) {
  return `https://maps.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;
}

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact Us"
        description="Get in touch with GS Travels for tours, corporate travel, self drive, and airport cab bookings. Call, WhatsApp, or send us a quote request."
      />

      <section className="mx-auto max-w-3xl px-4 pb-4 pt-12 sm:pt-16 text-center sm:px-6 lg:px-8">
        <h1 className="text-display-xl text-brand-ink">Get in Touch</h1>
        <p className="text-lede mt-4 text-brand-ink/65">
          Call, WhatsApp, or send a quote request — whichever is easiest.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:py-20 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-5">
          <div className="rounded-lg border border-brand-line bg-white p-6 shadow-sm sm:p-8 lg:col-span-3">
            <h2 className="text-display-m text-brand-ink">Request a Quote</h2>
            <p className="mt-1 text-base text-brand-ink/55">
              Fill in your details and we'll get back to you shortly.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>

          <div className="space-y-6 lg:col-span-2">
            <div className="rounded-lg border border-brand-line p-6">
              <h3 className="font-semibold text-brand-ink">Head Office</h3>
              <div className="mt-2 flex gap-2 text-base text-brand-ink/65">
                <MapPin size={16} className="mt-0.5 shrink-0 text-brand-primary-dark" />
                <span>{company.addresses.headOffice.full}</span>
              </div>
            </div>
            <div className="rounded-lg border border-brand-line p-6">
              <h3 className="font-semibold text-brand-ink">Branch Office</h3>
              <div className="mt-2 flex gap-2 text-base text-brand-ink/65">
                <MapPin size={16} className="mt-0.5 shrink-0 text-brand-primary-dark" />
                <span>{company.addresses.branchOffice.full}</span>
              </div>
            </div>
            <div className="rounded-lg border border-brand-line p-6">
              <h3 className="font-semibold text-brand-ink">Reach Us Directly</h3>
              <div className="mt-3 space-y-1 text-base">
                <a
                  href={telLink(company.phones[0])}
                  className="flex items-center gap-2 py-2 text-brand-ink/65 hover:text-brand-ink"
                >
                  <Phone size={16} className="shrink-0 text-brand-primary-dark" />
                  {company.phones[0]} / {company.phones[1]}
                </a>
                <a
                  href={mailLink()}
                  className="flex items-center gap-2 py-2 text-brand-ink/65 hover:text-brand-ink"
                >
                  <Mail size={16} className="shrink-0 text-brand-primary-dark" />
                  {company.email}
                </a>
                <a
                  href={waLink(undefined, "Hi GS Travels, I'd like to enquire about a trip.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 flex items-center gap-2 rounded-md bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white hover:opacity-90"
                >
                  <MessageCircle size={16} />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Maps */}
      <section className="border-y border-brand-line bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-display-l text-center text-brand-ink">Find Us</h2>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <p className="text-eyebrow mb-2 text-brand-primary-dark">
                Head Office — Gummidipoondi
              </p>
              <iframe
                title="Head Office Map"
                src={mapSrc(company.addresses.headOffice.full)}
                className="h-72 w-full rounded-lg border border-brand-line"
                loading="lazy"
              />
            </div>
            <div>
              <p className="text-eyebrow mb-2 text-brand-primary-dark">
                Branch Office — Tada
              </p>
              <iframe
                title="Branch Office Map"
                src={mapSrc(company.addresses.branchOffice.full)}
                className="h-72 w-full rounded-lg border border-brand-line"
                loading="lazy"
              />
            </div>
          </div>
          <p className="mt-4 text-center text-xs text-brand-ink/40">
            Map pins are approximate based on address. TODO: replace with
            precise coordinates or Google Business Profile link once
            provided.
          </p>
        </div>
      </section>
    </>
  );
}
