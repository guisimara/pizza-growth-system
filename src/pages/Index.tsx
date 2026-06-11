import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  Pizza, Flame, Megaphone, Smartphone, BarChart3, MessageCircle,
  ClipboardList, Sparkles, Play, ArrowRight, Check, Instagram, Linkedin,
  ChevronDown, Star, Zap, Target, TrendingUp,
} from "lucide-react";
import { toast } from "sonner";

/* ------------- Small visual primitives ------------- */

const FloatingSlice = ({ className = "", delay = 0 }: { className?: string; delay?: number }) => (
  <div className={`pointer-events-none absolute ${className}`} style={{ animationDelay: `${delay}s` }}>
    <svg viewBox="0 0 120 120" className="w-full h-full drop-shadow-[0_20px_40px_rgba(255,90,0,0.45)] animate-float">
      <defs>
        <linearGradient id="sliceG" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="hsl(44 96% 62%)" />
          <stop offset="60%" stopColor="hsl(18 92% 56%)" />
          <stop offset="100%" stopColor="hsl(6 80% 48%)" />
        </linearGradient>
      </defs>
      <path d="M60 8 L112 108 Q60 124 8 108 Z" fill="url(#sliceG)" stroke="hsl(28 45% 22%)" strokeWidth="3" strokeLinejoin="round" />
      <path d="M14 104 Q60 118 106 104" fill="none" stroke="hsl(36 55% 88%)" strokeWidth="6" strokeLinecap="round" opacity="0.85"/>
      <circle cx="55" cy="55" r="7" fill="hsl(6 80% 52%)" />
      <circle cx="78" cy="78" r="6" fill="hsl(6 80% 52%)" />
      <circle cx="40" cy="82" r="5" fill="hsl(6 80% 52%)" />
      <circle cx="70" cy="40" r="4" fill="hsl(130 60% 35%)" />
      <circle cx="50" cy="92" r="3" fill="hsl(130 60% 35%)" />
    </svg>
  </div>
);

const Embers = () => (
  <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
    {Array.from({ length: 14 }).map((_, i) => (
      <span
        key={i}
        className="absolute bottom-0 rounded-full"
        style={{
          left: `${(i * 7.3) % 100}%`,
          width: `${4 + (i % 4)}px`,
          height: `${4 + (i % 4)}px`,
          background: i % 2 ? "hsl(14 100% 56%)" : "hsl(44 96% 58%)",
          filter: "blur(1px)",
          animation: `ember ${8 + (i % 5)}s linear ${i * 0.7}s infinite`,
          boxShadow: "0 0 12px hsl(14 100% 56% / 0.8)",
        }}
      />
    ))}
  </div>
);

const Reveal = ({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.7, delay, ease: [0.2, 0.8, 0.2, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <span className="chip"><Sparkles className="w-3.5 h-3.5" />{children}</span>
);

/* ------------- NAV ------------- */
const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onS = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onS);
    return () => window.removeEventListener("scroll", onS);
  }, []);
  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-5"}`}>
      <div className={`container flex items-center justify-between rounded-full px-5 py-3 transition-all ${scrolled ? "glass shadow-card" : ""}`}>
        <a href="#top" className="flex items-center gap-2 font-display font-bold text-lg">
          <span className="relative inline-flex items-center justify-center w-9 h-9 rounded-full bg-gradient-warm shadow-ember">
            <Pizza className="w-5 h-5 text-primary-foreground" />
          </span>
          <span>Pizza <span className="text-gradient-warm">Growth</span></span>
        </a>
        <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
          <a href="#metodo" className="hover:text-foreground transition">Método</a>
          <a href="#servicos" className="hover:text-foreground transition">Serviços</a>
          <a href="#provas" className="hover:text-foreground transition">Resultados</a>
          <a href="#faq" className="hover:text-foreground transition">FAQ</a>
        </nav>
        <a href="#form" className="btn-ember !py-2.5 !px-5 text-sm">Diagnóstico grátis<ArrowRight className="w-4 h-4" /></a>
      </div>
    </header>
  );
};

