import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

export default function Index() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && phone) {
      toast({
        title: "Заявка отправлена!",
        description: "Мы свяжемся с вами в ближайшее время и раскроем тайну.",
      });
      setName('');
      setPhone('');
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(26, 31, 44, 0.7), rgba(26, 31, 44, 0.85)), url('https://cdn.poehali.dev/projects/008030ac-4055-4645-9a53-ef6b93f0f822/files/d2a64fe6-6ca0-4237-932e-fd6613467f0b.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background/80" />
        
        <div className="absolute top-10 left-10 animate-float">
          <span className="text-6xl animate-glow-pulse">❓</span>
        </div>
        <div className="absolute top-32 right-20 animate-float" style={{ animationDelay: '1s' }}>
          <span className="text-5xl animate-glow-pulse">❓</span>
        </div>
        <div className="absolute bottom-40 left-20 animate-float" style={{ animationDelay: '2s' }}>
          <span className="text-4xl animate-glow-pulse">❓</span>
        </div>
        <div className="absolute bottom-20 right-32 animate-float" style={{ animationDelay: '0.5s' }}>
          <span className="text-5xl animate-glow-pulse">❓</span>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-block bg-primary/20 backdrop-blur-sm border border-primary/30 px-6 py-2 rounded-full mb-4">
                <span className="text-primary font-semibold tracking-wider text-sm uppercase">
                  Mystery Box Edition
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
                Мы не можем сказать,<br />
                <span className="text-primary">что внутри.</span>
              </h1>
              
              <p className="text-2xl md:text-3xl text-muted-foreground font-light max-w-2xl mx-auto">
                Но гарантируем, что ты точно<br />останешься в плюсе.
              </p>
            </div>

            <div className="bg-gradient-to-r from-primary/20 via-primary/30 to-primary/20 backdrop-blur-md border-2 border-primary p-8 rounded-2xl inline-block shadow-2xl shadow-primary/20">
              <div className="text-6xl md:text-8xl font-bold text-primary mb-2">
                499 000 ₽
              </div>
              <div className="text-lg text-muted-foreground">
                Финальная цена. Без скрытых платежей.
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 pt-8">
              <Card className="p-6 bg-card/60 backdrop-blur-md border-border/50 hover:border-primary/50 transition-all">
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="bg-primary/20 p-4 rounded-full">
                    <Icon name="Award" size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Проверенный бренд</h3>
                  <p className="text-muted-foreground">
                    Надежность, проверенная временем и тысячами километров
                  </p>
                </div>
              </Card>

              <Card className="p-6 bg-card/60 backdrop-blur-md border-border/50 hover:border-primary/50 transition-all">
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="bg-primary/20 p-4 rounded-full">
                    <Icon name="Wrench" size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Надежный двигатель</h3>
                  <p className="text-muted-foreground">
                    Технологии, которые не подведут в любых условиях
                  </p>
                </div>
              </Card>

              <Card className="p-6 bg-card/60 backdrop-blur-md border-border/50 hover:border-primary/50 transition-all">
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="bg-primary/20 p-4 rounded-full">
                    <Icon name="Shield" size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Гарантия</h3>
                  <p className="text-muted-foreground">
                    Полная гарантия от производителя на всю технику
                  </p>
                </div>
              </Card>
            </div>

            <Card className="p-8 bg-card/80 backdrop-blur-md border-2 border-primary/30 max-w-md mx-auto mt-12">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-center">
                  Узнай, что внутри
                </h2>
                <p className="text-center text-muted-foreground">
                  Оставь контакты, и мы раскроем тайну первым
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Input
                      type="text"
                      placeholder="Ваше имя"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="bg-input border-border text-foreground placeholder:text-muted-foreground"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Input
                      type="tel"
                      placeholder="Телефон"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      className="bg-input border-border text-foreground placeholder:text-muted-foreground"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg py-6"
                  >
                    Раскрыть тайну
                    <Icon name="ChevronRight" size={20} className="ml-2" />
                  </Button>
                </form>

                <p className="text-xs text-center text-muted-foreground">
                  Нажимая кнопку, вы соглашаетесь на обработку персональных данных
                </p>
              </div>
            </Card>

            <div className="pt-8 flex items-center justify-center gap-2 text-muted-foreground">
              <Icon name="Lock" size={16} />
              <span className="text-sm">Конфиденциальность гарантирована</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
