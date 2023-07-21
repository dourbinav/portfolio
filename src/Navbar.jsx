import React, { useState } from 'react'

export default function Navbar() {
  const [open,setopen] = useState(false)

  function dropdown(){
    setopen(!open)
  }

  return (
    <div className='flex  items-center  justify-between  px-2  h-16'>
      <div className='bg-black aspect-square rounded-full w-10 '>
        <img src="https://img.freepik.com/free-vector/handsome-man_1308-85984.jpg"></img>
      </div>
      <div className='font-bold'>NAVAL DOURBI</div>
      <div id='hamburgur' onClick={dropdown}  className='sm:hidden w-[40px]   -mr-[4rem] flex flex-col space-y-1 '>
      <div className='h-[4px] w-[35px] bg-black'></div>
      <div className='h-[4px] w-[35px] bg-black'></div>
      <div className='h-[4px] w-[35px] bg-black'></div>
      </div>
      {open && <div className='flex flex-col sm:hidden w-screen absolute mt-60 p-4 text-2xl space-y-2 text-right bg-gray-100 '>
        <a href='#Content'><span onClick={dropdown}>Home</span></a>
        <a href='#About'> <span  onClick={dropdown} >About</span> </a>
        <a href='#Projects'> <span onClick={dropdown} >Projects</span></a>
        <a href='#Contact'> <span  onClick={dropdown} >Contact</span></a>
      </div>}
      <div className=' invisible sm:visible w-0 sm:w-1/3 overflow-hidden font-bold sm:flex sm:gap-5'>
        <span>Home</span>
        <span>About</span>
        <span>Projects</span>
        <span>Contact</span>
      </div>
    </div>
  )
}
