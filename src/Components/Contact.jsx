import React from 'react'

const Contact = () => {
  return (
    <>
    <div className='bg-gray-100'>

    <div className="container font-oswald text-[4rem] text-center pt-24  ">
        <h3 className='uppercase text-black'>Contact us</h3>

        
    </div>
    
    <div className="lg:w-1/2 md:w-2/3 mx-auto pl-16 pr-16 pt-10 font-raleway pb-44 ">
      <div className="flex flex-wrap -m-2">
        <div className="p-2 w-1/2">
          <div className="relative">
            <input placeholder='First Name' type="text" id="name" name="name" className="w-full h-14 bg-white  bg-opacity-50 rounded border border-gray-300 focus:border-yellow-500 focus:bg-white focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="relative">
            <input placeholder='Last Name' type="email" id="email" name="email" className="w-full h-14 bg-white bg-opacity-50 rounded border border-gray-300 focus:border-yellow-500 focus:bg-white focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="relative">
            <input placeholder='Email address' id="email" name="email" className="w-full bg-white bg-opacity-50 rounded border border-gray-300 focus:border-yellow-500 focus:bg-white focus:ring-2 focus:ring-orange-200 h-14 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></input>
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="relative">
            <textarea placeholder='Write down your message.' id="message" name="message" className="w-full bg-white bg-opacity-50 rounded border border-gray-300 focus:border-yellow-500 focus:bg-white focus:ring-2 focus:ring-orange-200 h-60 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
        </div>
        <div className="p-2 w-full justify-end flex">
          <button className="flex  text-white bg-orange-500 border-0 text-sm py-5 px-20 focus:outline-none hover:bg-orange-600 rounded font-semibold capitalize ">send message</button>
        </div>
        
      </div>
    </div>
    </div>
    </>
  )
}

export default Contact