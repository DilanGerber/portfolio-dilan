import React from 'react'

const Skills = () => {
  return (
    <section className=' relative px-4 mt-10 max-w-[1000px] mx-auto'>
        <h2 className="text-3xl lg:text-4xl font-bold font-inter text-green-700 text-center">Mis Habilidades</h2>
        <div className="relative p-10 rounded-2xl bg-gradient-to-br from-[#2e026d] via-[#15162c] to-[#2e026d] shadow-lg">
  <h2 className="text-white text-2xl font-bold">Título del Contenedor</h2>
</div>

<div className="relative p-10 rounded-2xl bg-[#15162c] overflow-hidden shadow-lg transition-all duration-500 group">
  {/* Fondo animado con "group-hover" */}
  <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-purple-500/40 to-transparent blur-xl transition-all duration-500 ease-in-out group-hover:h-full"></div>

  <h2 className="relative text-white text-2xl font-bold">Hover Expand Gradient</h2>
  <ol className=' flex flex-col'>
    <li>ABUB66555</li>
    <li>ABUB66555</li>
    <li>ABUB66555</li>
    <li>ABUB66555</li>
    <li>ABUB66555</li>
    <li>ABUB66555</li>
    <li>ABUB66555</li>
  </ol>
</div>

<div className="relative group w-full max-w-md p-8 rounded-2xl bg-[#15162c] overflow-hidden shadow-lg transition-all duration-500">
  {/* Fondo animado */}
  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/40 to-blue-500/40 blur-2xl opacity-40 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 group-hover:opacity-80"></div>

  {/* Contenido */}
  <div className="relative z-10 text-white">
    <h2 className="text-2xl font-bold">Título del Curso</h2>
    <p className="text-gray-300 mt-2">Descripción breve del curso o certificación.</p>
  </div>
</div>

<div className="relative group p-10 rounded-2xl bg-gradient-to-br from-[#2e026d] via-[#15162c] to-[#2e026d] shadow-lg overflow-hidden">
  {/* Fondo animado */}
  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/40 to-blue-500/40 blur-2xl opacity-40 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 group-hover:opacity-80"></div>

  {/* Contenido */}
  <div className="relative z-10 text-white">
    <h2 className="text-2xl font-bold">Título del Curso</h2>
    <p className="text-gray-300 mt-2">Descripción breve del curso o certificación.</p>
  </div>
</div>

<div className="relative group p-10 rounded-2xl bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 shadow-lg overflow-hidden">
  {/* Fondo animado */}
  <div className="absolute inset-0 bg-gradient-to-r from-green-700/60 to-green-500/30 blur-2xl opacity-40 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 group-hover:opacity-80"></div>

  {/* Contenido */}
  <div className="relative z-10 text-white">
    <h2 className="text-2xl font-bold">Título del Curso</h2>
    <p className="text-gray-300 mt-2">Descripción breve del curso o certificación.</p>
  </div>
</div>

<div className="relative group p-10 rounded-2xl bg-gradient-to-br from-zinc-50 via-gray-100 to-zinc-50 shadow-lg overflow-hidden">
  {/* Fondo animado */}
  <div className="absolute inset-0 bg-gradient-to-r from-green-600/30 to-green-700/40 blur-2xl opacity-40 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 group-hover:opacity-80"></div>

  {/* Contenido */}
  <div className="relative z-10 text-zinc-900">
    <h2 className="text-2xl font-bold">Título del Curso</h2>
    <p className="text-gray-700 mt-2">Descripción breve del curso o certificación.</p>
  </div>
</div>

<div className="relative group p-10 rounded-2xl bg-gradient-to-br from-zinc-800 via-zinc-700 to-zinc-900 shadow-lg overflow-hidden">
  {/* Fondo animado */}
  <div className="absolute inset-0 bg-gradient-to-r from-green-700/30 to-gray-500/40 blur-2xl opacity-40 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 group-hover:opacity-80"></div>

  {/* Contenido */}
  <div className="relative z-10 text-white">
    <h2 className="text-2xl font-bold">Título del Curso</h2>
    <p className="text-gray-300 mt-2">Descripción breve del curso o certificación.</p>
  </div>
</div>
    </section>
  )
}

export default Skills