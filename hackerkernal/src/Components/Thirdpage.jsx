import React from 'react';
import WhiteBox from './WhiteBox';

const Thirdpage = () => {
  return (
    <section className="w-full min-h-screen bg-black text-white px-5 md:px-20 py-16 overflow-x-hidden">
      {/* Section Title */}
      <div className="mb-12 ml-[35px]">
        <span className="text-gray-400 ml-85 uppercase text-lg font-medium tracking-wide bg-gray-800 rounded-full px-4 py-2">
          News
        </span>
      </div>

      {/* Box Container (Fixed) */}
      <div className="flex gap-6 overflow-x-hidden w-full px-5 ml-85 overflow-hidden ">
        <WhiteBox
          image="images/page2_1.png"
          title="Cafe Foamies"
          description="White Architectures work was mentioned as best in one of the spacious interiors as well clean design in UNI - COS Magazine of the year 2020."
          date="20 Jun 2020"
        />
        <WhiteBox
          image="images/page2_2.png"
          title="Space and Light"
          description="D&D Magazine 2020 added an article on our work of 'Space and Light' saying about the design trend that we are setting out there."
          date="12 Mar 2020"
        />
        <WhiteBox
          image="images/page2_3.png"
          title="Edge Building"
          description="Architecture & Design 2020 added our Edge Building and mentioned it as the top Architectural work of Jan 2020."
          date="15 Jan 2020"
        />
      </div>
    </section>
  );
};

export default Thirdpage;
