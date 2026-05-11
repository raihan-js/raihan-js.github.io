import React, { useState, useEffect, useRef, useCallback } from "react";
import { PROFILE, STATS, PROJECTS, MODELS, STACK, EXPERIENCE } from "./data";

// ============================================================
// Reveal — scroll-triggered fade-up
// ============================================================
function Reveal({ children, as: As = "div", className = "", stagger = false, ...rest }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.add("in");
            io.disconnect();
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <As ref={ref} className={(stagger ? "stagger " : "reveal ") + className} {...rest}>
      {children}
    </As>
  );
}

// ============================================================
// TopNav
// ============================================================
function TopNav({ theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const items = [
    { id: "work", label: "Work" },
    { id: "models", label: "Models" },
    { id: "stack", label: "Stack" },
    { id: "experience", label: "Experience" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ];
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: scrolled ? "color-mix(in oklch, var(--bg) 85%, transparent)" : "transparent",
        backdropFilter: scrolled ? "saturate(140%) blur(10px)" : "none",
        WebkitBackdropFilter: scrolled ? "saturate(140%) blur(10px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        transition: "background-color 220ms ease, border-color 220ms ease, backdrop-filter 220ms ease",
      }}
    >
      <div
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          padding: "14px 32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 24,
          fontFamily: "var(--mono)",
          fontSize: 13,
        }}
      >
        <a href="#top" style={{ display: "flex", alignItems: "center", gap: 10, fontWeight: 500 }}>
          <Glyph />
          <span style={{ color: "var(--fg)" }}>raihan</span>
          <span style={{ color: "var(--fg-subtle)" }}>.js</span>
        </a>
        <div style={{ display: "flex", alignItems: "center", gap: 4 }} className="topnav-links">
          {items.map((it) => (
            <a
              key={it.id}
              href={`#${it.id}`}
              style={{
                color: "var(--fg-muted)",
                padding: "6px 12px",
                borderRadius: 6,
                transition: "color 160ms, background 160ms",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--fg)";
                e.currentTarget.style.background = "var(--bg-sunken)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--fg-muted)";
                e.currentTarget.style.background = "transparent";
              }}
            >
              {it.label}
            </a>
          ))}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <a
            href="#contact"
            style={{
              padding: "8px 14px",
              border: "1px solid var(--fg)",
              background: "var(--fg)",
              color: "var(--bg)",
              borderRadius: 6,
              fontWeight: 500,
              transition: "transform 120ms ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-1px)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "none")}
          >
            Get in touch ↗
          </a>
        </div>
      </div>
    </nav>
  );
}

function Glyph() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <rect x="1" y="1" width="18" height="18" rx="4" stroke="currentColor" strokeWidth="1.4" />
      <path d="M6 6h4a3 3 0 0 1 0 6H6V6Zm0 6 4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="square" />
    </svg>
  );
}

function ThemeToggle({ theme, onToggle }) {
  return (
    <button
      onClick={onToggle}
      aria-label="Toggle theme"
      style={{
        width: 34,
        height: 34,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        border: "1px solid var(--border)",
        background: "var(--bg-elev)",
        color: "var(--fg-muted)",
        borderRadius: 6,
        cursor: "pointer",
        transition: "color 160ms, border-color 160ms",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = "var(--fg)";
        e.currentTarget.style.borderColor = "var(--border-strong)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = "var(--fg-muted)";
        e.currentTarget.style.borderColor = "var(--border)";
      }}
    >
      {theme === "dark" ? (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
        </svg>
      ) : (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      )}
    </button>
  );
}

