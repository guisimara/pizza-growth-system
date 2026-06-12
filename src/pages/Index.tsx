import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  Flame, Megaphone, Smartphone, BarChart3, MessageCircle,
  ClipboardList, Sparkles, ArrowRight, Check, Instagram,
  ChevronDown, Zap, Target, TrendingUp, Globe, Quote,
} from "lucide-react";
import { toast } from "sonner";

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
        <a href="#top" className="flex items-center gap-2">
          <img src="/images/logo-brasa.png" alt="Brasa Company" className="h-9 w-auto" />
          <span style={{ fontFamily: "'Poppins', sans-serif" }}>
            <span style={{ fontWeight: 700, textTransform: "uppercase" }} className="text-gradient-warm">BRASA</span>
            <span style={{ fontWeight: 400 }} className="text-foreground"> company</span>
          </span>
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
          <SectionLabel>Assessoria de Marketing para Pizzarias</SectionLabel>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="mt-6 leading-[1.02]">
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
            <span className="flex items-center gap-2"><Check className="w-4 h-4 text-cheese" /> +2.000 pizzarias impactadas</span>
            <span className="flex items-center gap-2"><Check className="w-4 h-4 text-cheese" /> Delivery, salão e retirada</span>
            <span className="flex items-center gap-2"><Check className="w-4 h-4 text-cheese" /> 100% focado em pizzarias</span>
          </div>
        </Reveal>
      </div>

      {/* Hero visual */}
      <Reveal delay={0.2}>
        <div className="relative aspect-square max-w-[500px] mx-auto">
          {/* glow */}
          <div className="absolute inset-6 rounded-full bg-gradient-warm opacity-25 blur-3xl animate-glow" />

          {/* pizza photo rotating */}
          <div className="absolute inset-0 rounded-full overflow-hidden shadow-ember animate-spin-slow">
            <img
              src="/images/pizza-hero.png"
              alt="Pizza Margherita"
              className="w-full h-full object-cover"
            />
          </div>

          {/* decorative leaves */}
          <img src="/images/folha1.png" alt="" className="pointer-events-none absolute -top-8 -left-8 w-20 h-auto opacity-90 animate-float" style={{ animationDelay: "0s" }} />
          <img src="/images/folha2.png" alt="" className="pointer-events-none absolute -bottom-6 -left-10 w-16 h-auto opacity-85 animate-float" style={{ animationDelay: "1.2s" }} />
          <img src="/images/folha3.png" alt="" className="pointer-events-none absolute top-8 -right-10 w-18 h-auto opacity-90 animate-float" style={{ animationDelay: "0.6s" }} />

          {/* floating pizza slice photo */}
          <div className="absolute -top-6 -right-6 w-40 h-40 animate-float drop-shadow-[0_16px_32px_rgba(200,50,0,0.45)]">
            <img
              src="/images/pedacopizza-hero.png"
              alt="Pedaço de pizza"
              className="w-full h-full object-contain"
            />
          </div>

          {/* metric cards */}
          <motion.div drag dragConstraints={{ top: -10, bottom: 10, left: -10, right: 10 }}
            className="absolute -left-6 top-10 glass rounded-3xl px-4 py-3 shadow-card animate-float-slow">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-2xl bg-basil/20 flex items-center justify-center"><TrendingUp className="w-5 h-5 text-basil" /></div>
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
    <div className="relative border-y border-border/60 bg-card/40 mask-fade-r overflow-hidden" style={{ paddingTop: "1rem", paddingBottom: "1rem" }}>
      <div className="flex animate-marquee whitespace-nowrap gap-12 font-display" style={{ fontSize: "1.3rem" }}>
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
        <div className="lg:max-w-[50%]">
          <Reveal><SectionLabel>Próximo passo</SectionLabel></Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5">
              Não saia agora: faltam poucos passos para sua <span className="text-gradient-warm">pizzaria mudar</span>.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-muted-foreground text-lg">
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
                <Field label="Faturamento mensal">
                  <select required name="faturamento" className="field">
                    <option value="">Selecione...</option>
                    <option>R$10.000 - R$50.000</option>
                    <option>R$51.000 - R$80.000</option>
                    <option>R$80.000 - R$120.000</option>
                    <option>R$121.000 - R$150.000</option>
                    <option>R$150.000 - R$200.000</option>
                    <option>R$201.000 - R$400.000</option>
                    <option>R$400.000+</option>
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
    {
      name: "Pizzaria Dona Bella Massa",
      text: "Aumentamos nosso faturamento de 40% com a metodologia, hoje já estamos planejando mudar nosso fluxo de trabalho para melhorar a margem de lucro da DM.",
      logo: "/images/logo-avalia1.png",
    },
    {
      name: "Forno da Villa",
      text: "Sensacional, trabalho impecável. A antiga agência passava faturamento bruto, agora temos clareza do nosso crescimento e vendas por canal. Brasa Company faz um serviço exemplar. Parabéns.",
      logo: "/images/logo-avalia2.png",
    },
    {
      name: "Napoli Pizza Express",
      text: "Volume de ligações, WhatsApp e venda direta do cardápio estão incríveis. Migrando operação quase 100% e parando de depender do iFood. Meninos são demais, muita organização e profissionalismo.",
      logo: "/images/logo-avalia3.png",
    },
  ];
  return (
    <section id="provas" className="py-24 md:py-32 relative">
      <div className="container">
        <Reveal><SectionLabel>Veja Nossos Clientes</SectionLabel></Reveal>
        <div className="mt-5 lg:max-w-[50%]">
          <Reveal delay={0.05}>
            <h2>
              Pizzarias estão crescendo com a metodologia que <span className="text-gradient-warm">dão fome</span>.
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
              <div className="tilt-card relative border border-border/60 bg-card/60 overflow-hidden flex flex-col" style={{ borderRadius: "1rem" }}>
                {/* pizzaria image with real photos */}
                <div className="aspect-[16/9] relative overflow-hidden">
                  <img src="/images/fundo-embacado.png" alt="" className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/40" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img src={t.logo} alt={t.name} className="max-h-16 max-w-[70%] object-contain drop-shadow-lg" />
                  </div>
                  <div className="absolute bottom-0 inset-x-0 h-12" style={{ background: "linear-gradient(to top, hsl(22 16% 9%), transparent)" }} />
                </div>

                {/* testimonial text */}
                <div className="p-6 flex flex-col gap-4 flex-1">
                  <Quote className="w-6 h-6 text-primary/60" />
                  <p className="text-muted-foreground leading-relaxed text-sm flex-1">"{t.text}"</p>
                  <div className="flex items-center gap-3 pt-2 border-t border-border/40">
                    <img src={t.logo} alt={t.name} className="h-8 w-auto object-contain" />
                    <div>
                      <p className="font-semibold text-sm text-foreground">{t.name}</p>
                      <p className="text-xs text-muted-foreground">Cliente Brasa Company</p>
                    </div>
                  </div>
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
        <div className="lg:max-w-[90%]">
          <h2 className="mt-5">
            Marketing para pizzarias <span className="text-gradient-warm">não pode parecer</span> marketing para qualquer negócio.
          </h2>
          <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
            A <strong className="text-foreground">Brasa Company</strong> nasceu para unir estratégia, criativos apetitosos e performance local. Ajudamos pizzarias a vender mais usando campanhas, conteúdo, WhatsApp, cardápio digital e relatórios claros.
          </p>
        </div>
        <div className="mt-8 flex gap-3 flex-wrap">
          {["Estratégia", "Criativos", "Performance", "Atendimento"].map(t => (
            <span key={t} className="px-4 py-2 rounded-full text-sm border border-border/70 bg-card/60">{t}</span>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.15}>
        <div className="relative h-[520px]">
          {[
            { rot: -8, x: "5%", y: "5%", img: "/images/escritorio1.png" },
            { rot: 6, x: "40%", y: "0%", img: "/images/escritorio2.png" },
            { rot: -3, x: "12%", y: "45%", img: "/images/escritorio3.png" },
            { rot: 9, x: "48%", y: "42%", img: "/images/escritorio4.png" },
          ].map((p, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 30, rotate: 0 }}
              whileInView={{ opacity: 1, y: 0, rotate: p.rot }}
              transition={{ delay: i * 0.1, duration: 0.7 }}
              viewport={{ once: true }}
              whileHover={{ rotate: 0, scale: 1.04, zIndex: 10 }}
              className="absolute w-56 p-3 bg-dough shadow-soft cursor-grab"
              style={{ left: p.x, top: p.y, borderRadius: "0.5rem" }}
            >
              <div className="aspect-[4/5] relative overflow-hidden" style={{ borderRadius: "0.5rem" }}>
                <img src={p.img} alt="Escritório Brasa Company" className="w-full h-full object-cover" />
              </div>
            </motion.div>
          ))}
        </div>
      </Reveal>
    </div>
  </section>
);

