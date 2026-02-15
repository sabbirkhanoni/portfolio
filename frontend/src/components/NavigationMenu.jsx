import React from 'react'

const NavigationMenu = () => {
  return (
    <div>
      <ul className='flex flex-col gap-5 mt-5'>
        <li><a className='text-sm font-semibold transition-colors text-neutral-500 hover:text-white'>Home</a></li>
        <li><a className='text-sm font-semibold transition-colors text-neutral-500 hover:text-white'>Projects</a></li>
        <li><a className='text-sm font-semibold transition-colors text-neutral-500 hover:text-white'>Resume</a></li>
        <li><a className='text-sm font-semibold transition-colors text-neutral-500 hover:text-white'>About</a></li>
        <li>
          <a className='text-sm bg-[rgb(8,165,202)] px-5 rounded-full py-1 font-semibold text-white hover:text-neutral-500'>
            Hire Me
          </a>
        </li>
      </ul>
    </div>
  )
}

export default NavigationMenu
