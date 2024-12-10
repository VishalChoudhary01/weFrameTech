'use client'
import Image from 'next/image';
import { CiSearch } from "react-icons/ci";
import { SlBulb } from "react-icons/sl";
import { GoHeart } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
import { LuShoppingCart } from "react-icons/lu";
import { useState } from 'react';
import { FaBarsStaggered } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import Link from 'next/link';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full text-[#3B4347]  h-[4rem] flex items-center justify-between px-4 bg-white z-10">
      {/* Logo */}
      <div className='relative lg:w-[7.5rem] md:w-[6rem] w-[5.5rem] lg:md-mt-3 md:-mt-7 -mt-8 h-auto'>
        <Image className='absolute w-full h-full' src={"/images/logo/weframetechLogo.svg"} alt='weFrameTech' layout='responsive' width={40} height={40}/>
      </div>

      {/* Search input for large screens */}
      <div className='relative lg:mt-3 md:mt-2 mt-1  lg:w-[48rem] md:w-[14rem] md:h-[3rem] w-[14rem] h-[2.3rem] lg:h-[3.125rem]'>
        <input className='absolute placeholder:lg:text-[1rem] caret-slate-400 placeholder:md:text-[0.9rem] placeholder:text-[0.7rem]  bg-[#F9FAFB]  outline-none focus:ring ring-slate-100 md:p-4 p-2 rounded-md w-full h-full' placeholder='Rechercher un produit'/>
        <span className='absolute lg:top-3 md:right-3 md:bottom-3 right-2 top-2  lg:text-[1.5rem] md:text-[1.3rem] text-[1rem] text-gray-500 '><CiSearch/></span>
      </div>

      {/* Desktop menu items */}
      <div className='md:flex hidden items-center gap-x-4 '>
        <Link href="/inspirations" className='md:flex hover:text-[#007AAD] transition-all duration-300 lg:text-[1rem] md:text-[0.8rem] hidden items-center gap-x-2'>
          <span><SlBulb/></span> 
            <p>Inspirations</p>
        </Link>

        <Link href="/favorites" className='md:flex hover:text-[#007AAD] transition-all duration-300  lg:text-[1rem] md:text-[0.8rem] hidden items-center lg:gap-x-2 md:gap-x-1'>
          <span><GoHeart/></span> 
            <p>Mes favoris</p>
          <div className='bg-slate-200 flex justify-center  items-center lg:w-8 lg:h-8 md:w-6 md:h-6 rounded-full'>
            <p>24</p>
          </div>
          </Link>

        <Link href="/cart" className='flex items-center gap-x-2 hover:scale-105 transition-all active:bg-blue-700 justify-center lg:px-4 lg:py-2 md:px-3 md:py-2 rounded-md bg-[#0093D0] text-white border-[#007AAD]'>
          <span><LuShoppingCart/></span>
            <p className='lg:text-[1rem] md:text-[0.8rem]'>Panier</p>
          </Link>

        <div className='flex items-center gap-x-2'>
          <div className='lg:w-[2.75rem] lg:h-[2.75rem] md:w-[2rem] md:h-[2rem]  rounded-full bg-slate-200'></div>
          <div className='flex items-center gap-x-2'>
            <p className='lg:text-[1rem] md:text-[0.8rem]'>FR</p>
            <span><IoIosArrowDown className='lg:text-[1rem] md:text-[0.8rem]'/></span>
          </div>
        </div>
      </div>

      {/* Mobile Hamburger Icon */}
      <button className="md:hidden text-xl" onClick={toggleSidebar}>
        <FaBarsStaggered />
      </button>

      {/* Sidebar for Mobile */}
      {isSidebarOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-20">
          <div className="w-64 h-full bg-white p-4 absolute top-0 left-0 ">
            <div className="flex justify-between items-center relative">
              <div className='relative w-[6.2rem] mb-[5rem]'>
                <Image className='absolute w-full h-full' src={"/images/logo/weframetechLogo.svg"} alt='weFrameTech' layout='responsive' width={40} height={40}/>
              </div>
              <button onClick={toggleSidebar}>
                <IoMdClose className='text-3xl absolute -right-2 top-0 '/>
              </button>
            </div>

            {/* Sidebar menu items */}
            <ul className="space-y-4">
              <li>
                <Link className='flex items-center text-[0.9rem] gap-x-2' href="/inspirations">
                 <span><SlBulb/></span> 
                  <p className="">Inspirations</p>
                </Link>
              </li>
              <li>
                <Link className='flex gap-x-2 text-[0.9rem] items-center' href="/favorites">
                     <span><GoHeart/></span> 
                  <p className="">Mes favoris</p>
                  <div className='bg-slate-200 md:hidden flex justify-center  items-center w-6 h-6 rounded-full'>
                  <p className='text-[0.8rem]'>24</p>
                </div>
                </Link>
              </li>
              <li>
                <Link className='flex items-center text-[0.9rem] gap-x-2' href="/cart">
                  <span><LuShoppingCart/></span>
                  <p className="text-md">Panier</p>
                </Link>
              </li>

              <li>
                <button
                  className=" flex text-[0.9rem] items-center"
                  onClick={toggleMenu}
                >
                  FR  
                  <IoIosArrowDown className={`ml-2 ${isMenuOpen ? 'transform rotate-180' : ''}`} />
                </button>
                {isMenuOpen && (
                  <div className="pl-4 text-[0.9rem] space-y-2 mt-2">
                    <Link href="/account">
                      <p className="">Mon compte</p>
                    </Link>
                    <Link href="/settings">
                      <p className="">Paramètres</p>
                    </Link>
                  </div>
                )}
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
