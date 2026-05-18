import React from 'react'
import Etiqueta from '../Etiqueta/Etiqueta'

export default function Proyecto({ title = 'Proyecto', type = 'Proyecto', description = '', link = '#', gitLink = '#', image = '/PortadaGestorPeliculasySeries.PNG', tags = [] }) {
  return (
    /* 1. Agregamos 'flex flex-col' a la tarjeta para que sus dos hijos directos (imagen y texto) puedan usar Flexbox */
    <article className="group flex flex-col overflow-hidden rounded-[2rem] border border-[var(--color-gris)] bg-[rgba(255,255,255,0.03)] shadow-[0_20px_100px_-90px_rgba(0,0,0,0.7)] transition duration-300 hover:-translate-y-1 hover:border-[var(--color-primary)]">
      
      <div className="overflow-hidden rounded-[1.75rem]">
        <img className="h-72 w-full object-cover transition duration-500 group-hover:scale-105" src={image} alt={title} />
      </div>

      {/* 2. Transformamos este div en 'flex flex-col flex-1'. El 'flex-1' hace que este contenedor ocupe TODO el espacio vertical restante de la tarjeta */}
      <div className="flex flex-col flex-1 space-y-4 p-6">
        
        <div className="inline-flex self-start items-center gap-2 rounded-full bg-[rgba(15,15,169,0.12)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-primary)]">
          {type}
        </div>
        
        <h3 className="text-2xl font-semibold text-white">{title}</h3>
        
        <p className="text-[var(--color-grisclaro)] leading-7">{description}</p>
        
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Etiqueta key={index} nombre={tag} />
          ))}
        </div>
        
        {/* 3. Agregamos 'mt-auto'. En Flexbox, un margen automático empuja el elemento hasta el extremo opuesto, mandando los botones al fondo de la tarjeta */}
        <div className="flex items-center gap-3 p-2 mt-auto rounded-full bg-[rgba(255,255,255,0.04)]">
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="flex-1 text-center rounded-full bg-[var(--color-primary)] px-4 py-2 text-sm font-semibold text-white transition hover:opacity-80"
          >
            Ver proyecto
          </a>
          <a
            href={gitLink}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-full border border-[var(--color-gris)] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[var(--color-grisHover)]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            GitHub
          </a>
        </div>
      </div>
    </article>
  )
}