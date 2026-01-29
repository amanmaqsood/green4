import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/AnimatedSection';
import { ChevronDown } from 'lucide-react';
import heroImage from '@/assets/hero-tractor.jpg';

export function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="農地管理の様子"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/50 via-foreground/30 to-foreground/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-wide text-center pt-20">
        <AnimatedSection>
          <span className="inline-block px-4 py-2 bg-secondary/90 text-secondary-foreground rounded-full text-sm font-medium mb-6">
            茨城県かすみがうら市を拠点に活動
          </span>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
            広大な農地の草刈りを
            <br />
            <span className="text-grass-light">プロの技術</span>でお任せください
          </h1>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto mb-10 leading-relaxed">
            ハンマーナイフモアによる効率的な草刈りで、
            <br className="hidden md:block" />
            耕作放棄地の再生から畑の維持管理まで対応いたします
          </p>
        </AnimatedSection>

        <AnimatedSection delay={300}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="xl" onClick={() => scrollToSection('#contact')}>
              無料見積もりを依頼
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              onClick={() => scrollToSection('#services')}
            >
              サービス詳細を見る
            </Button>
          </div>
        </AnimatedSection>

        {/* Scroll indicator */}
        <AnimatedSection delay={500} className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <button 
            onClick={() => scrollToSection('#services')}
            className="flex flex-col items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            aria-label="下へスクロール"
          >
            <span className="text-sm font-medium">詳しく見る</span>
            <ChevronDown className="w-6 h-6 animate-bounce" />
          </button>
        </AnimatedSection>
      </div>
    </section>
  );
}
