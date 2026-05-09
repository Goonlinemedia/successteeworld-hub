import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/2348000000000?text=Hello%20SuccessteeWorld!"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-40 group flex items-center gap-3 bg-[#25D366] text-white px-4 py-3.5 rounded-full shadow-luxe hover:shadow-gold transition-all hover:scale-105"
      aria-label="Chat on WhatsApp"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-50 animate-ping" />
      <MessageCircle className="w-5 h-5 relative z-10" />
      <span className="hidden sm:block text-sm font-semibold relative z-10">Chat with us</span>
    </a>
  );
}
