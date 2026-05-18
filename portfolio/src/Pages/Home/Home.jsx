import React from 'react'
import Nav from '../../Components/Nav/Nav'
import Proyecto from '../../Components/Proyecto/Proyecto'
import Herramientas from '../../Components/Herramientas/Herramientas'
import Proyectos from '../../../projects.json'



export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--color-oscuro)] text-[var(--color-texto)]">
      <Nav />

      <main className="mx-auto max-w-6xl px-6 pb-16 pt-10">
        <section id="sobre-mi" className="overflow-hidden rounded-[2rem] border border-[var(--color-gris)] bg-[rgba(255,255,255,0.03)] p-8 shadow-[0_30px_120px_-80px_rgba(15,15,169,0.7)] backdrop-blur-xl">
          <div className="grid gap-8 lg:grid-cols-[280px_minmax(0,1fr)] lg:items-center">
            <div className="flex items-center justify-center">
              <img
                className="h-72 w-72 rounded-[2rem] object-cover shadow-[0_30px_80px_-40px_rgba(0,0,0,0.6)]"
                src="/imagenPerfil.jpeg"
                alt="Foto de perfil"
              />
            </div>
            <div className="space-y-6">
              <div className="inline-flex flex-wrap items-center gap-3 rounded-full border border-[var(--color-primary)] bg-[rgba(15,15,169,0.16)] px-4 py-2 text-sm text-[var(--color-primary)]">
                <span className="font-semibold">Desarrollador Full-Stack</span>
                <span className="text-[0.85rem] text-[var(--color-grisclaro)]">React · PHP · Tailwind · UI moderno</span>
              </div>

              <div className="space-y-4">
                <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">Matias Bacsay</h1>
                <p className="max-w-2xl text-base leading-8 text-[var(--color-grisclaro)]">
                  Impulsado por la curiosidad y el código. Construyo experiencias web completas desde la interfaz hasta la lógica del servidor, con cuidado en el detalle visual y la usabilidad.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="#proyectos"
                  className="inline-flex items-center justify-center rounded-full bg-[var(--color-primary)] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[rgba(15,15,169,0.9)]"
                >
                  Ver proyectos
                </a>
                <a
                  href="#contacto"
                  className="inline-flex items-center justify-center rounded-full border border-[var(--color-gris)] px-7 py-3 text-sm font-semibold text-[var(--color-texto)] transition hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
                >
                  Contacto
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-12 grid gap-8 lg:grid-cols-3">
          <div className="rounded-[1.75rem] border border-[var(--color-gris)] bg-[rgba(255,255,255,0.03)] p-8">
            <h2 className="text-xl font-semibold text-white">Sobre mí</h2>
            <p className="mt-4 text-[var(--color-grisclaro)] leading-7">
              Me especializo en crear interfaces limpias, componentes reutilizables y experiencias responsivas que se ven bien y funcionan rápido.
            </p>
          </div>
          <div className="rounded-[1.75rem] border border-[var(--color-gris)] bg-[rgba(255,255,255,0.03)] p-8">
            <h2 className="text-xl font-semibold text-white">Resultados</h2>
            <ul className="mt-4 space-y-3 text-[var(--color-grisclaro)]">
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-[var(--color-primary)]" />
                Proyectos con UI moderna y experiencia móvil.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-[var(--color-primary)]" />
                Herramientas reales: React, Tailwind, PHP, SQL y Git.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-[var(--color-primary)]" />
                Componentes limpios, animaciones sutiles y diseño profesional.
              </li>
            </ul>
          </div>
          <div className="rounded-[1.75rem] border border-[var(--color-gris)] bg-[rgba(255,255,255,0.03)] p-8">
            <h2 className="text-xl font-semibold text-white">Tecnologías</h2>
            <p className="mt-4 text-[var(--color-grisclaro)] leading-7">
              Trabajo con los elementos fundamentales del desarrollo web para crear proyectos sólidos, escalables y estéticos.
            </p>
          </div>
        </section>

        <section id="proyectos" className="mt-16">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.22em] text-[var(--color-primary)]">Proyectos destacados</p>
              <h2 className="mt-3 text-3xl font-semibold text-white">Trabajo reciente</h2>
            </div>
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {Proyectos.map((proyecto, index) => (
              <Proyecto key={index} {...proyecto} />
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-[2rem] border border-[var(--color-gris)] bg-[rgba(255,255,255,0.04)] p-4">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-center">
            <div>
              <h2 className="mt-3 text-3xl font-semibold text-white">Mi stack</h2>
            </div>
          </div>
          <div className="mt-8">
            <Herramientas />
          </div>
        </section>

        <section id="contacto" className="mt-16 rounded-[2rem] border border-[var(--color-gris)] bg-[rgba(255,255,255,0.03)] p-8 text-[var(--color-grisclaro)]">
          <h2 className="text-3xl font-semibold text-white">Contacto</h2>
          <p className="mt-4 max-w-2xl leading-7">
            Estoy listo para nuevas oportunidades y proyectos. Si buscas un desarrollador que combine estilo, rendimiento y orden, hablemos.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="mailto:matias@example.com"
              className="inline-flex rounded-full bg-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[rgba(15,15,169,0.9)]"
            >
              Enviar correo
            </a>
            <a
              href="#proyectos"
              className="inline-flex rounded-full border border-[var(--color-gris)] px-6 py-3 text-sm font-semibold text-[var(--color-texto)] transition hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
            >
              Ver proyectos
            </a>
          </div>
        </section>
      </main>
    </div>
  )
}
