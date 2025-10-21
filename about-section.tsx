import { BookOpen } from "lucide-react"

export function AboutSection() {
  return (
    <section className="py-32 px-6 bg-secondary/40">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-center mb-10">
          <BookOpen className="w-12 h-12 text-accent" strokeWidth={1.5} />
        </div>

        <h2 className="font-serif text-5xl md:text-6xl font-bold text-center text-foreground mb-12 tracking-tight">
          Sobre Este Tributo
        </h2>

        <div className="space-y-8 text-foreground/85">
          <p className="text-xl md:text-2xl leading-relaxed text-pretty font-light">
            Inspirado na obra-prima de <strong className="font-semibold text-foreground">Clarice Lispector</strong>, "A
            Hora da Estrela", este espaço celebra vidas que, como Macabéa, encontraram seu momento de brilho apenas após
            o silêncio final.
          </p>

          <p className="text-lg md:text-xl leading-relaxed text-pretty">
            Macabéa viveu invisível, uma nordestina pobre no Rio de Janeiro, cujo único momento de glória veio no
            instante de sua morte — atropelada por um Mercedes amarelo, finalmente vista, finalmente importante. Sua
            hora da estrela chegou tarde demais para ser vivida, mas não para ser lembrada.
          </p>

          <p className="text-lg md:text-xl leading-relaxed text-pretty">
            Aqui reunimos histórias reais de artistas, escritores, cientistas e visionários cujo talento foi reconhecido
            apenas postumamente. Suas estrelas brilham agora, iluminando o caminho para que outros não sejam esquecidos
            em vida.
          </p>

          <blockquote className="border-l-4 border-accent pl-8 py-4 italic text-muted-foreground my-12 text-lg md:text-xl font-serif">
            "Ela nasceu com maus antecedentes e agora parecia uma filha de um não-sei-o-quê com ar de se desculpar por
            ocupar espaço."
          </blockquote>
        </div>
      </div>
    </section>
  )
}
