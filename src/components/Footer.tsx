export const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-10 mt-16 w-full text-center border-t border-gray-800 dark:border-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">© {new Date().getFullYear()} Yair Morales. Desarrollador Web.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
                <a href="#" className="text-gray-400 hover:text-white dark:hover:text-blue-400 transition-colors">GitHub</a>
                <a href="#" className="text-gray-400 hover:text-white dark:hover:text-blue-400 transition-colors">LinkedIn</a>
            </div>
        </div>
    </footer>
  );
};