// ============================================================
// Section frame
// ============================================================
function Section({ id, num, title, kicker, children, last = false }) {
  return (
    <section
      id={id}
      style={{
        padding: last ? "120px 32px 80px" : "120px 32px",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <Reveal>
          <div style={{ display: "flex", alignItems: "baseline", gap: 24, marginBottom: 56, flexWrap: "wrap" }}>
            <div style={{ fontFamily: "var(--mono)", fontSize: 12, color: "var(--fg-subtle)", letterSpacing: "0.04em" }}>{num}</div>
            <h2 style={{ margin: 0, fontSize: "clamp(28px, 3.4vw, 44px)", fontWeight: 500, letterSpacing: "-0.02em", lineHeight: 1.05 }}>
              {title}
            </h2>
            {kicker && (
              <div style={{ fontFamily: "var(--mono)", fontSize: 12, color: "var(--fg-muted)", marginLeft: "auto" }}>
                {kicker}
              </div>
            )}
          </div>
        </Reveal>
        {children}
      </div>
    </section>
  );
}

// ============================================================
// HERO
// ============================================================
function Hero() {
  return (
    <header
      id="top"
      style={{
        padding: "160px 32px 100px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(to right, var(--grid) 1px, transparent 1px), linear-gradient(to bottom, var(--grid) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse at 50% 30%, black 30%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse at 50% 30%, black 30%, transparent 75%)",
          opacity: 0.5,
          pointerEvents: "none",
        }}
      />
      <div style={{ maxWidth: 1240, margin: "0 auto", position: "relative" }}>
        <Reveal stagger>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "6px 12px",
              borderRadius: 999,
              border: "1px solid var(--border)",
              background: "var(--bg-elev)",
              fontFamily: "var(--mono)",
              fontSize: 12,
              color: "var(--fg-muted)",
              marginBottom: 28,
            }}
          >
            <PulseDot />
            <span>{PROFILE.available}</span>
          </div>
          <h1
            style={{
              margin: 0,
              fontSize: "clamp(48px, 8vw, 112px)",
              fontWeight: 500,
              letterSpacing: "-0.035em",
              lineHeight: 0.95,
              maxWidth: 1100,
            }}
          >
            Engineering AI systems
            <br />
            <span style={{ color: "var(--fg-muted)" }}>from model weights to the interfaces that ship them.</span>
          </h1>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(0, 1fr) minmax(0, 520px)",
              gap: 48,
              marginTop: 56,
              alignItems: "end",
            }}
            className="hero-grid"
          >
            <div>
              <div
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: 12,
                  color: "var(--fg-subtle)",
                  letterSpacing: "0.04em",
                  marginBottom: 14,
                }}
              >
                ABOUT
              </div>
              <p
                style={{
                  margin: 0,
                  fontSize: 18,
                  lineHeight: 1.55,
                  color: "var(--fg-muted)",
                  maxWidth: 560,
                }}
              >
                I&rsquo;m <span style={{ color: "var(--fg)" }}>Raihan</span> — an AI/ML engineer from {PROFILE.location.split(",")[0]}.
                I train domain-specific language models from scratch, ship the full-stack apps around them, and recently shipped my own programming language (
                <a href="https://www.ilma-lang.dev/" target="_blank" rel="noreferrer" style={{ color: "var(--accent)" }}>ILMA Lang</a>
                ). Currently CTO at <span style={{ color: "var(--fg)" }}>ClarioScope AI</span>.
              </p>
              <div style={{ display: "flex", gap: 10, marginTop: 32, flexWrap: "wrap" }}>
                <a
                  href="#work"
                  style={{
                    padding: "12px 20px",
                    background: "var(--fg)",
                    color: "var(--bg)",
                    borderRadius: 8,
                    fontWeight: 500,
                    fontSize: 14,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    transition: "transform 120ms",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-1px)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "none")}
                >
                  See selected work <span style={{ fontFamily: "var(--mono)" }}>→</span>
                </a>
                <a
                  href="#models"
                  style={{
                    padding: "12px 20px",
                    background: "transparent",
                    color: "var(--fg)",
                    border: "1px solid var(--border-strong)",
                    borderRadius: 8,
                    fontWeight: 500,
                    fontSize: 14,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    transition: "background 120ms",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "var(--bg-sunken)")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                >
                  Browse model cards
                </a>
              </div>
            </div>
            <InlineTokenDemo />
          </div>
        </Reveal>
      </div>
    </header>
  );
}

function PulseDot() {
  return (
    <span style={{ position: "relative", display: "inline-flex", width: 8, height: 8 }}>
      <span
        style={{
          position: "absolute",
          inset: 0,
          background: "var(--accent)",
          borderRadius: "50%",
          opacity: 0.35,
          animation: "ping 1.8s cubic-bezier(0,0,0.2,1) infinite",
        }}
      />
      <span style={{ position: "relative", width: 8, height: 8, background: "var(--accent)", borderRadius: "50%" }} />
    </span>
  );
}

