import React from 'react'

const Hero = () => {
  return (
    <section className='flex items-center sm:justify-around justify-center flex-col-reverse min-h-screen
    sm:flex-row mx-auto w-[96%] sm:w-[92%]   md:w-[90%] lg:w-[86%] '>
        <div className='flex flex-col space-y-3 text-center sm:text-left'>
            <h6>Hi, my name is </h6>
            <h1 className='text-5xl font-bold'>Johnson Muchiri</h1>
            <h4 className='text-xl font-semi-bold'>Frontend Web Developer</h4>
            <p className='font-[400] text-[14px] sm:max-w-xs'>I love building web applications. 
            Transforming a design into something beautifull</p>
            <div className='flex space-x-6 pt-6'>
              <a href='' className='hover:bg-[#646cff] hover:text-[#f8f8f8] rounded-[4px] px-6 py-2 border'>Let us Talk</a>
              <a href="" className='px-6 py-2 rounded-[4px] cursor-pointer border '>Download CV</a>
            </div>
        </div>
       <div className='flex items-center justify-center'>
        <img src="/nas.jpg" alt="" className='w-[200px] h-[200px] object-cover rounded-[50%]'/>
       </div>
    </section>
  )
}

export default Hero;