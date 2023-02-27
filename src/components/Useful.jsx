import React from 'react'
import pic1 from '../assets/useful1.jpg'
import pic2 from '../assets/useful2.jpg'
import pic3 from '../assets/useful3.jpg'

const Useful = () => {
  return (
    <section id="who-is-useful" className="py-4">
        <h1 className="text-center">WHO IS IT USEFUL FOR?</h1>
        <div className='flex flex-wrap items-center justify-center mt-8 md:mt-16'>
            <article className='mb-8 mx-2 max-w-md'>
                <img className='rounded-md' src={pic1} alt="small and medium organizations"></img>
                <h2 className='text-center uppercase mt-4'>small and medium organizations</h2>
            </article>
            <article className='mb-8 mx-2 max-w-md'>
                <img className='rounded-md' src={pic2} alt="salesman and saleswomen"></img>
                <h2 className='text-center uppercase mt-4'>salesman and saleswomen</h2>
            </article>
            <article className='mb-8 mx-2 max-w-md'>
                <img className='rounded-md' src={pic3} alt="HR and C-level management"></img>
                <h2 className='text-center uppercase mt-4'>HR and C-level management</h2>
            </article>
        </div>
        <div className="h-4 border-b border-slate-300 mb-8"></div>
    </section>
  )
}

export default Useful;