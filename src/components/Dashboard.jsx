import React from 'react'
import JobCard from './reusable/JobCard'
import DataCard from './reusable/DataCard'
import Announcement from './reusable/Announcement'

function Dashboard() {
  return (
    <section>
        <h3 className='text-[24px] py-[15px] font-medium md:self-center'>Dashboard</h3>
        <div className='flex flex-col md:flex-row gap-[20px]'>
            <div className='flex flex-col  gap-[20px]'>
                <div className='flex flex-col md:flex-row justify-between gap-[10px] w-[100%] items-center'>
                    <JobCard name="Available Position" number="24" use="4 Urgently needed" color="#FF5151" />
                    <JobCard name="Job Open" number="10" use="4 Active hiring" color="#3786F1" />
                    <JobCard name="New Employees" number="24" use="4 Department" color="#EE61CF" />
                </div>
                <div className='flex flex-col md:flex-row justify-between gap-[10px] w-[100%] items-center'>
                    <DataCard title="Total Employees" count="216" men="120" women="96" profit="+2" />
                    <DataCard title="Talent Request" count="16" men="6" women="10" profit="+5" />
                </div>
                <div className='p-[20px] border border-[#E0E0E0] rounded-md'>
                    <div className='flex justify-between items-center mb-[10px]'>
                        <h2 className='text-[18px] font-medium'>Announcement</h2>
                        {/*Drop down for date will come here*/}
                    </div>
                    <div className='flex flex-col gap-[10px]'>
                        <Announcement title="Outing schedule for every department" time="5 minutes ago" isOn = {true}/>
                        <Announcement title="Meeting HR Department" time="Yesterday, 12:30 PM" isOn = {true}/>
                        <Announcement title="IT Department need two more talents for UX/UI Desginer Position" time="Yesterday, 09:15 AM" isOn = {true}/>
                    </div>
                    <div className='flex justify-self-center text-center pt-[10px] text-[#FF5151] font-medium'>
                        See All Announcements
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-[20px]'>
                <div className='text-white bg-[#1B204A] h-auto p-[20px] rounded-2xl flex flex-col gap-[20px]'>
                    <div className='text-[18px] font-medium'>Recent Activity</div>
                    <div className='flex flex-col gap-[5px]'>
                        <div className='text-[10px] text-[#FFFFFF]'>10:40 AM, Fri 10 Sept 2021</div>
                        <div className='text-[18px]'>You posted a New Job</div>
                        <div className='text-[14px]'>Kindly check the requirements and terms of work and make sure everything is right.</div>
                    </div>
                    <div className='flex gap-[10px] justify-center items-center'>
                        <div className=''>Today you made 12 Activity</div>
                        <a className='px-[10px] py-[10px] bg-[#FF5151] text-[15px] text-center rounded-md' href="">See All Activity</a>
                    </div>
                </div>
                <div className='p-[20px] border border-[#E0E0E0] rounded-md'>
                    <div className='flex justify-between items-center mb-[10px]'>
                        <h2 className='text-[18px] font-medium'>Upcoming Schedule</h2>
                        {/*Drop down for date will come here*/}
                    </div>
                    <div className='flex flex-col gap-[10px]'>
                        <div>Priority</div>
                        <Announcement title="Review candidate applications" time="Today - 11:30 AM" isOn = {false}/>
                        <div>Other</div>
                        <Announcement title="Interview with Candidates" time="Today - 10:30 AM" isOn = {false}/>
                        <Announcement title="Short meeting with product designer from IT Department" time="Today - 09:15 AM" isOn = {false}/>
                    </div>
                    <div className='flex justify-self-center text-center pt-[10px] text-[#FF5151] font-medium'>
                        Create a new Schedule
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Dashboard