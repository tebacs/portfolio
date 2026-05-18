import React from 'react'

export default function Boton({ texto, className = '', ...props }) {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-full bg-[var(--color-primary)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[rgba(15,15,169,0.9)] ${className}`}
      {...props}
    >
      {texto}
    </button>
  )
}
