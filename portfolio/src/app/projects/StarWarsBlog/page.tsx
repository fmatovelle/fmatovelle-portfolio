import Image from "next/image";
import Link from "next/link";

export default function ProjectPage() {
  return (
    <main>
      {/* Hero full-bleed */}
      <div className="relative w-full h-[60vh]">
        <Image src="/images/StarWarsBlog.webp" alt="Star Wars Blog" fill className="object-cover" priority />
      </div>

      {/* Texto editorial */}
      <div className="max-w-3xl mx-auto px-4 py-section">
        <h1 className="text-5xl font-bold tracking-tight">Star Wars Blog</h1>
        <p className="text-sm text-neutral-500 mt-2 uppercase tracking-wide">
          React · Bootstrap · API REST · 2023
        </p>

        <p className="mt-8 text-lg leading-relaxed max-w-prose">
          Aplicación tipo blog que explora datos del universo de Star Wars (personajes, planetas, vehículos)
          desde una API pública. Permite navegar, ver fichas y guardar favoritos.
        </p>

        <div className="mt-10 flex gap-6">
          <Link href="/" className="underline underline-offset-4">← Volver al portfolio</Link>
          <a href="https://github.com/fmatovelle/StarWarsBlog" target="_blank" rel="noopener"
             className="underline underline-offset-4">Ver código en GitHub ↗</a>
        </div>
      </div>
    </main>
  );
}
