import React from 'react'

export default function EtiquetaHerramienta({ nombre, icon }) {
  return (
    <div className="group relative flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all duration-200 cursor-default">
      <img
        src={icon}
        alt={nombre}
        className="w-6 h-6 object-contain"
      />
      {/* Tooltip */}
      <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none z-10">
        {nombre}
      </span>
    </div>
  )
}
