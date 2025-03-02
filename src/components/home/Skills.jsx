import React from 'react'

const Skills = () => {
  return (
    <section className=' relative px-4 mt-10 max-w-[1000px] mx-auto'>
        <h2 className="text-3xl lg:text-4xl font-bold font-inter text-green-700 text-center">Mis Habilidades</h2>

{/* <div className="relative p-10 rounded-2xl bg-[#15162c] overflow-hidden shadow-lg transition-all duration-500 group">
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
</div> */}

<div className="relative group w-full max-w-md p-8 rounded-2xl bg-[#15162c] overflow-hidden shadow-lg transition-all duration-500">
  {/* Fondo animado */}
  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/40 to-blue-500/40 blur-2xl opacity-40 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 group-hover:opacity-80"></div>

  {/* Contenido */}
  <div className="relative z-10 text-white">
    <h2 className="text-2xl font-bold">Título del Curso</h2>
    <p className="text-gray-300 mt-2">Descripción breve del curso o certificación.</p>
  </div>
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

<div className="relative group w-full max-w-md p-8 rounded-2xl bg-[#15162c] overflow-hidden shadow-lg transition-all duration-500">
  {/* Fondo animado */}
  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/40 to-blue-500/40 blur-2xl opacity-40 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 group-hover:opacity-80"></div>

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