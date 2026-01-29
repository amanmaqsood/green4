import { AnimatedSection } from '@/components/AnimatedSection';
import { Check, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function PricingSection() {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="section-padding bg-background">
      <div className="container-wide">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-secondary/30 text-primary rounded-full text-sm font-medium mb-4">
            料金プラン
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            明瞭な料金体系
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            面積に応じた分かりやすい料金設定。大面積には割引もございます
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Base Pricing */}
          <AnimatedSection>
            <div className="h-full p-8 bg-card rounded-2xl shadow-card border border-border/50">
              <h3 className="text-2xl font-bold text-foreground mb-6">基本料金</h3>
              
              <div className="mb-8">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-5xl font-bold text-primary">60,000</span>
                  <span className="text-xl text-muted-foreground">円〜</span>
                </div>
                <p className="text-muted-foreground">10アール（約1,000㎡）あたり</p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                  <p className="text-foreground">草刈り作業一式</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                  <p className="text-foreground">回収不要（粉砕処理）</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                  <p className="text-foreground">耕運作業も同料金で対応可能</p>
                </div>
              </div>

              <div className="p-4 bg-secondary/20 rounded-xl">
                <h4 className="font-semibold text-foreground mb-2">🎉 大面積割引</h4>
                <p className="text-muted-foreground">
                  20アール以上のご依頼で、追加10アールごとに
                  <span className="font-bold text-primary"> 15,000円</span>
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Additional Costs */}
          <AnimatedSection delay={100}>
            <div className="h-full p-8 bg-card rounded-2xl shadow-card border border-border/50">
              <h3 className="text-2xl font-bold text-foreground mb-6">追加費用について</h3>
              
              <p className="text-muted-foreground mb-6">
                現地の状況により、以下の追加費用が発生する場合がございます
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-xl">
                  <AlertCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">ゴミがある場合</p>
                    <p className="text-sm text-muted-foreground">処分費用を別途いただきます</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-xl">
                  <AlertCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">灌木・小木がある場合</p>
                    <p className="text-sm text-muted-foreground">伐採・処理費用を別途いただきます</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-xl">
                  <AlertCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">遠方の場合</p>
                    <p className="text-sm text-muted-foreground">距離に応じて交通費をいただきます</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-xl">
                  <AlertCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">2日以上の作業</p>
                    <p className="text-sm text-muted-foreground">+20,000円/日</p>
                  </div>
                </div>
              </div>

              <Button variant="hero" size="lg" className="w-full" onClick={scrollToContact}>
                無料見積もりを依頼
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
