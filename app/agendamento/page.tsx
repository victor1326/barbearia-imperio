"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CalendarIcon, Clock, User, Scissors, CheckCircle } from "lucide-react"
import Link from "next/link"

const services = [
  { id: "corte-social", name: "Corte Social", price: "R$ 45", duration: "45 min" },
  { id: "corte-degrade", name: "Corte Degradê", price: "R$ 55", duration: "50 min" },
  { id: "barba-completa", name: "Barba Completa", price: "R$ 35", duration: "30 min" },
  { id: "corte-barba", name: "Corte + Barba", price: "R$ 75", duration: "75 min" },
  { id: "corte-feminino", name: "Corte Feminino", price: "R$ 65", duration: "60 min" },
  { id: "corte-escova", name: "Corte + Escova", price: "R$ 85", duration: "90 min" },
  { id: "sobrancelha-fem", name: "Sobrancelha Feminina", price: "R$ 35", duration: "40 min" },
  { id: "tratamento-premium", name: "Tratamento Premium", price: "R$ 150", duration: "120 min" },
]

const professionals = [
  { id: "carlos", name: "Carlos Silva", specialty: "Cortes masculinos" },
  { id: "ana", name: "Ana Costa", specialty: "Cortes femininos" },
  { id: "roberto", name: "Roberto Mendes", specialty: "Barba e cuidados" },
  { id: "juliana", name: "Juliana Santos", specialty: "Sobrancelhas" },
  { id: "miguel", name: "Miguel Torres", specialty: "Cortes modernos" },
  { id: "fernanda", name: "Fernanda Lima", specialty: "Tratamentos" },
]

const timeSlots = [
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
  "18:00",
  "18:30",
]

