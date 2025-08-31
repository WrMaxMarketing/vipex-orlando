"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  BookOpen,
  Building,
  Calendar,
  CheckCircle,
  Clock,
  Download,
  Gift,
  Heart,
  MapPin,
  Menu,
  PiggyBank,
  Plane,
  Quote,
  Shield,
  Sparkles,
  Star,
  Target,
  Ticket,
  Timer,
  TrendingUp,
  Users,
  UtensilsCrossed,
  X,
  Zap,
} from "lucide-react"
import { useEffect, useState } from "react"

/** Pequeno helper para enviar o evento ao GA4 via dataLayer no cliente */
function trackCTA(location: "hero" | "footer") {
  if (typeof window === "undefined") return
    ; (window as any).dataLayer = (window as any).dataLayer || []
    ; (window as any).dataLayer.push({
      event: "cta_click",
      cta_label: "Garantir Meu eBook Agora",
      cta_location: location,
      link_url: "https://pay.kiwify.com.br/DIp4nQ6",
      product: "Ebook Disney",
    })
}

export default function DisneyEbookLanding() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [timeLeft, setTimeLeft] = useState<{ h: number; m: number; s: number }>({ h: 47, m: 59, s: 59 })

  // contador regressivo (48h rolante)
  useEffect(() => {
    const end = Date.now() + 1000 * 60 * 60 * 48
    const t = setInterval(() => {
      const d = Math.max(0, end - Date.now())
      const h = Math.floor(d / (1000 * 60 * 60))
      const m = Math.floor((d % (1000 * 60 * 60)) / (1000 * 60))
      const s = Math.floor((d % (1000 * 60)) / 1000)
      setTimeLeft({ h, m, s })
    }, 1000)
    return () => clearInterval(t)
  }, [])

  const toggleFaq = (index: number) => setOpenFaq(openFaq === index ? null : index)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) element.scrollIntoView({ behavior: "smooth" })
    setMobileMenuOpen(false)
  }

  const goToPurchase = () => {
    window.open("https://pay.kiwify.com.br/DIp4nQ6", "_blank")
    setMobileMenuOpen(false)
  }

  const faqs = [
    { icon: <Download className="h-4 w-4" />, question: "Como recebo o eBook após a compra?", answer: "Você receberá o eBook imediatamente após a confirmação do pagamento, diretamente no seu email. O acesso é instantâneo e você pode baixar quantas vezes quiser." },
    { icon: <Calendar className="h-4 w-4" />, question: "O eBook funciona para qualquer época do ano?", answer: "Sim! As estratégias e dicas do eBook são válidas durante todo o ano. Incluímos informações sobre alta e baixa temporada, feriados especiais e como aproveitar cada período." },
    { icon: <Heart className="h-4 w-4" />, question: "Posso usar as dicas mesmo viajando com crianças pequenas?", answer: "Absolutamente! O eBook tem seções específicas para famílias com crianças, incluindo dicas de hospedagem, alimentação, roteiros adaptados e como economizar em itens infantis." },
    { icon: <Plane className="h-4 w-4" />, question: "As dicas funcionam saindo de qualquer cidade do Brasil?", answer: "Sim! As estratégias de passagens aéreas, hospedagem e planejamento funcionam independente da sua cidade de origem. Temos dicas específicas para voos nacionais e internacionais." },
    { icon: <Shield className="h-4 w-4" />, question: "Existe garantia de satisfação?", answer: "Sim! Oferecemos garantia incondicional de 7 dias. Se você não ficar satisfeito com o conteúdo, devolvemos 100% do seu dinheiro." },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b backdrop-blur-sm bg-white/95 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="/" className="flex-shrink-0">
              <img
                src="/images/disneyland/vipex-logo.png"
                alt="Vipex - Assessoria de Viagens"
                className="h-4 sm:h-6 w-auto lg:ml-[50px] transition-transform hover:scale-105 cursor-pointer"
              />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection("porque-funciona")} className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Por que funciona?
              </button>
              <button onClick={() => scrollToSection("conteudo")} className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Conteúdo
              </button>
              <button onClick={() => scrollToSection("faq")} className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                FAQ
              </button>
              <Button onClick={goToPurchase} className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 font-semibold shadow-lg hover:shadow-xl transition-all">
                Comprar Agora
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
              <nav className="flex flex-col space-y-4 pt-4">
                <button
                  onClick={() => scrollToSection("porque-funciona")}
                  className="text-left text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
                >
                  Por que funciona?
                </button>
                <button
                  onClick={() => scrollToSection("conteudo")}
                  className="text-left text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
                >
                  Conteúdo
                </button>
                <button
                  onClick={() => scrollToSection("faq")}
                  className="text-left text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
                >
                  FAQ
                </button>
                <Button
                  onClick={goToPurchase}
                  className="bg-green-600 hover:bg-green-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 w-full"
                >
                  Comprar Agora
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden py-6 sm:py-10 px-4 mt-[-30px] lg:mt-[-40px]">
        {/* BG image */}
        {/* BG image + overlay escuro */}
        <div className="absolute inset-0">
          <img
            src="images/disneyland/disney-castle-magical-background-with-fireworks.png"
            alt="Disney Background"
            className="w-full h-full object-cover"
          />
          {/* overlay mais forte */}
          <div className="absolute inset-0 hero-overlay-strong" />
        </div>

        {/* Estrelinhas por cima (bem discretas) */}
        <div className="pointer-events-none absolute inset-0">
          {[...Array(18)].map((_, i) => (
            <span
              key={i}
              className="absolute twinkle"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 3 + 2}px`,
                height: `${Math.random() * 3 + 2}px`,
                background: "rgba(255,255,255,.85)",
                borderRadius: "9999px",
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>


        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Texto */}
            <div className="text-center lg:text-left space-y-6 order-2 lg:order-1">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-white leading-tight text-balance">
                Realize sua viagem dos sonhos para a Disney{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-blue-300 to-purple-300">
                  gastando até 60% menos
                </span>
              </h1>
              <p className="text-sm sm:text-base lg:text-lg text-white/90 leading-relaxed text-pretty max-w-2xl mx-auto lg:mx-0 font-medium">
                50+ dicas práticas para pagar menos em passagens, hospedagem, ingressos e dentro dos parques — sem
                perder a magia.
              </p>

              <div className="space-y-3 sm:space-y-4">
                <a href="https://pay.kiwify.com.br/DIp4nQ6" target="_blank" rel="noopener noreferrer" onClick={() => trackCTA("hero")} className="block">
                  <Button size="lg" className="w-full sm:w-auto bg-green-600 hover:bg-green-700 hover:scale-105 transition-all duration-300 text-white px-6 py-4 text-base lg:text-lg font-semibold shadow-xl hover:shadow-2xl glow-pulse">
                    <Download className="mr-2 h-5 w-5" />
                    Baixar eBook Premium Agora
                  </Button>
                </a>
                <p className="text-xs sm:text-sm lg:text-base text-white/90 flex items-center justify-center lg:justify-start gap-2 font-medium">
                  <Sparkles className="w-4 h-4 text-yellow-300" />
                  Acesso imediato após o pagamento
                </p>
              </div>

              {/* Badges */}
              <div className="flex flex-row flex-wrap gap-3 items-center justify-center lg:justify-start">
                <Badge className="bg-blue-600 text-white border-0 px-3 py-2 text-xs sm:text-sm font-medium shadow-lg">
                  <Shield className="w-4 h-4 mr-2" /> Compra segura
                </Badge>
                <Badge className="bg-purple-700 text-white border-0 px-3 py-2 text-xs sm:text-sm font-medium shadow-lg">
                  <Clock className="w-4 h-4 mr-2" /> Preço promocional
                </Badge>
                <Badge className="bg-pink-700 text-white border-0 px-3 py-2 text-xs sm:text-sm font-medium shadow-lg">
                  <CheckCircle className="w-4 h-4 mr-2" /> Conteúdo testado
                </Badge>
              </div>
            </div>

            {/* Imagem do eBook */}
            <div className="flex justify-center animate-float order-1 lg:order-2 lg:mt-[10px] mb-[-50px]">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 rounded-3xl blur-3xl opacity-40 scale-110" />
                <img
                  src="images/disneyland/disney-ebook-new-cover.png"
                  alt="Guia Completo para Economizar na Disney - eBook"
                  className="relative z-10 drop-shadow-2xl rounded-3xl w-56 md:w-72 lg:w-96 h-auto mt-50"
                />
                <div className="absolute -top-3 -right-4 bg-green-600 text-white px-4 py-2 rounded-full font-bold text-sm md:text-base border-2 border-green-400 animate-pulse">
                  por apenas <strong>R$ 47</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Realize o sonho da família */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900 text-balance">
                Realize o sonho da família{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">gastando menos</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
                Transforme sua viagem dos sonhos em realidade sem comprometer o orçamento familiar
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  img: "images/disneyland/family-happy-moments-disney-castle-background.png",
                  title: "Momentos Inesquecíveis",
                  text: "Crie memórias que durarão para sempre sem estourar o orçamento",
                  Icon: Heart,
                },
                {
                  img: "images/disneyland/family-fun-disney-rides-attractions.png",
                  title: "Diversão Garantida",
                  text: "Aproveite todas as atrações e experiências sem se preocupar com custos extras",
                  Icon: Users,
                },
                {
                  img: "images/disneyland/travel-planning-calendar-organization.png",
                  title: "Planejamento Inteligente",
                  text: "Organize sua viagem de forma estratégica para maximizar economia e diversão",
                  Icon: Calendar,
                },
                {
                  img: "images/disneyland/money-savings-piggy-bank-coins.png",
                  title: "Economia Inteligente",
                  text: "Técnicas comprovadas para reduzir custos sem abrir mão da qualidade",
                  Icon: PiggyBank,
                },
              ].map(({ img, title, text, Icon }, i) => (
                <Card key={i} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <Icon className="w-8 h-8 mb-2" />
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-xl mb-3 text-gray-900">{title}</h3>
                    <p className="text-gray-600 leading-relaxed">{text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Por que funciona */}
      <section id="porque-funciona" className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <img src="images/disneyland/disney-world-castle-fireworks-night.png" alt="Disney Background" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900 text-balance">
                Porque <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">funciona?</span>
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto text-pretty font-medium">Estratégias comprovadas por especialistas em viagens para Orlando</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Dicas Exclusivas", text: "Segredos que só especialistas conhecem, testados em centenas de viagens", grad: "from-purple-600 to-pink-600", Icon: Target },
                { title: "Economia Comprovada", text: "Métodos que já economizaram milhares para famílias brasileiras", grad: "from-green-600 to-blue-600", Icon: TrendingUp },
                { title: "Resultados Rápidos", text: "Aplique as dicas imediatamente e veja a economia já no planejamento", grad: "from-orange-600 to-red-600", Icon: Zap },
                { title: "Passo a Passo Simples", text: "Guia detalhado e fácil de seguir, mesmo para iniciantes", grad: "from-blue-600 to-purple-600", Icon: BookOpen },
              ].map(({ title, text, grad, Icon }, i) => (
                <Card key={i} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group bg-white/90 backdrop-blur-sm">
                  <CardContent className="p-8 text-center">
                    <div className={`w-16 h-16 bg-gradient-to-br ${grad} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-bold text-xl mb-4 text-gray-900">{title}</h3>
                    <p className="text-gray-700 leading-relaxed">{text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* O Mapa da Economia */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="images/disneyland/disney-world-map-parks-overview.png" alt="Disney Map Background" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-gray-900/90 to-black/80" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black mb-6 text-white text-balance">
                O <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">Mapa da Economia</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto text-pretty">Economize em cada etapa da sua viagem - do planejamento até a volta para casa</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {[
                { title: "Passagens Aéreas", text: "Técnicas para encontrar voos até 60% mais baratos", grad: "from-blue-600 to-purple-600", Icon: Plane },
                { title: "Hospedagem", text: "Hotéis premium com preços de categoria econômica", grad: "from-purple-600 to-pink-600", Icon: Building },
                { title: "Ingressos", text: "Combos exclusivos e descontos especiais", grad: "from-green-600 to-blue-600", Icon: Ticket },
                { title: "Alimentação", text: "Onde comer bem gastando pouco nos parques", grad: "from-orange-600 to-red-600", Icon: UtensilsCrossed },
                { title: "Souvenirs", text: "Lembranças especiais sem pagar preços abusivos", grad: "from-pink-600 to-purple-600", Icon: Gift },
                { title: "Experiências", text: "Atividades exclusivas com desconto especial", grad: "from-yellow-600 to-orange-600", Icon: MapPin },
              ].map(({ title, text, grad, Icon }, i) => (
                <Card key={i} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group bg-white/10 backdrop-blur-sm border border-white/20">
                  <CardContent className="p-8 text-center">
                    <div className={`w-20 h-20 bg-gradient-to-br ${grad} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                      <Icon className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="font-bold text-xl mb-4 text-white">{title}</h3>
                    <p className="text-gray-300 leading-relaxed mb-2">{text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reviews / Provas Sociais */}
      {/* Reviews / Provas Sociais (SUBSTITUA A SUA POR ESTA) */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        {/* brilho sutil no topo */}
        <div className="pointer-events-none absolute inset-x-0 -top-24 h-48 bg-gradient-to-b from-black/10 to-transparent blur-2xl opacity-20" />

        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Cabeçalho */}
            <div className="text-center mb-12">
              <p className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold rounded-full
                       bg-green-100 text-green-800 border border-green-200">
                ★ 4,9/5 baseado em +320 leitores
              </p>
              <h3 className="mt-4 text-3xl md:text-4xl font-black text-gray-900">
                O que nossos clientes{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  dizem
                </span>
              </h3>
              <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
                Depoimentos reais de quem já usou o guia para economizar em Orlando.
              </p>
            </div>

            {/* Cards */}
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: "Carla M.", text: "Economizamos mais de 40% na viagem em família. O guia é direto e aplicável!" },
                { name: "Rafael S.", text: "Passeios e restaurantes que eu não conheceria. Valeu cada centavo." },
                { name: "Juliana F.", text: "Consegui voos muito mais baratos com as dicas de milhas. Recomendo demais!" },
              ].map((r, i) => (
                <div
                  key={i}
                  className="
              group rounded-2xl p-[1px]
              bg-gradient-to-br from-blue-200/50 via-purple-200/50 to-pink-200/50
              hover:from-blue-300/60 hover:to-pink-300/60 transition-all
            "
                >
                  <div
                    className="
                relative rounded-2xl bg-white shadow-lg border border-white
                hover:shadow-xl transition-all duration-300
                hover:-translate-y-1
              "
                  >
                    {/* brilho ao passar o mouse */}
                    <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity
                              bg-gradient-to-br from-white/0 via-white/20 to-white/0" />

                    {/* estrelas */}
                    <div className="px-6 pt-6">
                      <div className="flex items-center gap-1 text-yellow-500" aria-label="5 de 5 estrelas">
                        {Array.from({ length: 5 }).map((_, k) => (
                          <Star key={k} className="w-5 h-5 fill-current" />
                        ))}
                      </div>
                    </div>

                    {/* texto */}
                    <div className="px-6 py-5">
                      <p className="text-gray-700 leading-relaxed">
                        <span className="text-gray-400 mr-1 align-middle">
                          <Quote className="w-4 h-4 inline" />
                        </span>
                        “{r.text}”
                      </p>
                    </div>

                    {/* rodapé: avatar simples + nome */}
                    <div className="px-6 pb-6">
                      <div className="flex items-center gap-3">
                        <div className="h-9 w-9 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 text-white
                                  grid place-items-center font-bold shadow-sm">
                          {r.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
                        </div>
                        <div className="text-sm">
                          <p className="font-semibold text-gray-900">{r.name}</p>
                          <p className="text-gray-500">Compra verificada</p>
                        </div>
                      </div>
                    </div>

                    {/* sombra suave fora do card */}
                    <div className="absolute -bottom-2 inset-x-6 h-4 rounded-full blur-md bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              ))}
            </div>

            {/* CTA secundário opcional */}
            <div className="text-center mt-10">
              <button
                onClick={() => document.getElementById("faq")?.scrollIntoView({ behavior: "smooth" })}
                className="text-sm font-semibold text-blue-700 hover:text-blue-800"
              >
                Ver mais dúvidas frequentes →
              </button>
            </div>
          </div>
        </div>
      </section>


      {/* FAQ */}
      <section id="faq" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900 text-balance">
                Perguntas{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Frequentes</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">Tire suas dúvidas sobre o eBook Disney</p>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, index) => {
                const open = openFaq === index
                return (
                  <div
                    key={index}
                    className="group rounded-2xl p-[1px] bg-gradient-to-r from-blue-200/60 via-purple-200/60 to-pink-200/60 transition-all hover:from-blue-300/70 hover:to-pink-300/70"
                  >
                    <div className={`rounded-2xl bg-white/90 backdrop-blur-sm ring-1 ring-black/5 shadow-sm transition-all group-hover:shadow-md group-hover:translate-y-[-1px] ${open ? "ring-2 ring-blue-200/70" : ""}`}>
                      <button
                        onClick={() => toggleFaq(index)}
                        aria-expanded={open}
                        className="w-full flex items-center justify-between gap-4 px-5 py-4 md:px-6 md:py-5 text-left hover:bg-black/[0.02] rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60"
                      >
                        <div className="flex items-start gap-3">
                          <span className="mt-1 text-blue-600">{faq.icon}</span>
                          <span className={`mt-1 h-2.5 w-2.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 shadow-[0_0_0_3px_rgba(59,130,246,0.10)] transition-transform ${open ? "scale-110" : ""}`} />
                          <h3 className="font-semibold text-gray-900 leading-snug">{faq.question}</h3>
                        </div>

                        <span className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-600 ring-1 ring-black/5 transition-all ${open ? "rotate-180 bg-gray-900 text-white" : "group-hover:bg-white"}`} aria-hidden="true">
                          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
                            <path d="M19 9l-7 7-7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                      </button>

                      <div className={`grid transition-all duration-300 ease-out ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                        <div className="min-h-0">
                          <div className="px-6 pb-5 pt-0 text-gray-700 leading-relaxed">{faq.answer}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="images/disneyland/disney-world-cinderella-castle-night.png" alt="Disney Castle Night" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-gray-900/90 to-black/80" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-8xl mx-auto text-center text-white">
            <h2 className="font-black text-4xl md:text-6xl mb-6 leading-tight">
              Sua viagem Disney dos sonhos
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">começa agora!</span>
            </h2>

            <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
              Não deixe para depois. Cada dia que passa é dinheiro que você poderia estar economizando.
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 max-w-2xl mx-auto border border-white/20 hover:bg-white/15 transition-all">
              <div className="text-center">
                <p className="text-lg mb-2 text-gray-300">
                  De <span className="line-through text-red-400 font-semibold">R$ 197</span> por apenas
                </p>
                <div className="text-5xl md:text-6xl font-black mb-2 bg-gradient-to-r from-green-200 to-blue-200 bg-clip-text text-transparent">R$ 47</div>

                {/* contador */}
                <p className="text-sm text-gray-900 bg-green-300/70 px-3 py-1 rounded-full inline-flex items-center gap-2 font-semibold">
                  <Timer className="h-4 w-4" />
                  Oferta expira em {String(timeLeft.h).padStart(2, "0")}:{String(timeLeft.m).padStart(2, "0")}:
                  {String(timeLeft.s).padStart(2, "0")}
                </p>
              </div>
            </div>

            <a href="https://pay.kiwify.com.br/DIp4nQ6" target="_blank" rel="noopener noreferrer" onClick={() => trackCTA("footer")}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-500 to-green-700 hover:from-green-700 hover:to-green-800 text-white hover:scale-105 transition-all duration-300 px-12 py-6 text-xl font-bold shadow-2xl hover:shadow-green-500/20 border-0 glow-pulse"
              >
                <Download className="mr-3 h-6 w-6" />
                Garantir Meu eBook Agora
              </Button>
            </a>

            <p className="text-sm mt-6 text-gray-300 flex flex-wrap justify-center gap-4">
              <span>✅ Acesso imediato</span>
              <span>✅ Garantia de 7 dias</span>
              <span>✅ Suporte premium</span>
            </p>
          </div>
        </div>
      </section>

      {/* CTA fixo no mobile */}
      {/* <div className="md:hidden fixed bottom-3 left-3 right-3 z-[60]">
        <Button onClick={goToPurchase} className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold shadow-xl glow-pulse">
          Comprar Agora
        </Button>
      </div> */}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center md:text-left">
                <img src="images/disneyland/vipex-logo.png" alt="Vipex Logo" className="h-8 w-auto mx-auto md:mx-0 mb-4 filter brightness-0 invert" />
                <p className="text-gray-400 leading-relaxed">Especialistas em viagens Disney, ajudando famílias a realizarem seus sonhos gastando menos.</p>
              </div>
              <div className="text-center">
                <h4 className="font-bold text-lg mb-4 text-white">Contato</h4>
                <p className="text-gray-400 mb-2">atendimento@vipexviagens.com.br</p>
                <p className="text-gray-400">Resposta em até 24h</p>
              </div>
              <div className="text-center md:text-right">
                <h4 className="font-bold text-lg mb-4 text-white">Garantias</h4>
                <p className="text-gray-400 mb-2">✅ Compra 100% Segura</p>
                <p className="text-gray-400 mb-2">✅ Garantia de 7 dias</p>
                <p className="text-gray-400">✅ Acesso Imediato</p>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-8 text-center">
              <p className="text-gray-500 text-sm">© 2025 Vipex Assessoria de Viagens. Todos os direitos reservados.</p>
              <p className="text-gray-600 text-xs mt-2">
                Este produto não é afiliado, associado, autorizado, endossado por, ou de qualquer forma oficialmente conectado com a The Walt Disney Company.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
