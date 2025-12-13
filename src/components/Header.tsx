import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import lucyLogo from "@/assets/images/lucy-logo.png";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-purple-200/40 shadow-sm">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* LOGO */}
          <button onClick={() => navigate("/")}>
            <img
              src={lucyLogo}
              className="h-10 lg:h-12"
              alt="LucyFit"
              loading="eager"
            />
          </button>

          {/* DESKTOP MENU */}
          <nav className="hidden lg:flex items-center gap-10 text-sm font-medium">
            <button onClick={() => scrollToSection("features")}>Funcionalidades</button>
            <button onClick={() => scrollToSection("how-it-works")}>Como funciona</button>
            <button onClick={() => scrollToSection("pricing")}>Preço</button>
            <button onClick={() => scrollToSection("testimonials")}>Depoimentos</button>
          </nav>

          {/* CTA */}
          <div className="hidden lg:block">
            <Button onClick={() => scrollToSection("pricing")} variant="hero">
              Assinar agora
            </Button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button className="lg:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* MOBILE MENU */}
        {mobileMenuOpen && (
          <div className="lg:hidden space-y-4 py-4">
            <button onClick={() => scrollToSection("features")} className="block w-full py-2">
              Funcionalidades
            </button>
            <button onClick={() => scrollToSection("how-it-works")} className="block w-full py-2">
              Como funciona
            </button>
            <button onClick={() => scrollToSection("pricing")} className="block w-full py-2">
              Preço
            </button>
            <button onClick={() => scrollToSection("testimonials")} className="block w-full py-2">
              Depoimentos
            </button>
            <Button onClick={() => scrollToSection("pricing")} className="w-full" variant="hero">
              Assinar agora
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}
