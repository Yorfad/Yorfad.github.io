import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src="/logo2.png" alt="Logotipo" className="h-12 w-auto object-contain" />
        </Link>
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="text-gray-800 hover:text-blue-600 font-semibold transition-colors duration-200">Inicio</Link>
          <a href="/#proyectos" className="text-gray-800 hover:text-blue-600 font-semibold transition-colors duration-200">Proyectos</a>
        </nav>
        <button 
          className="md:hidden text-2xl text-gray-800 focus:outline-none" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-white shadow-lg absolute top-full left-0 w-full flex flex-col items-center py-6 space-y-6 transition-all duration-300 ease-in-out origin-top ${isOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 h-0 overflow-hidden py-0'}`}>
        <Link to="/" onClick={() => setIsOpen(false)} className="text-gray-800 hover:text-blue-600 font-bold text-xl">Inicio</Link>
        <a href="/#proyectos" onClick={() => setIsOpen(false)} className="text-gray-800 hover:text-blue-600 font-bold text-xl">Proyectos</a>
      </div>
    </header>
  );
};
