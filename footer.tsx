export function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-border/40 bg-card/50">
      <div className="max-w-6xl mx-auto text-center space-y-6">
        <p className="text-base text-muted-foreground font-light">
          Um projeto literário inspirado em Clarice Lispector
        </p>
        <p className="text-sm text-muted-foreground/80 italic max-w-2xl mx-auto leading-relaxed font-serif">
          "Quanto ao futuro, não o temo. Não tenho medo de morrer. Tenho medo de não ter vivido o suficiente."
        </p>
        <div className="pt-6">
          <p className="text-xs text-muted-foreground/60">© 2025 A Hora da Estrela • Todos os direitos reservados</p>
        </div>
      </div>
    </footer>
  )
}
