import { useParams, Link } from 'react-router-dom';
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from 'react-icons/fa';

export const ProjectDetail = () => {
  const { projectName } = useParams();

  // En un caso real, esto vendría de una base de datos o un archivo de contenido JSON
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
    }
  };

  const project = projectMocks[projectName || ''] || null;

  if (!project) {
    return (
      <div className="container mx-auto py-32 text-center min-h-[60vh]">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Proyecto no encontrado</h2>
        <p className="text-gray-500 mb-8 max-w-md mx-auto">Parece que el caso de estudio que estás buscando no existe o la URL es incorrecta.</p>
        <Link to="/" className="inline-flex items-center text-blue-600 font-bold hover:text-blue-800 transition">
          <FaArrowLeft className="mr-2" /> Volver al Inicio
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Navbar de regreso rápido */}
      <div className="border-b border-gray-100 bg-gray-50/80 backdrop-blur-sm sticky top-[72px] z-40 hidden md:block">
        <div className="container mx-auto px-4 py-3">
            <Link to="/" className="inline-flex items-center text-sm font-semibold text-gray-500 hover:text-blue-600 transition">
              <FaArrowLeft className="mr-2" /> Volver al portafolio
            </Link>
        </div>
      </div>

      <div className="container mx-auto max-w-5xl px-4 pt-12 md:pt-20">
        <div className="mb-16 md:text-center max-w-3xl mx-auto">
          <span className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-4 block">{project.type}</span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-8 tracking-tight">{project.title}</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-20 relative z-10">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition shadow-xl shadow-blue-200">
              <FaExternalLinkAlt className="mr-3" />
              Visitar Aplicación
            </a>
          )}
          {project.repoUrl && (
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center bg-gray-900 text-white px-8 py-4 rounded-full font-bold hover:bg-gray-800 transition shadow-xl shadow-gray-200">
              <FaGithub className="mr-3 text-xl" />
              Código Fuente
            </a>
          )}
        </div>

        {/* Imagen principal / Showcase */}
        <div className="mb-20 rounded-3xl overflow-hidden shadow-2xl border border-gray-100 transform -translate-y-6">
          <img src={project.images[0]} alt={project.title} className="w-full h-auto object-cover" />
        </div>

        <div className="grid md:grid-cols-3 gap-12">
            
            {/* Detalles principales */}
            <div className="md:col-span-2">
                <h2 className="text-3xl font-extrabold text-gray-900 mb-6">El Reto</h2>
                <div className="w-12 h-1 bg-blue-600 mb-8 rounded-full"></div>
                <p className="text-lg text-gray-600 leading-relaxed mb-10">
                    Construir un carrito de compras escalable suele requerir un backend sólido. En este caso de estudio, el enfoque principal fue simular esa responsabilidad en el entorno del navegador (Frontend). 
                    Manipular el DOM sin frameworks re-renderizables (como React) requerimientos manuales estrictos para evitar fugas de memoria y des-sincronizaciones de UI.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-6">Características Destacadas</h3>
                <ul className="space-y-4">
                    {project.features.map((feature: string, idx: number) => (
                        <li key={idx} className="flex items-start">
                             <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-1 mr-4 flex-shrink-0">
                                 <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                             </div>
                             <span className="text-lg text-gray-700">{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Panel lateral Tech Stack */}
            <div>
                <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 sticky top-32">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">Stack Tecnológico</h3>
                    <div className="flex flex-col gap-3">
                        {project.techStack.map((tech: string) => (
                        <span key={tech} className="bg-white text-gray-800 px-4 py-3 rounded-xl font-medium border border-gray-200 shadow-sm flex items-center">
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
