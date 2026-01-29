import { Phone, Mail, MapPin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="about" className="bg-forest-dark text-primary-foreground">
      <div className="container-wide py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary-foreground/20 flex items-center justify-center">
                <span className="font-bold text-lg">F</span>
              </div>
              <span className="font-semibold text-xl">株式会社エフ・ティー・エフ</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed mb-6 max-w-md">
              茨城県かすみがうら市を拠点に、草刈り・耕作放棄地整備サービスを提供しています。
              お客様の大切な土地を、プロの技術で美しく維持管理いたします。
            </p>
            <div className="flex items-center gap-4 text-sm text-primary-foreground/70">
              <span>代表: 古矢貴義</span>
              <span>|</span>
              <span>資本金: 10,000,000円</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">サイトマップ</h4>
            <nav className="space-y-3">
              {[
                { label: 'サービス', href: '#services' },
                { label: '特徴', href: '#benefits' },
                { label: '料金', href: '#pricing' },
                { label: 'お問い合わせ', href: '#contact' },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">お問い合わせ</h4>
            <div className="space-y-4">
              <a href="tel:090-8006-8213" className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Phone className="w-5 h-5" />
                090-8006-8213
              </a>
              <a href="mailto:ftf.furuya@gmail.com" className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors break-all">
                <Mail className="w-5 h-5 flex-shrink-0" />
                ftf.furuya@gmail.com
              </a>
              <div className="flex items-start gap-3 text-primary-foreground/80">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>茨城県かすみがうら市<br />宍倉6148-243</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="container-wide py-6">
          <p className="text-center text-sm text-primary-foreground/60">
            © {currentYear} 株式会社エフ・ティー・エフ. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