// ============================================================
// Inline LM demo
// ============================================================
function InlineTokenDemo() {
  const PROMPTS = [
    {
      q: "// Generate a Next.js Server Action for a contact form",
      a: "export async function submit(prev, form) {\n  const email = form.get('email');\n  if (!isValid(email)) return { error: 'bad email' };\n  await db.lead.create({ data: { email } });\n  return { ok: true };\n}",
    },
    {
      q: "// QLoRA fine-tune DeepSeek Coder 6.7B in 4-bit",
      a: "model = AutoModelForCausalLM.from_pretrained(\n  'deepseek-ai/deepseek-coder-6.7b-instruct',\n  quantization_config=bnb_4bit_nf4,\n  device_map='auto',\n)\nmodel = get_peft_model(model, lora_cfg)\ntrainer.train()",
    },
    {
      q: "// ILMA Lang: print fibonacci",
      a: "recipe fib takes n\n  check n\n    when 0 give back 0\n    when 1 give back 1\n  give back fib(n - 1) + fib(n - 2)\n\nremember total as fib(10)\nsay total",
    },
  ];

  const [promptIdx, setPromptIdx] = useState(0);
  const [typed, setTyped] = useState("");
  const [phase, setPhase] = useState("idle");
  const timer = useRef();

  const start = useCallback((idx) => {
    clearTimeout(timer.current);
    setTyped("");
    setPhase("typingPrompt");
    const target = PROMPTS[idx].q;
    let i = 0;
    const tick = () => {
      i++;
      setTyped(target.slice(0, i));
      if (i < target.length) {
        timer.current = setTimeout(tick, 22);
      } else {
        timer.current = setTimeout(() => setPhase("thinking"), 280);
      }
    };
    tick();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    start(0);
    return () => clearTimeout(timer.current);
  }, [start]);

  useEffect(() => {
    if (phase !== "thinking") return;
    timer.current = setTimeout(() => setPhase("streaming"), 700);
    return () => clearTimeout(timer.current);
  }, [phase]);

  const [completion, setCompletion] = useState("");
  useEffect(() => {
    if (phase !== "streaming") return;
    setCompletion("");
    const target = PROMPTS[promptIdx].a;
    let i = 0;
    const tick = () => {
      const step = Math.random() < 0.55 ? 3 : Math.random() < 0.85 ? 5 : 9;
      i = Math.min(target.length, i + step);
      setCompletion(target.slice(0, i));
      if (i < target.length) {
        timer.current = setTimeout(tick, 28 + Math.random() * 50);
      } else {
        setPhase("done");
      }
    };
    tick();
    return () => clearTimeout(timer.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, promptIdx]);

  const restart = (idx = (promptIdx + 1) % PROMPTS.length) => {
    setPromptIdx(idx);
    setCompletion("");
    setTimeout(() => start(idx), 30);
  };

  return (
    <div
      style={{
        border: "1px solid var(--border)",
        borderRadius: 10,
        background: "var(--bg-elev)",
        overflow: "hidden",
        fontFamily: "var(--mono)",
        fontSize: 12.5,
        lineHeight: 1.6,
        boxShadow: "var(--shadow)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          padding: "10px 14px",
          borderBottom: "1px solid var(--border)",
          background: "var(--bg-sunken)",
          color: "var(--fg-muted)",
          fontSize: 11.5,
          letterSpacing: "0.04em",
        }}
      >
        <span style={{ display: "inline-flex", gap: 5 }}>
          <Dot c="var(--fg-subtle)" />
          <Dot c="var(--fg-subtle)" />
          <Dot c="var(--fg-subtle)" />
        </span>
        <span style={{ marginLeft: 8 }}>orch-7b · 4-bit · live demo</span>
        <span style={{ marginLeft: "auto", color: "var(--fg-subtle)" }}>
          {phase === "thinking" ? "thinking…" : phase === "streaming" ? "streaming" : phase === "done" ? "done" : "ready"}
        </span>
      </div>
      <div style={{ padding: "16px 18px", minHeight: 240 }}>
        <div style={{ color: "var(--fg-subtle)" }}>
          <span style={{ color: "var(--accent)" }}>{"> "}</span>
          {typed}
          {phase === "typingPrompt" && <Caret />}
        </div>
        <div style={{ marginTop: 14, whiteSpace: "pre-wrap", color: "var(--fg)" }}>
          {phase === "thinking" && <ThinkingDots />}
          {(phase === "streaming" || phase === "done") && (
            <>
              {completion}
              {phase === "streaming" && <Caret />}
            </>
          )}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          gap: 6,
          padding: "10px 12px",
          borderTop: "1px solid var(--border)",
          background: "var(--bg-sunken)",
          flexWrap: "wrap",
        }}
      >
        {PROMPTS.map((p, i) => (
          <button
            key={i}
            onClick={() => restart(i)}
            style={{
              fontFamily: "var(--mono)",
              fontSize: 11,
              padding: "5px 9px",
              border: "1px solid var(--border)",
              background: i === promptIdx ? "var(--fg)" : "var(--bg-elev)",
              color: i === promptIdx ? "var(--bg)" : "var(--fg-muted)",
              borderRadius: 5,
              cursor: "pointer",
              transition: "all 120ms",
            }}
          >
            prompt {i + 1}
          </button>
        ))}
        <button
          onClick={() => restart(promptIdx)}
          style={{
            marginLeft: "auto",
            fontFamily: "var(--mono)",
            fontSize: 11,
            padding: "5px 9px",
            border: "1px solid var(--border)",
            background: "transparent",
            color: "var(--fg-muted)",
            borderRadius: 5,
            cursor: "pointer",
          }}
        >
          ↻ regenerate
        </button>
      </div>
    </div>
  );
}

