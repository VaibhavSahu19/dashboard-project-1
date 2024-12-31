import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import { useState } from 'react'

function App() {
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    console.log(toggle);
  }, [toggle])
  return (
    <section className='flex w-full h-[105vh] gap-[20px] font-[poppins]'>
      <Sidebar toggle={toggle} setToggle={setToggle} />
      <section className='flex flex-col w-full px-[25px] py-[10px]'>
        <Navbar toggle={toggle} setToggle={setToggle}  />
        <Dashboard />
      </section>
    </section>
  )
}

export default App