import React from 'react'

function DataCard({title, count, men, women, profit}) {
  return (
    <section className='flex flex-col md:flex-row h-[100%] w-[100%] md:w-[50%] justify-between p-[15px] items-center  border border-[#E0E0E0] rounded-[10px]'>
        <div className='flex flex-col gap-[10px]'>
            <div className='text-[18px] font-medium'>{title}</div>
            <div className='text-[48px] font-medium'>{count}</div>
            <div className='text-[12px] text-[#686868]'>{men} men</div>
            <div className='text-[12px] text-[#686868]'>{women} women</div>
        </div>
        <div className='flex flex-col justify-center items-center gap-[10px] h-full w-full'>
            <div className='text-[10px] text-[#FF5151] font-semibold'>{profit}%</div>
            <img className='' src="graph.png" alt="graph" />
            <div className='bg-[#FFEFE7] px-[5px] py-[3px] text-[12px] rounded-sm'>{profit}% Past Month</div>
        </div>
    </section>
  )
}

export default DataCard