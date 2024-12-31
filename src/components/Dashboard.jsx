import React from 'react'
import JobCard from './reusable/JobCard'
import DataCard from './reusable/DataCard'
import Announcement from './reusable/Announcement'

function Dashboard() {
  return (
    <section>
        <h3 className='text-[24px] py-[15px] font-medium'>Dashboard</h3>
        <div className='flex gap-[20px]'>
            <div className='flex flex-col gap-[20px]'>
                <div className='flex justify-between gap-[10px] w-[100%] items-center'>
                    <JobCard name="Available Position" number="24" use="4 Urgently needed" color="#FF5151" />
                    <JobCard name="Job Open" number="10" use="4 Active hiring" color="#3786F1" />
                    <JobCard name="New Employees" number="24" use="4 Department" color="#EE61CF" />
                </div>
                <div className='flex justify-between gap-[10px] w-[100%] items-center'>
                    <DataCard title="Total Employees" count="216" men="120" women="96" profit="+2" />
                    <DataCard title="Talent Request" count="16" men="6" women="10" profit="+5" />
                </div>
                <div className='p-[20px] border border-[#E0E0E0] rounded-md'>
                    <div className='flex justify-between items-center'>
                        <h2 className='text-[18px] font-medium'>Announcement</h2>
                        {/*Drop down for date will come here*/}
                    </div>
                    <div className='flex flex-col gap-[10px]'>
                        <Announcement title="Outing schedule for every department" time="5 minutes ago" />
                        <Announcement title="Meeting HR Department" time="Yesterday, 12:30 PM" />
                        <Announcement title="IT Department need two more talents for UX/UI Desginer Position" time="Yesterday, 09:15 AM" />
                    </div>
                    <div className='flex justify-self-center text-center pt-[10px] text-[#FF5151] font-medium'>
                        See All Announcements
                    </div>
                </div>
            </div>
            <div>
                HELLLLLOOOOOO
            </div>
        </div>
    </section>
  )
}

export default Dashboard