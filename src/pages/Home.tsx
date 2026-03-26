import { Link } from 'react-router-dom';
import { FaHtml5, FaCss3Alt, FaJs, FaSass, FaBootstrap, FaGithub, FaDatabase, FaJava, FaPython } from 'react-icons/fa';

export const Home = () => {
  return (
    <div className="w-full animate-fade-in">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-24 px-4 overflow-hidden relative">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between relative z-10">
          <div className="md:w-1/2 mb-12 md:mb-0 text-center md:text-left">
            <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-4 block">Hola, soy Yair Morales</span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight mb-6 tracking-tight">
              Desarrollador <br className="hidden md:block" /> Front-end
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-lg mx-auto md:mx-0 leading-relaxed">
              Creando experiencias web modernas, escalables y visualmente impactantes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a href="#proyectos" className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-200">
                Ver Proyectos
                </a>
                <a href="#contacto" className="bg-white text-gray-800 border-2 border-gray-200 px-8 py-4 rounded-full font-bold hover:border-gray-300 hover:bg-gray-50 transition shadow-sm">
                Contáctame
                </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end relative">
            <div className="absolute inset-0 bg-blue-300 rounded-full blur-3xl opacity-30 transform translate-x-10 translate-y-10"></div>
            <img src="/yair.JPG" alt="Yair Morales" className="relative w-72 h-72 md:w-96 md:h-96 object-cover rounded-full border-8 border-white shadow-2xl transform hover:scale-105 transition duration-500 ease-in-out" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-4 bg-white border-t border-gray-100 relative">
        <div className="container mx-auto max-w-5xl">
            <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="lg:w-1/2">
                    <img src="/fondo_desarrollador.png" alt="Code Background" className="w-full rounded-2xl shadow-xl transform hover:-translate-y-2 transition duration-500" />
                </div>
                <div className="lg:w-1/2">
                    <h2 className="text-4xl font-extrabold mb-6 text-gray-900 tracking-tight">Mi Filosofía</h2>
                    <div className="w-16 h-1 bg-blue-600 mb-8 rounded-full"></div>
                    <p className="text-lg text-gray-600 leading-relaxed mb-6">
                        A la hora de trabajar me enfoco en crear código <span className="font-semibold text-gray-900">limpio, modular y escalable</span>. Creo firmemente que un buen diseño debe ser apoyado por una base técnica sólida.
                    </p>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Utilizo estándares modernos de desarrollo para garantizar que el software que construyo sea tanto fácil de mantener para los desarrolladores como intuitivo para el usuario final.
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 px-4 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">Habilidades Técnicas</h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            
            {/* Frontend */}
            <div className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="text-5xl text-blue-500 mb-6 flex space-x-3">
                <FaHtml5 /> <FaJs /> <FaSass />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Frontend</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">Especializado en crear interfaces de usuario responsivas, accesibles y dinámicas.</p>
              <ul className="space-y-3 font-medium text-gray-700">
                <li className="flex items-center"><div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div> HTML5, CSS, SASS, Tailwind</li>
                <li className="flex items-center"><div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div> JavaScript, React, TypeScript</li>
                <li className="flex items-center"><div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div> Patrón MVC, JSON, XML</li>
              </ul>
            </div>

            {/* Backend */}
            <div className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
               <div className="text-5xl text-green-500 mb-6 flex space-x-3">
                <FaDatabase /> <FaJava /> <FaPython />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Backend</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">Cimientos sólidos en la lógica de sistemas, APIs RESTful y manejo de datos estructurados.</p>
              <ul className="space-y-3 font-medium text-gray-700">
                <li className="flex items-center"><div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div> Java, Python</li>
                <li className="flex items-center"><div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div> Node.js, Express</li>
                <li className="flex items-center"><div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div> Bases de Datos SQL</li>
              </ul>
            </div>

            {/* Tools */}
            <div className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="text-5xl text-purple-500 mb-6 flex space-x-3">
                <FaBootstrap /> <FaGithub />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Herramientas</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">Dominio de ecosistemas de desarrollo y plataformas modernas de CI/CD.</p>
              <ul className="space-y-3 font-medium text-gray-700">
                <li className="flex items-center"><div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div> Git, GitHub, Terminal UNIX</li>
                <li className="flex items-center"><div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div> ASP.NET, Angular (En proceso)</li>
                <li className="flex items-center"><div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div> APIs de Inteligencia Artificial</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="proyectos" className="py-24 px-4 bg-white border-t border-gray-100">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">Casos de Estudio</h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
            <p className="text-gray-500 mt-6 max-w-2xl mx-auto text-lg">Una selección de proyectos donde he aplicado mis conocimientos para resolver problemas técnicos mediante código de calidad.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {/* Project Card */}
            <Link to="/proyecto/carritoDeCompras" className="group block bg-white rounded-3xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100 transform hover:-translate-y-2">
              <div className="h-56 overflow-hidden relative">
                <div className="absolute inset-0 bg-blue-900 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-500 z-10 flex items-center justify-center">
                    <span className="text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">Ver Proyecto completo</span>
                </div>
                <img src="/imagenCarrito.jpeg" alt="Carrito de Compras" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">Carrito de Compras</h3>
                </div>
                <div className="flex gap-2 mb-4">
                    <span className="bg-blue-50 text-blue-700 text-xs px-3 py-1.5 rounded-md font-bold uppercase tracking-wide">Vainilla JS</span>
                    <span className="bg-indigo-50 text-indigo-700 text-xs px-3 py-1.5 rounded-md font-bold uppercase tracking-wide">SASS</span>
                </div>
                <p className="text-gray-600 text-base leading-relaxed line-clamp-3">
                  E-commerce simulado con consumo asíncrono, persistencia de estado local y autenticación básica basada en validaciones de formulario.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
