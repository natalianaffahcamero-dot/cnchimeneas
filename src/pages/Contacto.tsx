import Layout from "@/components/layout/Layout";
import { MessageCircle, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EMAIL, WHATSAPP_NUMBER, getWhatsAppUrl } from "@/lib/constants";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contacto = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto link with form data
    const subject = encodeURIComponent("Consulta desde CN Chimeneas Web");
    const body = encodeURIComponent(
      `Nombre: ${formData.name}\nEmail: ${formData.email}\nTeléfono: ${formData.phone}\n\nMensaje:\n${formData.message}`
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    
    toast({
      title: "Redirigiendo a su cliente de correo",
      description: "Complete el envío desde su aplicación de email.",
    });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 bg-gradient-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <p className="text-primary font-medium tracking-widest uppercase text-sm">
              Estamos para Servirle
            </p>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground">
              <span className="text-gradient">Contáctenos</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Estamos listos para ayudarle a encontrar la chimenea perfecta para su espacio. 
              WhatsApp es nuestro canal principal de atención personalizada.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                  Información de Contacto
                </h2>
                <p className="text-muted-foreground">
                  Preferimos la atención personalizada. Escríbanos por WhatsApp 
                  para una respuesta inmediata.
                </p>
              </div>

              <div className="space-y-6">
                {/* WhatsApp */}
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-6 bg-[#25D366]/10 rounded-2xl border border-[#25D366]/30 hover:border-[#25D366] transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#25D366] flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-[#25D366] font-medium mb-1">
                      WhatsApp (Canal Principal)
                    </p>
                    <p className="text-foreground font-semibold text-lg">
                      {WHATSAPP_NUMBER}
                    </p>
                    <p className="text-muted-foreground text-sm mt-1">
                      Respuesta inmediata • Atención personalizada
                    </p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-start gap-4 p-6 bg-card rounded-2xl border border-border hover:border-primary/50 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-primary font-medium mb-1">
                      Correo Electrónico
                    </p>
                    <p className="text-foreground font-semibold">
                      {EMAIL}
                    </p>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-start gap-4 p-6 bg-card rounded-2xl border border-border">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-primary font-medium mb-1">
                      Ubicación
                    </p>
                    <p className="text-foreground font-semibold">
                      Colombia
                    </p>
                    <p className="text-muted-foreground text-sm mt-1">
                      Servicio a nivel nacional
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4 p-6 bg-card rounded-2xl border border-border">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-primary font-medium mb-1">
                      Horario de Atención
                    </p>
                    <p className="text-foreground font-semibold">
                      Lunes a Sábado
                    </p>
                    <p className="text-muted-foreground text-sm mt-1">
                      8:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
                <Button variant="whatsapp" size="xl" className="w-full gap-3">
                  <MessageCircle className="w-6 h-6" />
                  Escribir por WhatsApp
                </Button>
              </a>
            </div>

            {/* Contact Form */}
            <div className="bg-card rounded-2xl p-8 border border-border">
              <h3 className="font-display text-2xl font-bold text-foreground mb-6">
                Enviar Mensaje
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                    placeholder="Su nombre"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                    placeholder="su@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                    placeholder="Su número de teléfono"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Mensaje
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground resize-none"
                    placeholder="Cuéntenos sobre su proyecto de chimenea..."
                  />
                </div>
                <Button type="submit" variant="gold" size="lg" className="w-full">
                  Enviar Mensaje
                </Button>
                <p className="text-center text-muted-foreground text-sm">
                  O contáctenos directamente por WhatsApp para respuesta inmediata
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contacto;