/* ------------- METHOD (Metodologia BRASA) ------------- */
const Method = () => {
  const slices = [
    {
      letter: "B", t: "Base Estratégica", icon: ClipboardList,
      d: "Mapeamos seus canais, concorrentes e bloqueios antes de agir. Entendemos exatamente onde sua pizzaria está travada. Sem diagnóstico, não existe estratégia.",
    },
    {
      letter: "R", t: "Reputação Local", icon: Target,
      d: "Posicionamos sua marca como referência no bairro e na cidade. Sua pizzaria passa a comunicar desejo, identidade e confiança. O cliente te escolhe antes de ver o cardápio.",
    },
    {
      letter: "A", t: "Atração", icon: Flame,
      d: "Criativos, vídeos e conteúdo que despertam fome e param o scroll. Peças pensadas para gerar desejo imediato e associação positiva. Sua pizzaria se torna irresistível nos feeds.",
    },
    {
      letter: "S", t: "Sedução & Conversão", icon: Megaphone,
      d: "Tráfego pago, WhatsApp e cardápio digital trabalhando juntos para fechar pedidos. Aparecemos para quem está perto e pronto para comprar. Transformamos atenção em ação real.",
    },
    {
      letter: "A", t: "Análise Contínua", icon: BarChart3,
      d: "Relatórios claros, otimização constante e decisões baseadas em dados reais. Você sabe o que vende, por que vende e como crescer mais. Cada mês supera o anterior.",
    },
  ];
  const [active, setActive] = useState(0);
  const A = slices[active];
  const N = slices.length;

  return (
    <section id="metodo" className="py-24 md:py-32 relative">
      <div className="container">
        <Reveal><SectionLabel>Metodologia Brasa</SectionLabel></Reveal>
        <div className="mt-5 lg:max-w-[50%]">
          <Reveal delay={0.05}><h2>Existe um método comprovado para sua pizzaria <span className="text-gradient-warm">nunca parar de vender</span>.</h2></Reveal>
          <Reveal delay={0.1}><p className="mt-5 text-muted-foreground text-lg">Do primeiro impacto ao novo pedido: cada etapa é pensada para gerar desejo, autoridade e ação.</p></Reveal>
        </div>

        <Reveal delay={0.12}>
          <div className="mt-10 flex gap-2 flex-wrap">
            {slices.map((s, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all font-display text-lg font-bold ${i === active ? "bg-gradient-warm text-primary-foreground border-transparent shadow-ember" : "border-border/60 text-muted-foreground hover:text-foreground"}`}
              >
                <span className="text-xl">{s.letter}</span>
                <span className="text-xs font-normal hidden sm:block">{s.t}</span>
              </button>
            ))}
            <div className="flex items-center px-3 py-2 text-muted-foreground/50 text-sm italic">= Metodologia BRASA</div>
          </div>
        </Reveal>

        <div className="mt-16 grid lg:grid-cols-[1fr_1.1fr] gap-16 items-center">
          <Reveal>
            <div className="relative aspect-square max-w-[520px] mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-warm opacity-15 blur-3xl" />
              <svg viewBox="0 0 200 200" className="relative w-full h-full">
                <defs>
                  {slices.map((_, i) => (
                    <linearGradient key={i} id={`sl${i}`} x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor={i % 2 ? "hsl(18 92% 56%)" : "hsl(6 80% 52%)"} />
                      <stop offset="100%" stopColor={i % 2 ? "hsl(44 96% 58%)" : "hsl(14 100% 56%)"} />
                    </linearGradient>
                  ))}
                  <filter id="sliceShadow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="hsl(14 100% 30%)" floodOpacity="0.4"/>
                  </filter>
                </defs>
                <circle cx="100" cy="100" r="96" fill="hsl(28 45% 18%)"/>
                <circle cx="100" cy="100" r="93" fill="hsl(28 30% 14%)"/>
                {slices.map((s, i) => {
                  const a0 = (i / N) * Math.PI * 2 - Math.PI / 2;
                  const a1 = ((i + 1) / N) * Math.PI * 2 - Math.PI / 2;
                  const r = 88;
                  const x0 = 100 + Math.cos(a0) * r, y0 = 100 + Math.sin(a0) * r;
                  const x1 = 100 + Math.cos(a1) * r, y1 = 100 + Math.sin(a1) * r;
                  const isActive = i === active;
                  const midA = (a0 + a1) / 2;
                  const lx = 100 + Math.cos(midA) * 60;
                  const ly = 100 + Math.sin(midA) * 60;
                  return (
                    <g key={i} className="cursor-pointer" onMouseEnter={() => setActive(i)} onClick={() => setActive(i)}>
                      <path
                        d={`M100 100 L ${x0} ${y0} A ${r} ${r} 0 0 1 ${x1} ${y1} Z`}
                        fill={`url(#sl${i})`}
                        stroke="hsl(22 14% 8%)" strokeWidth="2.5"
                        opacity={isActive ? 1 : 0.5}
                        filter={isActive ? "url(#sliceShadow)" : undefined}
                        style={{ transition: "all .4s", transformOrigin: "100px 100px", transform: isActive ? "scale(1.06)" : "scale(1)" }}
                      />
                      <text x={lx} y={ly} textAnchor="middle" dominantBaseline="middle"
                        fill={isActive ? "white" : "hsl(36 35% 94% / 0.8)"}
                        fontSize="16" fontWeight="bold" fontFamily="Bricolage Grotesque"
                        style={{ transition: "all .4s", pointerEvents: "none" }}>
                        {s.letter}
                      </text>
                    </g>
                  );
                })}
                {[...Array(10)].map((_, i) => {
                  const a = (i / 10) * Math.PI * 2;
                  const rr = 74;
                  return <circle key={i} cx={100 + Math.cos(a) * rr} cy={100 + Math.sin(a) * rr} r={i % 2 ? 2.8 : 2} fill={i % 2 ? "hsl(6 80% 30%)" : "hsl(130 55% 25%)"} opacity="0.7"/>;
                })}
                <circle cx="100" cy="100" r="24" fill="hsl(22 16% 7%)" stroke="hsl(18 92% 56%)" strokeWidth="2"/>
                <circle cx="100" cy="100" r="20" fill="hsl(22 16% 10%)"/>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="text-center">
                  <p className="text-[9px] uppercase tracking-widest text-muted-foreground">etapa</p>
                  <p className="font-display text-2xl text-gradient-warm">0{active + 1}</p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div key={A.t} className="glass rounded-4xl p-8 md:p-10 animate-fade-in-up">
              <div className="flex items-center gap-4 mb-2">
                <div className="w-16 h-16 rounded-2xl bg-gradient-warm flex items-center justify-center shadow-ember">
                  <span className="font-display text-3xl font-black text-primary-foreground">{A.letter}</span>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-card/80 border border-border/60 flex items-center justify-center">
                  <A.icon className="w-6 h-6 text-primary-glow" />
                </div>
              </div>
              <p className="mt-4 text-xs uppercase tracking-widest text-muted-foreground">Metodologia BRASA · Etapa 0{active + 1}</p>
              <h3 className="mt-2 font-display text-2xl md:text-3xl">{A.t}</h3>
              <p className="mt-4 text-muted-foreground text-lg leading-relaxed">{A.d}</p>
              <div className="mt-7 flex flex-wrap gap-2">
                {slices.map((s, i) => (
                  <button key={s.t} onClick={() => setActive(i)} className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition ${i === active ? "bg-primary text-primary-foreground border-primary" : "border-border/70 text-muted-foreground hover:text-foreground"}`}>
                    <span className="font-bold">{s.letter}</span> · 0{i + 1}
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
          <div className="mt-5 lg:max-w-[50%]">
            <h2>
              A assessoria estrutura o marketing da sua pizzaria <span className="text-gradient-warm">com base no seu diagnóstico</span>.
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((s, i) => (
            <Reveal key={s.t} delay={(i % 3) * 0.05}>
              <div className="group relative h-full tilt-card p-7 bg-card/60 border border-border/60 overflow-hidden" style={{ borderRadius: "0.8rem" }}>
                <div className="absolute -top-16 -right-16 w-44 h-44 rounded-full bg-gradient-warm opacity-0 group-hover:opacity-25 blur-2xl transition-opacity duration-500" />
                <div className="relative w-14 h-14 rounded-2xl bg-gradient-warm flex items-center justify-center shadow-ember">
                  <s.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="mt-6 font-display text-2xl">{s.t}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{s.d}</p>
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
        <div className="lg:max-w-[90%]">
          <h2 className="mt-5">
            Você escolhe a solução certa para a <span className="text-gradient-warm">fase</span> que sua pizzaria vive hoje.
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            O plano será personalizado de acordo com o diagnóstico onde sua pizzaria está o bloqueio de crescimento.
          </p>
        </div>
        <a href="#form" className="btn-ember mt-8">Quero entender meu plano <ArrowRight className="w-5 h-5" /></a>
      </Reveal>

      <Reveal delay={0.15}>
        <div className="relative aspect-[5/4]">
          <svg viewBox="0 0 500 400" className="w-full h-full">
            <defs>
              <linearGradient id="cheeseG" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(44 96% 60%)" />
                <stop offset="100%" stopColor="hsl(28 100% 50%)" />
              </linearGradient>
              <linearGradient id="cheeseG2" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="hsl(6 80% 52%)" />
                <stop offset="100%" stopColor="hsl(44 96% 60%)" />
              </linearGradient>
              <filter id="blur1"><feGaussianBlur stdDeviation="6"/></filter>
            </defs>
            <path d="M0 280 Q 80 240 130 260 T 250 200 T 380 130 T 500 60 L 500 400 L 0 400 Z" fill="url(#cheeseG)" opacity="0.25" />
            <path d="M0 280 Q 80 240 130 260 T 250 200 T 380 130 T 500 60 L 500 400 L 0 400 Z" fill="url(#cheeseG)" opacity="0.15" filter="url(#blur1)" />
            <path d="M0 280 Q 80 240 130 260 T 250 200 T 380 130 T 500 60" fill="none" stroke="url(#cheeseG2)" strokeWidth="5" strokeLinecap="round" />
            {[{x:130,y:260,h:32},{x:250,y:200,h:52},{x:380,y:130,h:42},{x:460,y:80,h:62}].map((d,i)=>(
              <g key={i}>
                <path d={`M${d.x} ${d.y} q -5 ${d.h*0.5} 0 ${d.h}`} stroke="url(#cheeseG2)" strokeWidth="4.5" fill="none" strokeLinecap="round" />
                <circle cx={d.x} cy={d.y+d.h+4} r="6" fill="url(#cheeseG2)" />
              </g>
            ))}
            {[{x:0,y:280,v:"Início"},{x:130,y:260,v:"+pedidos"},{x:250,y:200,v:"+ticket"},{x:380,y:130,v:"escala"},{x:480,y:65,v:"🔥"}].map((p,i)=>(
              <g key={i}>
                <circle cx={p.x} cy={p.y} r="10" fill="hsl(22 16% 9%)" stroke="hsl(18 92% 56%)" strokeWidth="2.5" />
                <text x={p.x} y={p.y-18} textAnchor="middle" fill="hsl(36 35% 94%)" fontSize="13" fontFamily="Bricolage Grotesque">{p.v}</text>
              </g>
            ))}
            {[100,200,300].map(y => (
              <line key={y} x1="0" y1={y} x2="500" y2={y} stroke="hsl(36 35% 94% / 0.06)" strokeWidth="1" strokeDasharray="4 8"/>
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
          <span className="chip !bg-white/15 !border-white/25 !text-white"><Flame className="w-3.5 h-3.5" /> Agende a sua avaliação agora mesmo</span>
          <h2 className="mt-6 text-white">
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
    { q: "O que exatamente a Brasa Company faz?", a: "Estruturamos o marketing da sua pizzaria de ponta a ponta: estratégia, criativos, tráfego pago, WhatsApp, cardápio digital e relatórios — sempre focados em gerar mais pedidos." },
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
          <h2 className="mt-5">Tudo o que você quer saber <span className="text-gradient-warm">antes de começar</span>.</h2>
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
          <a href="#top" className="flex items-center gap-3">
            <img src="/images/logo-rodape.png" alt="Brasa Company" style={{ height: "5rem", width: "auto" }} />
          </a>
          <p className="mt-4 text-muted-foreground max-w-sm">Assessoria de Marketing Gastronômico exclusivo para pizzarias que querem vender mais.</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Navegação</p>
          <ul className="space-y-2">
            <li><a href="#metodo" className="hover:text-primary-glow transition">Método</a></li>
            <li><a href="#servicos" className="hover:text-primary-glow transition">Serviços</a></li>
            <li><a href="#provas" className="hover:text-primary-glow transition">Resultados</a></li>
            <li><a href="#faq" className="hover:text-primary-glow transition">FAQ</a></li>
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Social</p>
          <div className="flex gap-3">
            <a href="https://instagram.com/brasa.co" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full grid place-items-center border border-border/70 bg-card/60 hover:bg-gradient-warm hover:border-transparent transition-all">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://google.com/" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full grid place-items-center border border-border/70 bg-card/60 hover:bg-gradient-warm hover:border-transparent transition-all">
              <Globe className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-12 pt-6 border-t border-border/60 flex flex-col md:flex-row gap-3 items-center justify-between text-sm text-muted-foreground">
        <p>2026 © Brasa Company • Assessoria de Marketing para Pizzarias.</p>
        <p>Feito com <span className="text-tomato">❤️</span> molho, queijo e método.</p>
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

/* ------------- Poppins font import ------------- */
const fontImport = `@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');`;

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
      <style>{fontImport}</style>
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
