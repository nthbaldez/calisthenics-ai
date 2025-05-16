'use client'

import Link from 'next/link'
import { Button } from './ui/button'
import { Award, Bell, Calendar, Clock, TrendingUp, User } from 'lucide-react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card'
import { ProgressChart } from './progress-chart'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'
import { WorkoutCard } from './workout-card'
import { Badge } from './ui/badge'

export default function DashboardPageContent() {
  const statsData = [
    {
      title: 'Treinos Concluídos',
      value: '24',
      description: '+5 do mês passado',
      trend: 'up',
      icon: <Award className="h-4 w-4 text-green-500" />,
    },
    {
      title: 'Horas de Treino',
      value: '18.5',
      description: '+2.5 horas do mês passado',
      trend: 'up',
      icon: <Clock className="h-4 w-4 text-green-500" />,
    },
    {
      title: 'Sequência Atual',
      value: '6',
      description: 'dias',
      trend: 'neutral',
      icon: <Calendar className="h-4 w-4 text-blue-500" />,
    },
    {
      title: 'Pontuação de Conquistas',
      value: '420',
      description: 'Nível 4 - Intermediário',
      trend: 'up',
      icon: <TrendingUp className="h-4 w-4 text-green-500" />,
    },
  ]

  const recentWorkouts = [
    {
      title: 'Treino Completo de Força',
      level: 'intermediate' as const,
      duration: 45,
      exercises: 8,
      focus: ['Parte Superior', 'Core', 'Força'],
      date: 'Hoje',
    },
    {
      title: 'Foco em Puxada',
      level: 'intermediate' as const,
      duration: 30,
      exercises: 6,
      focus: ['Costas', 'Braços', 'Hipertrofia'],
      date: 'Ontem',
    },
    {
      title: 'Condicionamento Core',
      level: 'beginner' as const,
      duration: 20,
      exercises: 5,
      focus: ['Core', 'Resistência'],
      date: '3 dias atrás',
    },
  ]

  const recommendedWorkouts = [
    {
      title: 'Progressão de Flexões',
      level: 'intermediate' as const,
      duration: 35,
      exercises: 7,
      focus: ['Peito', 'Ombros', 'Força'],
    },
    {
      title: 'Explosão de Pernas',
      level: 'advanced' as const,
      duration: 40,
      exercises: 8,
      focus: ['Pernas', 'Glúteos', 'Força'],
    },
    {
      title: 'Rotina de Mobilidade',
      level: 'beginner' as const,
      duration: 25,
      exercises: 6,
      focus: ['Flexibilidade', 'Recuperação'],
    },
  ]

  const progressData = [
    { date: 'Jan', flexoes: 15, barras: 5, dips: 8 },
    { date: 'Fev', flexoes: 17, barras: 6, dips: 10 },
    { date: 'Mar', flexoes: 20, barras: 7, dips: 12 },
    { date: 'Abr', flexoes: 23, barras: 8, dips: 14 },
    { date: 'Mai', flexoes: 25, barras: 10, dips: 15 },
    { date: 'Jun', flexoes: 28, barras: 12, dips: 18 },
  ]

  const progressDataKeys = [
    { key: 'flexoes', name: 'Flexões', color: '#3b82f6' },
    { key: 'barras', name: 'Barras', color: '#10b981' },
    { key: 'dips', name: 'Dips', color: '#8b5cf6' },
  ]

  const weeklyPlan = [
    { day: 'Segunda', type: 'Parte Superior', status: 'completed' },
    { day: 'Terça', type: 'Descanso Ativo', status: 'completed' },
    { day: 'Quarta', type: 'Parte Inferior', status: 'today' },
    { day: 'Quinta', type: 'Descanso', status: 'upcoming' },
    { day: 'Sexta', type: 'Corpo Completo', status: 'upcoming' },
    { day: 'Sábado', type: 'Habilidades', status: 'upcoming' },
    { day: 'Domingo', type: 'Descanso', status: 'upcoming' },
  ]

  return (
    <div className="pt-20 pb-16 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
            <p className="text-muted-foreground mt-1">
              Acompanhe seu progresso, visualize estatísticas e gerencie seus
              treinos.
            </p>
          </div>

          <div className="mt-4 md:mt-0 flex space-x-3">
            <Button asChild size="lg" className="px-8">
              <Link href="/workout-generator">Gerar novo treino</Link>
            </Button>

            <Button asChild size="lg" variant="outline" className="px-8">
              <Link href="/workout-progress">Ver progresso</Link>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {statsData.map((item, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-md transition-all duration-300"
            >
              <CardHeader className="pb-2">
                <CardDescription>{item.title}</CardDescription>
                <div className="flex justify-between items-end">
                  <CardTitle className="text-3xl">{item.value}</CardTitle>
                  <span className="text-xs flex items-center gap-1">
                    {item.icon}
                    {item.description}
                  </span>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Coluna esquerda */}
          <div className="space-y-8">
            {/* Plano Semanal */}
            <Card>
              <CardHeader>
                <CardTitle className="flex justify-between items-center">
                  <span>Plano Semanal de Treinos</span>
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <Bell className="h-4 w-4" />
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {weeklyPlan.map((day, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center 
                            ${
                              day.status === 'completed'
                                ? 'bg-primary/10 text-primary'
                                : day.status === 'today'
                                  ? 'bg-green-500/10 text-green-500 ring-1 ring-green-500'
                                  : 'bg-muted text-muted-foreground'
                            }`}
                        >
                          {i + 1}
                        </div>
                        <div>
                          <div className="font-medium">{day.day}</div>
                          <div className="text-sm text-muted-foreground">
                            {day.type}
                          </div>
                        </div>
                      </div>
                      <div>
                        {day.status === 'completed' && (
                          <Badge
                            variant="outline"
                            className="bg-primary/10 text-primary border-primary"
                          >
                            Concluído
                          </Badge>
                        )}
                        {day.status === 'today' && (
                          <Badge
                            variant="outline"
                            className="bg-green-500/10 text-green-500 border-green-500"
                          >
                            Hoje
                          </Badge>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Crachás de Conquistas */}
            <Card>
              <CardHeader>
                <CardTitle className="flex justify-between items-center">
                  <span>Conquistas Recentes</span>
                  <Button variant="link" size="sm" asChild>
                    <Link href="/profile">Ver Todas</Link>
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    {
                      name: 'Primeiro Treino',
                      icon: <Award className="h-5 w-5" />,
                      date: '10/06/2023',
                    },
                    {
                      name: '7 Dias Seguidos',
                      icon: <Calendar className="h-5 w-5" />,
                      date: '15/06/2023',
                    },
                    {
                      name: '50 Flexões',
                      icon: <User className="h-5 w-5" />,
                      date: '20/06/2023',
                    },
                    {
                      name: '10 Treinos',
                      icon: <Award className="h-5 w-5" />,
                      date: '22/06/2023',
                    },
                  ].map((badge, i) => (
                    <div
                      key={i}
                      className="bg-secondary/50 rounded-lg p-4 flex flex-col items-center text-center"
                    >
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
                        {badge.icon}
                      </div>
                      <div className="font-medium text-sm">{badge.name}</div>
                      <div className="text-xs text-muted-foreground mt-1">
                        {badge.date}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Colunas central e direita */}
          <div className="lg:col-span-2 space-y-8">
            {/* Gráfico de Progresso */}
            <Card>
              <CardHeader>
                <CardTitle className="">Seu Progresso</CardTitle>
                <CardDescription>
                  Acompanhe suas melhorias em exercícios-chave
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

            {/* Treinos */}
            <div>
              <Tabs defaultValue="recent" className="w-full">
                <div className="flex justify-between items-center mb-4">
                  <TabsList>
                    <TabsTrigger value="recent">Treinos Recentes</TabsTrigger>
                    <TabsTrigger value="recommended">Recomendados</TabsTrigger>
                  </TabsList>
                </div>

                <TabsContent value="recent" className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {recentWorkouts.map((workout, i) => (
                      <WorkoutCard
                        key={i}
                        {...workout}
                        onView={() => console.log('Ver treino', workout.title)}
                        onStart={() =>
                          console.log('Começar treino', workout.title)
                        }
                      />
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="recommended" className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {recommendedWorkouts.map((workout, i) => (
                      <WorkoutCard
                        key={i}
                        {...workout}
                        onView={() => console.log('Ver treino', workout.title)}
                        onStart={() =>
                          console.log('Começar treino', workout.title)
                        }
                      />
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
