import React from 'react'

export default function Etiqueta({ nombre }) {
  return (
    <span className="inline-flex items-center rounded-full border border-[var(--color-gris)] bg-[rgba(255,255,255,0.04)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-texto)] transition hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]">
      {nombre}
    </span>
  )
}
