import React from 'react'

export default function Nav() {
  return (
    <header className="border-b border-[var(--color-gris)] bg-[rgba(16,16,16,0.88)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#sobre-mi" className="text-lg font-semibold text-white">
          Matias Bacsay
        </a>
        <nav className="flex items-center gap-5 text-sm text-[var(--color-grisclaro)]">
          <a href="#proyectos" className="transition hover:text-white">
            Proyectos
          </a>
          <a href="#sobre-mi" className="transition hover:text-white">
            Sobre mí
          </a>
          <a href="#contacto" className="transition hover:text-white">
            Contacto
          </a>
        </nav>
      </div>
    </header>
  )
}
