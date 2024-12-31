import React from 'react'

function JobCard({name, number, use, color}) {
  return (
    <section className='font-[poppins] flex flex-col gap-[10px] px-[20px] py-[15px] h-[100%] w-[100%] md:h-[180px] md:w-[180px] rounded-[10px]' style={{ backgroundColor: `${color}1A`, color: color }}>
        <div className='text-[15px] text-[black] font-medium'>
            {name}
        </div>
        <div className='text-[33px] text-[black] font-medium'>
            {number}
        </div>
        <div className='text-[16px]'>
            {use}
        </div>
    </section>
  )
}

export default JobCard