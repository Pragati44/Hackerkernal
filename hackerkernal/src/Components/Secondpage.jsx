import React from 'react';

const Secondpage = () => {
  return (
    <>
      <div className="inset-0 w-screen h-screen bg-black text-center p-1 flex flex-col items-center justify-center">
    
        <h3 className="text-white opacity-60 mr-230 ml-10">
          About
        </h3>

        <img
          src="/images/mid1and2.png"
          alt="The Edge Building"
          className="w-full h-auto object-cover bg-black mt-10 md:mt-20 max-w-screen-lg"
        />

      
        <p className="text-gray-300 text-lg text-justify max-w-[90%] md:max-w-[500px] leading-relaxed hyphens-auto mt-10 opacity-50 md:ml-100 ml-4">
          Architecture is the learned game, correct and magnificent, of forms
          assembled in the light. So keeping this in mind we started with our
          work.
        </p>

       
        <h2 className="text-lg text-zinc-300 mt-5 opacity-80 cursor-pointer hover:underline">
          + Read More
        </h2>
      </div>
    </>
  );
};

export default Secondpage;
