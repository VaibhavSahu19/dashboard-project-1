import React, { useState } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMagnifyingGlass, faBars, faBell, faAngleDown, faMessage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faMagnifyingGlass, faBars, faBell, faMessage, faAngleDown);

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section className='flex justify-between h-[60px] px-4 md:px-8'>
      <div className='flex justify-between items-center w-full'>
        <div className='flex justify-center items-center gap-[30px] flex-shrink-0'>
          <FontAwesomeIcon
            className='text-[#b2b2b2] cursor-pointer text-[17px]'
            icon='fa-solid fa-bars'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
          <div className='flex bg-[#FAFAFA] border border-[#B3B3B3] p-[10px] justify-center items-center rounded-[5px]'>
            <input className='bg-transparent outline-none text-[#b2b2b2] px-[10px]' type='text' placeholder='Search' />
            <FontAwesomeIcon className='text-[#b2b2b2] cursor-pointer text-[17px]' icon='fa-solid fa-magnifying-glass' />
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className='absolute top-[60px] left-0 w-full bg-white shadow-lg md:hidden'>
            <ul className='flex flex-col items-center p-4'>
              <li className='py-2'><a href='#' className='text-[#b2b2b2]'>Option 1</a></li>
              <li className='py-2'><a href='#' className='text-[#b2b2b2]'>Option 2</a></li>
              <li className='py-2'><a href='#' className='text-[#b2b2b2]'>Option 3</a></li>
            </ul>
          </div>
        )}

        <div className='flex justify-center items-center gap-[30px]'>
          <div className='relative'>
            <FontAwesomeIcon className='text-[#b2b2b2] cursor-pointer text-[20px]' icon='fa-solid fa-bell' />
            <div className='absolute border border-[white] z-1 top-1 left-2.5 bg-red-500 w-[8px] h-[8px] rounded-[50%]' />
          </div>
          <div className='relative'>
            <FontAwesomeIcon className='text-[#b2b2b2] cursor-pointer text-[20px]' icon='fa-solid fa-message' />
          </div>
          <img className='w-8 h-8 rounded-[50%] object-center cursor-pointer' src='/profile-pic.jpg' alt='profile-pic' />
          <FontAwesomeIcon className='text-[#b2b2b2] cursor-pointer text-[20px]' icon='fa-solid fa-angle-down' />
        </div>
      </div>
    </section>
  );
}

export default Navbar;
