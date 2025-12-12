import React, { useState } from 'react';
import {motion} from 'motion/react'
import NavigationMenu from '../components/NavigationMenu';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className='fixed w-full top-0 left-0 z-100 backdrop-blur-2xl bg-gray-800 py-2 border-b border-gray-800'>
      <div className='mx-auto max-w-8xl px-5 md:px-10 lg:px-20 font-bold text-lg'>
        <div className='flex justify-between items-center text-white'>
          
          <a>
            <img src="src/assets/onilogo.png" alt="Logo" className="h-8" />
          </a>

          <div className='hidden md:flex gap-10 items-center'>
            <a className='text-sm font-semibold transition-colors text-neutral-500 hover:text-white'>Home</a>
            <a className='text-sm font-semibold transition-colors text-neutral-500 hover:text-white'>Projects</a>
            <a className='text-sm font-semibold transition-colors text-neutral-500 hover:text-white'>Resume</a>
            <a className='text-sm font-semibold transition-colors text-neutral-500 hover:text-white'>About</a>
            <a className='text-sm bg-[rgb(8,165,202)] px-5 rounded-full py-1 font-semibold text-white hover:text-neutral-500'>
              Hire Me
            </a>
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

          <motion.div className={`absolute top-12 h-screen right-0 bg-gray-800 p-5 w-64 rounded-b-md shadow-lg md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : -20 }}
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