/* ------------- HERO ------------- */
const Hero = () => (
  <section id="top" className="relative pt-36 pb-24 md:pt-44 md:pb-32 overflow-hidden">
    <Embers />
    <div className="absolute -top-32 -right-24 w-[520px] h-[520px] rounded-full bg-gradient-warm opacity-20 blur-3xl" />
    <div className="absolute top-40 -left-32 w-[420px] h-[420px] rounded-full bg-tomato opacity-15 blur-3xl" />

    <div className="container relative grid lg:grid-cols-[1.05fr_1fr] gap-14 items-center">
      <div>
        <Reveal>
          <SectionLabel>Assessoria boutique • só pizzarias</SectionLabel>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.02]">
            Sua pizzaria precisa de uma <span className="text-gradient-warm">assessoria de marketing</span> que venda todos os dias
          </h1>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
            Estruturamos o marketing da sua pizzaria para atrair novos clientes, aumentar pedidos e transformar sua marca em uma escolha óbvia na sua região.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-9 flex flex-wrap gap-4">
            <a href="#form" className="btn-ember">Quero lotar meus pedidos <Flame className="w-5 h-5" /></a>
            <a href="#metodo" className="btn-ghost-warm">Ver o método</a>
          </div>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
            <span className="flex items-center gap-2"><Check className="w-4 h-4 text-cheese" /> +2.000 restaurantes impactados</span>
            <span className="flex items-center gap-2"><Check className="w-4 h-4 text-cheese" /> Delivery, salão e retirada</span>
            <span className="flex items-center gap-2"><Check className="w-4 h-4 text-cheese" /> 100% focado em pizzarias</span>
          </div>
        </Reveal>
      </div>

      {/* Hero visual */}
      <Reveal delay={0.2}>
        <div className="relative aspect-square max-w-[560px] mx-auto">
          {/* glow */}
          <div className="absolute inset-6 rounded-full bg-gradient-warm opacity-30 blur-3xl animate-glow" />
          {/* pizza disc */}
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_45%,hsl(44_96%_60%)_0%,hsl(18_92%_50%)_55%,hsl(28_45%_22%)_100%)] shadow-ember animate-spin-slow flex items-center justify-center">
            <div className="absolute inset-3 rounded-full border-4 border-crust/70" />
            {/* toppings */}
            {[...Array(9)].map((_, i) => {
              const angle = (i / 9) * Math.PI * 2;
              const r = 38;
              const x = 50 + Math.cos(angle) * r;
              const y = 50 + Math.sin(angle) * r;
              return (
                <span key={i} className="absolute w-5 h-5 rounded-full" style={{ left: `${x}%`, top: `${y}%`, transform: "translate(-50%,-50%)", background: i % 2 ? "hsl(6 80% 52%)" : "hsl(130 60% 38%)", boxShadow: "inset 0 -2px 4px rgba(0,0,0,.25)" }} />
              );
            })}
          </div>
          {/* rocket slice */}
          <div className="absolute -top-6 -right-6 w-44 h-44 animate-float">
            <FloatingSlice />
          </div>

          {/* metric cards */}
          <motion.div drag dragConstraints={{ top: -10, bottom: 10, left: -10, right: 10 }}
            className="absolute -left-6 top-10 glass rounded-3xl px-4 py-3 shadow-card animate-float-slow">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-2xl bg-tomato/20 flex items-center justify-center"><TrendingUp className="w-5 h-5 text-tomato" /></div>
              <div>
                <p className="text-xs text-muted-foreground">+ pedidos</p>
                <p className="font-display text-lg leading-none">+187%</p>
              </div>
            </div>
          </motion.div>

          <div className="absolute -right-4 bottom-16 glass rounded-3xl px-4 py-3 shadow-card animate-float">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-2xl bg-cheese/20 flex items-center justify-center"><Zap className="w-5 h-5 text-cheese" /></div>
              <div>
                <p className="text-xs text-muted-foreground">ticket médio</p>
                <p className="font-display text-lg leading-none">+R$ 22</p>
              </div>
            </div>
          </div>

          <div className="absolute left-10 -bottom-4 glass rounded-3xl px-4 py-3 shadow-card animate-float-slow">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-2xl bg-primary/20 flex items-center justify-center"><Target className="w-5 h-5 text-primary-glow" /></div>
              <div>
                <p className="text-xs text-muted-foreground">recorrência</p>
                <p className="font-display text-lg leading-none">3,4x</p>
              </div>
            </div>
          </div>

          {/* sparkline */}
          <svg viewBox="0 0 200 80" className="absolute -bottom-8 right-0 w-56 opacity-90">
            <defs>
              <linearGradient id="spark" x1="0" x2="1">
                <stop offset="0%" stopColor="hsl(14 100% 56%)" />
                <stop offset="100%" stopColor="hsl(44 96% 58%)" />
              </linearGradient>
            </defs>
            <path d="M5 70 Q40 60 60 50 T120 30 T195 8" fill="none" stroke="url(#spark)" strokeWidth="4" strokeLinecap="round" />
            <circle cx="195" cy="8" r="6" fill="hsl(44 96% 58%)" />
          </svg>
        </div>
      </Reveal>
    </div>
  </section>
);

