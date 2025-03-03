import React from "react";

const Nav = () => {
  return (
<header className="fixed top-5 left-10 right-10 z-50 bg-transparent flex items-center justify-between px-6">

  <img src="/images/Logo.png" alt="Logo" className=" h-14 w-34 mt-5" />

 
  <nav className="hidden md:flex space-x-8 text-zinc-300 text-md opacity-80 gap-8">
    <a href="#" className="hover:text-white transition duration-300">Projects</a>
    <a href="#" className="hover:text-white transition duration-300">About</a>
    <a href="#" className="hover:text-white transition duration-300">News</a>
    <a href="#" className="hover:text-white transition duration-300">Services</a>
    <a href="#" className="hover:text-white transition duration-300">Contact</a>
  </nav>


</header>

  );
};

export default Nav;
