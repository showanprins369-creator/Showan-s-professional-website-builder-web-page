export const Footer = () => {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <a href="#" className="font-display font-bold text-xl tracking-tighter text-white inline-block mb-2">
            SHOWAN<span className="text-gold-500">.</span>
          </a>
          <p className="text-zinc-500 text-sm">
             Modern websites built to grow your business.
          </p>
        </div>
        
        <div className="text-zinc-500 text-sm flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
          <p>&copy; {new Date().getFullYear()} Showan Prins. All rights reserved.</p>
          <span className="hidden md:inline text-zinc-700">|</span>
          <p>Based in Graaff-Reinet, SA</p>
        </div>
      </div>
    </footer>
  );
};
