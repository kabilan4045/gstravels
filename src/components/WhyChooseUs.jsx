import { whyChooseUs } from "../data/siteData";
import { iconMap } from "./icons";
import SectionHeading from "./SectionHeading";

export default function WhyChooseUs() {
  return (
    <section className="bg-brand-bg py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Trusted by Families & Companies Alike"
          center
        />
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <div
                key={item.title}
                className="flex gap-4 rounded-xl bg-white p-6 shadow-sm"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-primary/10 text-brand-primary">
                  {Icon && <Icon size={22} />}
                </div>
                <div>
                  <h3 className="font-bold text-brand-primary">{item.title}</h3>
                  <p className="mt-1 text-sm text-slate-600">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
