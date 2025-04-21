import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 md:pt-32 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col items-center text-center space-y-6 md:space-y-8">
            <span className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary animate-fade-in">
              Treinos de Calistenia com Inteligência Artificial
            </span>
            <h1
              className="text-4xl md:text-6xl font-bold tracking-tighter max-w-3xl mx-auto animate-fade-in opacity-0"
              style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}
            >
              Transforme seu corpo com treinos{' '}
              <span className="text-primary">personalizados</span> de calistenia
            </h1>
            <p
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in opacity-0"
              style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}
            >
              Nossa plataforma com IA cria planos de treino de calistenia
              personalizados de acordo com seus objetivos, equipamentos
              disponíveis e nível de condicionamento físico
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in opacity-0"
              style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}
            >
              <Button asChild size="lg" className="px-8">
                <Link href="/auth">Começar Agora</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/workout-generator">Experimentar Gerador</Link>
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div
            className="mt-16 md:mt-24 max-w-5xl mx-auto animate-fade-in opacity-0"
            style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}
          >
            <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80')] bg-center bg-cover"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 md:py-32 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Tudo o que Você Precisa para se Superar
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Nossa plataforma oferece ferramentas completas para ajudar você a
              alcançar seus objetivos na calistenia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Gerador de Treinos com IA',
                description:
                  'Receba treinos personalizados adaptados aos seus objetivos, equipamentos e nível de condicionamento',
                icon: (
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L22.5 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                      />
                    </svg>
                  </div>
                ),
              },
              {
                title: 'Acompanhamento de Progresso',
                description:
                  'Monitore seu desempenho e veja sua evolução ao longo do tempo com análises detalhadas',
                icon: (
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                      />
                    </svg>
                  </div>
                ),
              },
              {
                title: 'Orientação de Técnicas',
                description:
                  'Aprenda a forma e técnica adequadas com instruções detalhadas e demonstrações em vídeo',
                icon: (
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z"
                      />
                    </svg>
                  </div>
                ),
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="bg-card border rounded-lg p-6 flex flex-col items-center text-center hover:shadow-md transition-all duration-300"
              >
                {feature.icon}
                <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 md:py-32 px-4 bg-secondary/50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Como Funciona
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Comece sua jornada na calistenia em apenas alguns passos simples
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                number: '01',
                title: 'Crie seu Perfil',
                description:
                  'Cadastre-se e informe seus dados físicos e objetivos de condicionamento',
              },
              {
                number: '02',
                title: 'Receba seu Plano de Treino',
                description:
                  'Nossa IA gera um plano de treino personalizado adequado às suas necessidades',
              },
              {
                number: '03',
                title: 'Acompanhe seu Progresso',
                description:
                  'Registre seus treinos e observe sua evolução de desempenho ao longo do tempo',
              },
            ].map((step, i) => (
              <div key={i} className="relative">
                <div className="text-4xl font-bold text-primary/20 absolute -top-6 left-0">
                  {step.number}
                </div>
                <h3 className="text-xl font-medium mb-2 mt-4">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-16">
            <Button asChild size="lg">
              <Link href="/auth">Comece sua Jornada</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
