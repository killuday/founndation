import React from 'react'

const About = () => {
  return (
    <>
    <div className='bg-hero relative bg-center bg-cover bg-no-repeat bg-fixed   '>
       <div className="container mx-auto p-10 pt-28">
       <div className="flex flex-wrap">
        <div className="basis-1/2 md:w-1/2  z-10 ">
         <img src="https://preview.colorlib.com/theme/foundation/images/hero_1_no-text.jpg" alt="" className='object-contain' />
        </div>
        <div className="basis-1/2 md:w-1/2 z-10">
            <h1 className='font-oswald font-extrabold lg:text-[4rem]  md:text-[2rem]  uppercase lg:pt-16 md:pt-0 pl-32'>our mission</h1>
            <p className='pl-16 font-raleway md:text-sm   lg:text-base lg:pt-8 md:pt-3 lg:text-left md:text-center'>Accusantium dignissimos voluptas rem consequatur blanditiis error ratione illo sit quasi ut, praesentium magnam, pariatur quae, necessitatibus</p>
            <p className='pl-16 font-raleway  md:text-sm text-base lg:pt-8 md:pt-3 lg:text-left md:text-center'>Dolor, eligendi voluptate ducimus itaque esse autem perspiciatis sint! Recusandae dolor aliquid inventore sit</p>
        </div>

       </div>

       </div>
       <section className="text-gray-600 body-font ">
  <div className="container px-5 mx-auto">
   
    <div className="flex flex-wrap -m-4">
      <div className="p-4 lg:w-1/4 md:w-1/2">
        <div className="h-full flex flex-col items-center text-center">
          <div className="w-full z-10">
            <h2 className="title-font relative font-medium text-[4rem] font-oswald mb-4 text-orange-500">15</h2>
            <p className="mb-4 font-raleway font-medium text-black">Number Of Orphange.</p>
           
          </div>
        </div>
      </div>
      <div className="p-4 lg:w-1/4 md:w-1/2">
        <div className="h-full flex flex-col items-center text-center">
          <div className="w-full z-10">
            <h2 className="title-font relative font-medium  text-[4rem] font-oswald mb-4 text-orange-500"> 392</h2>
            <p className="mb-4 font-raleway font-medium text-black">Number Of Donations</p>
           
          </div>
        </div>
      </div>
      <div className="p-4 lg:w-1/4 md:w-1/2">
        <div className="h-full flex flex-col items-center text-center">
          <div className="w-full z-10">
            <h2 className="title-font relative font-medium text-[4rem] font-oswald mb-4 text-orange-500">3,293 </h2>
            <p className="mb-4 font-raleway font-medium text-black">Number of Volunteers.</p>
           
          </div>
        </div>
      </div>
      <div className="p-4 lg:w-1/4 md:w-1/2 mb-28">
        <div className="h-full flex flex-col items-center text-center">
          <div className="w-full z-10">
            <h2 className="title-font relative font-medium text-[4rem] font-oswald mb-4 text-orange-500">1,212</h2>
            <p className="mb-4 font-raleway font-medium text-black">Number of Orphans.</p>
           
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
    
    </>
  )
}

export default About