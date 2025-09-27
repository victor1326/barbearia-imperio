import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Clock, Star, Scissors, Sparkles } from "lucide-react"
import Link from "next/link"

const services = {
  masculinos: [
    {
      name: "Corte Social",
      description: "Corte clássico e elegante para o dia a dia profissional",
      price: "R$ 45",
      duration: "45 min",
      popular: false,
    },
    {
      name: "Corte Degradê",
      description: "Corte moderno com degradê nas laterais e nuca",
      price: "R$ 55",
      duration: "50 min",
      popular: true,
    },
    {
      name: "Barba Completa",
      description: "Aparar, modelar e finalização com produtos premium",
      price: "R$ 35",
      duration: "30 min",
      popular: false,
    },
    {
      name: "Corte + Barba",
      description: "Pacote completo com corte e cuidados com a barba",
      price: "R$ 75",
      duration: "75 min",
      popular: true,
    },
    {
      name: "Bigode",
      description: "Aparar e modelar bigode com precisão",
      price: "R$ 20",
      duration: "20 min",
      popular: false,
    },
    {
      name: "Sobrancelha Masculina",
      description: "Design e limpeza das sobrancelhas",
      price: "R$ 25",
      duration: "25 min",
      popular: false,
    },
  ],
  femininos: [
    {
      name: "Corte Feminino",
      description: "Corte personalizado de acordo com o formato do rosto",
      price: "R$ 65",
      duration: "60 min",
      popular: true,
    },
    {
      name: "Corte + Escova",
      description: "Corte com finalização profissional",
      price: "R$ 85",
      duration: "90 min",
      popular: true,
    },
    {
      name: "Apenas Escova",
      description: "Lavagem e escova modeladora",
      price: "R$ 35",
      duration: "45 min",
      popular: false,
    },
    {
      name: "Hidratação",
      description: "Tratamento hidratante para cabelos ressecados",
      price: "R$ 45",
      duration: "60 min",
      popular: false,
    },
    {
      name: "Sobrancelha Feminina",
      description: "Design completo com henna ou micropigmentação",
      price: "R$ 35",
      duration: "40 min",
      popular: true,
    },
    {
      name: "Penteado para Eventos",
      description: "Penteados elaborados para ocasiões especiais",
      price: "R$ 120",
      duration: "120 min",
      popular: false,
    },
  ],
  premium: [
    {
      name: "Tratamento Capilar Premium",
      description: "Tratamento completo com produtos importados",
      price: "R$ 150",
      duration: "120 min",
      popular: true,
    },
    {
      name: "Dia do Noivo",
      description: "Pacote completo: corte, barba, sobrancelha e relaxamento",
      price: "R$ 180",
      duration: "150 min",
      popular: false,
    },
    {
      name: "Dia da Noiva",
      description: "Pacote completo: corte, penteado, sobrancelha e maquiagem",
      price: "R$ 250",
      duration: "180 min",
      popular: false,
    },
    {
      name: "Massagem Relaxante",
      description: "Massagem no couro cabeludo e pescoço",
      price: "R$ 60",
      duration: "30 min",
      popular: true,
    },
  ],
}

function ServiceCard({ service }: { service: (typeof services.masculinos)[0] }) {
  return (
    <Card className="bg-card border-border hover:border-primary transition-all duration-300 group relative overflow-hidden">
      {service.popular && (
        <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
          <Star className="w-3 h-3 mr-1" />
          Popular
        </Badge>
      )}
      <CardHeader className="pb-4">
        <CardTitle className="font-playfair text-xl text-primary group-hover:text-primary/90 transition-colors">
          {service.name}
        </CardTitle>
        <p className="text-muted-foreground leading-relaxed">{service.description}</p>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <span className="text-2xl font-bold text-primary">{service.price}</span>
            <div className="flex items-center text-muted-foreground">
              <Clock className="w-4 h-4 mr-1" />
              <span className="text-sm">{service.duration}</span>
            </div>
          </div>
        </div>
        <Button
          asChild
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group-hover:shadow-lg transition-all"
        >
          <Link href="/agendamento">Agendar Serviço</Link>
        </Button>
      </CardContent>
    </Card>
  )
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-primary mb-6">Nossos Serviços</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Oferecemos uma gama completa de serviços premium para homens e mulheres, utilizando apenas produtos de alta
            qualidade e técnicas modernas.
          </p>
        </div>
      </section>

      {/* Services Sections */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Masculine Services */}
          <div className="mb-20">
            <div className="flex items-center justify-center mb-12">
              <div className="flex items-center space-x-3">
                <Scissors className="w-8 h-8 text-primary" />
                <h2 className="font-playfair text-4xl font-bold text-primary">Serviços Masculinos</h2>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.masculinos.map((service, index) => (
                <ServiceCard key={index} service={service} />
              ))}
            </div>
          </div>

          {/* Feminine Services */}
          <div className="mb-20">
            <div className="flex items-center justify-center mb-12">
              <div className="flex items-center space-x-3">
                <Sparkles className="w-8 h-8 text-primary" />
                <h2 className="font-playfair text-4xl font-bold text-primary">Serviços Femininos</h2>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.femininos.map((service, index) => (
                <ServiceCard key={index} service={service} />
              ))}
            </div>
          </div>

          {/* Premium Services */}
          <div className="mb-20">
            <div className="flex items-center justify-center mb-12">
              <div className="flex items-center space-x-3">
                <Star className="w-8 h-8 text-primary" />
                <h2 className="font-playfair text-4xl font-bold text-primary">Serviços Premium</h2>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.premium.map((service, index) => (
                <ServiceCard key={index} service={service} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-20 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl font-bold text-primary mb-4">Informações Importantes</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-background border-border">
              <CardContent className="p-6">
                <h3 className="font-playfair text-xl font-semibold text-primary mb-4">Política de Agendamento</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Agendamentos podem ser feitos online ou por telefone</li>
                  <li>• Cancelamentos devem ser feitos com 2 horas de antecedência</li>
                  <li>• Tolerância de 15 minutos de atraso</li>
                  <li>• Reagendamento gratuito em caso de emergência</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-background border-border">
              <CardContent className="p-6">
                <h3 className="font-playfair text-xl font-semibold text-primary mb-4">Formas de Pagamento</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Dinheiro e cartões de débito/crédito</li>
                  <li>• PIX com desconto de 5%</li>
                  <li>• Pacotes com desconto especial</li>
                  <li>• Parcelamento em até 3x sem juros</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-4xl font-bold text-primary mb-4">Pronto para agendar?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Escolha o serviço ideal para você e agende seu horário com nossos profissionais especializados
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
              <Link href="/agendamento">Agendar Agora</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 bg-transparent"
            >
              <Link href="/equipe">Conhecer a Equipe</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
