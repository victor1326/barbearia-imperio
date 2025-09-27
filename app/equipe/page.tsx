import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Star, Award, Clock, Scissors } from "lucide-react"
import Link from "next/link"

const teamMembers = [
  {
    name: "Carlos Silva",
    role: "Barbeiro Sênior",
    specialty: "Cortes clássicos e modernos",
    experience: "12 anos",
    description:
      "Especialista em cortes masculinos com vasta experiência em técnicas tradicionais e modernas. Formado pela Academia Internacional de Barbearia.",
    services: ["Cortes Masculinos", "Barba", "Bigode"],
    rating: 4.9,
    image: "/professional-male-barber.png",
  },
  {
    name: "Ana Costa",
    role: "Hair Stylist",
    specialty: "Cortes femininos e coloração",
    experience: "8 anos",
    description:
      "Especializada em cortes femininos e técnicas avançadas de coloração. Certificada em produtos premium e tendências internacionais.",
    services: ["Cortes Femininos", "Coloração", "Penteados"],
    rating: 4.8,
    image: "/professional-female-hairstylist.png",
  },
  {
    name: "Roberto Mendes",
    role: "Barbeiro Especialista",
    specialty: "Barba e cuidados masculinos",
    experience: "15 anos",
    description:
      "Mestre em cuidados com barba e tratamentos masculinos. Pioneiro em técnicas de barbear tradicional com navalha.",
    services: ["Barba Completa", "Tratamentos", "Massagem"],
    rating: 5.0,
    image: "/experienced-male-barber-with-beard-portrait.jpg",
  },
  {
    name: "Juliana Santos",
    role: "Esteticista",
    specialty: "Sobrancelhas e cuidados faciais",
    experience: "6 anos",
    description:
      "Especialista em design de sobrancelhas e cuidados faciais. Certificada em micropigmentação e técnicas de harmonização facial.",
    services: ["Sobrancelhas", "Limpeza de Pele", "Micropigmentação"],
    rating: 4.9,
    image: "/professional-female-eyebrow-specialist-portrait.jpg",
  },
  {
    name: "Miguel Torres",
    role: "Barbeiro Junior",
    specialty: "Cortes modernos e degradês",
    experience: "3 anos",
    description:
      "Jovem talento especializado em cortes modernos e degradês. Sempre atualizado com as últimas tendências e técnicas.",
    services: ["Cortes Modernos", "Degradê", "Finalização"],
    rating: 4.7,
    image: "/young-professional-male-barber-portrait.jpg",
  },
  {
    name: "Fernanda Lima",
    role: "Cabeleireira",
    specialty: "Tratamentos capilares",
    experience: "10 anos",
    description:
      "Especialista em tratamentos capilares e reconstrução. Formada em tricologia e técnicas avançadas de hidratação.",
    services: ["Hidratação", "Reconstrução", "Tratamentos"],
    rating: 4.8,
    image: "/professional-female-hair-treatment-specialist-port.jpg",
  },
]

