import { createFileRoute } from "@tanstack/react-router";
import { Heart } from "lucide-react";
import { useEffect, useState } from "react";
import hero from "@/assets/hero.jpg";
import photo1 from "@/assets/1.jpeg";
import photo2 from "@/assets/2.jpeg";
import photo3 from "@/assets/3.jpeg";
import photo4 from "@/assets/4.jpeg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Para o Meu Amor — Feliz Dia dos Namorados" },
      { name: "description", content: "Uma homenagem especial para a mulher da minha vida neste Dia dos Namorados." },
      { property: "og:title", content: "Para o Meu Amor" },
      { property: "og:description", content: "Uma homenagem especial neste Dia dos Namorados." },
    ],
  }),
  component: Index,
});

const photos = [
  { src: photo1, caption: "O amor que começou com nós dois transbordou e formou a nossa família. Meu maior presente é ver vocês sorrindo" },
  { src: photo2, caption: "Sol, mar e você. Minha paz. ☀️🌊" },
  { src: photo3, caption: "Só você e eu. Feliz nosso dia!" },
  { src: photo4, caption: "Meu lugar favorito no mundo. 🥰" },
];

const timeline = [
  { date: "O primeiro olhar", text: "No instante em que te vi, soube que minha vida tinha mudado para sempre." },
  { date: "O primeiro 'eu te amo'", text: "As palavras tremeram, mas o sentimento era inteiro — e segue crescendo todo dia." },
  { date: "O nosso 'sim'", text: "Escolher você foi — e sempre será — a melhor decisão da minha vida." },
  { date: "Hoje", text: "Mais um Dia dos Namorados ao seu lado. E ainda assim, tudo parece o primeiro." },
];

function FloatingHearts() {
  const [hearts, setHearts] = useState<{ id: number; left: number; delay: number; size: number; duration: number }[]>([]);
  useEffect(() => {
    setHearts(
      Array.from({ length: 18 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 12,
        size: 12 + Math.random() * 20,
        duration: 10 + Math.random() * 10,
      }))
    );
  }, []);
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {hearts.map((h) => (
        <Heart
          key={h.id}
          className="animate-float-heart absolute text-primary/40 fill-primary/30"
          style={{
            left: `${h.left}%`,
            width: h.size,
            height: h.size,
            animationDelay: `${h.delay}s`,
            animationDuration: `${h.duration}s`,
          }}
        />
      ))}
    </div>
  );
}

function Index() {
  return (
    <main className="relative min-h-screen overflow-x-hidden" style={{ background: "var(--gradient-soft)" }}>
      <FloatingHearts />

      {/* HERO */}
      <section className="relative z-10 flex min-h-screen items-center justify-center px-6 text-center">
        <div
          className="absolute inset-0 -z-10 opacity-40"
          style={{
            backgroundImage: `url(${hero})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/60 via-background/30 to-background" />

        <div className="animate-fade-up max-w-3xl">
          <div className="mb-6 flex justify-center">
            <Heart className="animate-pulse-heart h-12 w-12 fill-primary text-primary" />
          </div>
          <p className="mb-4 font-[var(--font-script)] text-2xl text-primary" style={{ fontFamily: "var(--font-script)" }}>
            Feliz Dia dos Namorados
          </p>
          <h1 className="mb-6 text-6xl font-light leading-tight text-foreground md:text-8xl">
            Para o meu <em className="italic text-primary">amor</em>
          </h1>
          <p className="mx-auto max-w-xl text-lg text-muted-foreground md:text-xl">
            Existem dias que pedem palavras especiais. Hoje é um deles. Este pequeno cantinho é seu — feito de lembranças, gratidão e um amor que não cabe em um só dia.
          </p>
          <div className="mt-10 flex justify-center">
            <a
              href="#galeria"
              className="inline-flex items-center gap-2 rounded-full px-8 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-105"
              style={{ background: "var(--gradient-romance)", boxShadow: "var(--shadow-romance)" }}
            >
              <Heart className="h-4 w-4 fill-current" />
              Veja nossas memórias
            </a>
          </div>
        </div>
      </section>

      {/* MENSAGEM */}
      <section className="relative z-10 mx-auto max-w-3xl px-6 py-24 text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-primary">Uma carta para você</p>
        <h2 className="mb-8 text-4xl font-light italic text-foreground md:text-5xl">
          Meu amor,
        </h2>
        <div className="space-y-6 text-lg leading-relaxed text-foreground/80 md:text-xl">
          <p>
            Se eu pudesse guardar o tempo num frasco, escolheria os nossos momentos para enchê-lo. Os risos bobos, os silêncios confortáveis, os abraços que arrumam o mundo.
          </p>
          <p>
            Você é minha melhor escolha — todo dia, em todo recomeço. Obrigado por caminhar comigo, por me amar do jeito que ama, por ser meu lar.
          </p>
          <p className="text-2xl text-primary" style={{ fontFamily: "var(--font-script)" }}>
            Eu te amo, hoje e sempre.
          </p>
        </div>
      </section>

      {/* GALERIA */}
      <section id="galeria" className="relative z-10 mx-auto max-w-6xl px-6 py-13">
        <div className="mb-10 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-primary">Nossa galeria</p>
          <h2 className="text-4xl font-light text-foreground md:text-5xl">Momentos que guardo no peito</h2>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {photos.map((p, i) => (
            <figure
              key={i}
              className={`group relative overflow-hidden rounded-2xl bg-card transition-all duration-500 hover:-translate-y-2 ${
                i === 0 ? "lg:col-span-2 lg:row-span-2" : ""
              }`}
              style={{ boxShadow: "var(--shadow-soft)" }}
            >
              <img
                src={p.src}
                alt={p.caption}
                loading="lazy"
                className="aspect-[4/5] h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 text-shadow-lg p-6 text-white">
                <p className="text-lg italic" style={{ fontFamily: "var(--font-serif)" }}>
                  {p.caption}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-muted-foreground">
          (Em breve, mais fotos nossas aqui — as melhores ainda estão por vir.)
        </p>
      </section>

      {/* TIMELINE */}
      <section className="relative z-10 mx-auto max-w-3xl px-6 py-24">
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-primary">Nossa história</p>
          <h2 className="text-4xl font-light text-foreground md:text-5xl">Capítulos que escrevemos juntos</h2>
        </div>
        <div className="relative space-y-12 border-l-2 border-primary/30 pl-8">
          {timeline.map((item, i) => (
            <div key={i} className="relative">
              <div className="absolute -left-[2.4rem] top-2 flex h-6 w-6 items-center justify-center rounded-full bg-background">
                <Heart className="h-4 w-4 fill-primary text-primary" />
              </div>
              <h3 className="mb-2 text-2xl italic text-primary">{item.date}</h3>
              <p className="text-lg leading-relaxed text-foreground/80">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 px-6 py-16 text-center">
        <Heart className="animate-pulse-heart mx-auto mb-4 h-8 w-8 fill-primary text-primary" />
        <p className="text-2xl text-primary" style={{ fontFamily: "var(--font-script)" }}>
          Para sempre seu.
        </p>
        <p className="mt-4 text-sm text-muted-foreground">
          12 de Junho de 2026 · Dia dos Namorados
        </p>
      </footer>
    </main>
  );
}
