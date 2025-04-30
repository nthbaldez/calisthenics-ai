'use client'

import { FormEvent, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
// import { useToast } from '@/hooks/use-toast'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Camera } from 'lucide-react'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'
import { toast } from 'sonner'

export function UserProfileForm() {
  const [isLoading, setIsLoading] = useState(false)
  // const { toast } = useToast()

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setIsLoading(true)

    // Simulate saving profile
    setTimeout(() => {
      setIsLoading(false)
      toast('Perfil atualizado', {
        description: 'Seu perfil foi atualizado com sucesso.',
        action: {
          label: 'Dismiss',
          onClick: () => console.log('dismiss'),
        },
      })
    }, 1500)
  }

  return (
    <Card className="w-full shadow-sm animate-fade-in">
      <CardHeader>
        <CardTitle>Informações Pessoais</CardTitle>
        <CardDescription>Atualize suas informações de perfil</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-6">
          <Tabs defaultValue="basic" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="basic">Dados Básicos</TabsTrigger>
              <TabsTrigger value="physical">Informações Físicas</TabsTrigger>
            </TabsList>

            <TabsContent value="basic" className="space-y-6 pt-4">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex flex-col items-center space-y-2">
                  <Avatar className="w-24 h-24">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="text-xs">
                      <Camera className="h-3 w-3 mr-1" />
                      Nova Foto
                    </Button>
                    <Button size="sm" variant="ghost" className="text-xs">
                      Remover
                    </Button>
                  </div>
                </div>

                <div className="flex-1 space-y-4 w-full">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome Completo</Label>
                      <Input
                        id="name"
                        placeholder="João Silva"
                        defaultValue="João Silva"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="username">Nome de Usuário</Label>
                      <Input
                        id="username"
                        placeholder="joaosilva"
                        defaultValue="joaosilva"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="joao@example.com"
                        defaultValue="joao@example.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefone</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+55 (11) 98765-4321"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="bio">Biografia</Label>
                    <Textarea
                      id="bio"
                      placeholder="Conte um pouco sobre você e seus objetivos de fitness..."
                      className="resize-none"
                      defaultValue="Praticante de calistenia há 1 ano, buscando melhorar força e resistência."
                    />
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="physical" className="space-y-6 pt-4">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Informações Físicas</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="age">Idade</Label>
                    <Input
                      id="age"
                      type="number"
                      min="10"
                      max="100"
                      placeholder="25"
                      defaultValue="25"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="weight">Peso (kg)</Label>
                    <Input
                      id="weight"
                      type="number"
                      min="30"
                      max="200"
                      placeholder="70"
                      defaultValue="74"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="height">Altura (cm)</Label>
                    <Input
                      id="height"
                      type="number"
                      min="100"
                      max="250"
                      placeholder="175"
                      defaultValue="178"
                    />
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-medium">
                  Nível de Condicionamento
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="fitness-level">
                      Nível de Condicionamento Atual
                    </Label>
                    <Select defaultValue="intermediate">
                      <SelectTrigger id="fitness-level">
                        <SelectValue placeholder="Selecione seu nível" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="beginner">Iniciante</SelectItem>
                        <SelectItem value="intermediate">
                          Intermediário
                        </SelectItem>
                        <SelectItem value="advanced">Avançado</SelectItem>
                        <SelectItem value="expert">Expert</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="goal">Objetivo Principal</Label>
                    <Select defaultValue="strength">
                      <SelectTrigger id="goal">
                        <SelectValue placeholder="Selecione seu objetivo" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="strength">Força</SelectItem>
                        <SelectItem value="hypertrophy">Hipertrofia</SelectItem>
                        <SelectItem value="endurance">Resistência</SelectItem>
                        <SelectItem value="fat-loss">
                          Perda de Gordura
                        </SelectItem>
                        <SelectItem value="skill">
                          Aquisição de Habilidades
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-medium">
                  Experiência em Movimentos
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="exp-pushup" defaultChecked />
                    <Label htmlFor="exp-pushup" className="text-sm font-normal">
                      Flexões Avançadas
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="exp-pullup" defaultChecked />
                    <Label htmlFor="exp-pullup" className="text-sm font-normal">
                      Barras
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="exp-dip" defaultChecked />
                    <Label htmlFor="exp-dip" className="text-sm font-normal">
                      Dips
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="exp-muscleup" />
                    <Label
                      htmlFor="exp-muscleup"
                      className="text-sm font-normal"
                    >
                      Muscle Up
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="exp-handstand" />
                    <Label
                      htmlFor="exp-handstand"
                      className="text-sm font-normal"
                    >
                      Parada de Mão
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="exp-lever" />
                    <Label htmlFor="exp-lever" className="text-sm font-normal">
                      Front/Back Lever
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="exp-planche" />
                    <Label
                      htmlFor="exp-planche"
                      className="text-sm font-normal"
                    >
                      Planche
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="exp-pistol" />
                    <Label htmlFor="exp-pistol" className="text-sm font-normal">
                      Pistol Squat
                    </Label>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-medium">
                  Disponibilidade para Treino
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="training-days">Dias por Semana</Label>
                    <Select defaultValue="3">
                      <SelectTrigger id="training-days">
                        <SelectValue placeholder="Selecione" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 dia</SelectItem>
                        <SelectItem value="2">2 dias</SelectItem>
                        <SelectItem value="3">3 dias</SelectItem>
                        <SelectItem value="4">4 dias</SelectItem>
                        <SelectItem value="5">5 dias</SelectItem>
                        <SelectItem value="6">6 dias</SelectItem>
                        <SelectItem value="7">7 dias</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="training-duration">
                      Duração Média (minutos)
                    </Label>
                    <Select defaultValue="45">
                      <SelectTrigger id="training-duration">
                        <SelectValue placeholder="Selecione" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="15">15 minutos</SelectItem>
                        <SelectItem value="30">30 minutos</SelectItem>
                        <SelectItem value="45">45 minutos</SelectItem>
                        <SelectItem value="60">60 minutos</SelectItem>
                        <SelectItem value="90">90 minutos</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="mt-4">
          <Button type="submit" disabled={isLoading} className="ml-auto">
            {isLoading ? 'Salvando...' : 'Salvar Alterações'}
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}
