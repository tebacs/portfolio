// Herramientas/Herramientas.jsx
import React from 'react'
import EtiquetaHerramienta from '../EtiquetaHerramienta/EtiquetaHerramienta'
import herramientas from '../../../herramientas.json'

export default function Herramientas() {
  return (
    <div className="flex flex-wrap gap-4 pb-2 justify-center">
      {herramientas.map((herramienta, index) => (
        <EtiquetaHerramienta
          key={index}
          nombre={herramienta.nombre}
          icon={herramienta.icon}
        />
      ))}
    </div>
  )
}