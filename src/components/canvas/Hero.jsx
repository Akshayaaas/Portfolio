import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../../styles'
import ComputersCanvas from './Computers'


const Hero = () => {
  
  
return (
    <section className='relative w-full h-screen mx-auto'>
        <div className={`${styles.paddingX} absolute left-0 right-0 max-w-7xl mx-auto flex flex-row items-start gap-5 mb-20`}
         style={{ top: '35px' }}>
          <div className="flex flex-col justify-center items-center mt-5"> 
            <div className="w-5 h-5 rounded-full bg-[#915eff]" />
            <div className="w-1 sm:h-80 h-40 violet-gradient" />
            </div>
            <div >
               <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className="text-[#915eff]">Atchaya</span></h1>
               <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                I Develop web applications, user  <br className="sm:block hidden" /> interfaces and 3D Visuals
               </p>
            </div>
        </div>
 
      
        <ComputersCanvas />
        
        <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center pt-20'>
        <a href='#about'>
          
          
        </a>
      </div>
    </section>
  )
}

export default Hero
