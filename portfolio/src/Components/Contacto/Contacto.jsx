import { useState } from 'react';
import {send} from '@emailjs/browser';


export default function Contacto() {
 const [formData, setFormData] = useState({ nombre: '', email: '', mensaje: '' });
  const [cargando, setCargando] = useState(false);
  const [enviado, setEnviado] = useState(false);

  const [copiado, setCopiado] = useState(false);

const copiarEmail = () => {
  navigator.clipboard.writeText('matibacsay@gmail.com');
  setCopiado(true);
  
  // Vuelve al texto original después de 3 segundos
  setTimeout(() => setCopiado(false), 3000);
};

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 2. Modificamos el manejador del envío
  const handleSubmit = (e) => {
    e.preventDefault();
    setCargando(true);

    // Los IDs que te dio la página de EmailJS
    const SERVICE_ID = 'service_ljpwjfm';
    const TEMPLATE_ID = 'template_4vspd4j';
    const PUBLIC_KEY = 'C_-oGKveDR8edFRi6';

    // Enviamos el formulario pasando los datos de nuestro estado de React
    send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY)
      .then((response) => {
        console.log('¡Éxito!', response.status, response.text);
        setEnviado(true);
        setFormData({ nombre: '', email: '', mensaje: '' }); // Limpiamos campos
        setTimeout(() => setEnviado(false), 5000);
      })
      .catch((error) => {
        console.error('Error al enviar:', error);
        alert('Hubo un problema al enviar el mensaje. Probá de nuevo o escribime por redes.');
      })
      .finally(() => {
        setCargando(false);
      });
  };

  return (
    <section id="contacto" className="mt-16 rounded-[2rem] border border-[var(--color-gris)] bg-[rgba(255,255,255,0.03)] p-8 text-[var(--color-grisclaro)]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Columna Izquierda: Información y texto de presentación */}
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-semibold text-white">Contacto</h2>
            <p className="mt-4 leading-7">
              Estoy listo para nuevas oportunidades y proyectos. Si buscas un desarrollador que combine estilo, rendimiento y orden, hablemos.
            </p>
          </div>
          
          {/* Enlaces de contacto alternativos */}
          <div className="mt-8 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={copiarEmail}
              className="inline-flex rounded-full bg-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-80"
            >
              {copiado ? '¡Copiado!' : 'Copiar email'}
            </button>
            {/* Podés reemplazar el numeral por el link real a tu perfil */}
            <a 
              href="https://www.linkedin.com/in/matias-bacsay-38817a1b1/" 
              target="_blank" 
              rel="noreferrer" 
              className="inline-flex rounded-full border border-[var(--color-gris)] px-6 py-3 text-sm font-semibold text-[var(--color-texto)] transition hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Columna Derecha: El Formulario Reactivo */}
        <form 
          onSubmit={handleSubmit} 
          className="flex flex-col gap-4 bg-[rgba(255,255,255,0.01)] p-6 rounded-xl border border-[rgba(255,255,255,0.05)] shadow-inner"
        >
          <div>
            <label className="block text-xs uppercase tracking-wider text-[var(--color-texto)] mb-1 font-medium" htmlFor="nombre">
              Nombre
            </label>
            <input 
              type="text" 
              id="nombre"
              name="nombre"
              required
              value={formData.nombre}
              onChange={handleChange}
              className="w-full bg-[rgba(255,255,255,0.03)] border border-[var(--color-gris)] rounded-lg p-2.5 text-white text-sm focus:outline-none focus:border-[var(--color-primary)] transition"
              placeholder="Tu nombre"
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-[var(--color-texto)] mb-1 font-medium" htmlFor="email">
              Email
            </label>
            <input 
              type="email" 
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-[rgba(255,255,255,0.03)] border border-[var(--color-gris)] rounded-lg p-2.5 text-white text-sm focus:outline-none focus:border-[var(--color-primary)] transition"
              placeholder="tu@email.com"
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-[var(--color-texto)] mb-1 font-medium" htmlFor="mensaje">
              Mensaje
            </label>
            <textarea 
              id="mensaje"
              name="mensaje"
              rows="3" 
              required
              value={formData.mensaje}
              onChange={handleChange}
              className="w-full bg-[rgba(255,255,255,0.03)] border border-[var(--color-gris)] rounded-lg p-2.5 text-white text-sm focus:outline-none focus:border-[var(--color-primary)] transition resize-none"
              placeholder="¿En qué te puedo ayudar?"
            ></textarea>
          </div>

          <button 
            type="submit" 
            disabled={cargando}
            className="w-full rounded-lg bg-white py-2.5 text-sm font-semibold text-black transition hover:bg-opacity-90 disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-2"
          >
            {cargando ? 'Enviando...' : 'Enviar mensaje rápido'}
          </button>

          {/* Feedback de Envío Exitoso */}
          {enviado && (
            <p className="text-green-400 text-sm font-medium text-center mt-1 animate-pulse">
              ¡Mensaje enviado con éxito! Te responderé pronto.
            </p>
          )}
        </form>

      </div>
    </section>
  );
}