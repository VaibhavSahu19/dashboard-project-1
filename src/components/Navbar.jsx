import React, { useState, useEffect, useRef } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMagnifyingGlass, faBars, faBell, faAngleDown, faMessage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faMagnifyingGlass, faBars, faBell, faMessage, faAngleDown);

function Navbar({ toggle, setToggle }) {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const searchInputRef = useRef(null);

  const handleToggle = (e) => {
    e.preventDefault();
    setToggle(!toggle);
  };

  const handleSearchClick = (e) => {
    e.preventDefault();
    setIsSearchVisible((prev) => !prev);
  };

  const handleOutsideClick = (e) => {
    if (searchInputRef.current && !searchInputRef.current.contains(e.target) && e.target.id !== 'search-icon') {
      setIsSearchVisible(false);
    }
  };

  useEffect(() => {
    if (isSearchVisible) {
      document.addEventListener('click', handleOutsideClick);
    } else {
      document.removeEventListener('click', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isSearchVisible]);

  return (
    <section className="flex justify-between h-[60px] relative">
      <div className="flex justify-center items-center gap-[30px] flex-shrink-0">
        <FontAwesomeIcon
          onClick={handleToggle}
          className="text-[#b2b2b2] cursor-pointer text-[17px]"
          icon="fa-solid fa-bars"
        />
        {/* Search Input */}
        <div
          ref={searchInputRef}
          className={`flex bg-[#FAFAFA] px-[20px] py-[10px] rounded-md ${isSearchVisible && window.innerWidth <= 768 ? 'absolute top-[60px] left-0 right-0  border border-[#B3B3B3] p-[10px] shadow-lg' : 'hidden md:flex'} items-center rounded-[5px]`}
        >
          <input
            className="bg-transparent outline-none text-[#b2b2b2] px-[5px] md:px-[10px] w-full"
            type="text"
            placeholder="Search"
          />
        </div>
        <FontAwesomeIcon
          id="search-icon"
          onClick={handleSearchClick}
          className="text-[#b2b2b2] cursor-pointer text-[17px]"
          icon="fa-solid fa-magnifying-glass"
        />
      </div>
      <div className="flex justify-center items-center gap-[30px]">
        <div className="relative">
          <FontAwesomeIcon className="text-[#b2b2b2] cursor-pointer text-[20px]" icon="fa-solid fa-bell" />
          <div className="absolute border border-[white] z-1 top-1 left-2.5 bg-red-500 w-[8px] h-[8px] rounded-[50%]" />
        </div>
        <div className="relative">
          <FontAwesomeIcon className="text-[#b2b2b2] cursor-pointer text-[20px]" icon="fa-solid fa-message" />
        </div>
        <img className="w-8 h-8 rounded-[50%] object-center cursor-pointer" src="/profile-pic.jpg" alt="profile-pic" />
        <FontAwesomeIcon className="text-[#b2b2b2] cursor-pointer text-[20px]" icon="fa-solid fa-angle-down" />
      </div>
    </section>
  );
}

export default Navbar;
