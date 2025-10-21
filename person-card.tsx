import { Card } from "@/components/ui/card"
import { Calendar, Sparkles } from "lucide-react"

interface PersonCardProps {
  name: string
  birth: string
  death: string
  occupation: string
  description: string
  posthumousAchievement: string
  imageQuery: string
}

export function PersonCard({
  name,
  birth,
  death,
  occupation,
  description,
  posthumousAchievement,
  imageQuery,
}: PersonCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-2xl transition-all duration-700 border-border/40 bg-card group hover:-translate-y-1">
      <div className="aspect-[3/4] overflow-hidden bg-muted/50">
        <img
          src={`/.jpg?height=600&width=450&query=${encodeURIComponent(imageQuery)}`}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
        />
      </div>

      <div className="p-8 space-y-5">
        <div>
          <h3 className="font-serif text-3xl font-bold text-foreground mb-2 tracking-tight">{name}</h3>
          <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">{occupation}</p>
        </div>

        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Calendar className="w-4 h-4 text-accent" />
          <span>
            {birth} — {death}
          </span>
        </div>

        <p className="text-foreground/80 leading-relaxed text-pretty text-base">{description}</p>

        <div className="pt-5 border-t border-border/40">
          <div className="flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-accent flex-shrink-0 mt-1" fill="currentColor" />
            <div>
              <p className="text-sm font-semibold text-accent mb-2 uppercase tracking-wide">Reconhecimento Póstumo</p>
              <p className="text-sm text-muted-foreground leading-relaxed text-pretty">{posthumousAchievement}</p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}