/* ------------- MARQUEE ------------- */
const Marquee = () => {
  const items = ["PIZZARIAS", "DELIVERY", "TRÁFEGO PAGO", "CRIATIVOS QUE DÃO FOME", "WHATSAPP", "CARDÁPIO DIGITAL", "RELATÓRIOS", "CRESCIMENTO LOCAL"];
  const row = [...items, ...items];
  return (
    <div className="relative py-7 border-y border-border/60 bg-card/40 mask-fade-r overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap gap-12 font-display text-2xl md:text-4xl">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-12 text-foreground/85">
            {t}
            <span className="inline-block w-3 h-3 rounded-full bg-gradient-warm" />
          </span>
        ))}
      </div>
    </div>
  );
};

/* ------------- FORM ------------- */
const LeadForm = () => {
  const [loading, setLoading] = useState(false);
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Diagnóstico solicitado! Em breve entraremos em contato.", {
        description: "Nosso time vai analisar sua pizzaria e retornar pelo WhatsApp.",
      });
    }, 700);
  };
  const steps = [
    { n: "01", t: "Diagnóstico rápido", d: "Entendemos o momento da sua pizzaria, seus canais, gargalos e oportunidades." },
    { n: "02", t: "Ligação estratégica", d: "Um especialista mostra quais ações podem gerar mais pedidos nos próximos 30 dias." },
    { n: "03", t: "Plano de crescimento", d: "Você recebe um caminho claro para atrair, converter e reter clientes." },
  ];
  return (
    <section id="form" className="relative py-24 md:py-32">
      <div className="container">
        <div className="max-w-3xl">
          <Reveal><SectionLabel>Próximo passo</SectionLabel></Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl">
              Não saia agora: faltam poucos passos para sua <span className="text-gradient-warm">pizzaria mudar</span>.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-muted-foreground text-lg max-w-2xl">
              Complete o formulário e descubra como transformar seu marketing em uma máquina previsível de pedidos.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid lg:grid-cols-[1fr_1.05fr] gap-10 items-start">
          <div className="space-y-5">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.08}>
                <div className="glass rounded-3xl p-6 flex gap-5 tilt-card">
                  <div className="shrink-0 w-14 h-14 rounded-2xl bg-gradient-warm font-display text-xl flex items-center justify-center text-primary-foreground shadow-ember">{s.n}</div>
                  <div>
                    <h3 className="font-display text-xl">{s.t}</h3>
                    <p className="mt-1 text-muted-foreground">{s.d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.15}>
            <form onSubmit={submit} className="relative rounded-4xl glow-border p-7 md:p-9 bg-card/70 backdrop-blur-xl shadow-soft">
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Nome"><input required name="nome" className="field" placeholder="Seu nome" /></Field>
                <Field label="WhatsApp"><input required name="wpp" className="field" placeholder="(00) 00000-0000" /></Field>
                <Field label="Nome da pizzaria"><input required name="pizzaria" className="field" placeholder="Ex: Bella Massa" /></Field>
                <Field label="Cidade"><input required name="cidade" className="field" placeholder="Sua cidade" /></Field>
                <Field label="Tipo de operação">
                  <select required name="op" className="field">
                    <option value="">Selecione...</option>
                    <option>Delivery</option><option>Salão</option><option>Ambos</option>
                  </select>
                </Field>
                <Field label="Pedidos por semana">
                  <select required name="vol" className="field">
                    <option value="">Selecione...</option>
                    <option>Até 100</option><option>100 - 300</option><option>300+</option>
                  </select>
                </Field>
              </div>
              <button disabled={loading} className="btn-ember w-full mt-6 justify-center disabled:opacity-70">
                {loading ? "Enviando..." : <>Receber meu diagnóstico <ArrowRight className="w-5 h-5" /></>}
              </button>
              <p className="mt-4 text-xs text-muted-foreground text-center">Resposta em até 24h • Sem compromisso</p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

const Field = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <label className="block">
    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</span>
    <div className="mt-1.5">{children}</div>
  </label>
);

