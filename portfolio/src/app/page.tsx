"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import "./globals.css";
import FadeIn from "@/components/FadeIn";
import Image from "next/image";

/* ====== Helpers ====== */
const Section = ({ id, title, children }: { id: string; title?: string; children: React.ReactNode }) => (
  <section id={id} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    {title && (
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-8"
      >
        {title}
      </motion.h2>
    )}
    {children}
  </section>
);

const Tag = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium">
    {children}
  </span>
);

/* ====== DATA: proyectos (con slug y cover locales) ====== */
const projectsSeed = [
  {
    id: "p1",
    title: "Star Wars Blog",
    tags: ["React", "Bootstrap", "API REST", "Front-end"],
    cover: "/images/StarWarsBlog.webp",
    year: 2023,
    slug: "StarWarsBlog",
  },
  {
    id: "p2",
    title: "Rural Experience",
    tags: ["React", "Flask", "API REST", "Full-stack"],
    cover: "/images/StarWarsBlog.webp",
    year: 2023,
    slug: "RuralExperience",
  },
  {
    id: "p3",
    title: "Bubi Crochet",
    tags: ["HTML5", "CSS3", "JavaScript", "Sitio web estático"],
    cover: "/images/StarWarsBlog.webp",
    year: 2025,
    slug: "BubiCrochet",
  },
  {
    id: "p4",
    title: "Web Template 2",
    tags: ["HTML5", "CSS3", "Bootstrap", "Diseño responsivo"],
    cover: "/images/StarWarsBlog.webp",
    year: 2025,
    slug: "WebTemplate2",
  },
];

