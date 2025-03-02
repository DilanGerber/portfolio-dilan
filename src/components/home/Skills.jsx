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

      <div className=' grid grid-cols-1 md:grid-cols-3 gap-5 mt-10'>
        <div className="relative group w-full max-w-md p-8 rounded-2xl bg-zinc-925 overflow-hidden shadow-lg transition-all duration-500 border border-green-800 hover:border-green-600 ">
          <div className="absolute inset-0 bg-gradient-to-r from-green-700/40 to-green-500/60 blur-2xl opacity-40 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 group-hover:opacity-80"></div>
          <div className="relative z-10 text-white">
            <h2 className="text-2xl font-bold">Diseño UI/UX</h2>
            <p className="text-gray-300 mt-2">Descripción breve del curso o certificación.</p>
          </div>
        </div>
        <div className="relative group w-full max-w-md p-8 rounded-2xl bg-zinc-925 overflow-hidden shadow-lg transition-all duration-500 border border-green-800 hover:border-green-600 ">
          <div className="absolute inset-0 bg-gradient-to-r from-green-700/40 to-green-500/60 blur-2xl opacity-40 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 group-hover:opacity-80"></div>
          <div className="relative z-10 text-white">
            <h2 className="text-2xl font-bold">Diseño UI/UX</h2>
            <p className="text-gray-300 mt-2">Descripción breve del curso o certificación.</p>
          </div>
        </div>
        <div className="relative group w-full max-w-md p-8 rounded-2xl bg-zinc-925 overflow-hidden shadow-lg transition-all duration-500 border border-green-800 hover:border-green-600 ">
          <div className="absolute inset-0 bg-gradient-to-r from-green-700/40 to-green-500/60 blur-2xl opacity-40 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 group-hover:opacity-80"></div>
          <div className="relative z-10 text-white">
            <h2 className="text-2xl font-bold">Diseño UI/UX</h2>
            <p className="text-gray-300 mt-2">Descripción breve del curso o certificación.</p>
          </div>
        </div>
      </div>
      <h3 className="text-lg lg:text-xl font-bold font-inter text-gray-200 text-center my-8">Skills</h3>
      <div className=' grid grid-cols-1 md:grid-cols-2 gap-5 my-5'>
        <div className="relative p-10 rounded-2xl bg-zinc-925 overflow-hidden shadow-lg transition-all duration-500 group  border border-green-800 hover:border-green-600">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-green-500/40 to-transparent blur-xl transition-all duration-500 ease-in-out group-hover:h-full"></div>
          <h3 className="text-lg lg:text-xl font-bold font-inter text-gray-200 text-center">Mi Stack Principal</h3>
          <h2 className="relative text-white text-2xl font-bold">Hover Expand Gradient</h2>
        </div>
        <div className="relative p-10 rounded-2xl bg-zinc-925 overflow-hidden shadow-lg transition-all duration-500 group border border-green-800 hover:border-green-600">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-green-500/40 to-transparent blur-xl transition-all duration-500 ease-in-out group-hover:h-full"></div>
          <h3 className="text-lg lg:text-xl font-bold font-inter text-gray-200 text-center">Soft Skills</h3>
          <h2 className="relative text-white text-2xl font-bold">Hover Expand Gradient</h2>
        </div>
      </div>
      <h3 className="text-lg lg:text-xl font-bold font-inter text-gray-200 text-center my-8">Otras Tecnologias que utilice</h3>
      <div className="relative p-10 rounded-2xl bg-zinc-925 overflow-hidden shadow-lg transition-all duration-500 group my-8 border border-green-800 hover:border-green-600">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-green-500/40 to-transparent blur-xl transition-all duration-500 ease-in-out group-hover:h-full"></div>
          <h3 className="text-lg lg:text-xl font-bold font-inter text-gray-200 text-center">Soft Skills</h3>
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
    </section>
  )
}

export default Skills