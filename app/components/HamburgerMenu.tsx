// components/MenuComponent.js
import React, { useState } from 'react';
import { Squeeze as Hamburger } from "hamburger-react";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <Hamburger toggled={isOpen} toggle={setIsOpen} size={20} easing="ease-in" duration={0.5} />
      <div className={`absolute right-0 mt-2 bg-base-100 w-48 text-xs rounded-lg drop-shadow-lg z-50 transition-all duration-300 ease-in-out transform ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-1'}`}>
        <ul className="py-1">
          <li className="px-4 py-2 text-info underline"><a href="/blogs">Blogs</a></li>
          <li className="px-4 py-2 underline"><a href="#home">Home</a></li>
          <li className="px-4 py-2 underline"><a href="#about">About</a></li>
          <li className="px-4 py-2 underline"><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </div>
  );
};

export default HamburgerMenu;
