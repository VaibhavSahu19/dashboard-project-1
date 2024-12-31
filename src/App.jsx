import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <section className='flex w-full h-screen gap-[20px] font-[poppins]'>
      <Sidebar />
      <Navbar />
    </section>
  )
}

export default App