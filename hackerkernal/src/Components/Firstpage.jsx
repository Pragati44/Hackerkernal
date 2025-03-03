import React from 'react'
import Nav from './Nav';

const Firstpage = () => {
  return (
    <section className="relative flex items-center justify-center min-h-screen bg-gray-800 text-white overflow-hidden">
 
 
 
  <div className="absolute inset-0 bg-cover bg-top" style={{ backgroundImage: "url('/images/page1.jpg')" }}>
   
    <div className="absolute inset-0 bg-black opacity-80"></div>
  </div>



   <Nav/>

  
    <div className="relative z-10 flex flex-col items-start max-w-6xl px-20 lg:flex-row lg:justify-between lg:items-center opacity-60 w-full">
   
    <div className="lg:w-1/2 ml-10 mt-10">
  <h1 className="text-5xl lg:text-5xl tracking-wide">Sharp & Beautiful</h1>
  <h2 className="text-5xl lg:text-5xl mt-2 tracking-wide">The Edge Building</h2>
  <p className="mt-3 text-md text-gray-300 tracking-wide">Madrid, Spain</p>
</div>


<div className="lg:w-1/3 mt-20 lg:mt-0 flex justify-center relative">
  <div className=" ml-[-100px] lg:ml-[-160px]"> 
    <img
      src="/images/page1.jpg"
      alt="The Edge Building"
      className="w-50 lg:w-76 h-96 mt-23"
    />
  </div>
</div>

       
        <div className="absolute bottom-5 right-[-40px] top-[50%] text-gray-400 text-xl">
          <span>1</span> / <span>5</span>
        </div>
      </div>
    
  </section>
);
  
}

export default Firstpage