function Dot({ c }) {
  return <span style={{ display: "inline-block", width: 9, height: 9, borderRadius: "50%", background: c, opacity: 0.7 }} />;
}

function Caret() {
  return (
    <span
      style={{
        display: "inline-block",
        width: 7,
        height: "1em",
        verticalAlign: "-2px",
        background: "var(--accent)",
        marginLeft: 1,
        animation: "blink 1s steps(2) infinite",
      }}
    />
  );
}

function ThinkingDots() {
  return (
    <span style={{ color: "var(--fg-subtle)", letterSpacing: 4 }}>
      <span style={{ animation: "thinking-dot 1.2s infinite", animationDelay: "0ms" }}>·</span>
      <span style={{ animation: "thinking-dot 1.2s infinite", animationDelay: "150ms" }}>·</span>
      <span style={{ animation: "thinking-dot 1.2s infinite", animationDelay: "300ms" }}>·</span>
    </span>
  );
}

// ============================================================
// Stats — animated counters
// ============================================================
function StatRow() {
  return (
    <Reveal>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 0,
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
          background: "var(--bg-sunken)",
        }}
        className="stat-row"
      >
        {STATS.map((s, i) => (
          <Stat key={i} {...s} divider={i > 0} />
        ))}
      </div>
    </Reveal>
  );
}

function Stat({ value, suffix, label, divider }) {
  const [n, setN] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const start = performance.now();
          const dur = 1200;
          const isFloat = !Number.isInteger(value);
          const tick = (t) => {
            const p = Math.min(1, (t - start) / dur);
            const eased = 1 - Math.pow(1 - p, 3);
            const cur = value * eased;
            setN(isFloat ? +cur.toFixed(1) : Math.round(cur));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          io.disconnect();
        });
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value]);
  return (
    <div
      ref={ref}
      style={{
        padding: "40px 32px",
        borderLeft: divider ? "1px solid var(--border)" : "none",
        display: "flex",
        flexDirection: "column",
        gap: 12,
      }}
    >
      <div
        style={{
          fontFamily: "var(--mono)",
          fontSize: "clamp(36px, 4.5vw, 56px)",
          fontWeight: 400,
          letterSpacing: "-0.03em",
          lineHeight: 1,
          color: "var(--fg)",
          fontVariantNumeric: "tabular-nums",
        }}
      >
        {n}
        <span style={{ color: "var(--accent)" }}>{suffix}</span>
      </div>
      <div
        style={{
          fontFamily: "var(--mono)",
          fontSize: 12,
          color: "var(--fg-muted)",
          whiteSpace: "pre-line",
          lineHeight: 1.4,
        }}
      >
        {label}
      </div>
    </div>
  );
}