/* ------------- TESTIMONIALS ------------- */
const Testimonials = () => {
  const items = [
    { name: "Pizzaria Bella Massa", result: "Campanhas locais com aumento de pedidos no delivery", hue: "18 92% 56%" },
    { name: "Forno da Vila", result: "Criativos novos e cardápio otimizado", hue: "6 80% 52%" },
    { name: "Napoli Express", result: "Mais recorrência no WhatsApp", hue: "44 96% 58%" },
  ];
  return (
    <section id="provas" className="py-24 md:py-32 relative">
      <div className="container">
        <Reveal><SectionLabel>Prova social</SectionLabel></Reveal>
        <div className="mt-5 max-w-3xl">
          <Reveal delay={0.05}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl">
              Pizzarias e restaurantes <span className="text-gradient-warm">crescendo</span> com estratégias que dão fome.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-muted-foreground text-lg">
              Resultados reais começam quando sua comunicação faz o cliente sentir vontade de pedir agora.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <div className="group tilt-card relative rounded-4xl overflow-hidden border border-border/60 bg-card/60">
                <div className="aspect-[4/5] relative overflow-hidden" style={{ background: `radial-gradient(80% 60% at 50% 30%, hsl(${t.hue} / 0.55), transparent 70%), linear-gradient(160deg, hsl(22 16% 12%), hsl(22 16% 7%))` }}>
                  <div className="absolute inset-0 flour-texture" />
                  {/* fake video frame */}
                  <div className="absolute inset-6 rounded-3xl border border-foreground/10 overflow-hidden">
                    <div className="absolute inset-0" style={{ background: `conic-gradient(from 200deg, hsl(${t.hue}/0.6), transparent 70%)`, filter: "blur(30px)" }} />
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        {[...Array(5)].map((_, k) => <Star key={k} className="w-3.5 h-3.5 fill-cheese text-cheese" />)}
                      </div>
                      <span className="text-xs px-2 py-1 rounded-full bg-foreground/10 backdrop-blur">2:14</span>
                    </div>
                  </div>
                  <button aria-label="Play" className="absolute inset-0 flex items-center justify-center">
                    <span className="relative w-20 h-20 rounded-full bg-gradient-warm shadow-ember flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="w-8 h-8 text-primary-foreground ml-1 fill-current" />
                      <span className="absolute inset-0 rounded-full animate-ping bg-primary/30" />
                    </span>
                  </button>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl">{t.name}</h3>
                  <p className="text-muted-foreground mt-1">{t.result}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ------------- ABOUT ------------- */
const About = () => (
  <section className="py-24 md:py-32 relative">
    <div className="container grid lg:grid-cols-2 gap-14 items-center">
      <Reveal>
        <SectionLabel>Quem somos</SectionLabel>
        <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl">
          Marketing para pizzarias <span className="text-gradient-warm">não pode parecer</span> marketing para qualquer negócio.
        </h2>
        <p className="mt-5 text-muted-foreground text-lg leading-relaxed max-w-xl">
          A <strong className="text-foreground">Pizza Growth Studio</strong> nasceu para unir estratégia, criativos apetitosos e performance local. Ajudamos pizzarias a vender mais usando campanhas, conteúdo, WhatsApp, cardápio digital e relatórios claros.
        </p>
        <div className="mt-8 flex gap-3 flex-wrap">
          {["Estratégia", "Criativos", "Performance", "Atendimento"].map(t => (
            <span key={t} className="px-4 py-2 rounded-full text-sm border border-border/70 bg-card/60">{t}</span>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.15}>
        <div className="relative h-[520px]">
          {[
            { l: "Equipe", rot: -8, x: "5%", y: "5%", hue: "18 92% 50%" },
            { l: "Forno", rot: 6, x: "40%", y: "0%", hue: "6 80% 50%" },
            { l: "Bastidores", rot: -3, x: "12%", y: "45%", hue: "44 96% 58%" },
            { l: "Pedidos subindo", rot: 9, x: "48%", y: "42%", hue: "14 100% 56%" },
          ].map((p, i) => (
            <motion.div key={p.l}
              initial={{ opacity: 0, y: 30, rotate: 0 }}
              whileInView={{ opacity: 1, y: 0, rotate: p.rot }}
              transition={{ delay: i * 0.1, duration: 0.7 }}
              viewport={{ once: true }}
              whileHover={{ rotate: 0, scale: 1.04, zIndex: 10 }}
              className="absolute w-56 p-3 bg-dough rounded-2xl shadow-soft cursor-grab"
              style={{ left: p.x, top: p.y }}
            >
              <div className="aspect-[4/5] rounded-xl relative overflow-hidden" style={{ background: `linear-gradient(160deg, hsl(${p.hue} / 0.85), hsl(22 16% 14%))` }}>
                <div className="absolute inset-0 flour-texture" />
                <div className="absolute bottom-3 left-3 right-3 text-dough-foreground bg-dough/90 rounded-lg px-2 py-1 text-xs font-semibold">{p.l}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </Reveal>
    </div>
  </section>
);

/* ------------- METHOD (Pizza wheel) ------------- */
const Method = () => {
  const slices = [
    { t: "Diagnóstico", d: "Mapeamos canais, gargalos e oportunidades reais.", icon: ClipboardList },
    { t: "Posicionamento local", d: "Sua pizzaria como referência no bairro.", icon: Target },
    { t: "Criativos de alta fome", d: "Peças e vídeos que despertam vontade de pedir.", icon: Flame },
    { t: "Tráfego pago", d: "Aparecer para quem está perto e pronto para comprar.", icon: Megaphone },
    { t: "Conversão", d: "WhatsApp e cardápio digital que fecham pedidos.", icon: MessageCircle },
    { t: "Relatórios", d: "Indicadores claros e otimização contínua.", icon: BarChart3 },
  ];
  const [active, setActive] = useState(0);
  const A = slices[active];
  return (
    <section id="metodo" className="py-24 md:py-32 relative">
      <div className="container">
        <Reveal><SectionLabel>Pizza Growth System</SectionLabel></Reveal>
        <div className="mt-5 max-w-3xl">
          <Reveal delay={0.05}><h2 className="text-3xl sm:text-4xl md:text-5xl">Existe um método comprovado para sua pizzaria <span className="text-gradient-warm">nunca parar de vender</span>.</h2></Reveal>
          <Reveal delay={0.1}><p className="mt-5 text-muted-foreground text-lg">Do primeiro impacto ao novo pedido: cada etapa é pensada para gerar fome, confiança e ação.</p></Reveal>
        </div>

        <div className="mt-16 grid lg:grid-cols-[1fr_1.1fr] gap-16 items-center">
          {/* Wheel */}
          <Reveal>
            <div className="relative aspect-square max-w-[520px] mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-warm opacity-20 blur-3xl" />
              <svg viewBox="0 0 200 200" className="relative w-full h-full">
                <defs>
                  {slices.map((_, i) => (
                    <linearGradient key={i} id={`sl${i}`} x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor={i % 2 ? "hsl(18 92% 56%)" : "hsl(6 80% 52%)"} />
                      <stop offset="100%" stopColor={i % 2 ? "hsl(44 96% 58%)" : "hsl(14 100% 56%)"} />
                    </linearGradient>
                  ))}
                </defs>
                <circle cx="100" cy="100" r="96" fill="hsl(28 45% 22%)" />
                {slices.map((s, i) => {
                  const a0 = (i / 6) * Math.PI * 2 - Math.PI / 2;
                  const a1 = ((i + 1) / 6) * Math.PI * 2 - Math.PI / 2;
                  const r = 92;
                  const x0 = 100 + Math.cos(a0) * r, y0 = 100 + Math.sin(a0) * r;
                  const x1 = 100 + Math.cos(a1) * r, y1 = 100 + Math.sin(a1) * r;
                  const isActive = i === active;
                  return (
                    <g key={i} className="cursor-pointer" onMouseEnter={() => setActive(i)} onClick={() => setActive(i)}>
                      <path d={`M100 100 L ${x0} ${y0} A ${r} ${r} 0 0 1 ${x1} ${y1} Z`}
                        fill={`url(#sl${i})`}
                        stroke="hsl(22 14% 8%)" strokeWidth="2"
                        opacity={isActive ? 1 : 0.55}
                        style={{ transition: "all .4s", transformOrigin: "100px 100px", transform: isActive ? "scale(1.04)" : "scale(1)" }}
                      />
                    </g>
                  );
                })}
                {/* toppings */}
                {[...Array(14)].map((_, i) => {
                  const a = (i / 14) * Math.PI * 2;
                  const rr = 30 + (i % 3) * 18;
                  return <circle key={i} cx={100 + Math.cos(a) * rr} cy={100 + Math.sin(a) * rr} r={i % 2 ? 3 : 2.2} fill={i % 2 ? "hsl(6 80% 35%)" : "hsl(130 60% 30%)"} />;
                })}
                <circle cx="100" cy="100" r="22" fill="hsl(22 16% 9%)" stroke="hsl(18 92% 56%)" strokeWidth="1.5" />
              </svg>
              {/* center label */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="text-center">
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground">etapa</p>
                  <p className="font-display text-2xl text-gradient-warm">0{active + 1}</p>
                </div>
              </div>
              {/* slice labels */}
              {slices.map((s, i) => {
                const a = ((i + 0.5) / 6) * Math.PI * 2 - Math.PI / 2;
                const x = 50 + Math.cos(a) * 56;
                const y = 50 + Math.sin(a) * 56;
                return (
                  <span key={s.t} className={`absolute -translate-x-1/2 -translate-y-1/2 text-[11px] md:text-xs font-semibold uppercase tracking-wide whitespace-nowrap transition ${i === active ? "text-foreground" : "text-foreground/70"}`}
                    style={{ left: `${x}%`, top: `${y}%` }}>{s.t}</span>
                );
              })}
            </div>
          </Reveal>

          {/* Active slice card */}
          <Reveal delay={0.1}>
            <div key={A.t} className="glass rounded-4xl p-8 md:p-10 animate-fade-in-up">
              <div className="w-14 h-14 rounded-2xl bg-gradient-warm flex items-center justify-center shadow-ember">
                <A.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <p className="mt-6 text-sm uppercase tracking-widest text-muted-foreground">Fatia 0{active + 1}</p>
              <h3 className="mt-2 font-display text-3xl md:text-4xl">{A.t}</h3>
              <p className="mt-4 text-muted-foreground text-lg leading-relaxed">{A.d}</p>
              <div className="mt-7 flex flex-wrap gap-2">
                {slices.map((s, i) => (
                  <button key={s.t} onClick={() => setActive(i)} className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition ${i === active ? "bg-primary text-primary-foreground border-primary" : "border-border/70 text-muted-foreground hover:text-foreground"}`}>
                    0{i + 1} {s.t}
                  </button>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

/* ------------- SERVICES ------------- */
const Services = () => {
  const items = [
    { t: "Criativos e vídeos", d: "Fotos, vídeos e peças que despertam vontade de pedir.", icon: Flame },
    { t: "Mídia paga", d: "Campanhas para aparecer para quem está perto e pronto para comprar.", icon: Megaphone },
    { t: "Soluções comerciais", d: "Ofertas, combos, cupons e estratégias para aumentar ticket médio.", icon: Sparkles },
    { t: "Relatórios e acompanhamento", d: "Indicadores simples para você entender o que está vendendo.", icon: BarChart3 },
    { t: "Cardápio digital", d: "Organização da experiência de pedido com foco em conversão.", icon: Smartphone },
    { t: "WhatsApp inteligente", d: "Fluxos, mensagens e abordagens para recuperar clientes.", icon: MessageCircle },
    { t: "Gestão de atendimento", d: "Ajustes no processo para reduzir perda de pedidos.", icon: ClipboardList },
  ];
  return (
    <section id="servicos" className="py-24 md:py-32 relative">
      <div className="container">
        <Reveal><SectionLabel>O que fazemos</SectionLabel></Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-5 max-w-3xl text-3xl sm:text-4xl md:text-5xl">
            A assessoria estrutura o marketing da sua pizzaria com base no que ela <span className="text-gradient-warm">precisa agora</span>.
          </h2>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((s, i) => (
            <Reveal key={s.t} delay={(i % 3) * 0.05}>
              <div className="group relative h-full tilt-card rounded-4xl p-7 bg-card/60 border border-border/60 overflow-hidden">
                <div className="absolute -top-16 -right-16 w-44 h-44 rounded-full bg-gradient-warm opacity-0 group-hover:opacity-25 blur-2xl transition-opacity duration-500" />
                <div className="relative w-14 h-14 rounded-2xl bg-gradient-warm flex items-center justify-center shadow-ember">
                  <s.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="mt-6 font-display text-2xl">{s.t}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{s.d}</p>
                <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-primary-glow opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all">
                  Saber mais <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ------------- PLANS ------------- */
const Plans = () => (
  <section className="py-24 md:py-32 relative">
    <div className="container grid lg:grid-cols-2 gap-14 items-center">
      <Reveal>
        <SectionLabel>Planos personalizados</SectionLabel>
        <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl">
          Você escolhe a solução certa para a <span className="text-gradient-warm">fase</span> que sua pizzaria vive hoje.
        </h2>
        <p className="mt-5 text-muted-foreground text-lg max-w-xl">
          Criamos planos flexíveis para pizzarias que querem sair do improviso e transformar marketing em uma rotina de vendas.
        </p>
        <a href="#form" className="btn-ember mt-8">Quero entender meu plano <ArrowRight className="w-5 h-5" /></a>
      </Reveal>

      <Reveal delay={0.15}>
        <div className="relative aspect-[5/4]">
          {/* melted cheese growth chart */}
          <svg viewBox="0 0 500 400" className="w-full h-full">
            <defs>
              <linearGradient id="cheeseG" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(44 96% 60%)" />
                <stop offset="100%" stopColor="hsl(28 100% 50%)" />
              </linearGradient>
              <filter id="blur1"><feGaussianBlur stdDeviation="6"/></filter>
            </defs>
            <path d="M0 280 Q 80 240 130 260 T 250 200 T 380 130 T 500 60 L 500 400 L 0 400 Z" fill="url(#cheeseG)" opacity="0.35" />
            <path d="M0 280 Q 80 240 130 260 T 250 200 T 380 130 T 500 60"
              fill="none" stroke="url(#cheeseG)" strokeWidth="6" strokeLinecap="round" />
            {/* drips */}
            {[{x:130,h:30},{x:250,h:50},{x:380,h:40},{x:460,h:60}].map((d,i)=>(
              <g key={i}>
                <path d={`M${d.x} ${i===0?260:i===1?200:i===2?130:80} q -6 ${d.h*0.5} 0 ${d.h}`} stroke="url(#cheeseG)" strokeWidth="5" fill="none" strokeLinecap="round" />
                <circle cx={d.x} cy={(i===0?260:i===1?200:i===2?130:80)+d.h+4} r="6" fill="url(#cheeseG)" />
              </g>
            ))}
            {/* growth points */}
            {[{x:130,y:260,v:"Início"},{x:250,y:200,v:"+pedidos"},{x:380,y:130,v:"+ticket"},{x:460,y:80,v:"escala"}].map((p,i)=>(
              <g key={i}>
                <circle cx={p.x} cy={p.y} r="10" fill="hsl(22 16% 9%)" stroke="hsl(18 92% 56%)" strokeWidth="3" />
                <text x={p.x} y={p.y-18} textAnchor="middle" fill="hsl(36 35% 94%)" fontSize="14" fontFamily="Bricolage Grotesque">{p.v}</text>
              </g>
            ))}
          </svg>
        </div>
      </Reveal>
    </div>
  </section>
);

/* ------------- CTA FINAL ------------- */
const FinalCTA = () => (
  <section className="relative py-24 md:py-32 overflow-hidden">
    <div className="container">
      <div className="relative rounded-5xl overflow-hidden p-10 md:p-16 lg:p-20" style={{ background: "linear-gradient(135deg, hsl(6 80% 48%) 0%, hsl(18 92% 52%) 60%, hsl(44 96% 56%) 110%)" }}>
        <Embers />
        <div className="absolute -top-24 -left-20 w-80 h-80 rounded-full bg-cheese/40 blur-3xl" />
        <div className="absolute -bottom-32 -right-20 w-96 h-96 rounded-full bg-tomato blur-3xl opacity-60" />
        <div className="relative max-w-3xl">
          <span className="chip !bg-white/15 !border-white/25 !text-white"><Flame className="w-3.5 h-3.5" /> Vagas limitadas neste mês</span>
          <h2 className="mt-6 text-4xl md:text-6xl text-white">
            Receba um time que estrutura o marketing da sua pizzaria como <span className="italic">base para crescer</span>.
          </h2>
          <p className="mt-6 text-white/90 text-lg max-w-2xl">
            Tenha uma equipe especializada no seu lado para transformar sua comunicação, campanhas e atendimento em um sistema de pedidos mais previsível.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a href="#form" className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-background text-foreground font-semibold hover:scale-105 transition-transform">
              Quero meu diagnóstico <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#form" className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-white/40 text-white font-semibold hover:bg-white/10 transition">
              <span className="w-2 h-2 rounded-full bg-basil animate-pulse" /> Especialistas online agora
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ------------- FAQ ------------- */
const FAQ = () => {
  const qs = [
    { q: "O que exatamente a Pizza Growth Studio faz?", a: "Estruturamos o marketing da sua pizzaria de ponta a ponta: estratégia, criativos, tráfego pago, WhatsApp, cardápio digital e relatórios — sempre focados em gerar mais pedidos." },
    { q: "Preciso cancelar a agência atual?", a: "Não. Fazemos diagnóstico gratuito e mostramos onde podemos somar. A decisão é sua, com clareza dos resultados esperados." },
    { q: "Em quanto tempo vejo resultados?", a: "Pizzarias bem estruturadas costumam ver os primeiros impactos nas primeiras 2 a 4 semanas, com evolução consistente nos meses seguintes." },
    { q: "Vocês atendem pizzarias pequenas?", a: "Sim. Temos planos para pizzarias em diferentes fases, do bairro à rede em expansão." },
    { q: "A agência cuida do meu Instagram e anúncios?", a: "Sim. Cuidamos do conteúdo, dos criativos e das campanhas pagas — tudo conectado à operação." },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-24 md:py-32">
      <div className="container max-w-3xl">
        <Reveal><SectionLabel>Perguntas frequentes</SectionLabel></Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl">Tudo o que você quer saber <span className="text-gradient-warm">antes de começar</span>.</h2>
        </Reveal>

        <div className="mt-12 space-y-3">
          {qs.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={i} delay={i * 0.04}>
                <div className={`rounded-3xl border transition-all ${isOpen ? "border-primary/60 bg-card/80 shadow-card" : "border-border/60 bg-card/40"}`}>
                  <button onClick={() => setOpen(isOpen ? null : i)} className="w-full flex items-center justify-between gap-6 text-left p-6">
                    <span className="font-display text-lg md:text-xl">{item.q}</span>
                    <ChevronDown className={`w-5 h-5 shrink-0 transition-transform ${isOpen ? "rotate-180 text-primary" : "text-muted-foreground"}`} />
                  </button>
                  <div className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 text-muted-foreground leading-relaxed">{item.a}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* ------------- FOOTER ------------- */
const Footer = () => (
  <footer className="pt-20 pb-10 border-t border-border/60">
    <div className="container">
      <div className="grid md:grid-cols-[1.4fr_1fr_1fr] gap-10">
        <div>
          <a href="#top" className="flex items-center gap-2 font-display font-bold text-2xl">
            <span className="w-10 h-10 rounded-full bg-gradient-warm flex items-center justify-center shadow-ember">
              <Pizza className="w-5 h-5 text-primary-foreground" />
            </span>
            Pizza <span className="text-gradient-warm">Growth Studio</span>
          </a>
          <p className="mt-4 text-muted-foreground max-w-sm">Marketing gastronômico exclusivo para pizzarias que querem vender mais, todos os dias.</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Navegação</p>
          <ul className="space-y-2">
            <li><a href="#metodo" className="hover:text-primary-glow">Método</a></li>
            <li><a href="#servicos" className="hover:text-primary-glow">Serviços</a></li>
            <li><a href="#provas" className="hover:text-primary-glow">Resultados</a></li>
            <li><a href="#faq" className="hover:text-primary-glow">FAQ</a></li>
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Social</p>
          <div className="flex gap-3">
            {[Instagram, MessageCircle, Linkedin].map((Icon, i) => (
              <a key={i} href="#" className="w-11 h-11 rounded-full grid place-items-center border border-border/70 bg-card/60 hover:bg-gradient-warm hover:border-transparent transition-all">
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-12 pt-6 border-t border-border/60 flex flex-col md:flex-row gap-3 items-center justify-between text-sm text-muted-foreground">
        <p>2026 © Pizza Growth Studio • Marketing para pizzarias que querem vender mais.</p>
        <p>Feito com <span className="text-tomato">●</span> molho, queijo e estratégia.</p>
      </div>
    </div>
  </footer>
);

/* ------------- STICKY MOBILE CTA ------------- */
const StickyCTA = () => (
  <div className="md:hidden fixed bottom-4 inset-x-4 z-40">
    <a href="#form" className="btn-ember w-full justify-center shadow-ember">
      Quero meu diagnóstico <ArrowRight className="w-4 h-4" />
    </a>
  </div>
);

/* ------------- Style helpers ------------- */
const fieldStyles = `
.field { width:100%; background: hsl(var(--input)); border:1px solid hsl(var(--border)); border-radius: 14px; padding: 0.85rem 1rem; color: hsl(var(--foreground)); font-size: 0.95rem; transition: all .25s; }
.field:focus { outline: none; border-color: hsl(var(--primary)); box-shadow: 0 0 0 4px hsl(var(--primary) / 0.18); }
.field::placeholder { color: hsl(var(--muted-foreground)); }
select.field { appearance: none; background-image: linear-gradient(45deg, transparent 50%, hsl(var(--muted-foreground)) 50%), linear-gradient(135deg, hsl(var(--muted-foreground)) 50%, transparent 50%); background-position: calc(100% - 18px) 50%, calc(100% - 12px) 50%; background-size: 6px 6px; background-repeat: no-repeat; }
`;

const Index = () => {
  return (
    <main className="relative overflow-x-clip">
      <style>{fieldStyles}</style>
      <Nav />
      <Hero />
      <Marquee />
      <LeadForm />
      <Testimonials />
      <About />
      <Method />
      <Services />
      <Plans />
      <FinalCTA />
      <FAQ />
      <Footer />
      <StickyCTA />
    </main>
  );
};

export default Index;
