import React from 'react'
import Etiqueta from '../Etiqueta/Etiqueta'

export default function Proyecto() {
    const tecologias = ["react", "html", "css", "javascript"];
  return (
    <div class=" w-100 group relative rounded-lg bg-gray-800 p-6">
        <a href="https://tp1bacinstu.netlify.app/" class="block">
            <div class="overflow-hidden rounded-lg">
                <img 
                    class="w-full transition-transform duration-500 group-hover:scale-105" 
                    src="./../../public/PortadaGestorPeliculasySeries.PNG" 
                    alt="Imagen del proyecto"
                />
            </div>

            <div class="mt-5">
                <h1 class="text-xl font-bold text-white transition-colors group-hover:text-blue-400">
                    MovieTracker
                </h1>
                
                <p class="mt-3 text-sm leading-relaxed text-zinc-400">
                    Aplicación web interactiva diseñada para la gestión personalizada de bibliotecas de cine. El proyecto permite a los usuarios centralizar sus películas, organizarlas por estado de visualización y mantener un registro dinámico de su progreso como espectador.
                </p>

                <div class="mt-6 flex flex-wrap gap-2">
                    {tecologias.map((tecnologia, index) => (
                        <Etiqueta key={index} nombre={tecnologia} />
                    ))}
                </div>
            </div>
        </a>
        </div>
  )
}