/* ====== PAGE ====== */
export default function PortfolioStarter() {
  const [query, setQuery] = useState("");
  const [year, setYear] = useState<string | "all">("all");
  const [tag, setTag] = useState<string | "all">("all");
  const [gridCols, setGridCols] = useState(3);

  const tags = useMemo(() => {
    const t = new Set<string>();
    projectsSeed.forEach((p) => p.tags.forEach((tt) => t.add(tt)));
    return ["all", ...Array.from(t)];
  }, []);

  const years = useMemo(() => {
    const y = new Set<number>();
    projectsSeed.forEach((p) => y.add(p.year));
    return ["all", ...Array.from(y).sort((a, b) => (b as number) - (a as number))];
  }, []);

  const filtered = projectsSeed.filter((p) => {
    const byQuery = !query || p.title.toLowerCase().includes(query.toLowerCase());
    const byYear = year === "all" || p.year === year;
    const byTag = tag === "all" || p.tags.includes(tag);
    return byQuery && byYear && byTag;
  });

  return (
    <div className="min-h-screen bg-white text-black antialiased">
      {/* Navbar */}
  <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur border-b border-neutral-200 z-50">
  <div className="max-w-6xl mx-auto h-16 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
    <a href="#home" className="font-bold uppercase tracking-wide text-sm no-underline">
      Federico Matovelle — Portfolio
    </a>
    <nav className="hidden sm:flex items-center gap-6 text-sm uppercase tracking-wide">
      <a className="hover:opacity-70 no-underline" href="#work">Work</a>
      <a className="hover:opacity-70 no-underline" href="#reel">Reel</a>
      <a className="hover:opacity-70 no-underline" href="#about">About</a>
      <a className="hover:opacity-70 no-underline" href="#contact">Contact</a>
    </nav>
  </div>
</header>
<div className="h-16" />



      {/* Hero */}
<Section id="home">
  <div className="grid lg:grid-cols-2 gap-12 items-center">
    {/* Texto */}
    <div>
      <FadeIn y={12}>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05]">
          Creative portfolio for design, photo, and web.
        </h1>
      </FadeIn>

      <FadeIn delay={0.1} y={10}>
        <p className="mt-6 text-base sm:text-lg text-neutral-600 max-w-prose">
          Minimal, high-contrast layout with a clean grid of projects, subtle motion, and crisp typography — inspired by styles like AcidThermal.
        </p>
      </FadeIn>

      <FadeIn delay={0.2} y={8}>
        <div className="mt-8 flex flex-wrap gap-6">
          <a
            href="#work"
            className="underline decoration-neutral-300 hover:decoration-neutral-800 underline-offset-4"
          >
            See work →
          </a>
          <a
            href="#contact"
            className="underline decoration-neutral-300 hover:decoration-neutral-800 underline-offset-4"
          >
            Get in touch →
          </a>
        </div>
      </FadeIn>
    </div>

    {/* Imagen */}
    <FadeIn y={12}>
      <div className="relative">
        <div className="aspect-[4/3] rounded-lg overflow-hidden border border-neutral-200">
          {/* Usa tu imagen real cuando la tengas en /public */}
          <Image
            src="/starwars.jpg"            // cámbiala por tu hero real
            alt="Hero visual"
            width={1200}
            height={900}
            className="w-full h-auto object-cover"
            priority
          />
        </div>
      </div>
    </FadeIn>
  </div>
</Section>

      {/* Work / Projects */}
      <FadeIn>
        <Section id="work" title="Selected Work">
          {/* Controles */}
          <div className="mb-8 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <input
                aria-label="Search projects"
                placeholder="Search projects…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full sm:w-64 rounded-2xl border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black/20"
              />
              <select
                value={year as any}
                onChange={(e) => setYear((e.target.value as any) === "all" ? "all" : Number(e.target.value))}
                className="rounded-2xl border px-3 py-2 text-sm"
              >
                {years.map((y) => (
                  <option key={y as any} value={y as any}>
                    {y === "all" ? "All years" : y}
                  </option>
                ))}
              </select>
              <select
                value={tag as any}
                onChange={(e) => setTag(e.target.value as any)}
                className="rounded-2xl border px-3 py-2 text-sm"
              >
                {tags.map((t) => (
                  <option key={t} value={t}>
                    {t === "all" ? "All tags" : t}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-center gap-2 text-sm">
              <span className="hidden sm:inline">Grid</span>
              <button onClick={() => setGridCols(2)} className={`px-3 py-1 rounded-full border ${gridCols === 2 ? "bg-black text-white" : "hover:bg-neutral-50"}`}>2</button>
              <button onClick={() => setGridCols(3)} className={`px-3 py-1 rounded-full border ${gridCols === 3 ? "bg-black text-white" : "hover:bg-neutral-50"}`}>3</button>
              <button onClick={() => setGridCols(4)} className={`px-3 py-1 rounded-full border ${gridCols === 4 ? "bg-black text-white" : "hover:bg-neutral-50"}`}>4</button>
            </div>
          </div>

          {/* Grid */}
<FadeIn delay={0.05}>
  <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-${gridCols} gap-6`}>
    {filtered.map((p) => (
      <motion.div
        key={p.id}
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Link
          href={`/projects/${p.slug}`}
          className="group rounded-3xl border overflow-hidden hover:shadow-sm transition bg-white block"
        >
          <div className="relative aspect-[4/3] w-full">
            <Image
              src={p.cover} // ejemplo: "/StarWarsBlog.webp"
              alt={p.title}
              fill
              className="object-cover transition duration-300 group-hover:opacity-90"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-black/5" />
          </div>
          <div className="p-4 flex items-center justify-between">
            <div>
              <h3 className="font-semibold tracking-tight">{p.title}</h3>
              <div className="mt-2 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            </div>
            <span className="text-sm text-neutral-500">{p.year}</span>
          </div>
        </Link>
      </motion.div>
    ))}
  </div>
</FadeIn>
        </Section>
      </FadeIn>

      {/* Reel / Video */}
      <Section id="reel" title="Reel / Video">
        <div className="rounded-3xl border overflow-hidden">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
          <div className="p-4 text-sm text-neutral-600 border-t">
            Replace with your reel or a project breakdown.
          </div>
        </div>
      </Section>

      {/* About */}
      <Section id="about" title="About Me">
        <FadeIn>
          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-1">
              <div className="aspect-square rounded-3xl border overflow-hidden">
                <img src="https://placehold.co/800x800/svg?text=Your+Portrait" alt="Portrait" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="md:col-span-2">
              <p className="text-lg leading-relaxed">
                Soy Federico, creativo multidisciplinar en Barcelona. Trabajo en diseño, fotografía, vídeo y web. Me enfoco en soluciones limpias y directas, con énfasis en composición, ritmo y una estética funcional.
              </p>
              <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-sm">
                <li className="rounded-2xl border px-4 py-3">Servicios: Dirección de arte, Branding, Foto/Video, Web</li>
                <li className="rounded-2xl border px-4 py-3">Herramientas: Figma, Adobe, DaVinci, VS Code</li>
                <li className="rounded-2xl border px-4 py-3">Disponible para freelance y colaboraciones</li>
                <li className="rounded-2xl border px-4 py-3">Basado en Barcelona (CET)</li>
              </ul>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Contact">
        <FadeIn>
          <form className="grid md:grid-cols-2 gap-4"
          autoComplete="off"
          suppressHydrationWarning >
            <input className="rounded-2xl border px-4 py-3" placeholder="Nombre" />
            <input className="rounded-2xl border px-4 py-3" placeholder="Email" type="email" />
            <input className="md:col-span-2 rounded-2xl border px-4 py-3" placeholder="Asunto" />
            <textarea className="md:col-span-2 rounded-2xl border px-4 py-3 min-h-[140px]" placeholder="Mensaje" />
            <button type="submit" className="md:col-span-2 rounded-2xl border px-4 py-3 hover:shadow-sm transition">Enviar</button>
          </form>

        </FadeIn>
      </Section>

      {/* Footer */}
      <footer className="border-t py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <p>© {new Date().getFullYear()} Federico. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:underline">Instagram</a>
            <a href="#" className="hover:underline">Behance</a>
            <a href="#" className="hover:underline">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
