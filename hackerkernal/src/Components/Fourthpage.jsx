import React from 'react'

const Fourthpage = () => {
    return (
        <section className="w-full min-h-screen bg-[#EAF0F2] text-black px-8 md:px-20 py-16">
         
          <div className="mb-20 ml-50">
         
            <span className="text-gray-500 uppercase mt-20 mb-10 text-sm font-medium tracking-wide bg-gray-200 px-5 py-3 rounded-full opacti-40">
              Services
            </span>
    
           
            <h1 className="text-[10vw] md:text-[5rem] font-light mt-6 leading-tight mt-30 mb-20">
              Design <br />
              Direction <br />
              Guide
            </h1>
    
           
            <a href="#" className="mt-8 mb-30 text-gray-600 hover:text-black underline text-sm block opacity-45">
              Read More +
            </a>
          </div>
    
    
          <div className='ml-20 p-20'>
           
            <span className=" text-gray-500 uppercase text-sm font-medium tracking-wide bg-gray-200 px-5 py-3 rounded-full">
              Contact Us
            </span>
    
           
            <div className=" ml-70 mt-10 flex flex-col space-y-6 text-gray-700 ">
             
              <div className=" relative flex items-center space-x-4 p-10 w-82 font-semibold">
                <img src="images/CU1.png" alt="Location" className="w-15 h-15 opacity-5" />
                <p className='absolute ml-13 mt-20 opacity-80'>White Architectures, 2787 Street, Fremont, California 94538</p>
              </div>
    
             
              <div className="relative flex items-center space-x-4 p-10 w-82 font-semibold">
                <img src="/images/CU2.png" alt="Email" className="w-19 h-19  opacity-5" />
                <p className='absolute ml-15 mt-6 opacity-80'>wagetintouch@whitearch.com</p>
              </div>
    
              
              <div className=" relative flex items-center space-x-4 p-10 w-82 font-semibold">
                <img src="/images/contact3.jpg" alt="Phone" className="w-19 h-19 opacity-5" />
                <p className='absolute ml-13 mt-6 opacity-80'>510-979-9360</p>
              </div>
            </div>
          </div>
        </section>
      );
}

export default Fourthpage
