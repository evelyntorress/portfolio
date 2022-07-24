import React, { useState } from "react";
import {FaBars, FaTimes, FaGithub, FaLinkedin} from "react-icons/fa";
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#ff6b6b] text-gray-100">
      
        {/* Menu */}
        <ul className="hidden md:flex">
          <li>Home</li>
          <li>About</li>
          <li>Experience</li>
          <li>Contact EVE</li>
        </ul>
      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ?<FaBars /> : <FaTimes />}
        
      </div>

      {/* Mobile menu */}
      <ul 
          className={
            !nav
              ? 'hidden'
              : 'absolute top-0 left-0 w-full h-screen bg-[#fef9ef] flex flex-col justify-center items-center'
          }>
        
        {/* // !nav ? "hidden" : 'absolute top-0 left-0 w-full h-screen bg-[#fef9ef] flex-col justify-center items-center'}> */}

        <li className='py-6 text-4xl'>Home</li>
        <li className='py-6 text-4xl'>About</li>
        <li className='py-6 text-4xl'>Experience</li>
        <li className='py-6 text-4xl'>Contact</li>
      </ul>
      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'></div>
      <ul>
        <li>
            <a href="/">Linkedin</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;