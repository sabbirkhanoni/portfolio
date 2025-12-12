import React from 'react'

const About = () => {
  return (
    <section className='min-h-screen mt-5 p-3'>
  <h2 className='text-black font-bold'>About Me</h2>

  <div className='grid grid-cols-1 md:grid-cols-6 gap-3 md:auto-rows-[18rem] rounded-md overflow-hidden mt-5'>
  <div className='flex items-end bg-[rgb(233,217,144)] grid-1'></div>
  <div className='flex items-end grid-black-color grid-2'></div>
  <div className='flex items-end grid-default-color grid-3'></div>
  <div className='flex items-end grid-special-color grid-4'></div>
  <div className='flex items-end grid-black-color grid-5'></div>
</div>

</section>

  )
}

export default About
