import { AnimatedSection } from '@/components/AnimatedSection';
import { Scissors, TreeDeciduous, Tractor } from 'lucide-react';
import fieldImage from '@/assets/field-aerial.jpg';

const services = [
  {
    icon: Scissors,
    title: '草刈り',
    description: '広範囲の草刈りを専門機材で効率的に実施。ハンマーナイフモアにより草を粉砕し、回収不要で低コストを実現します。',
  },
  {
    icon: TreeDeciduous,
    title: '耕作放棄地整備',
    description: '長年放置された農地を再生可能な状態へ。灌木や小木の処理も含め、土地の価値を取り戻すお手伝いをします。',
  },
  {
    icon: Tractor,
    title: '耕運作業',
    description: '草刈り後の耕運作業も同料金で対応可能。土壌を整え、次の作付けに備えた状態に仕上げます。',
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="section-padding bg-background">
      <div className="container-wide">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-secondary/30 text-primary rounded-full text-sm font-medium mb-4">
            サービス内容
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            農地管理のプロフェッショナル
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            畑の管理から耕作放棄地の再生まで、
            お客様のニーズに合わせたサービスをご提供いたします
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Services List */}
          <div className="space-y-6">
            {services.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 100}>
                <div className="flex gap-5 p-6 bg-card rounded-2xl shadow-card hover-lift border border-border/50">
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-nature flex items-center justify-center">
                    <service.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Image */}
          <AnimatedSection delay={200}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-nature rounded-3xl opacity-20 blur-2xl" />
              <img
                src={fieldImage}
                alt="整備された農地"
                className="relative rounded-2xl shadow-hover w-full h-[400px] object-cover"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-card/95 backdrop-blur-sm rounded-xl p-4 shadow-card">
                <p className="text-sm font-medium text-foreground">
                  ✓ トラクター・ハンマーナイフモア完備
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  大規模な農地も効率的に作業可能
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
