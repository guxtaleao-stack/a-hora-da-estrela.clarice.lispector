import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { PersonCard } from "@/components/person-card"
import { Footer } from "@/components/footer"

const posthumousFamePersons = [
  {
    name: "Vincent van Gogh",
    birth: "1853",
    death: "1890",
    occupation: "Pintor",
    description:
      "Vendeu apenas uma pintura em vida, vivendo na pobreza e sofrendo de doenças mentais. Hoje é um dos artistas mais celebrados e valiosos da história.",
    posthumousAchievement:
      'Suas obras alcançam valores recordes em leilões, com "Retrato do Dr. Gachet" vendido por US$ 82,5 milhões. Museus dedicados à sua obra existem em todo o mundo.',
    imageQuery: "Vincent van Gogh portrait painting impressionist artist",
  },
  {
    name: "Emily Dickinson",
    birth: "1830",
    death: "1886",
    occupation: "Poetisa",
    description:
      "Viveu reclusa, escrevendo quase 1.800 poemas que permaneceram desconhecidos. Apenas 10 foram publicados em vida, todos anonimamente.",
    posthumousAchievement:
      "Reconhecida como uma das maiores poetisas americanas, suas obras são estudadas mundialmente e influenciaram gerações de escritores.",
    imageQuery: "Emily Dickinson portrait 19th century poet writer",
  },
  {
    name: "Franz Kafka",
    birth: "1883",
    death: "1924",
    occupation: "Escritor",
    description:
      "Publicou pouco em vida e pediu ao amigo Max Brod que queimasse todos os seus manuscritos após sua morte. Brod desobedeceu.",
    posthumousAchievement:
      'Tornou-se um dos escritores mais influentes do século XX. O termo "kafkiano" entrou no vocabulário mundial para descrever situações absurdas e opressivas.',
    imageQuery: "Franz Kafka portrait writer author literary",
  },
  {
    name: "Vivian Maier",
    birth: "1926",
    death: "2009",
    occupation: "Fotógrafa",
    description:
      "Trabalhou como babá a vida toda, fotografando secretamente as ruas de Chicago e Nova York. Suas fotos foram descobertas em um leilão de pertences.",
    posthumousAchievement:
      "Considerada uma das maiores fotógrafas de rua do século XX, com exposições em museus importantes e documentários sobre sua vida.",
    imageQuery: "Vivian Maier street photography vintage camera photographer",
  },
  {
    name: "Gregor Mendel",
    birth: "1822",
    death: "1884",
    occupation: "Monge e Cientista",
    description:
      "Suas descobertas sobre hereditariedade foram ignoradas pela comunidade científica durante sua vida, sendo redescobertos apenas 16 anos após sua morte.",
    posthumousAchievement:
      "Reconhecido como o pai da genética moderna. Suas leis da hereditariedade são fundamentais para a biologia e medicina contemporâneas.",
    imageQuery: "Gregor Mendel monk scientist genetics peas experiment",
  },
  {
    name: "Stieg Larsson",
    birth: "1954",
    death: "2004",
    occupation: "Jornalista e Escritor",
    description:
      "Morreu de ataque cardíaco antes de ver seus livros publicados. Escreveu a trilogia Millennium trabalhando à noite, após seu emprego como jornalista.",
    posthumousAchievement:
      "Seus livros venderam mais de 100 milhões de cópias mundialmente, tornando-se um dos autores mais vendidos da história. Adaptados para cinema e TV.",
    imageQuery: "Stieg Larsson author writer journalist Swedish",
  },
]

export default function Page() {
  return (
    <main className="min-h-screen">
      <HeroSection />

      <AboutSection />

      <section className="py-32 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6 tracking-tight">
              Estrelas que Brilham na Eternidade
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-pretty font-light">
              Vidas que encontraram reconhecimento apenas após o último suspiro
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {posthumousFamePersons.map((person) => (
              <PersonCard key={person.name} {...person} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
