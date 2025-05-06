'use client'

import { WorkoutDetails } from '@/components/workout-details'
import { WorkoutForm } from '@/components/workout-form'
// import WorkoutForm from '@/components/WorkoutForm'
// import WorkoutDetails from '@/components/WorkoutDetails'
// import { useToast } from '@/hooks/use-toast'
import { useState } from 'react'

export function WorkoutPageContent() {
  const [generatedWorkout, setGeneratedWorkout] = useState<boolean>(false)
  // const { toast } = useToast()

  // Dados de exemplo para demonstração do treino gerado
  const workoutData = {
    title: 'Treino Completo de Força',
    level: 'intermediate' as const,
    duration: 45,
    focus: ['Parte Superior', 'Core', 'Parte Inferior'],
    description:
      'Este treino de nível intermediário foca em múltiplos grupos musculares com um equilíbrio de movimentos de empurrar e puxar.',
    exercises: [
      {
        name: 'Barras (Pull-ups)',
        sets: 4,
        reps: '6-8',
        rest: '90 seg',
        notes: 'Foque na amplitude completa do movimento',
      },
      {
        name: 'Flexões Pike (Pike Push-ups)',
        sets: 3,
        reps: '10-12',
        rest: '60 seg',
        notes: 'Eleve os pés para aumentar a dificuldade',
      },
      {
        name: 'Agachamentos (Bodyweight Squats)',
        sets: 4,
        reps: '15-20',
        rest: '60 seg',
        notes: 'Adicione um salto para mais intensidade',
      },
      {
        name: 'Dips',
        sets: 3,
        reps: '8-10',
        rest: '90 seg',
        notes: 'Mantenha os cotovelos próximos ao corpo',
      },
      {
        name: 'L-sit Hold',
        sets: 3,
        reps: '20-30 seg',
        rest: '60 seg',
        notes: 'Use paralelas se disponível',
      },
    ],
    warmup: [
      '5 minutos de cardio leve (pular corda, corrida leve)',
      'Rotação de ombros - 10 repetições em cada direção',
      'Rotação de quadril - 10 repetições em cada direção',
      'Agachamentos dinâmicos - 15 repetições',
      'Jumping jacks - 30 repetições',
    ],
    cooldown: [
      'Alongamento de ombros - 30 segundos cada lado',
      'Alongamento de peito - 30 segundos cada lado',
      'Alongamento de costas - 30 segundos',
      'Alongamento de quadríceps - 30 segundos cada perna',
      'Alongamento de isquiotibiais - 30 segundos cada perna',
    ],
  }

  const handleGenerateWorkout = () => {
    setGeneratedWorkout(true)
    // toast({
    //   title: 'Treino gerado com sucesso!',
    //   description: 'Seu plano de treino personalizado está pronto.',
    // })
    console.log('Treino gerado com sucesso!')
  }

  const handleStartWorkout = () => {
    // toast({
    //   title: 'Treino iniciado!',
    //   description: 'Bom treino! Registre seu desempenho ao finalizar.',
    // })
  }

  const handleSaveWorkout = () => {
    // toast({
    //   title: 'Treino salvo!',
    //   description: 'Este treino foi adicionado aos seus treinos salvos.',
    // })
    console.log('Treino salvo!')
  }

  return (
    <div className="pt-20 pb-16 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">
            Gerador de Treinos com IA
          </h1>
          <p className="text-muted-foreground mt-1">
            Crie treinos de calistenia personalizados adaptados aos seus
            objetivos e equipamentos
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Formulário */}
          <div>
            <WorkoutForm />
            {!generatedWorkout && (
              <div className="mt-4 flex justify-center">
                <button
                  onClick={handleGenerateWorkout}
                  className="text-primary hover:underline flex items-center gap-1"
                >
                  Ver exemplo de treino gerado
                </button>
              </div>
            )}
          </div>

          {/* Treino Gerado */}
          <div className="space-y-6">
            {generatedWorkout ? (
              <>
                <h2 className="text-2xl font-medium">
                  Treino Personalizado Gerado
                </h2>
                <WorkoutDetails
                  {...workoutData}
                  onStart={handleStartWorkout}
                  onSave={handleSaveWorkout}
                />
              </>
            ) : (
              <div className="h-full flex items-center justify-center p-10 border rounded-lg bg-muted/10 text-center">
                <div className="max-w-md">
                  <h3 className="text-xl font-medium mb-2">
                    Seu treino personalizado aparecerá aqui
                  </h3>
                  <p className="text-muted-foreground">
                    Preencha o formulário e clique em &quot;Gerar Treino&quot;
                    para criar um plano de treino personalizado com base nas
                    suas preferências.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
