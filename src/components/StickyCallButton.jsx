import { Phone } from "lucide-react";
import { company, telLink } from "../data/siteData";

export default function StickyCallButton() {
  return (
    <a
      href={telLink(company.phones[0])}
      className="fixed inset-x-0 bottom-0 z-40 flex items-center justify-center gap-2 bg-brand-primary py-3.5 text-base font-semibold text-brand-paper shadow-[0_-2px_8px_rgba(0,0,0,0.15)] sm:hidden"
    >
      <Phone size={18} />
      Call Now: {company.phones[0]}
    </a>
  );
}
