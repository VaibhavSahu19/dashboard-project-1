import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';

library.add(faEllipsis);

function Announcement({ title, time }) {
    const [isPinned, setIsPinned] = useState(false);

    function handlePin(e) {
        e.preventDefault(); 
        setIsPinned(!isPinned);
    }

    return (
        <div className='bg-[#FAFAFA] rounded-md flex justify-between items-center p-[10px] gap-[10px]'>
            <div className='flex flex-col justify-between gap-[15px] w-[60%]'>
                <div className='text-[16px] font-medium'>{title}</div>
                <div className=''>{time}</div>
            </div>
            <div className='flex justify-center items-center gap-[20px]'>
                <a className='' href="#" onClick={handlePin}>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M10.9771 1.02765e-06C11.0618 -0.000150186 11.1457 0.0163877 11.224 0.0486692C11.3022 0.0809508 11.3734 0.128343 11.4333 0.188136L17.8119 6.56669C17.9327 6.68752 18.0005 6.85137 18.0005 7.02221C18.0005 7.19306 17.9327 7.35691 17.8119 7.47773C17.1933 8.09626 16.4305 8.23543 15.8751 8.23543C15.647 8.23543 15.4434 8.21223 15.2823 8.18517L11.2439 12.2236C11.3502 12.652 11.4192 13.0887 11.4501 13.529C11.5093 14.4336 11.4088 15.7028 10.5223 16.5894C10.4014 16.7102 10.2376 16.778 10.0668 16.778C9.89591 16.778 9.73205 16.7102 9.61123 16.5894L5.96579 12.9452L1.86547 17.0456C1.6142 17.2968 0.294674 18.2079 0.0433977 17.9566C-0.207879 17.7053 0.703159 16.3845 0.954436 16.1345L5.05475 12.0342L1.4106 8.38877C1.28981 8.26795 1.22196 8.10409 1.22196 7.93325C1.22196 7.7624 1.28981 7.59855 1.4106 7.47773C2.29715 6.59118 3.56642 6.48938 4.47102 6.54994C4.91128 6.58079 5.34803 6.64977 5.77637 6.75612L9.81483 2.71894C9.78112 2.52271 9.76388 2.324 9.76328 2.1249C9.76328 1.5708 9.90246 0.807951 10.5223 0.188136C10.643 0.0676924 10.8066 3.72617e-05 10.9771 1.02765e-06Z"
                            fill={isPinned ? "#686868" : "#B2B2B2"}
                        />
                    </svg>
                </a>
                <FontAwesomeIcon className='text-[20px] text-[#b2b2b2] cursor-pointer' icon="fa-solid fa-ellipsis" />
            </div>
        </div>
    );
}

export default Announcement;
