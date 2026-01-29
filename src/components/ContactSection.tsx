import { AnimatedSection } from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Phone, Mail, MapPin, Building2 } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

export function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    area: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "お問い合わせを受け付けました",
      description: "担当者より折り返しご連絡いたします。",
    });

    setFormData({
      name: '',
      email: '',
      phone: '',
      address: '',
      area: '',
      message: '',
    });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="section-padding bg-cream">
      <div className="container-wide">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            お問い合わせ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            まずはお気軽にご相談ください
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            見積もりは無料です。お電話またはフォームよりお問い合わせください
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <AnimatedSection className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-6">会社情報</h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">株式会社エフ・ティー・エフ</p>
                    <p className="text-muted-foreground">代表取締役 古矢貴義</p>
                    <p className="text-sm text-muted-foreground">資本金 10,000,000円</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">所在地</p>
                    <p className="text-muted-foreground">〒300-0121</p>
                    <p className="text-muted-foreground">茨城県かすみがうら市宍倉6148-243</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">お電話</p>
                    <a href="tel:090-8006-8213" className="text-xl font-semibold text-primary hover:underline">
                      090-8006-8213
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">メール</p>
                    <a href="mailto:ftf.furuya@gmail.com" className="text-primary hover:underline break-all">
                      ftf.furuya@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Contact Form */}
          <AnimatedSection delay={100} className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="p-8 bg-card rounded-2xl shadow-card border border-border/50">
              <h3 className="text-xl font-semibold text-foreground mb-6">お問い合わせフォーム</h3>
              
              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-base">
                    お名前 <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="h-12 text-base"
                    placeholder="山田 太郎"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-base">
                    電話番号 <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="h-12 text-base"
                    placeholder="090-0000-0000"
                  />
                </div>
              </div>

              <div className="space-y-2 mb-6">
                <Label htmlFor="email" className="text-base">
                  メールアドレス
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="h-12 text-base"
                  placeholder="example@email.com"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <Label htmlFor="address" className="text-base">
                    作業希望地
                  </Label>
                  <Input
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="h-12 text-base"
                    placeholder="市町村名など"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="area" className="text-base">
                    おおよその面積
                  </Label>
                  <Input
                    id="area"
                    name="area"
                    value={formData.area}
                    onChange={handleChange}
                    className="h-12 text-base"
                    placeholder="例: 20アール"
                  />
                </div>
              </div>

              <div className="space-y-2 mb-8">
                <Label htmlFor="message" className="text-base">
                  お問い合わせ内容 <span className="text-destructive">*</span>
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="text-base resize-none"
                  placeholder="ご依頼内容やご質問をお書きください"
                />
              </div>

              <Button 
                type="submit" 
                variant="hero" 
                size="lg" 
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? '送信中...' : '無料見積もりを依頼する'}
              </Button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
