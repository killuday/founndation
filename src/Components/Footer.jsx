import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-slate-900">
        <footer className="text-gray-600 body-font">
          <div className="container px-5 py-40 mx-auto">
            <div className="flex flex-wrap md:text-left text-center order-first">
              <div className="lg:w-1/3 md:w-1/2 w-full px-4">
                <h2 className="font-oswald  font-medium text-white uppercase  tracking-widest text-base mb-3">
                  about us
                </h2>
                <p className="mr-10  text-base ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                  facere laudantium magnam voluptatum autem. Amet aliquid
                  nesciunt veritatis aliquam.
                </p>
              </div>

              <div className="lg:w-1/3 md:w-1/2 w-full px-4">
                <h2 className="font-oswald uppercase font-medium text-white tracking-widest text-base mb-3">
                  features
                </h2>
                <nav className="list-none mb-10">
                  <li>
                    <a className="text-gray-600 hover:text-white text-sm tracking-wider transition-colors leading-10 capitalize cursor-pointer font-raleway">
                      about us
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-white text-sm tracking-wider transition-colors leading-10 capitalize cursor-pointer font-raleway">
                      testimonials
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-white text-sm tracking-wider transition-colors leading-10 capitalize cursor-pointer font-raleway">
                      terms of service
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-white text-sm tracking-wider transition-colors leading-10 capitalize cursor-pointer font-raleway">
                      privacy
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-white text-sm tracking-wider transition-colors leading-10 capitalize cursor-pointer font-raleway">
                      contact us
                    </a>
                  </li>
                </nav>
              </div>
              <div className="lg:w-1/3 md:w-1/2 w-full px-4">
                <div className=" mb-10">
                  <h2 className="font-oswald  font-medium text-white uppercase  tracking-widest text-base mb-3">
                    some paragraph
                  </h2>
                  <p className="text-base ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Neque facere laudantium magnam voluptatum autem. Amet
                    aliquid nesciunt veritatis aliquam.
                  </p>
                </div>
                <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
                  <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                    <h3
                      htmlFor="footer-field"
                      className="leading-7 text-lg pb-4 text-white uppercase font-oswald"
                    >
                     sunscribe to newsletter
                    </h3>
                    <input
                      type="text"
                      id="footer-field"
                      name="footer-field"
                      placeholder="Enter Email"
                      className="w-full bg-white rounded-l border border-white focus:bg-white h-14 focus:ring-2 focus:ring-orange-200 focus:border-orange-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                  <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-orange-500 border-0 py-4 px-3 focus:outline-none hover:bg-orange-800 ml-[-16px] rounded-r">
                    Subscribe
                  </button>
                </div> 
                <h3 className="text-white font-oswald uppercase mt-10 mb-5 tetx-lg tracking-wider">follow us</h3>
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
        <a className="text-gray-500">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <a className="ml-8 text-gray-500">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        <a className="ml-8 text-gray-500">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
        <a className="ml-8 text-gray-500">
          <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </a>
      </span>
    


              </div>
            </div>
          <hr className="mt-24 h-[1px]" />
          <p className="text-gray-600 font-raleway text-center mt-12">Copyright ©2023 All rights reserved | This template is made with love  by <span className="pl-1 hover:text-white transition-colors cursor-pointer font-normal">Uday</span></p>
          </div>
        
        </footer>
      </div>
    </>
  );
};

export default Footer;
