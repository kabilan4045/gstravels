import Seo from "../components/Seo";
import SectionHeading from "../components/SectionHeading";
import VehicleCard from "../components/VehicleCard";
import CTASection from "../components/CTASection";
import { vehicles } from "../data/siteData";

// TODO: Replace placeholder gallery tiles once client uploads real photos
const galleryPlaceholders = Array.from({ length: 8 });

export default function Fleet() {
  return (
    <>
      <Seo
        title="Fleet & Gallery"
        description="Browse the GS Travels fleet — cars, tempo travellers, mini buses, tour buses, and vans available for self drive, corporate, and group travel."
      />

      <section className="bg-brand-primary-dark py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
            Our Fleet & Gallery
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-slate-300">
            Our diverse fleet is built to handle everything from solo
            self-drive trips to 40-seater corporate and tour group movements.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Vehicle Categories" title="Choose the Right Vehicle" />
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {vehicles.map((v) => (
            <VehicleCard key={v.category} vehicle={v} />
          ))}
        </div>
        <p className="mt-4 text-xs text-slate-400">
          * Exact seating capacity to be confirmed with client.
        </p>
      </section>

      <section className="bg-brand-bg py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Gallery" title="A Glimpse of Our Fleet" center />
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {galleryPlaceholders.map((_, i) => (
              <div
                key={i}
                className="flex aspect-square items-center justify-center rounded-lg bg-gradient-to-br from-brand-primary/10 to-brand-accent/10 text-xs font-medium text-brand-primary/40"
              >
                Photo coming soon
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Looking for the right vehicle for your trip?"
        subtitle="Get Quote or reach us on WhatsApp."
      />
    </>
  );
}
