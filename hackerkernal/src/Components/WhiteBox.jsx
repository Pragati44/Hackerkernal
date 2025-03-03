import React from "react";

const WhiteBox = ({ image, title, description, date }) => {
  return (
    <div className="p-6 shadow-lg w-[30%] flex-shrink-0  md:min-w-[25%] h-auto md:h-[480px] flex flex-col justify-between font-zinc-300">
      <div className="bg-white p-12">
        <img
          src={image}
          alt={title}
          className="w-full h-[200px] object-cover rounded-lg shadow-lg"
        />
      </div>

      <div className="mt-4">
        <p className="text-zinc-400 text-sm opacity-85">{description}</p>
        <p className="text-zinc-300 mt-3 text-sm opacity-85">————— {date}</p>
      </div>
    </div>
  );
};

export default WhiteBox;
