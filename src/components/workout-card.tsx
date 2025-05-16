import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Clock, BarChart, Calendar } from 'lucide-react'

export interface WorkoutCardProps {
  title: string
  level: 'beginner' | 'intermediate' | 'advanced'
  duration: number
  exercises: number
  focus: string[]
  date?: string
  onStart?: () => void
  onView?: () => void
}

export function WorkoutCard({
  title,
  level,
  duration,
  exercises,
  focus,
  date,
  onStart,
  onView,
}: WorkoutCardProps) {
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

  return (
    <Card className="w-full overflow-hidden transition-all duration-300 hover:shadow-md">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl font-medium">{title}</CardTitle>
            <CardDescription className="mt-1">
              {date && (
                <div className="flex items-center text-xs text-muted-foreground mb-1">
                  <Calendar className="h-3 w-3 mr-1" />
                  {date}
                </div>
              )}
            </CardDescription>
          </div>
          <Badge className={`${getLevelColor(level)} capitalize`}>
            {level}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="pb-4">
        <div className="flex items-center justify-between text-sm mb-4">
          <div className="flex items-center text-muted-foreground">
            <Clock className="h-4 w-4 mr-1" />
            <span>{duration} min</span>
          </div>
          <div className="flex items-center text-muted-foreground">
            <BarChart className="h-4 w-4 mr-1" />
            <span>{exercises} exercises</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mt-2">
          {focus.map((item, i) => (
            <Badge key={i} variant="outline" className="bg-secondary/50">
              {item}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="pt-0 flex justify-between gap-2">
        {onView && (
          <Button variant="outline" className="flex-1" onClick={onView}>
            View
          </Button>
        )}
        {onStart && (
          <Button className="flex-1" onClick={onStart}>
            Start Workout
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
