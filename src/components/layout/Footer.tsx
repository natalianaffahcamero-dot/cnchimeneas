import { Link } from "react-router-dom";
import { MessageCircle, Mail, MapPin } from "lucide-react";
import { NAV_LINKS, EMAIL, WHATSAPP_NUMBER, getWhatsAppUrl } from "@/lib/constants";
import logoImg from "@/assets/logo-cn-chimeneas.png";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <img 
                src={logoImg} 
                alt="CN Chimeneas" 
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Especialistas en chimeneas de lujo. Transformamos espacios con calor, diseño y tecnología de vanguardia.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display text-lg font-semibold text-foreground mb-4">
              Navegación
            </h4>
            <nav className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-display text-lg font-semibold text-foreground mb-4">
              Categorías
            </h4>
            <nav className="flex flex-col gap-3">
              <Link to="/catalogo/vent-free" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Vent Free
              </Link>
              <Link to="/catalogo/vented" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Vented
              </Link>
              <Link to="/catalogo/electricas" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Eléctricas
              </Link>
              <Link to="/catalogo/exterior" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Exterior
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold text-foreground mb-4">
              Contacto
            </h4>
            <div className="space-y-4">
              <a 
                href={getWhatsAppUrl()} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-[#25D366] transition-colors group"
              >
                <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="text-sm">{WHATSAPP_NUMBER}</span>
              </a>
              <a 
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="text-sm">{EMAIL}</span>
              </a>
              <div className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 mt-0.5" />
                <span className="text-sm">Colombia</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} CN Chimeneas. Todos los derechos reservados.
            </p>
            <p className="text-muted-foreground text-xs">
              WhatsApp es nuestro canal principal de atención personalizada
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
