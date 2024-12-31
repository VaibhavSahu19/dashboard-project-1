import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
library.add(faXmark);

function Sidebar({toggle, setToggle}) {
    function handleToggle(e){
        e.preventDefault();
        setToggle(!toggle);
    }
  return (
    <section
            className={`${
                toggle ? 'block' : 'hidden'
            } fixed inset-0 md:flex flex-col justify-start gap-[40px] px-[30px] py-[10px] w-[20%] bg-[#FAFBFB] z-50 md:relative`}
        >
        <div className = 'flex justify-center items-center '>
            <img src="/logo.png" alt="logo" />
            <img className='hidden md:flex' src="/logo-name.png" alt="logo-name" />
        </div>
        <div className = 'text-[#b2b2b2]'>
            <h2 className = 'text-[12px]'>MAIN MENU</h2>
            <ul className = 'flex flex-col gap-[25px] py-[16px]'>
                <li className = ''>
                    <a className = 'flex justify-items-start items-center gap-[20px] text-[#b2b2b2] hover:text-[#FF5151]' href="">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="hover:text-[#FF5151]">
                            <path d="M0 10H8V0H0V10ZM0 18H8V12H0V18ZM10 18H18V8H10V18ZM10 0V6H18V0H10Z" fill="currentColor"/>
                        </svg>
                        <span className={`hidden md:flex ${toggle ? 'block' : ''}`}>Dashboard</span>
                    </a>
                </li>
                <li className = ''>
                    <a className = 'flex justify-items-start items-center gap-[20px] text-[#b2b2b2] hover:text-[#FF5151]' href="">
                        <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="hover:text-[#FF5151]">
                        <path d="M2 4C2 4.79112 2.2346 5.56448 2.67412 6.22228C3.11365 6.88008 3.73836 7.39277 4.46927 7.69552C5.20017 7.99827 6.00444 8.07748 6.78036 7.92314C7.55628 7.7688 8.26902 7.38784 8.82842 6.82843C9.38784 6.26902 9.7688 5.55628 9.92314 4.78036C10.0775 4.00444 9.99827 3.20017 9.69552 2.46927C9.39277 1.73836 8.88008 1.11365 8.22228 0.674121C7.56448 0.234596 6.79112 0 6 0C4.93913 0 3.92172 0.421427 3.17157 1.17157C2.42143 1.92172 2 2.93913 2 4Z" fill="currentColor"/>
                        <rect y="10" width="12" height="6" rx="3" fill="currentColor"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M16 4H14V6L12 6V8H14V10H16V8H18V6L16 6V4Z" fill="currentColor"/>
                        </svg>
                        <span className = 'hidden md:flex'>Recruitment</span>
                    </a>
                </li>
                <li className = ''>
                    <a className = 'flex justify-items-start items-center gap-[20px] text-[#b2b2b2] hover:text-[#FF5151]' href="">
                        <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="hover:text-[#FF5151]">
                            <path d="M14.2222 1.8H12.4444V0H10.6667V1.8H5.33333V0H3.55556V1.8H1.77778C0.797333 1.8 0 2.6073 0 3.6V16.2C0 17.1927 0.797333 18 1.77778 18H14.2222C15.2027 18 16 17.1927 16 16.2V3.6C16 2.6073 15.2027 1.8 14.2222 1.8ZM13.3333 15.3H8V9.9H13.3333V15.3ZM14.2222 6.3H1.77778V4.5H14.2222V6.3Z" fill="currentColor"/>
                        </svg>
                        <span className = 'hidden md:flex'>Schedule</span>
                    </a>
                </li>
                <li className = ''>
                    <a className = 'flex justify-items-start items-center gap-[20px] text-[#b2b2b2] hover:text-[#FF5151]' href="">
                        <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="hover:text-[#FF5151]">
                            <path d="M12 3C12 3.79565 11.6839 4.55871 11.1213 5.12132C10.5587 5.68393 9.79565 6 9 6C8.20435 6 7.44129 5.68393 6.87868 5.12132C6.31607 4.55871 6 3.79565 6 3C6 2.20435 6.31607 1.44129 6.87868 0.87868C7.44129 0.316071 8.20435 0 9 0C9.79565 0 10.5587 0.316071 11.1213 0.87868C11.6839 1.44129 12 2.20435 12 3Z" fill="currentColor"/>
                            <path d="M17 5C17 5.53043 16.7893 6.03914 16.4142 6.41421C16.0391 6.78929 15.5304 7 15 7C14.4696 7 13.9609 6.78929 13.5858 6.41421C13.2107 6.03914 13 5.53043 13 5C13 4.46957 13.2107 3.96086 13.5858 3.58579C13.9609 3.21071 14.4696 3 15 3C15.5304 3 16.0391 3.21071 16.4142 3.58579C16.7893 3.96086 17 4.46957 17 5Z" fill="currentColor"/>
                            <path d="M5 5C5 5.53043 4.78929 6.03914 4.41421 6.41421C4.03914 6.78929 3.53043 7 3 7C2.46957 7 1.96086 6.78929 1.58579 6.41421C1.21071 6.03914 1 5.53043 1 5C1 4.46957 1.21071 3.96086 1.58579 3.58579C1.96086 3.21071 2.46957 3 3 3C3.53043 3 4.03914 3.21071 4.41421 3.58579C4.78929 3.96086 5 4.46957 5 5Z" fill="currentColor"/>
                            <path d="M15 15V12C15.0014 10.9833 14.7433 9.98303 14.25 9.094C14.6933 8.98054 15.1568 8.96984 15.6049 9.06272C16.053 9.15559 16.474 9.34959 16.8357 9.62991C17.1974 9.91023 17.4903 10.2695 17.6921 10.6802C17.8939 11.091 17.9992 11.5424 18 12V15H15Z" fill="currentColor"/>
                            <path d="M3.75 9.09398C3.25675 9.98303 2.9986 10.9833 3 12V15H2.6572e-07V12C-0.000192468 11.542 0.104463 11.0901 0.305947 10.6788C0.507431 10.2676 0.800394 9.90791 1.16238 9.6274C1.52437 9.34688 1.94578 9.15296 2.39431 9.0605C2.84284 8.96804 3.30658 8.97949 3.75 9.09398Z" fill="currentColor"/>
                            <rect x="5" y="8" width="8" height="7" rx="3" fill="currentColor"/>
                        </svg>
                        <span className = 'hidden md:flex'>Employee</span>
                    </a>
                </li>
                <li className = ''>
                    <a className = 'flex justify-items-start items-center gap-[20px] text-[#b2b2b2] hover:text-[#FF5151]' href="">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="hover:text-[#FF5151]">
                            <path d="M9 0C4.032 0 0 4.032 0 9C0 13.968 4.032 18 9 18C13.968 18 18 13.968 18 9C18 4.032 13.968 0 9 0ZM5.4 13.95C4.80326 13.95 4.23097 13.7129 3.80901 13.291C3.38705 12.869 3.15 12.2967 3.15 11.7C3.15 11.1033 3.38705 10.531 3.80901 10.109C4.23097 9.68705 4.80326 9.45 5.4 9.45C5.99674 9.45 6.56903 9.68705 6.99099 10.109C7.41295 10.531 7.65 11.1033 7.65 11.7C7.65 12.2967 7.41295 12.869 6.99099 13.291C6.56903 13.7129 5.99674 13.95 5.4 13.95ZM6.75 5.4C6.75 4.80326 6.98705 4.23097 7.40901 3.80901C7.83097 3.38705 8.40326 3.15 9 3.15C9.59674 3.15 10.169 3.38705 10.591 3.80901C11.0129 4.23097 11.25 4.80326 11.25 5.4C11.25 5.99674 11.0129 6.56903 10.591 6.99099C10.169 7.41295 9.59674 7.65 9 7.65C8.40326 7.65 7.83097 7.41295 7.40901 6.99099C6.98705 6.56903 6.75 5.99674 6.75 5.4ZM12.6 13.95C12.0033 13.95 11.431 13.7129 11.009 13.291C10.5871 12.869 10.35 12.2967 10.35 11.7C10.35 11.1033 10.5871 10.531 11.009 10.109C11.431 9.68705 12.0033 9.45 12.6 9.45C13.1967 9.45 13.769 9.68705 14.191 10.109C14.6129 10.531 14.85 11.1033 14.85 11.7C14.85 12.2967 14.6129 12.869 14.191 13.291C13.769 13.7129 13.1967 13.95 12.6 13.95Z" fill="currentColor"/>
                        </svg>
                        <span className = 'hidden md:flex'>Department</span>
                    </a>
                </li>
            </ul>
        </div>
        <div className = 'text-[#b2b2b2]'>
            <h2 className = 'text-[12px]'>OTHERS</h2>
            <ul className = 'flex flex-col gap-[30px] py-[16px]'>
                <li className = ''>
                    <a className = 'flex justify-items-start items-center gap-[20px] text-[#b2b2b2] hover:text-[#FF5151]' href="">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="hover:text-[#FF5151]">
                            <path d="M9 0C4.0374 0 0 4.0374 0 9V12.7287C0 13.6503 0.8073 14.4 1.8 14.4H2.7C2.93869 14.4 3.16761 14.3052 3.3364 14.1364C3.50518 13.9676 3.6 13.7387 3.6 13.5V8.8713C3.6 8.63261 3.50518 8.40369 3.3364 8.2349C3.16761 8.06612 2.93869 7.9713 2.7 7.9713H1.8828C2.3832 4.4883 5.3802 1.8 9 1.8C12.6198 1.8 15.6168 4.4883 16.1172 7.9713H15.3C15.0613 7.9713 14.8324 8.06612 14.6636 8.2349C14.4948 8.40369 14.4 8.63261 14.4 8.8713V14.4C14.4 15.3927 13.5927 16.2 12.6 16.2H10.8V15.3H7.2V18H12.6C14.5854 18 16.2 16.3854 16.2 14.4C17.1927 14.4 18 13.6503 18 12.7287V9C18 4.0374 13.9626 0 9 0Z" fill="currentColor"/>
                        </svg>
                        <span className = 'hidden md:flex'>Support</span>
                    </a>
                </li>
                <li className = ''>
                    <a className = 'flex justify-items-start items-center gap-[20px] text-[#b2b2b2] hover:text-[#FF5151]' href="">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="hover:text-[#FF5151]">
                            <path d="M10.3703 18H7.09427C6.88901 18 6.6899 17.9299 6.52997 17.8012C6.37004 17.6726 6.25889 17.4931 6.21497 17.2926L5.84867 15.597C5.36002 15.3829 4.89668 15.1151 4.46717 14.7987L2.81387 15.3252C2.61818 15.3876 2.40702 15.3812 2.21548 15.307C2.02393 15.2329 1.86351 15.0954 1.76087 14.9175L0.119269 12.0816C0.0176998 11.9035 -0.0204268 11.6962 0.0111271 11.4937C0.042681 11.2911 0.142047 11.1052 0.292969 10.9665L1.57547 9.7965C1.51715 9.2665 1.51715 8.7317 1.57547 8.2017L0.292969 7.0344C0.141833 6.8956 0.0423321 6.70957 0.010773 6.5068C-0.020786 6.30404 0.0174693 6.09657 0.119269 5.9184L1.75727 3.0807C1.85991 2.90278 2.02033 2.76533 2.21188 2.69117C2.40342 2.61701 2.61458 2.61059 2.81027 2.673L4.46357 3.1995C4.68317 3.0375 4.91177 2.8863 5.14757 2.7495C5.37527 2.6217 5.60927 2.5056 5.84867 2.4021L6.21587 0.7083C6.25958 0.507778 6.37052 0.328219 6.53028 0.199394C6.69004 0.0705689 6.88904 0.000215969 7.09427 0H10.3703C10.5755 0.000215969 10.7745 0.0705689 10.9343 0.199394C11.094 0.328219 11.205 0.507778 11.2487 0.7083L11.6195 2.403C11.8715 2.5146 12.1181 2.6397 12.3566 2.7792C12.5789 2.9079 12.794 3.0492 13.001 3.2013L14.6552 2.6748C14.8507 2.61262 15.0617 2.61915 15.253 2.6933C15.4444 2.76746 15.6047 2.90478 15.7073 3.0825L17.3453 5.9202C17.5541 6.2865 17.4821 6.75 17.1716 7.0353L15.8891 8.2053C15.9474 8.7353 15.9474 9.2701 15.8891 9.8001L17.1716 10.9701C17.4821 11.2563 17.5541 11.7189 17.3453 12.0852L15.7073 14.9229C15.6046 15.1008 15.4442 15.2383 15.2527 15.3124C15.0611 15.3866 14.85 15.393 14.6543 15.3306L13.001 14.8041C12.5718 15.1203 12.1087 15.3878 11.6204 15.6015L11.2487 17.2926C11.2048 17.493 11.0938 17.6723 10.934 17.801C10.7743 17.9296 10.5754 17.9998 10.3703 18ZM8.72867 5.4C7.77389 5.4 6.85822 5.77928 6.18308 6.45442C5.50795 7.12955 5.12867 8.04522 5.12867 9C5.12867 9.95478 5.50795 10.8705 6.18308 11.5456C6.85822 12.2207 7.77389 12.6 8.72867 12.6C9.68345 12.6 10.5991 12.2207 11.2743 11.5456C11.9494 10.8705 12.3287 9.95478 12.3287 9C12.3287 8.04522 11.9494 7.12955 11.2743 6.45442C10.5991 5.77928 9.68345 5.4 8.72867 5.4Z" fill="currentColor"/>
                        </svg>
                        <span className = 'hidden md:flex'>Settings</span>
                    </a>
                </li>
            </ul>
            <FontAwesomeIcon onClick={handleToggle} className={`md:hidden ${toggle ? 'flex' : 'hidden'} text-[#b2b2b2] text-[20px] cursor-pointer`} icon="fa-solid fa-xmark" />
        </div>
    </section>
  )
}

export default Sidebar