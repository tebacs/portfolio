import React from 'react'
import Etiqueta from '../Etiqueta/Etiqueta'

export default function Proyecto({ title = 'Proyecto', description = '', href = '#', image = '/PortadaGestorPeliculasySeries.PNG', tags = [] }) {
  return (
    <article className="group overflow-hidden rounded-[2rem] border border-[var(--color-gris)] bg-[rgba(255,255,255,0.03)] shadow-[0_20px_100px_-90px_rgba(0,0,0,0.7)] transition duration-300 hover:-translate-y-1 hover:border-[var(--color-primary)]">
      <a href={href} target="_blank" rel="noreferrer" className="block">
        <div className="overflow-hidden rounded-[1.75rem]">
          <img className="h-72 w-full object-cover transition duration-500 group-hover:scale-105" src={image} alt={title} />
        </div>
        <div className="space-y-4 p-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-[rgba(15,15,169,0.12)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-primary)]">
            Proyecto
          </div>
          <h3 className="text-2xl font-semibold text-white">{title}</h3>
          <p className="text-[var(--color-grisclaro)] leading-7">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <Etiqueta key={index} nombre={tag} />
            ))}
          </div>
        </div>
      </a>
    </article>
  )
}
