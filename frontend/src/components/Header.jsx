import React, { useState } from 'react';
import {motion} from 'framer-motion';
import NavigationMenu from './NavigationMenu';
import { MdDarkMode, MdLocalDining } from "react-icons/md";
import { MdDownloadForOffline } from "react-icons/md";
import { MdOutlineDownloading } from "react-icons/md";



const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleDownloadPdfResume = () => {
    setLoading(true);
    // Simulate PDF download
    setTimeout(() => {
      setLoading(false);
      // Create a link to download the PDF
      const link = document.createElement('a');
      link.href = 'public/assets/MD_SABBIR_KHAN_ONI_Resume.pdf';
      link.download = 'MD_SABBIR_KHAN_ONI_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 2000); // Simulate a 2-second download time
  };

  return (
    <div className='fixed top-5 left-1/2 -translate-x-1/2 w-[80%] z-50 
                backdrop-blur-xl bg-gray-900/20 py-2 
                border border-white/10 rounded-full'>
      <div className='mx-auto max-w-8xl px-5 md:px-10 lg:px-20 font-bold text-lg'>
        <div className='flex flex-row justify-evenly items-center text-white'>

          <a href="/a" className='flex items-center gap-2'>
            <img src="/onilogo.png" alt="Logo" className="h-8" />
          </a>

          <div className='hidden md:flex gap-10 items-center'>
            <a href="#home" className='text-sm font-semibold bg-transparent cursor-pointer transition-colors text-white hover:text-aqua'>Home</a>
            <a href="#projects" className='text-sm font-semibold bg-transparent cursor-pointer transition-colors text-white hover:text-aqua'>Projects</a>
            <a href="#purchases" className='text-sm font-semibold bg-transparent cursor-pointer transition-colors text-white hover:text-aqua'>Purchases</a>
            <a href="#blogs" className='text-sm font-semibold bg-transparent cursor-pointer transition-colors text-white hover:text-aqua'>Blogs</a>
            <a href="#about" className='text-sm font-semibold bg-transparent cursor-pointer transition-colors text-white hover:text-aqua'>About</a>
            <a href="#contact" className='text-sm font-semibold bg-transparent cursor-pointer transition-colors text-white hover:text-aqua'>Contact</a>
            <a href="#" className='text-sm bg-gradient-to-r from-[rgb(131,127,127)] cursor-pointer to-[rgb(255,0,0)] px-5 rounded-full py-1 font-semibold text-white shadow-lg shadow-white/50 hover:text-white hover:shadow-xl transition-all duration-300'>
              <div
                onClick={() => {
                  handleDownloadPdfResume();
                }}
               className={`flex flex-row cursor-pointer ${loading ? 'gap-4' : 'gap-2'} py-1 items-center`}>
                <div><MdDownloadForOffline className='text-[17px]' /></div>
                <div>{loading ? <MdOutlineDownloading className='animate-spin text-[17px]'/> : 'Resume'}</div>
              </div>
            </a>

            <div className='text-sm bg-gradient-to-r from-[rgb(42,41,41)] cursor-pointer to-[rgb(21,239,243)] px-5 rounded-full py-2 font-semibold text-white shadow-lg shadow-white/50 hover:text-white hover:shadow-xl transition-all duration-300'>
              <a className='py-1'>Sign In</a>
            </div>
          </div>

          <div className=''>
            <MdDarkMode className='text-white h-6 w-6' />
          </div>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className='md:hidden'
          >
            <img 
              src={isMenuOpen ? "/assets/close.svg" : "/assets/menu.svg"} 
              alt="Menu" 
              className="h-6 w-6"
            />
          </button>

          <motion.div className={`absolute top-0 right-0 h-screen bg-[rgb(115,15,18)] p-5 w-64 rounded shadow-lg md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: isMenuOpen ? 1 : 0, x: isMenuOpen ? 0 : 20 }}
            transition={{ duration: 1 }}
          >
            <nav >
                <NavigationMenu />
            </nav>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Header;