export default function BookingPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedService, setSelectedService] = useState("")
  const [selectedProfessional, setSelectedProfessional] = useState("")
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined)
  const [selectedTime, setSelectedTime] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const selectedServiceData = services.find((s) => s.id === selectedService)
  const selectedProfessionalData = professionals.find((p) => p.id === selectedProfessional)

  const handleNextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleConfirmBooking = async () => {
    setIsLoading(true)

    // Simulate booking process
    await new Promise((resolve) => setTimeout(resolve, 2000))

    console.log("Booking confirmed:", {
      service: selectedService,
      professional: selectedProfessional,
      date: selectedDate,
      time: selectedTime,
    })

    setCurrentStep(5)
    setIsLoading(false)
  }

  const canProceedToNext = () => {
    switch (currentStep) {
      case 1:
        return selectedService !== ""
      case 2:
        return selectedProfessional !== ""
      case 3:
        return selectedDate !== undefined && selectedTime !== ""
      default:
        return false
    }
  }

  if (currentStep === 5) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />

        <div className="pt-24 pb-20">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="bg-card border-border shadow-2xl">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="text-white h-10 w-10" />
                </div>

                <h1 className="font-playfair text-3xl font-bold text-primary mb-4">Agendamento Confirmado!</h1>

                <p className="text-muted-foreground mb-8">
                  Seu agendamento foi realizado com sucesso. Você receberá uma confirmação por email em breve.
                </p>

                <div className="bg-background rounded-lg p-6 mb-8 text-left">
                  <h3 className="font-playfair text-lg font-semibold text-primary mb-4">Detalhes do Agendamento</h3>

                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Serviço:</span>
                      <span className="text-foreground font-medium">{selectedServiceData?.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Profissional:</span>
                      <span className="text-foreground font-medium">{selectedProfessionalData?.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Data:</span>
                      <span className="text-foreground font-medium">{selectedDate?.toLocaleDateString("pt-BR")}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Horário:</span>
                      <span className="text-foreground font-medium">{selectedTime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Duração:</span>
                      <span className="text-foreground font-medium">{selectedServiceData?.duration}</span>
                    </div>
                    <div className="flex justify-between border-t border-border pt-3">
                      <span className="text-foreground font-semibold">Total:</span>
                      <span className="text-primary font-bold text-lg">{selectedServiceData?.price}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Link href="/">Voltar ao Início</Link>
                  </Button>
                  <Button
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                    onClick={() => {
                      setCurrentStep(1)
                      setSelectedService("")
                      setSelectedProfessional("")
                      setSelectedDate(undefined)
                      setSelectedTime("")
                    }}
                  >
                    Novo Agendamento
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-4">Agendar Serviço</h1>
            <p className="text-xl text-muted-foreground">Escolha seu serviço, profissional e horário preferido</p>
          </div>

          {/* Progress Steps */}
          <div className="flex justify-center mb-12">
            <div className="flex items-center space-x-4">
              {[1, 2, 3, 4].map((step) => (
                <div key={step} className="flex items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                      step <= currentStep ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {step}
                  </div>
                  {step < 4 && <div className={`w-12 h-1 mx-2 ${step < currentStep ? "bg-primary" : "bg-muted"}`} />}
                </div>
              ))}
            </div>
          </div>

          <Card className="bg-card border-border shadow-xl">
            <CardHeader>
              <CardTitle className="font-playfair text-2xl text-primary">
                {currentStep === 1 && "Escolha o Serviço"}
                {currentStep === 2 && "Escolha o Profissional"}
                {currentStep === 3 && "Escolha Data e Horário"}
                {currentStep === 4 && "Confirmar Agendamento"}
              </CardTitle>
            </CardHeader>

            <CardContent className="p-6">
              {/* Step 1: Service Selection */}
              {currentStep === 1 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {services.map((service) => (
                    <Card
                      key={service.id}
                      className={`cursor-pointer transition-all hover:border-primary ${
                        selectedService === service.id ? "border-primary bg-primary/5" : "border-border"
                      }`}
                      onClick={() => setSelectedService(service.id)}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-semibold text-foreground">{service.name}</h3>
                          <Badge variant="secondary">{service.duration}</Badge>
                        </div>
                        <p className="text-primary font-bold">{service.price}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}

              {/* Step 2: Professional Selection */}
              {currentStep === 2 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {professionals.map((professional) => (
                    <Card
                      key={professional.id}
                      className={`cursor-pointer transition-all hover:border-primary ${
                        selectedProfessional === professional.id ? "border-primary bg-primary/5" : "border-border"
                      }`}
                      onClick={() => setSelectedProfessional(professional.id)}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                            <User className="text-primary-foreground h-6 w-6" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground">{professional.name}</h3>
                            <p className="text-muted-foreground text-sm">{professional.specialty}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}

              {/* Step 3: Date and Time Selection */}
              {currentStep === 3 && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold text-foreground mb-4 flex items-center">
                      <CalendarIcon className="w-5 h-5 mr-2 text-primary" />
                      Escolha a Data
                    </h3>
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      disabled={(date) => date < new Date() || date.getDay() === 0}
                      className="rounded-md border border-border"
                    />
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-4 flex items-center">
                      <Clock className="w-5 h-5 mr-2 text-primary" />
                      Escolha o Horário
                    </h3>
                    <div className="grid grid-cols-3 gap-2">
                      {timeSlots.map((time) => (
                        <Button
                          key={time}
                          variant={selectedTime === time ? "default" : "outline"}
                          className={`${
                            selectedTime === time
                              ? "bg-primary text-primary-foreground"
                              : "border-border hover:border-primary"
                          }`}
                          onClick={() => setSelectedTime(time)}
                          disabled={!selectedDate}
                        >
                          {time}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Confirmation */}
              {currentStep === 4 && (
                <div className="space-y-6">
                  <div className="bg-background rounded-lg p-6">
                    <h3 className="font-playfair text-lg font-semibold text-primary mb-4">Resumo do Agendamento</h3>

                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Scissors className="w-5 h-5 text-primary" />
                        <div>
                          <p className="font-medium text-foreground">{selectedServiceData?.name}</p>
                          <p className="text-muted-foreground text-sm">
                            {selectedServiceData?.duration} • {selectedServiceData?.price}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3">
                        <User className="w-5 h-5 text-primary" />
                        <div>
                          <p className="font-medium text-foreground">{selectedProfessionalData?.name}</p>
                          <p className="text-muted-foreground text-sm">{selectedProfessionalData?.specialty}</p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3">
                        <CalendarIcon className="w-5 h-5 text-primary" />
                        <div>
                          <p className="font-medium text-foreground">
                            {selectedDate?.toLocaleDateString("pt-BR", {
                              weekday: "long",
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                          </p>
                          <p className="text-muted-foreground text-sm">às {selectedTime}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-primary/10 rounded-lg p-4">
                    <p className="text-sm text-muted-foreground">
                      <strong>Importante:</strong> Chegue com 10 minutos de antecedência. Cancelamentos devem ser feitos
                      com pelo menos 2 horas de antecedência.
                    </p>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8">
                <Button
                  variant="outline"
                  onClick={handlePrevStep}
                  disabled={currentStep === 1}
                  className="border-border hover:border-primary bg-transparent"
                >
                  Voltar
                </Button>

                {currentStep < 4 ? (
                  <Button
                    onClick={handleNextStep}
                    disabled={!canProceedToNext()}
                    className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    Próximo
                  </Button>
                ) : (
                  <Button
                    onClick={handleConfirmBooking}
                    disabled={isLoading}
                    className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    {isLoading ? "Confirmando..." : "Confirmar Agendamento"}
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Need to Login Notice */}
          <div className="mt-8 text-center">
            <Card className="bg-card border-border">
              <CardContent className="p-4">
                <p className="text-muted-foreground">
                  Não tem uma conta?{" "}
                  <Link href="/cadastro" className="text-primary hover:text-primary/80 font-medium">
                    Cadastre-se
                  </Link>{" "}
                  ou{" "}
                  <Link href="/login" className="text-primary hover:text-primary/80 font-medium">
                    faça login
                  </Link>{" "}
                  para salvar seus agendamentos.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
