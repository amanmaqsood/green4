import { AnimatedSection } from '@/components/AnimatedSection';
import { Zap, Leaf, BadgeJapaneseYen, Timer } from 'lucide-react';

const benefits = [
  {
    icon: Zap,
    title: '草を粉砕・回収不要',
    description: 'ハンマーナイフモアで草を細かく粉砕。面倒な回収作業が不要で、そのまま自然分解されます。',
  },
  {
    icon: Leaf,
    title: '防草効果',
    description: '粉砕された草が地表を覆い、新たな雑草の発生を抑制。次回の草刈り時期を遅らせる効果があります。',
  },
  {
    icon: BadgeJapaneseYen,
    title: '人力より低コスト',
    description: '機械による作業で人件費を大幅削減。広い面積ほどコストメリットが高まります。',
  },
  {
    icon: Timer,
    title: '広範囲を高速作業',
    description: '10アール程度なら1日で完了。大面積でもスピーディーに作業を進めます。',
  },
];

export function BenefitsSection() {
  return (
    <section id="benefits" className="section-padding bg-cream">
      <div className="container-wide">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            ハンマーナイフモアの強み
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            なぜハンマーナイフモアなのか
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            従来の草刈り方法と比べ、効率・コスト・環境面で優れた特徴があります
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <AnimatedSection key={benefit.title} delay={index * 100}>
              <div className="group h-full p-8 bg-card rounded-2xl shadow-card hover-lift border border-border/50 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-nature flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
