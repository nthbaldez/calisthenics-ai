'use client'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
// import { Slider } from '@/components/ui/slider'
// import { useToast } from '@/hooks/use-toast'
import { Textarea } from '@/components/ui/textarea'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useState } from 'react'
import { Slider } from './ui/slider'

export function WorkoutForm() {
  const [isLoading, setIsLoading] = useState(false)
  // const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate AI generating a workout
    setTimeout(() => {
      setIsLoading(false)
      // toast({
      //   title: 'Treino gerado!',
      //   description: 'Seu plano de treino personalizado está pronto.',
      // })
      console.log('Treino gerado!')
    }, 2000)
  }

  return (
    <Card className="w-full animate-fade-in">
      <CardHeader>
        <CardTitle>Gere seu Treino Personalizado</CardTitle>
        <CardDescription>
          Nossa IA criará um plano de treino de calistenia personalizado baseado
          nas suas preferências
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-6">
          <Tabs defaultValue="basics" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="basics">Básico</TabsTrigger>
              <TabsTrigger value="equipment">Equipamentos</TabsTrigger>
              <TabsTrigger value="advanced">Avançado</TabsTrigger>
            </TabsList>

            <TabsContent value="basics" className="grid space-y-4 pt-4 mb-6">
              <div className="grid space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="level">Nível de Experiência</Label>
                  <Select defaultValue="intermediate">
                    <SelectTrigger id="level" className="w-full">
                      <SelectValue placeholder="Selecione seu nível" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="beginner">Iniciante</SelectItem>
                      <SelectItem value="intermediate">
                        Intermediário
                      </SelectItem>
                      <SelectItem value="advanced">Avançado</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="goal">Objetivo do Treino</Label>
                  <Select defaultValue="strength">
                    <SelectTrigger id="goal" className="w-full">
                      <SelectValue placeholder="Selecione seu objetivo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="strength">Força</SelectItem>
                      <SelectItem value="hypertrophy">Hipertrofia</SelectItem>
                      <SelectItem value="endurance">Resistência</SelectItem>
                      <SelectItem value="fat-loss">Perda de Gordura</SelectItem>
                      <SelectItem value="skill">
                        Aquisição de Habilidades
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Duração do Treino (minutos)</Label>
                  <div className="pt-2">
                    <Slider
                      defaultValue={[30]}
                      max={90}
                      min={10}
                      step={5}
                      className="mb-2"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>10 min</span>
                      <span>30 min</span>
                      <span>60 min</span>
                      <span>90 min</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Áreas de Foco</Label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="upper-body" defaultChecked />
                      <Label
                        htmlFor="upper-body"
                        className="text-sm font-normal"
                      >
                        Parte Superior
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="lower-body" defaultChecked />
                      <Label
                        htmlFor="lower-body"
                        className="text-sm font-normal"
                      >
                        Parte Inferior
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="core" defaultChecked />
                      <Label htmlFor="core" className="text-sm font-normal">
                        Core
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="flexibility" />
                      <Label
                        htmlFor="flexibility"
                        className="text-sm font-normal"
                      >
                        Flexibilidade
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="balance" />
                      <Label htmlFor="balance" className="text-sm font-normal">
                        Equilíbrio
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="cardio" />
                      <Label htmlFor="cardio" className="text-sm font-normal">
                        Cardio
                      </Label>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="equipment" className="space-y-4 pt-4 mb-6">
              <div className="space-y-4">
                <Label>Equipamentos Disponíveis</Label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="pull-up-bar" defaultChecked />
                    <Label
                      htmlFor="pull-up-bar"
                      className="text-sm font-normal"
                    >
                      Barra Fixa
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="dip-bars" defaultChecked />
                    <Label htmlFor="dip-bars" className="text-sm font-normal">
                      Barras Paralelas
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="resistance-bands" defaultChecked />
                    <Label
                      htmlFor="resistance-bands"
                      className="text-sm font-normal"
                    >
                      Faixas Elásticas
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="parallettes" />
                    <Label
                      htmlFor="parallettes"
                      className="text-sm font-normal"
                    >
                      Paraletas
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="gymnastic-rings" />
                    <Label
                      htmlFor="gymnastic-rings"
                      className="text-sm font-normal"
                    >
                      Argolas
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="weights" />
                    <Label htmlFor="weights" className="text-sm font-normal">
                      Pesos
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="suspension-trainer" />
                    <Label
                      htmlFor="suspension-trainer"
                      className="text-sm font-normal"
                    >
                      TRX/Suspensão
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="ab-wheel" />
                    <Label htmlFor="ab-wheel" className="text-sm font-normal">
                      Roda Abdominal
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="none" />
                    <Label htmlFor="none" className="text-sm font-normal">
                      Nenhum (Só peso corporal)
                    </Label>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="advanced" className="space-y-4 pt-4 mb-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="training-days">
                    Dias de treino por semana
                  </Label>
                  <Select defaultValue="3">
                    <SelectTrigger id="training-days" className="w-full">
                      <SelectValue placeholder="Selecione os dias" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="2">2 dias</SelectItem>
                      <SelectItem value="3">3 dias</SelectItem>
                      <SelectItem value="4">4 dias</SelectItem>
                      <SelectItem value="5">5 dias</SelectItem>
                      <SelectItem value="6">6 dias</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="specific-movements">
                    Movimentos Específicos para Progressão
                  </Label>
                  <Select>
                    <SelectTrigger id="specific-movements" className="w-full">
                      <SelectValue placeholder="Selecione o movimento" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="muscle-up">Muscle Up</SelectItem>
                      <SelectItem value="handstand">Parada de Mão</SelectItem>
                      <SelectItem value="front-lever">Front Lever</SelectItem>
                      <SelectItem value="back-lever">Back Lever</SelectItem>
                      <SelectItem value="planche">Planche</SelectItem>
                      <SelectItem value="human-flag">Human Flag</SelectItem>
                      <SelectItem value="pistol-squat">Pistol Squat</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="limitations">Limitações ou Lesões</Label>
                  <Textarea
                    id="limitations"
                    placeholder="Descreva qualquer lesão ou limitação física que possa afetar seu treino"
                    className="resize-none"
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter>
          <Button type="submit" disabled={isLoading} className="w-full">
            {isLoading ? (
              <span className="flex items-center gap-2">
                <svg
                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Gerando seu treino...
              </span>
            ) : (
              'Gerar Treino'
            )}
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}
