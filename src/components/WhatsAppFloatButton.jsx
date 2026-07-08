import { MessageCircle } from "lucide-react";
import { waLink } from "../data/siteData";

export default function WhatsAppFloatButton() {
  return (
    <a
      href={waLink(undefined, "Hi GS Travels, I'd like to enquire about a trip.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-20 right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 sm:bottom-6 sm:right-6"
    >
      <MessageCircle size={28} fill="white" />
    </a>
  );
}