function TeamMemberCard({ member }: { member: (typeof teamMembers)[0] }) {
  return (
    <Card className="bg-card border-border hover:border-primary transition-all duration-300 group overflow-hidden">
      <div className="aspect-square relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
          style={{
            backgroundImage: `url('${member.image}')`,
          }}
        />
        <div className="absolute top-4 right-4">
          <Badge className="bg-primary text-primary-foreground flex items-center space-x-1">
            <Star className="w-3 h-3" />
            <span>{member.rating}</span>
          </Badge>
        </div>
      </div>

      <CardContent className="p-6">
        <div className="mb-4">
          <h3 className="font-playfair text-xl font-bold text-primary mb-1">{member.name}</h3>
          <p className="text-primary/80 font-medium mb-2">{member.role}</p>
          <div className="flex items-center text-muted-foreground text-sm mb-3">
            <Clock className="w-4 h-4 mr-1" />
            <span>{member.experience} de experiência</span>
          </div>
        </div>

        <div className="mb-4">
          <h4 className="font-semibold text-foreground mb-2">Especialidade:</h4>
          <p className="text-muted-foreground text-sm leading-relaxed">{member.specialty}</p>
        </div>

        <div className="mb-4">
          <p className="text-muted-foreground text-sm leading-relaxed">{member.description}</p>
        </div>

        <div className="mb-6">
          <h4 className="font-semibold text-foreground mb-2">Serviços:</h4>
          <div className="flex flex-wrap gap-2">
            {member.services.map((service, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {service}
              </Badge>
            ))}
          </div>
        </div>

        <Button
          asChild
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group-hover:shadow-lg transition-all"
        >
          <Link href="/agendamento">Agendar com {member.name.split(" ")[0]}</Link>
        </Button>
      </CardContent>
    </Card>
  )
}

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-primary mb-6">Nossa Equipe</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Conheça nossos profissionais altamente qualificados, cada um especializado em diferentes áreas para oferecer
            o melhor atendimento e resultados excepcionais.
          </p>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMemberCard key={index} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Team */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-primary mb-4">Por que escolher nossa equipe?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Nossos profissionais são cuidadosamente selecionados e constantemente treinados
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-background border-border text-center hover:border-primary transition-colors group">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Award className="h-8 w-8 text-primary group-hover:text-primary-foreground" />
                </div>
                <h3 className="font-playfair text-lg font-semibold text-primary mb-2">Certificados</h3>
                <p className="text-muted-foreground text-sm">Todos possuem certificações profissionais reconhecidas</p>
              </CardContent>
            </Card>

            <Card className="bg-background border-border text-center hover:border-primary transition-colors group">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Scissors className="h-8 w-8 text-primary group-hover:text-primary-foreground" />
                </div>
                <h3 className="font-playfair text-lg font-semibold text-primary mb-2">Especializados</h3>
                <p className="text-muted-foreground text-sm">Cada profissional tem sua área de especialização</p>
              </CardContent>
            </Card>

            <Card className="bg-background border-border text-center hover:border-primary transition-colors group">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Star className="h-8 w-8 text-primary group-hover:text-primary-foreground" />
                </div>
                <h3 className="font-playfair text-lg font-semibold text-primary mb-2">Bem Avaliados</h3>
                <p className="text-muted-foreground text-sm">Alta satisfação dos clientes em todos os serviços</p>
              </CardContent>
            </Card>

            <Card className="bg-background border-border text-center hover:border-primary transition-colors group">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Clock className="h-8 w-8 text-primary group-hover:text-primary-foreground" />
                </div>
                <h3 className="font-playfair text-lg font-semibold text-primary mb-2">Experientes</h3>
                <p className="text-muted-foreground text-sm">Anos de experiência e aperfeiçoamento constante</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Training and Development */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl font-bold text-primary mb-4">Treinamento e Desenvolvimento</h2>
            <p className="text-lg text-muted-foreground">
              Investimos constantemente no aperfeiçoamento da nossa equipe
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <h3 className="font-playfair text-xl font-semibold text-primary mb-4">Cursos e Certificações</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Participação em workshops internacionais</li>
                  <li>• Certificações em produtos premium</li>
                  <li>• Treinamentos em novas técnicas</li>
                  <li>• Cursos de atendimento ao cliente</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <h3 className="font-playfair text-xl font-semibold text-primary mb-4">Atualização Constante</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Acompanhamento das tendências mundiais</li>
                  <li>• Participação em feiras do setor</li>
                  <li>• Intercâmbio com profissionais renomados</li>
                  <li>• Avaliação contínua de performance</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-4xl font-bold text-primary mb-4">Escolha seu profissional preferido</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Agende seu horário com o especialista ideal para o serviço que você deseja
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
              <Link href="/servicos">Ver Serviços</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
