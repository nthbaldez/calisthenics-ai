import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import {
  Bell,
  User,
  Lock,
  HelpCircle,
  LogOut,
  Moon,
  Languages,
} from 'lucide-react'
import { Separator } from '@/components/ui/separator'
import { UserProfileForm } from '@/components/user-profile-form'
import { ProgressChart } from '@/components/progress-chart'

export default function Profile() {
  // Dados de exemplo para demonstração
  const progressData = [
    { date: 'Jan', peso: 80, gordura: 18 },
    { date: 'Fev', peso: 78, gordura: 17 },
    { date: 'Mar', peso: 77, gordura: 16 },
    { date: 'Abr', peso: 76, gordura: 16 },
    { date: 'Mai', peso: 75, gordura: 15 },
    { date: 'Jun', peso: 74, gordura: 14 },
  ]

  const progressDataKeys = [
    { key: 'peso', name: 'Peso (kg)', color: '#3b82f6' },
    { key: 'gordura', name: 'Gordura Corporal %', color: '#ef4444' },
  ]

  const achievements = [
    {
      name: 'Primeiro Treino',
      description: 'Complete seu primeiro treino',
      unlocked: true,
    },
    {
      name: 'Atleta Consistente',
      description: 'Complete treinos por 7 dias seguidos',
      unlocked: true,
    },
    {
      name: 'Mestre das Flexões',
      description: 'Realize 50 flexões em um único treino',
      unlocked: true,
    },
    {
      name: 'Campeão de Barras',
      description: 'Realize 20 barras em um único treino',
      unlocked: false,
    },
    {
      name: 'Muscle-up Conquistado',
      description: 'Realize seu primeiro muscle-up',
      unlocked: false,
    },
    {
      name: 'Pro do Handstand',
      description: 'Mantenha uma parada de mão por 30 segundos',
      unlocked: false,
    },
  ]

  return (
    <div className="pt-20 pb-16 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Perfil</h1>
          <p className="text-muted-foreground mt-1">
            Gerencie sua conta e acompanhe seu progresso
          </p>
        </div>

        <Tabs defaultValue="personal" className="w-full">
          <div className="overflow-x-auto">
            <TabsList className="mb-8">
              <TabsTrigger value="personal">Informações Pessoais</TabsTrigger>
              <TabsTrigger value="progress">
                Acompanhamento de Progresso
              </TabsTrigger>
              <TabsTrigger value="achievements">Conquistas</TabsTrigger>
              <TabsTrigger value="settings">Configurações</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="personal" className="mt-0">
            <UserProfileForm />
          </TabsContent>

          <TabsContent value="progress" className="mt-0">
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Composição Corporal</CardTitle>
                  <CardDescription>
                    Acompanhe as mudanças na sua composição corporal ao longo do
                    tempo
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ProgressChart
                    title=""
                    data={progressData}
                    dataKeys={progressDataKeys}
                  />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Métricas de Desempenho</CardTitle>
                  <CardDescription>
                    Seus recordes pessoais em exercícios principais
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {[
                      { name: 'Máximo de Flexões', value: 35, change: '+5' },
                      { name: 'Máximo de Barras', value: 12, change: '+3' },
                      { name: 'Máximo de Dips', value: 20, change: '+4' },
                      { name: 'Handstand Hold', value: '15s', change: '+5s' },
                      { name: 'L-Sit Hold', value: '25s', change: '+10s' },
                      { name: 'Pistol Squats', value: 8, change: '+2' },
                    ].map((metric, i) => (
                      <div key={i} className="bg-secondary/30 rounded-lg p-4">
                        <div className="text-sm text-muted-foreground">
                          {metric.name}
                        </div>
                        <div className="text-2xl font-medium mt-1">
                          {metric.value}
                        </div>
                        <div className="text-xs text-green-500 mt-1">
                          {metric.change} no último mês
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="achievements" className="mt-0">
            <Card>
              <CardHeader>
                <CardTitle>Suas Conquistas</CardTitle>
                <CardDescription>
                  Acompanhe suas conquistas na jornada de calistenia
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {achievements.map((achievement, i) => (
                    <div
                      key={i}
                      className={`border rounded-lg p-4 ${achievement.unlocked ? 'bg-gradient-to-br from-primary/5 to-primary/10' : 'bg-muted/30 opacity-70'}`}
                    >
                      <div className="flex justify-between">
                        <h3 className="font-medium">{achievement.name}</h3>
                        {achievement.unlocked ? (
                          <Badge variant="default" className="bg-primary/80">
                            Desbloqueado
                          </Badge>
                        ) : (
                          <Badge variant="outline">Bloqueado</Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">
                        {achievement.description}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <div className="w-full flex justify-between">
                  <div className="text-sm text-muted-foreground">
                    <Badge variant="default" className="mr-2">
                      3/6
                    </Badge>
                    conquistas desbloqueadas
                  </div>
                  <Button variant="link" size="sm">
                    Ver todas as conquistas
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Bell className="h-5 w-5" />
                      Notificações
                    </CardTitle>
                    <CardDescription>
                      Configure como e quando deseja receber notificações
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      {[
                        {
                          title: 'Lembretes de Treino',
                          description:
                            'Receba lembretes antes dos seus treinos programados',
                        },
                        {
                          title: 'Dicas de Progressão',
                          description:
                            'Receba sugestões de progressão baseadas no seu desempenho',
                        },
                        {
                          title: 'Dicas de Recuperação',
                          description:
                            'Receba dicas para otimizar sua recuperação entre treinos',
                        },
                        {
                          title: 'Atualizações da Comunidade',
                          description:
                            'Seja notificado sobre atividades na comunidade',
                        },
                      ].map((item, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-between"
                        >
                          <div>
                            <div className="font-medium">{item.title}</div>
                            <div className="text-sm text-muted-foreground">
                              {item.description}
                            </div>
                          </div>
                          <Switch defaultChecked={i < 2} />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <User className="h-5 w-5" />
                      Conta
                    </CardTitle>
                    <CardDescription>
                      Gerencie suas configurações de conta e autenticação
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium">Mudar Senha</div>
                          <div className="text-sm text-muted-foreground">
                            Atualize sua senha de acesso
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          <Lock className="h-4 w-4 mr-2" />
                          Alterar
                        </Button>
                      </div>

                      <Separator />

                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium">
                            Autenticação de Dois Fatores
                          </div>
                          <div className="text-sm text-muted-foreground">
                            Adicione uma camada extra de segurança
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          Configurar
                        </Button>
                      </div>

                      <Separator />

                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium">Excluir Conta</div>
                          <div className="text-sm text-muted-foreground">
                            Exclua permanentemente sua conta e dados
                          </div>
                        </div>
                        <Button variant="destructive" size="sm">
                          Excluir
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Moon className="h-5 w-5" />
                      Aparência
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="dark-mode">Modo Escuro</Label>
                      <Switch id="dark-mode" />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Languages className="h-5 w-5" />
                      Idioma
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[
                        { lang: 'Português', code: 'pt-BR', active: true },
                        { lang: 'English', code: 'en-US', active: false },
                        { lang: 'Español', code: 'es', active: false },
                      ].map((lang, i) => (
                        <div
                          key={i}
                          className={`px-3 py-2 rounded-md flex justify-between items-center cursor-pointer hover:bg-secondary/50 ${lang.active ? 'bg-primary/10 text-primary' : ''}`}
                        >
                          <span>{lang.lang}</span>
                          {lang.active && (
                            <Badge
                              variant="outline"
                              className="text-primary border-primary"
                            >
                              Ativo
                            </Badge>
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <HelpCircle className="h-5 w-5" />
                      Suporte
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button variant="outline" className="w-full justify-start">
                      <HelpCircle className="h-4 w-4 mr-2" />
                      Central de Ajuda
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      Fale Conosco
                    </Button>
                  </CardContent>
                </Card>

                <Button variant="outline" className="w-full justify-start mt-4">
                  <LogOut className="h-4 w-4 mr-2" />
                  Sair
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
