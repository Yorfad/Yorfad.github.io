import { Link } from 'react-router-dom';
import { FaHtml5, FaCss3Alt, FaJs, FaSass, FaBootstrap, FaGithub, FaDatabase, FaJava, FaPython } from 'react-icons/fa';

export const Home = () => {
  return (
    <div className="w-full animate-fade-in transition-colors duration-300">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-indigo-950 py-24 px-4 overflow-hidden relative transition-colors">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between relative z-10">
          <div className="md:w-1/2 mb-12 md:mb-0 text-center md:text-left">
            <span className="text-blue-600 dark:text-blue-400 font-bold tracking-wider uppercase text-sm mb-4 block">Hola, soy Yair Morales</span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white leading-tight mb-6 tracking-tight">
              Desarrollador <br className="hidden md:block" /> Front-end
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-lg mx-auto md:mx-0 leading-relaxed">
              Creando experiencias web modernas, escalables y visualmente impactantes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a href="#proyectos" className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-200 dark:shadow-none">
                Ver Proyectos
                </a>
                <a href="#contacto" className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 border-2 border-gray-200 dark:border-gray-700 px-8 py-4 rounded-full font-bold hover:border-gray-300 dark:hover:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition shadow-sm">
                Contáctame
                </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end relative">
            <div className="absolute inset-0 bg-blue-300 dark:bg-blue-900 rounded-full blur-3xl opacity-30 transform translate-x-10 translate-y-10"></div>
            <img src="/yair.JPG" alt="Yair Morales" className="relative w-72 h-72 md:w-96 md:h-96 object-cover rounded-full border-8 border-white dark:border-gray-800 shadow-2xl transform hover:scale-105 transition duration-500 ease-in-out" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-4 bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-gray-900 relative transition-colors">
        <div className="container mx-auto max-w-5xl">
            <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="lg:w-1/2">
                    <img src="/fondo_desarrollador.png" alt="Code Background" className="w-full rounded-2xl shadow-xl transform hover:-translate-y-2 transition duration-500 dark:opacity-80" />
                </div>
                <div className="lg:w-1/2">
                    <h2 className="text-4xl font-extrabold mb-6 text-gray-900 dark:text-white tracking-tight">Mi Filosofía</h2>
                    <div className="w-16 h-1 bg-blue-600 mb-8 rounded-full"></div>
                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                        A la hora de trabajar me enfoco en crear código <span className="font-semibold text-gray-900 dark:text-blue-200">limpio, modular y escalable</span>. Creo firmemente que un buen diseño debe ser apoyado por una base técnica sólida.
                    </p>
                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                        Utilizo estándares modernos de desarrollo para garantizar que el software que construyo sea tanto fácil de mantener para los desarrolladores como intuitivo para el usuario final.
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 px-4 bg-gray-50 dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 transition-colors">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">Habilidades Técnicas</h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Frontend */}
            <div className="bg-white dark:bg-gray-800 p-10 rounded-3xl shadow-sm hover:shadow-xl dark:hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
              <div className="text-5xl text-blue-500 dark:text-blue-400 mb-6 flex space-x-3">
                <FaHtml5 /> <FaCss3Alt /> <FaJs /> <FaSass />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Frontend</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">Especializado en interfaces de usuario responsivas, accesibles y dinámicas.</p>
              <ul className="space-y-3 font-medium text-gray-700 dark:text-gray-300">
                <li className="flex items-center"><div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div> HTML5, CSS, SASS, Tailwind</li>
                <li className="flex items-center"><div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div> JavaScript, React, TypeScript</li>
                <li className="flex items-center"><div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div> Patrón MVC, JSON, XML</li>
              </ul>
            </div>

            {/* Backend */}
            <div className="bg-white dark:bg-gray-800 p-10 rounded-3xl shadow-sm hover:shadow-xl dark:hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
               <div className="text-5xl text-green-500 dark:text-green-400 mb-6 flex space-x-3">
                <FaDatabase /> <FaJava /> <FaPython />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Backend</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">Cimientos sólidos en lógica de sistemas, APIs RESTful y bases de datos.</p>
              <ul className="space-y-3 font-medium text-gray-700 dark:text-gray-300">
                <li className="flex items-center"><div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div> Java, Python</li>
                <li className="flex items-center"><div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div> Node.js, Express</li>
                <li className="flex items-center"><div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div> Bases de Datos SQL</li>
              </ul>
            </div>

            {/* Tools */}
            <div className="bg-white dark:bg-gray-800 p-10 rounded-3xl shadow-sm hover:shadow-xl dark:hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
              <div className="text-5xl text-purple-500 dark:text-purple-400 mb-6 flex space-x-3">
                <FaBootstrap /> <FaGithub />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Herramientas</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">Dominio de ecosistemas de desarrollo y plataformas de control de versiones.</p>
              <ul className="space-y-3 font-medium text-gray-700 dark:text-gray-300">
                <li className="flex items-center"><div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div> Git, GitHub, Terminal</li>
                <li className="flex items-center"><div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div> ASP.NET, Angular (En proceso)</li>
                <li className="flex items-center"><div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div> APIs e Inteligencia Artificial</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="proyectos" className="py-24 px-4 bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-gray-900 transition-colors">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">Casos de Estudio</h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
            <p className="text-gray-500 dark:text-gray-400 mt-6 max-w-2xl mx-auto text-lg">Una selección de proyectos donde he aplicado mis conocimientos técnicos.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
            
            {/* Automatas Project Card */}
            <Link to="/proyecto/automatas" className="group block bg-white dark:bg-gray-900 rounded-3xl shadow-md overflow-hidden hover:shadow-2xl dark:hover:shadow-[0_10px_40px_-5px_rgba(0,0,0,0.7)] transition-all duration-300 border border-gray-100 dark:border-gray-800 transform hover:-translate-y-2">
              <div className="h-56 overflow-hidden relative bg-blue-50 dark:bg-blue-950 flex items-center justify-center">
                <div className="absolute inset-0 bg-indigo-900 bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-500 z-10 flex items-center justify-center">
                    <span className="text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">Ver Proyecto completo</span>
                </div>
                <img src="/automatas/logo.png" alt="Simulador Automatas" className="w-48 h-48 object-contain group-hover:scale-110 transition-transform duration-700 ease-in-out dark:brightness-110" />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Simulador DFA</h3>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-xs px-3 py-1.5 rounded-md font-bold uppercase tracking-wide">Algoritmos</span>
                    <span className="bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs px-3 py-1.5 rounded-md font-bold uppercase tracking-wide">JS POO</span>
                    <span className="bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs px-3 py-1.5 rounded-md font-bold uppercase tracking-wide">Grafos</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed line-clamp-3">
                  Simulación interactiva visual con Cytoscape.js de Autómatas Finitos (DFA), implementando algoritmos de validación de lenguaje y parsing .txt.
                </p>
              </div>
            </Link>

            {/* Carrito Project Card */}
            <Link to="/proyecto/carritoDeCompras" className="group block bg-white dark:bg-gray-900 rounded-3xl shadow-md overflow-hidden hover:shadow-2xl dark:hover:shadow-[0_10px_40px_-5px_rgba(0,0,0,0.7)] transition-all duration-300 border border-gray-100 dark:border-gray-800 transform hover:-translate-y-2">
              <div className="h-56 overflow-hidden relative">
                <div className="absolute inset-0 bg-blue-900 bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-500 z-10 flex items-center justify-center">
                    <span className="text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">Ver Proyecto completo</span>
                </div>
                <img src="/imagenCarrito.jpeg" alt="Carrito de Compras" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out dark:opacity-80" />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Carrito de Compras</h3>
                </div>
                <div className="flex gap-2 mb-4">
                    <span className="bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs px-3 py-1.5 rounded-md font-bold uppercase tracking-wide">Vainilla JS</span>
                    <span className="bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-xs px-3 py-1.5 rounded-md font-bold uppercase tracking-wide">SASS</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed line-clamp-3">
                  E-commerce simulado con consumo asíncrono, persistencia de estado local y autenticación básica.
                </p>
              </div>
            </Link>

          </div>
        </div>
      </section>
    </div>
  );
};
