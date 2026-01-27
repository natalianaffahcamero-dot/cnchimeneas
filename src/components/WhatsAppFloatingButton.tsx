import { MessageCircle } from "lucide-react";

const WhatsAppFloatingButton = () => {
  return (
    <a
      href="https://wa.me/573176410220"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 bg-[#25D366] rounded-full shadow-elevated hover:scale-110 transition-transform duration-300 animate-pulse-glow group"
      aria-label="Contáctanos por WhatsApp"
    >
      <MessageCircle className="w-8 h-8 text-warm-white" />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-4 px-4 py-2 bg-card text-foreground text-sm font-medium rounded-lg shadow-card opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
        ¡Escríbenos!
      </span>
    </a>
  );
};

export default WhatsAppFloatingButton;