// ============================================================
// Work
// ============================================================
function Work() {
  return (
    <Section id="work" num="01" title="Selected work" kicker={`${PROJECTS.length} featured · 200+ shipped`}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: 28 }} className="work-grid">
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} />
        ))}
      </div>
    </Section>
  );
}

function ProjectCard({ project, index }) {
  // 6 projects, editorial rhythm: 8+4 / 6+6 / 6+6
  const layouts = [8, 4, 6, 6, 6, 6];
  const span = layouts[index] || 6;
  const isHero = span === 8;
  const [hovered, setHovered] = useState(false);
  return (
    <Reveal as="article" className={`work-card span-${span}`} style={{ gridColumn: `span ${span} / span ${span}`, display: "flex" }}>
      <a
        href={project.link}
        target="_blank"
        rel="noreferrer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          flex: 1,
          border: "1px solid var(--border)",
          borderRadius: 12,
          overflow: "hidden",
          background: "var(--bg-elev)",
          display: "flex",
          flexDirection: "column",
          width: "100%",
          minWidth: 0,
          transition: "border-color 200ms, transform 200ms, box-shadow 200ms",
          borderColor: hovered ? "var(--border-strong)" : "var(--border)",
          transform: hovered ? "translateY(-2px)" : "none",
          boxShadow: hovered ? "var(--shadow)" : "none",
          cursor: "pointer",
          color: "inherit",
        }}
      >
        <div
          style={{
            position: "relative",
            aspectRatio: isHero ? "16 / 9" : "4 / 3",
            background: "var(--bg-sunken)",
            borderBottom: "1px solid var(--border)",
            overflow: "hidden",
          }}
        >
          <img
            src={project.image}
            alt={`${project.name} screenshot`}
            loading="lazy"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "top center",
              transition: "transform 600ms ease",
              transform: hovered ? "scale(1.02)" : "scale(1)",
            }}
          />
        </div>
        <div style={{ padding: isHero ? "28px 28px 24px" : "22px 22px 20px", flex: 1, display: "flex", flexDirection: "column" }}>
          {/* Meta row: kind, status, year — no longer overlaying the screenshot */}
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14, flexWrap: "wrap" }}>
            <span
              style={{
                fontFamily: "var(--mono)",
                fontSize: 11,
                padding: "3px 8px",
                background: "var(--bg-sunken)",
                border: "1px solid var(--border)",
                borderRadius: 4,
                color: "var(--fg-muted)",
                letterSpacing: "0.04em",
              }}
            >
              {project.kind}
            </span>
            <span
              style={{
                fontFamily: "var(--mono)",
                fontSize: 11,
                padding: "3px 8px",
                background:
                  project.status === "Live" ? "color-mix(in oklch, var(--accent) 16%, var(--bg))" : "var(--bg-elev)",
                border: `1px solid ${project.status === "Live" ? "var(--accent)" : "var(--border)"}`,
                borderRadius: 4,
                color: project.status === "Live" ? "var(--accent)" : "var(--fg-muted)",
                letterSpacing: "0.04em",
              }}
            >
              {project.status}
            </span>
            <span style={{ marginLeft: "auto", fontFamily: "var(--mono)", fontSize: 12, color: "var(--fg-subtle)" }}>{project.year}</span>
          </div>
          <h3 style={{ margin: "0 0 10px", fontSize: isHero ? 26 : 20, fontWeight: 500, letterSpacing: "-0.015em" }}>{project.name}</h3>
          <p style={{ margin: 0, color: "var(--fg-muted)", fontSize: isHero ? 15 : 14, lineHeight: 1.55, flex: 1 }}>{project.summary}</p>
          <div
            style={{
              display: "flex",
              gap: 6,
              flexWrap: "wrap",
              marginTop: 18,
              paddingTop: 16,
              borderTop: "1px dashed var(--border)",
            }}
          >
            {project.stack.map((s) => (
              <span
                key={s}
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: 11,
                  padding: "3px 8px",
                  background: "var(--bg-sunken)",
                  border: "1px solid var(--border)",
                  borderRadius: 4,
                  color: "var(--fg-muted)",
                }}
              >
                {s}
              </span>
            ))}
            <span
              style={{
                marginLeft: "auto",
                fontFamily: "var(--mono)",
                fontSize: 11,
                color: hovered ? "var(--accent)" : "var(--fg-subtle)",
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                transition: "color 160ms",
              }}
            >
              visit <span style={{ transform: hovered ? "translateX(2px)" : "none", transition: "transform 160ms" }}>→</span>
            </span>
          </div>
        </div>
      </a>
    </Reveal>
  );
}

