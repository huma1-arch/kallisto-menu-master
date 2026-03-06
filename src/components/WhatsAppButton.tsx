import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "923001234567";
  const message = encodeURIComponent("Hi! I'd like to make a reservation at KALLISTO.");

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 gold-gradient-bg rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      aria-label="Reserve via WhatsApp"
    >
      <MessageCircle size={26} className="text-primary-foreground" />
    </a>
  );
};

export default WhatsAppButton;
