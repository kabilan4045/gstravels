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

      <section className="bg-brand-primary-dark py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
            Get in Touch with GS Travels
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-5">
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:col-span-3">
            <h2 className="text-xl font-bold text-brand-primary">
              Request a Quote
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Fill in your details and we'll get back to you shortly.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>

          <div className="space-y-6 lg:col-span-2">
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="font-bold text-brand-primary">Head Office</h3>
              <div className="mt-2 flex gap-2 text-sm text-slate-600">
                <MapPin size={16} className="mt-0.5 shrink-0 text-brand-accent" />
                <span>{company.addresses.headOffice.full}</span>
              </div>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="font-bold text-brand-primary">Branch Office</h3>
              <div className="mt-2 flex gap-2 text-sm text-slate-600">
                <MapPin size={16} className="mt-0.5 shrink-0 text-brand-accent" />
                <span>{company.addresses.branchOffice.full}</span>
              </div>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="font-bold text-brand-primary">Reach Us Directly</h3>
              <div className="mt-3 space-y-3 text-sm">
                <a
                  href={telLink(company.phones[0])}
                  className="flex items-center gap-2 text-slate-600 hover:text-brand-accent"
                >
                  <Phone size={16} className="text-brand-accent" />
                  {company.phones[0]} / {company.phones[1]}
                </a>
                <a
                  href={mailLink()}
                  className="flex items-center gap-2 text-slate-600 hover:text-brand-accent"
                >
                  <Mail size={16} className="text-brand-accent" />
                  {company.email}
                </a>
                <a
                  href={waLink(undefined, "Hi GS Travels, I'd like to enquire about a trip.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-md bg-[#25D366] px-4 py-2 font-semibold text-white hover:opacity-90"
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
      <section className="bg-brand-bg py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-brand-primary">
            Find Us
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <p className="mb-2 text-sm font-semibold text-brand-primary">
                Head Office — Gummidipoondi
              </p>
              <iframe
                title="Head Office Map"
                src={mapSrc(company.addresses.headOffice.full)}
                className="h-72 w-full rounded-xl border-0"
                loading="lazy"
              />
            </div>
            <div>
              <p className="mb-2 text-sm font-semibold text-brand-primary">
                Branch Office — Tada
              </p>
              <iframe
                title="Branch Office Map"
                src={mapSrc(company.addresses.branchOffice.full)}
                className="h-72 w-full rounded-xl border-0"
                loading="lazy"
              />
            </div>
          </div>
          <p className="mt-4 text-center text-xs text-slate-400">
            Map pins are approximate based on address. TODO: replace with
            precise coordinates or Google Business Profile link once
            provided.
          </p>
        </div>
      </section>
    </>
  );
}
