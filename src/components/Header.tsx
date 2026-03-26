import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa';
import { useTheme } from './ThemeContext';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="bg-white dark:bg-gray-900 shadow sticky top-0 z-50 transition-colors duration-300">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center bg-white dark:bg-transparent rounded-full p-1 transition-colors">
          <img src="/logo2.png" alt="Logotipo" className="h-12 w-auto object-contain" />
        </Link>
        <nav className="hidden md:flex space-x-8 items-center">
          <Link to="/" className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-semibold transition-colors duration-200">Inicio</Link>
          <a href="/#proyectos" className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-semibold transition-colors duration-200">Proyectos</a>
          <button onClick={toggleTheme} className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-xl p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
            {theme === 'dark' ? <FaSun /> : <FaMoon />}
          </button>
        </nav>
        <div className="md:hidden flex items-center space-x-4">
          <button onClick={toggleTheme} className="text-gray-600 dark:text-gray-300 text-xl p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
            {theme === 'dark' ? <FaSun /> : <FaMoon />}
          </button>
          <button 
            className="text-2xl text-gray-800 dark:text-gray-200 focus:outline-none" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-white dark:bg-gray-900 shadow-lg absolute top-full left-0 w-full flex flex-col items-center py-6 space-y-6 transition-all duration-300 ease-in-out origin-top ${isOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 h-0 overflow-hidden py-0'}`}>
        <Link to="/" onClick={() => setIsOpen(false)} className="text-gray-800 dark:text-gray-200 hover:text-blue-600 font-bold text-xl">Inicio</Link>
        <a href="/#proyectos" onClick={() => setIsOpen(false)} className="text-gray-800 dark:text-gray-200 hover:text-blue-600 font-bold text-xl">Proyectos</a>
      </div>
    </header>
  );
};
