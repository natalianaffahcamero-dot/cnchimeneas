import { useState } from "react";
import { MessageCircle, Home, DollarSign, Wind, ArrowRight, RotateCcw, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { getWhatsAppUrl, CATEGORIES } from "@/lib/constants";

type Answer = {
  space: "apartamento" | "casa" | "exterior" | "";
  duct: "si" | "no" | "no-se" | "";
  budget: "bajo" | "medio" | "alto" | "";
};

const initialAnswer: Answer = { space: "", duct: "", budget: "" };

const getRecommendation = (a: Answer): typeof CATEGORIES[number] => {
  if (a.space === "exterior") return CATEGORIES[3]; // Exterior
  if (a.budget === "bajo") return CATEGORIES[2]; // Eléctricas
  if (a.duct === "si" && a.budget === "alto") return CATEGORIES[1]; // Vented
  if (a.space === "apartamento" || a.duct === "no") return CATEGORIES[0]; // Vent Free
  return CATEGORIES[0];
};

const FireplaceQuizSection = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answer>(initialAnswer);

  const handleSelect = <K extends keyof Answer>(key: K, value: Answer[K]) => {
    setAnswers({ ...answers, [key]: value });
    setStep(step + 1);
  };

  const reset = () => {
    setAnswers(initialAnswer);
    setStep(0);
  };

  const recommendation = getRecommendation(answers);

  return (
    <section className="py-24 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <div className="flex items-center gap-2 justify-center">
            <Sparkles className="w-5 h-5 text-primary" />
            <p className="text-primary font-medium tracking-widest uppercase text-sm">
              Test Personalizado
            </p>
            <Sparkles className="w-5 h-5 text-primary" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            ¿Cuál es tu <span className="text-gradient">chimenea ideal</span>?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Responde 3 preguntas y te diremos qué tipo de chimenea encaja mejor con tu hogar y presupuesto.
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-card border border-border rounded-2xl p-8 md:p-10">
          {/* Progress */}
          {step < 3 && (
            <div className="flex items-center gap-2 mb-8">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className={`h-1.5 flex-1 rounded-full transition-colors ${
                    i <= step ? "bg-primary" : "bg-border"
                  }`}
                />
              ))}
            </div>
          )}

          {/* Step 0 - Space */}
          {step === 0 && (
            <div className="space-y-6 animate-fade-in">
              <div className="flex items-center gap-3">
                <Home className="w-6 h-6 text-primary" />
                <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground">
                  ¿Dónde quieres instalar tu chimenea?
                </h3>
              </div>
              <div className="grid gap-3">
                {[
                  { value: "apartamento", label: "Apartamento", desc: "Espacio interior sin acceso a ducto exterior" },
                  { value: "casa", label: "Casa", desc: "Espacio interior con posibilidad de ducto" },
                  { value: "exterior", label: "Terraza o exterior", desc: "Patio, jardín o zona al aire libre" },
                ].map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => handleSelect("space", opt.value as Answer["space"])}
                    className="text-left p-5 rounded-xl bg-secondary/50 border border-border hover:border-primary hover:bg-secondary transition-all group"
                  >
                    <p className="font-semibold text-foreground group-hover:text-primary transition-colors">{opt.label}</p>
                    <p className="text-sm text-muted-foreground mt-1">{opt.desc}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 1 - Duct */}
          {step === 1 && (
            <div className="space-y-6 animate-fade-in">
              <div className="flex items-center gap-3">
                <Wind className="w-6 h-6 text-primary" />
                <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground">
                  ¿Tienes ducto de ventilación disponible?
                </h3>
              </div>
              <div className="grid gap-3">
                {[
                  { value: "si", label: "Sí, tengo ducto", desc: "Salida de humo o chimenea existente" },
                  { value: "no", label: "No tengo ducto", desc: "Espacio sin salida al exterior" },
                  { value: "no-se", label: "No estoy seguro", desc: "Necesito asesoría técnica" },
                ].map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => handleSelect("duct", opt.value as Answer["duct"])}
                    className="text-left p-5 rounded-xl bg-secondary/50 border border-border hover:border-primary hover:bg-secondary transition-all group"
                  >
                    <p className="font-semibold text-foreground group-hover:text-primary transition-colors">{opt.label}</p>
                    <p className="text-sm text-muted-foreground mt-1">{opt.desc}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2 - Budget */}
          {step === 2 && (
            <div className="space-y-6 animate-fade-in">
              <div className="flex items-center gap-3">
                <DollarSign className="w-6 h-6 text-primary" />
                <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground">
                  ¿Cuál es tu presupuesto?
                </h3>
              </div>
              <div className="grid gap-3">
                {[
                  { value: "bajo", label: "Económico", desc: "Busco una opción accesible y práctica" },
                  { value: "medio", label: "Medio", desc: "Equilibrio entre calidad y precio" },
                  { value: "alto", label: "Premium", desc: "Priorizo diseño y experiencia auténtica" },
                ].map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => handleSelect("budget", opt.value as Answer["budget"])}
                    className="text-left p-5 rounded-xl bg-secondary/50 border border-border hover:border-primary hover:bg-secondary transition-all group"
                  >
                    <p className="font-semibold text-foreground group-hover:text-primary transition-colors">{opt.label}</p>
                    <p className="text-sm text-muted-foreground mt-1">{opt.desc}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Result */}
          {step === 3 && (
            <div className="space-y-6 animate-fade-in text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-primary text-sm font-semibold uppercase tracking-wider">Tu recomendación</span>
              </div>
              <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                Chimenea <span className="text-gradient">{recommendation.name}</span>
              </h3>
              <p className="text-muted-foreground text-base md:text-lg max-w-md mx-auto">
                {recommendation.longDescription}
              </p>
              <div className="flex flex-wrap justify-center gap-3 text-sm">
                <span className="px-3 py-1 rounded-full bg-secondary text-foreground">
                  {recommendation.priceRange}
                </span>
                <span className="px-3 py-1 rounded-full bg-secondary text-foreground">
                  {recommendation.idealFor}
                </span>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
                <Button asChild variant="whatsapp" size="lg" className="gap-2">
                  <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5" />
                    Cotizar mi proyecto
                  </a>
                </Button>
                <Button asChild variant="premium" size="lg" className="gap-2">
                  <Link to={`/catalogo/${recommendation.id}`}>
                    Ver modelos
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
              <button
                onClick={reset}
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm mt-4"
              >
                <RotateCcw className="w-4 h-4" />
                Repetir el test
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FireplaceQuizSection;
