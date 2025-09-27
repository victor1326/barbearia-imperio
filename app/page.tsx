import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Scissors, Clock, Award, Users } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/luxury-barbershop-interior-with-elegant-chairs-and.jpg')`,
          }}
        />

        <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-5xl md:text-7xl font-bold text-primary mb-6 text-balance">
            Sofisticação e Qualidade
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Experimente o melhor em cuidados pessoais em um ambiente luxuoso e acolhedor, com profissionais
            especializados em serviços premium.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3">
              <Link href="/agendamento">Agendar Horário</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 bg-transparent"
            >
              <Link href="/servicos">Ver Serviços</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-primary mb-4">Por que escolher o Imperio do Corte?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Combinamos tradição e modernidade para oferecer uma experiência única
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-background border-border hover:border-primary transition-colors group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Scissors className="h-8 w-8 text-primary group-hover:text-primary-foreground" />
                </div>
                <h3 className="font-playfair text-xl font-semibold text-primary mb-2">Profissionais Especializados</h3>
                <p className="text-muted-foreground">Equipe altamente qualificada com anos de experiência</p>
              </CardContent>
            </Card>

            <Card className="bg-background border-border hover:border-primary transition-colors group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Award className="h-8 w-8 text-primary group-hover:text-primary-foreground" />
                </div>
                <h3 className="font-playfair text-xl font-semibold text-primary mb-2">Produtos Premium</h3>
                <p className="text-muted-foreground">Utilizamos apenas produtos de alta qualidade e marcas renomadas</p>
              </CardContent>
            </Card>

            <Card className="bg-background border-border hover:border-primary transition-colors group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Clock className="h-8 w-8 text-primary group-hover:text-primary-foreground" />
                </div>
                <h3 className="font-playfair text-xl font-semibold text-primary mb-2">Horários Flexíveis</h3>
                <p className="text-muted-foreground">Funcionamos em horários convenientes para sua agenda</p>
              </CardContent>
            </Card>

            <Card className="bg-background border-border hover:border-primary transition-colors group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Users className="h-8 w-8 text-primary group-hover:text-primary-foreground" />
                </div>
                <h3 className="font-playfair text-xl font-semibold text-primary mb-2">Atendimento Personalizado</h3>
                <p className="text-muted-foreground">Cada cliente recebe atenção individual e cuidado especial</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-primary mb-4">Nossos Serviços</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Oferecemos uma gama completa de serviços para homens e mulheres
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-card border-border overflow-hidden group hover:border-primary transition-colors">
              <div className="aspect-video bg-muted relative overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                  style={{
                    backgroundImage: `url('/professional-haircut-service-barbershop.jpg')`,
                  }}
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-playfair text-xl font-semibold text-primary mb-2">Cortes Masculinos</h3>
                <p className="text-muted-foreground mb-4">Cortes clássicos e modernos executados com precisão</p>
                <p className="text-primary font-semibold">A partir de R$ 45</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border overflow-hidden group hover:border-primary transition-colors">
              <div className="aspect-video bg-muted relative overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                  style={{
                    backgroundImage: `url('/professional-beard-grooming-service.jpg')`,
                  }}
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-playfair text-xl font-semibold text-primary mb-2">Barba e Bigode</h3>
                <p className="text-muted-foreground mb-4">Aparar, modelar e cuidados especiais para barba</p>
                <p className="text-primary font-semibold">A partir de R$ 35</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border overflow-hidden group hover:border-primary transition-colors">
              <div className="aspect-video bg-muted relative overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                  style={{
                    backgroundImage: `url('/luxury-hair-styling-women-salon.jpg')`,
                  }}
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-playfair text-xl font-semibold text-primary mb-2">Cortes Femininos</h3>
                <p className="text-muted-foreground mb-4">Cortes e penteados sofisticados para mulheres</p>
                <p className="text-primary font-semibold">A partir de R$ 65</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
              <Link href="/servicos">Ver Todos os Serviços</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-4xl font-bold text-primary mb-4">Pronto para uma experiência premium?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Agende seu horário e descubra por que somos a escolha preferida para cuidados pessoais de qualidade
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3">
            <Link href="/agendamento">Agendar Agora</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
