import { AnimatedSection } from '@/components/AnimatedSection';
import { Shield, ThumbsUp, FileText, Clock } from 'lucide-react';

const trustPoints = [
  {
    icon: FileText,
    title: '見積無料',
    description: '現地確認の上、正確なお見積もりを無料でご提示いたします。',
  },
  {
    icon: ThumbsUp,
    title: '作業後の調整対応',
    description: '作業完了後も、気になる点があれば対応いたします。',
  },
  {
    icon: Shield,
    title: '顧客満足まで対応',
    description: 'お客様にご納得いただけるまで、誠実に対応いたします。',
  },
  {
    icon: Clock,
    title: '迅速な対応',
    description: 'お問い合わせから作業完了まで、スピーディーに進めます。',
  },
];

export function TrustSection() {
  return (
    <section className="section-padding bg-gradient-nature relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary-foreground/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div className="container-wide relative z-10">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary-foreground/20 text-primary-foreground rounded-full text-sm font-medium mb-4">
            お客様への約束
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            安心してお任せいただくために
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            私たちは誠実な対応と確かな技術で、お客様の信頼にお応えします
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustPoints.map((point, index) => (
            <AnimatedSection key={point.title} delay={index * 100}>
              <div className="h-full p-6 bg-primary-foreground/10 backdrop-blur-sm rounded-2xl border border-primary-foreground/20 text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary-foreground/20 flex items-center justify-center">
                  <point.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-primary-foreground mb-2">{point.title}</h3>
                <p className="text-primary-foreground/80 leading-relaxed">{point.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
