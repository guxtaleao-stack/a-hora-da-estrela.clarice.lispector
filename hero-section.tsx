import { Star } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
        <div className="flex justify-center mb-10">
          <Star className="w-14 h-14 text-accent animate-pulse" strokeWidth={1.2} fill="currentColor" />
        </div>

        <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold text-foreground mb-8 text-balance tracking-tight">
          A Hora da Estrela
        </h1>

        <p className="text-xl md:text-3xl text-muted-foreground mb-12 max-w-4xl mx-auto text-pretty leading-relaxed font-light">
          Um tributo literário às almas que brilharam após o silêncio final
        </p>

        <div className="w-32 h-0.5 bg-accent mx-auto mb-12" />

        <blockquote className="text-lg md:text-2xl italic text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed font-serif">
          "A morte é um encontro consigo mesmo. A morte é nupcial."
          <footer className="text-base mt-6 not-italic text-foreground/60 font-sans">— Clarice Lispector</footer>
        </blockquote>
      </div>
    </section>
  )
}