// ============================================================
// Models
// ============================================================
function Models() {
  return (
    <Section id="models" num="02" title="Model case studies" kicker="open weights on Hugging Face">
      <Reveal>
        <p style={{ maxWidth: 640, color: "var(--fg-muted)", margin: "0 0 40px", fontSize: 16 }}>
          Every model published openly on <a href="https://huggingface.co/raihan-js" target="_blank" rel="noreferrer" style={{ color: "var(--fg)", borderBottom: "1px dashed currentColor" }}>Hugging Face</a> — configs, tokenizers, and weights. Four trained from scratch on consumer hardware, one (ORCH-7B) QLoRA fine-tuned of DeepSeek Coder 6.7B.
        </p>
      </Reveal>
      <Reveal as="div" stagger style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }} className="models-grid">
        {MODELS.map((m) => (
          <ModelCard key={m.id} model={m} />
        ))}
      </Reveal>
    </Section>
  );
}

function ModelCard({ model }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={model.href}
      target="_blank"
      rel="noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        border: "1px solid var(--border)",
        borderRadius: 10,
        padding: 26,
        background: hovered ? "var(--bg-elev)" : "transparent",
        borderColor: hovered ? "var(--border-strong)" : "var(--border)",
        transition: "background 200ms, border-color 200ms",
        position: "relative",
        overflow: "hidden",
        display: "block",
        color: "inherit",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 18, gap: 16 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span
            style={{
              fontFamily: "var(--mono)",
              fontSize: 11,
              padding: "3px 8px",
              borderRadius: 4,
              background: model.kind === "From scratch" ? "color-mix(in oklch, var(--accent) 14%, var(--bg))" : "var(--bg-sunken)",
              color: model.kind === "From scratch" ? "var(--accent)" : "var(--fg-muted)",
              border: `1px solid ${model.kind === "From scratch" ? "var(--accent)" : "var(--border)"}`,
              letterSpacing: "0.04em",
            }}
          >
            {model.kind}
          </span>
          <span style={{ fontFamily: "var(--mono)", fontSize: 11, color: "var(--fg-subtle)" }}>{model.base}</span>
        </div>
        <span style={{ fontFamily: "var(--mono)", fontSize: 11, color: "var(--fg-subtle)", display: "inline-flex", alignItems: "center", gap: 6 }}>
          🤗 view weights
        </span>
      </div>
      <h3 style={{ margin: "0 0 10px", fontSize: 22, fontWeight: 500, letterSpacing: "-0.015em" }}>{model.name}</h3>
      <p style={{ margin: "0 0 18px", color: "var(--fg-muted)", fontSize: 14, lineHeight: 1.55 }}>{model.summary}</p>
      <div style={{ display: "flex", borderTop: "1px solid var(--border)", paddingTop: 14, gap: 0 }}>
        {model.metrics.map((m, i) => (
          <div
            key={m.k}
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: 4,
              borderLeft: i > 0 ? "1px solid var(--border)" : "none",
              paddingLeft: i > 0 ? 16 : 0,
            }}
          >
            <span style={{ fontFamily: "var(--mono)", fontSize: 10, color: "var(--fg-subtle)", letterSpacing: "0.06em", textTransform: "uppercase" }}>{m.k}</span>
            <span style={{ fontFamily: "var(--mono)", fontSize: 17, color: "var(--fg)", fontVariantNumeric: "tabular-nums" }}>{m.v}</span>
          </div>
        ))}
      </div>
    </a>
  );
}

