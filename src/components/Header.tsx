import { Phone, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const navItems = [
  { label: 'サービス', href: '#services' },
  { label: '特徴', href: '#benefits' },
  { label: '料金', href: '#pricing' },
  { label: '会社概要', href: '#about' },
  { label: 'お問い合わせ', href: '#contact' },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50">
      <div className="container-wide">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-nature flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">F</span>
            </div>
            <div>
              <span className="font-semibold text-lg text-foreground">株式会社エフ・ティー・エフ</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-muted-foreground hover:text-foreground transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:090-8006-8213" className="flex items-center gap-2 text-foreground font-medium">
              <Phone className="w-5 h-5 text-primary" />
              090-8006-8213
            </a>
            <Button variant="hero" onClick={() => scrollToSection('#contact')}>
              無料見積もり
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="メニューを開く"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border/50 animate-fade-in">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="py-3 px-4 text-left text-foreground hover:bg-muted rounded-lg transition-colors font-medium"
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <a href="tel:090-8006-8213" className="flex items-center gap-2 text-foreground font-medium px-4">
                  <Phone className="w-5 h-5 text-primary" />
                  090-8006-8213
                </a>
                <Button variant="hero" size="lg" className="mx-4" onClick={() => scrollToSection('#contact')}>
                  無料見積もり
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
