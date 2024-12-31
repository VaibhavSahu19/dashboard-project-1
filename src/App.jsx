import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'

function App() {
  return (
    <section className='flex w-full h-[105vh] gap-[20px] font-[poppins]'>
      <Sidebar />
      <section className='flex flex-col w-full px-[25px] py-[10px]'>
        <Navbar />
        <Dashboard />
      </section>
    </section>
  )
}

export default App