// ============================================================
// Stack
// ============================================================
function Stack() {
  return (
    <Section id="stack" num="03" title="Stack" kicker="day-to-day tools">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 0,
          border: "1px solid var(--border)",
          borderRadius: 10,
          overflow: "hidden",
        }}
        className="stack-grid"
      >
        {STACK.map((g, i) => (
          <div
            key={g.group}
            style={{
              padding: "26px 24px",
              borderRight: i % 3 !== 2 ? "1px solid var(--border)" : "none",
              borderBottom: i < STACK.length - 3 ? "1px solid var(--border)" : "none",
              background: "var(--bg-elev)",
            }}
          >
            <div
              style={{
                fontFamily: "var(--mono)",
                fontSize: 11,
                color: "var(--fg-subtle)",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                marginBottom: 14,
              }}
            >
              {g.group}
            </div>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 8 }}>
              {g.items.map((it) => (
                <li
                  key={it}
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 13.5,
                    color: "var(--fg)",
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <span style={{ width: 4, height: 4, background: "var(--accent)", transform: "rotate(45deg)" }} />
                  {it}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

// ============================================================
// Experience
// ============================================================
function Experience() {
  return (
    <Section id="experience" num="04" title="Experience">
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {EXPERIENCE.map((role, i) => (
          <ExperienceRow key={i} role={role} />
        ))}
      </div>
    </Section>
  );
}

function ExperienceRow({ role }) {
  const [open, setOpen] = useState(false);
  return (
    <Reveal>
      <div style={{ border: "1px solid var(--border)", borderRadius: 10, overflow: "hidden", background: "var(--bg-elev)" }}>
        <button
          onClick={() => setOpen((o) => !o)}
          style={{
            width: "100%",
            display: "grid",
            gridTemplateColumns: "180px 1fr auto",
            gap: 24,
            alignItems: "center",
            padding: "24px 28px",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            textAlign: "left",
            color: "inherit",
            font: "inherit",
          }}
          className="exp-row"
        >
          <span style={{ fontFamily: "var(--mono)", fontSize: 12, color: "var(--fg-muted)" }}>{role.period}</span>
          <span style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <span style={{ fontSize: 18, fontWeight: 500, letterSpacing: "-0.01em" }}>{role.role}</span>
            <span style={{ color: "var(--fg-muted)", fontSize: 14 }}>
              {role.org} <span style={{ color: "var(--fg-subtle)" }}>· {role.tags.join(" · ")}</span>
            </span>
          </span>
          <span style={{ fontFamily: "var(--mono)", fontSize: 12, color: "var(--fg-muted)", display: "inline-flex", alignItems: "center", gap: 6 }}>
            {open ? "collapse" : "expand"}
            <span style={{ display: "inline-block", transition: "transform 200ms", transform: open ? "rotate(180deg)" : "none" }}>▾</span>
          </span>
        </button>
        <div
          style={{
            maxHeight: open ? 600 : 0,
            transition: "max-height 360ms cubic-bezier(0.2,0.7,0.2,1)",
            overflow: "hidden",
          }}
        >
          <div style={{ padding: "0 28px 26px", borderTop: "1px solid var(--border)", paddingTop: 22, color: "var(--fg-muted)" }}>
            <p style={{ margin: "0 0 16px", fontSize: 15, lineHeight: 1.55, maxWidth: 720 }}>{role.blurb}</p>
            <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
              {role.bullets.map((b, j) => (
                <li key={j} style={{ display: "flex", gap: 12, fontSize: 14, lineHeight: 1.5 }}>
                  <span style={{ fontFamily: "var(--mono)", color: "var(--accent)", fontSize: 12, marginTop: 4 }}>{String(j + 1).padStart(2, "0")}</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

// ============================================================
// About
// ============================================================
function About() {
  return (
    <Section id="about" num="05" title="About">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(0, 320px) minmax(0, 1fr)",
          gap: 56,
          alignItems: "start",
        }}
        className="about-grid"
      >
        <Reveal>
          <div
            style={{
              border: "1px solid var(--border)",
              borderRadius: 10,
              overflow: "hidden",
              background: "var(--bg-sunken)",
              aspectRatio: "4 / 5",
              position: "relative",
            }}
          >
            <img
              src="/headshot.png"
              alt="Raihan headshot"
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </Reveal>
        <Reveal>
          <div style={{ fontFamily: "var(--mono)", fontSize: 11, color: "var(--fg-subtle)", letterSpacing: "0.06em", marginBottom: 18 }}>
            BIO · DHAKA, BD
          </div>
          <p style={{ fontSize: 19, lineHeight: 1.55, color: "var(--fg)", margin: "0 0 18px" }}>
            I started out shipping production web apps, drifted into transformers, and never came back. The middle ground between{" "}
            <em style={{ color: "var(--accent)", fontStyle: "normal" }}>training models from scratch</em> and{" "}
            <em style={{ color: "var(--accent)", fontStyle: "normal" }}>shipping them to real users</em> is where I do my best work.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.65, color: "var(--fg-muted)", margin: 0 }}>
            Today I lead engineering at <a href="https://clarioscope.ai/" target="_blank" rel="noreferrer" style={{ color: "var(--fg)", borderBottom: "1px dashed currentColor" }}>ClarioScope AI</a> — a HIPAA-compliant healthcare practice growth platform. I'm especially interested in parameter-efficient training, on-device inference, and language design (
            <a href="https://www.ilma-lang.dev/" target="_blank" rel="noreferrer" style={{ color: "var(--accent)" }}>ILMA Lang</a>
            ) — a beginner-friendly programming language I built for the Muslim community, especially children, with Islamic-aware standard library modules.
          </p>

          <div style={{ marginTop: 36, display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 14 }} className="about-facts">
            <Fact k="LOCATION" v={PROFILE.location} />
            <Fact k="ROLE" v="CTO · AI/ML Engineer" />
            <Fact k="LANGUAGES" v="EN · BN" />
            <Fact k="AVAILABILITY" v="Senior / Staff roles" />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

function Fact({ k, v }) {
  return (
    <div style={{ border: "1px solid var(--border)", borderRadius: 8, padding: "14px 16px", background: "var(--bg-elev)" }}>
      <div style={{ fontFamily: "var(--mono)", fontSize: 10, color: "var(--fg-subtle)", letterSpacing: "0.06em", marginBottom: 4 }}>{k}</div>
      <div style={{ fontSize: 14, color: "var(--fg)" }}>{v}</div>
    </div>
  );
}

// ============================================================
// Contact / Footer
// ============================================================
function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: "140px 32px 60px",
        borderTop: "1px solid var(--border)",
        background: "var(--bg-sunken)",
      }}
    >
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <Reveal>
          <div style={{ fontFamily: "var(--mono)", fontSize: 12, color: "var(--fg-subtle)", letterSpacing: "0.04em", marginBottom: 28 }}>
            06 · CONTACT
          </div>
          <h2
            style={{
              margin: 0,
              fontSize: "clamp(48px, 7vw, 96px)",
              fontWeight: 500,
              letterSpacing: "-0.03em",
              lineHeight: 0.98,
              maxWidth: 1100,
            }}
          >
            Got something ambitious
            <br />
            <span style={{ color: "var(--fg-muted)" }}>you want to build?</span>
          </h2>
          <a
            href={`mailto:${PROFILE.email}`}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 14,
              marginTop: 40,
              fontFamily: "var(--mono)",
              fontSize: 22,
              color: "var(--accent)",
              borderBottom: "1px solid var(--accent)",
              paddingBottom: 4,
            }}
          >
            {PROFILE.email} →
          </a>
        </Reveal>

        <div
          style={{
            marginTop: 100,
            paddingTop: 32,
            borderTop: "1px solid var(--border)",
            display: "grid",
            gridTemplateColumns: "1fr auto",
            gap: 24,
            alignItems: "center",
            fontFamily: "var(--mono)",
            fontSize: 12,
            color: "var(--fg-muted)",
          }}
          className="footer-row"
        >
          <div>© 2026 · raihan · all rights reserved</div>
          <div style={{ display: "flex", gap: 18 }}>
            {PROFILE.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                style={{ color: "var(--fg-muted)", transition: "color 160ms" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--fg)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--fg-muted)")}
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// App
// ============================================================
function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "light";
    const saved = window.localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") return saved;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      window.localStorage.setItem("theme", theme);
    } catch (e) {}
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <>
      <TopNav theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <StatRow />
        <Work />
        <Models />
        <Stack />
        <Experience />
        <About />
        <Contact />
      </main>
    </>
  );
}

export default App;
