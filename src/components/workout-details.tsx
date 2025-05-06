import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Clock, Dumbbell } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
// import { Progress } from '@/components/ui/progress'

interface Exercise {
  name: string
  sets: number
  reps: string
  rest: string
  notes?: string
  video?: string
}

interface WorkoutDetailsProps {
  title: string
  level: 'beginner' | 'intermediate' | 'advanced'
  duration: number
  focus: string[]
  exercises: Exercise[]
  description?: string
  warmup?: string[]
  cooldown?: string[]
  onStart?: () => void
  onSave?: () => void
}

export function WorkoutDetails({
  title,
  level,
  duration,
  focus,
  exercises,
  description,
  warmup,
  cooldown,
  onStart,
  onSave,
}: WorkoutDetailsProps) {
  const getLevelColor = (level: string) => {
    switch (level) {
      case 'beginner':
        return 'bg-green-100 text-green-800'
      case 'intermediate':
        return 'bg-blue-100 text-blue-800'
      case 'advanced':
        return 'bg-purple-100 text-purple-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const levelLabel = {
    beginner: 'Iniciante',
    intermediate: 'Intermediário',
    advanced: 'Avançado',
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
            <div>
              <CardTitle className="text-2xl font-bold">{title}</CardTitle>
              <CardDescription className="mt-2 flex flex-wrap items-center gap-3">
                <Badge className={`${getLevelColor(level)} capitalize`}>
                  {levelLabel[level]}
                </Badge>
                <span className="flex items-center text-muted-foreground">
                  <Clock className="h-4 w-4 mr-1" />
                  {duration} min
                </span>
                <span className="flex items-center text-muted-foreground">
                  <Dumbbell className="h-4 w-4 mr-1" />
                  {exercises.length} exercícios
                </span>
              </CardDescription>
            </div>
            <div className="flex gap-2">
              {onSave && (
                <Button variant="outline" onClick={onSave}>
                  Salvar
                </Button>
              )}
              {onStart && <Button onClick={onStart}>Iniciar Treino</Button>}
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="mb-6">
            <div className="text-sm font-medium mb-2">Áreas de Foco</div>
            <div className="flex flex-wrap gap-2">
              {focus.map((item, i) => (
                <Badge key={i} variant="outline" className="bg-secondary/50">
                  {item}
                </Badge>
              ))}
            </div>
          </div>

          {description && (
            <div className="mb-6">
              <div className="text-sm font-medium mb-2">Descrição</div>
              <p className="text-muted-foreground">{description}</p>
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Rotina de Treino</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="exercises" className="w-full">
            <TabsList className="mb-4">
              <TabsTrigger value="exercises">Exercícios</TabsTrigger>
              <TabsTrigger value="warmup">Aquecimento</TabsTrigger>
              <TabsTrigger value="cooldown">Finalização</TabsTrigger>
            </TabsList>

            <TabsContent value="exercises" className="mt-0">
              <div className="space-y-6">
                {exercises.map((exercise, index) => (
                  <div
                    key={index}
                    className="border-b pb-4 last:border-0 last:pb-0"
                  >
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3">
                      <div className="flex items-center gap-2">
                        <div className="bg-primary/10 w-8 h-8 rounded-full flex items-center justify-center text-primary font-medium">
                          {index + 1}
                        </div>
                        <h3 className="text-lg font-medium">{exercise.name}</h3>
                      </div>
                      {exercise.video && (
                        <Button variant="ghost" size="sm">
                          Ver Demonstração
                        </Button>
                      )}
                    </div>

                    <div className="grid grid-cols-3 gap-4 mb-3">
                      <div className="bg-secondary/30 rounded-lg p-3 text-center">
                        <div className="text-xs text-muted-foreground">
                          Séries
                        </div>
                        <div className="text-lg font-medium">
                          {exercise.sets}
                        </div>
                      </div>
                      <div className="bg-secondary/30 rounded-lg p-3 text-center">
                        <div className="text-xs text-muted-foreground">
                          Repetições
                        </div>
                        <div className="text-lg font-medium">
                          {exercise.reps}
                        </div>
                      </div>
                      <div className="bg-secondary/30 rounded-lg p-3 text-center">
                        <div className="text-xs text-muted-foreground">
                          Descanso
                        </div>
                        <div className="text-lg font-medium">
                          {exercise.rest}
                        </div>
                      </div>
                    </div>

                    {exercise.notes && (
                      <div className="text-sm text-muted-foreground">
                        <span className="font-medium text-foreground">
                          Dica:{' '}
                        </span>
                        {exercise.notes}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="warmup" className="mt-0">
              <div className="space-y-4">
                {warmup ? (
                  <ul className="list-disc list-inside space-y-2">
                    {warmup.map((item, i) => (
                      <li key={i} className="text-muted-foreground">
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-muted-foreground">
                    Aqueça por 5-10 minutos com exercícios cardio leves e
                    alongamentos dinâmicos para preparar seus músculos.
                  </p>
                )}
              </div>
            </TabsContent>

            <TabsContent value="cooldown" className="mt-0">
              <div className="space-y-4">
                {cooldown ? (
                  <ul className="list-disc list-inside space-y-2">
                    {cooldown.map((item, i) => (
                      <li key={i} className="text-muted-foreground">
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-muted-foreground">
                    Dedique 5-10 minutos para alongamentos estáticos, focando
                    nos músculos trabalhados para auxiliar na recuperação.
                  </p>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
