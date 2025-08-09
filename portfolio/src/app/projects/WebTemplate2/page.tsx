import Image from "next/image";
import Link from "next/link";

export default function ProjectPage() {
  return (
    <main>
      {/* Hero imagen a 60vh */}
      <div className="relative w-full h-[60vh]">
        <Image src="/images/StarWarsBlog.webp" alt="WebTemplate2" fill className="object-cover" priority />
      </div>

      {/* Contenido centrado y editorial */}
      <div className="max-w-3xl mx-auto px-4 py-section">
        <h1 className="text-5xl font-bold tracking-tight"> WebTemplate2 </h1>
        <p className="text-sm text-neutral-500 mt-2 uppercase tracking-wide">
          2022 · HTML5, CSS3, Bootstrap, Diseño responsivo
        </p>

        <p className="mt-8 text-lg leading-relaxed max-w-prose">
          Plantilla base moderna para proyectos web. Diseñada con Bootstrap y HTML5 para un diseño adaptable.
        </p>

        <div className="mt-10 flex gap-6">
          <Link href="/" className="underline underline-offset-4">← Volver al portfolio</Link>
          <a href="https://github.com/fmatovelle/webtemplate2" target="_blank" rel="noopener" className="underline underline-offset-4">
            Ver código en GitHub ↗
          </a>
        </div>

        {/* (Opcional) imágenes adicionales grandes */}
        {/* <div className="mt-16 space-y-10">
          <Image src="/starwars-extra1.jpg" alt="" width={1600} height={1066} className="w-full h-auto rounded-lg" />
          <Image src="/starwars-extra2.jpg" alt="" width={1600} height={1066} className="w-full h-auto rounded-lg" />
        </div> */}
      </div>
    </main>
  );
}





