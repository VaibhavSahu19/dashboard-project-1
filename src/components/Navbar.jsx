import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMagnifyingGlass, faBars, faBell, faAngleDown, faMessage} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faMagnifyingGlass, faBars, faBell, faMessage, faAngleDown);

function Navbar({toggle, setToggle}) {

  function handleToggle(e){
    e.preventDefault();
    setToggle(!toggle);
  }
  return (
    <section className='flex justify-between h-[60px]'>
        <div className='flex justify-center items-center gap-[30px] flex-shrink-0'>
            <FontAwesomeIcon onClick={handleToggle} className="text-[#b2b2b2] cursor-pointer text-[17px]" icon="fa-solid fa-bars" />
            <div className='flex bg-[#FAFAFA] border border-[#B3B3B3] p-[10px] justify-center items-center rounded-[5px]'>
            <input className='hidden md:flex bg-transparent outline-none text-[#b2b2b2] px-[5px] md:px-[10px]' type="text" placeholder='Search' />
            <FontAwesomeIcon className="text-[#b2b2b2] cursor-pointer text-[17px]" icon="fa-solid fa-magnifying-glass" />
            </div>
        </div>
        <div className='flex justify-center items-center gap-[30px]'>
            <div className='relative'>
            <FontAwesomeIcon className='text-[#b2b2b2] cursor-pointer text-[20px]' icon="fa-solid fa-bell" />
            <div className='absolute border border-[white] z-1 top-1 left-2.5 bg-red-500 w-[8px] h-[8px] rounded-[50%]' />
            </div>
            <div className='relative'>
            <FontAwesomeIcon className='text-[#b2b2b2] cursor-pointer text-[20px]' icon="fa-solid fa-message" />
            </div>
            <img className='w-8 h-8 rounded-[50%] object-center cursor-pointer' src="/profile-pic.jpg" alt="profile-pic" />
            <FontAwesomeIcon className='text-[#b2b2b2] cursor-pointer text-[20px]' icon="fa-solid fa-angle-down" />
        </div>
    </section>

  )
}

export default Navbar