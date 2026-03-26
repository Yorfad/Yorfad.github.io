import { useParams, Link } from 'react-router-dom';
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from 'react-icons/fa';

export const ProjectDetail = () => {
  const { projectName } = useParams();

  const projectMocks: Record<string, any> = {
    'carritoDeCompras': {
      title: 'Carrito de Compras E-Commerce',
      type: 'Aplicación Web Interactiva',
      description: 'Este proyecto consistió en construir la lógica fundamental de una tienda en línea utilizando tecnologías web nativas (Vanilla JS). El mayor reto fue manejar el estado global del carrito simulando una respuesta de base de datos a través de peticiones asíncronas hacia archivos JSON, y garantizar que la información persistiera entre recargas de la página.',
      images: ['/imagenCarrito.jpeg'],
      techStack: ['HTML5', 'CSS Metodología BEM', 'SASS', 'ES6 JavaScript Modules', 'LocalStorage API'],
      liveUrl: '/carritoDeCompras/carritoDeCompras.html',
      repoUrl: 'https://github.com/Yorfad/Yorfad.github.io', 
      features: [
        'Sistema de Login simulado',
        'Listado dinámico de productos y manipulación del DOM',
        'Cálculo de impuestos y totales del carrito en tiempo real',
        'Diseño 100% responsivo'
      ]
    },
    'automatas': {
      title: 'Simulador de Autómatas (DFA) con Grafos',
      type: 'Algoritmos y Estructura de Datos',
      description: 'Una simulación interactiva paso a paso de Autómatas Finitos Deterministas (AFD) implementada completamente en Vanilla JS. Utiliza algoritmos de recorrido de grafos interactivos, renderizados dinámicamente con Cytoscape.js para visualizar cómo los estados procesan cadenas de caracteres en tiempo real.',
      images: ['/automatas/logo.png'],
      techStack: ['JavaScript (Logica DFA Orientada a Objetos)', 'Teoría de Computación', 'Cytoscape.js (Grafos)', 'SASS', 'Manejo del DOM'],
      liveUrl: '/automatas/index.html',
      repoUrl: 'https://github.com/Yorfad/automatasProyecto.github.io', 
      features: [
        'Clase State personalizada para emular conexiones de grafos',
        'Algoritmo lógico de Step-by-Step para visualizar las transiciones (bucle de eventos y time-outs curados)',
        'Carga y parsing de gramáticas / AFD desde archivos de configuración de texto plano (.txt)',
        'Renderizado visual de grafos complejos sin requerir frameworks reactivos o canvas'
      ]
    }
  };

  const project = projectMocks[projectName || ''] || null;

  if (!project) {
    return (
      <div className="container mx-auto py-32 text-center min-h-[60vh]">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-6">Proyecto no encontrado</h2>
        <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-md mx-auto">Parece que el caso de estudio que estás buscando no existe o la URL es incorrecta.</p>
        <Link to="/" className="inline-flex items-center text-blue-600 dark:text-blue-400 font-bold hover:text-blue-800 transition">
          <FaArrowLeft className="mr-2" /> Volver al Inicio
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-950 min-h-screen pb-20 transition-colors duration-300">
      {/* Navbar de regreso rápido */}
      <div className="border-b border-gray-100 dark:border-gray-800 bg-gray-50/80 dark:bg-gray-900/80 backdrop-blur-sm sticky top-[72px] z-40 hidden md:block transition-colors">
        <div className="container mx-auto px-4 py-3">
            <Link to="/" className="inline-flex items-center text-sm font-semibold text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition">
              <FaArrowLeft className="mr-2" /> Volver al portafolio
            </Link>
        </div>
      </div>

      <div className="container mx-auto max-w-5xl px-4 pt-12 md:pt-20">
        <div className="mb-16 md:text-center max-w-3xl mx-auto">
          <span className="text-sm font-bold tracking-widest text-blue-600 dark:text-blue-400 uppercase mb-4 block">{project.type}</span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-8 tracking-tight">{project.title}</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-20 relative z-10">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition shadow-xl shadow-blue-200 dark:shadow-none">
              <FaExternalLinkAlt className="mr-3" />
              Visitar Aplicación
            </a>
          )}
          {project.repoUrl && (
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center bg-gray-900 dark:bg-gray-800 text-white px-8 py-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700 transition shadow-xl shadow-gray-200 dark:shadow-none">
              <FaGithub className="mr-3 text-xl" />
              Código Fuente
            </a>
          )}
        </div>

        {/* Imagen principal / Showcase */}
        <div className="mb-20 rounded-3xl overflow-hidden shadow-2xl border border-gray-100 dark:border-gray-800 transform -translate-y-6 bg-white dark:bg-gray-900">
          <img src={project.images[0]} alt={project.title} className="w-full h-auto object-cover opacity-90 dark:opacity-80" />
        </div>

        <div className="grid md:grid-cols-3 gap-12">
            {/* Detalles principales */}
            <div className="md:col-span-2">
                <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-6">El Reto</h2>
                <div className="w-12 h-1 bg-blue-600 mb-8 rounded-full"></div>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-10">
                    Construir una simulación escalable en el entorno del navegador suele requerir librerías complejas. Manipular el DOM o grafos sin frameworks re-renderizables (como React) en este nivel presenta requerimientos manuales estrictos para evitar fugas de memoria y des-sincronizaciones de UI.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Características Destacadas</h3>
                <ul className="space-y-4">
                    {project.features.map((feature: string, idx: number) => (
                        <li key={idx} className="flex items-start">
                             <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mt-1 mr-4 flex-shrink-0">
                                 <div className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400"></div>
                             </div>
                             <span className="text-lg text-gray-700 dark:text-gray-300">{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Panel lateral Tech Stack */}
            <div>
                <div className="bg-gray-50 dark:bg-gray-900/50 p-8 rounded-3xl border border-gray-100 dark:border-gray-800 sticky top-32 transition-colors">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Stack Tecnológico</h3>
                    <div className="flex flex-col gap-3">
                        {project.techStack.map((tech: string) => (
                        <span key={tech} className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-4 py-3 rounded-xl font-medium border border-gray-200 dark:border-gray-700 shadow-sm flex items-center transition-colors">
                            <span className="w-2 h-2 rounded-full bg-blue-500 mr-3"></span>
                            {tech}
                        </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};
