import React from 'react'

export default function About() {
  return (
    <div id='About' className='bg-purple-400  p-4'>
    <div className='text-center text-3xl my-2 font-bold '>
        <p>About me</p>
    </div>
    <div className='h-[5px] w-[30px] bg-white m-auto rounded-md'></div>
    <div className='text-white mx-8 text-center sm:text-2xl sm:font-semibold'>
        i am pursuing BCA from Amrapali group of institute,Haldwani.I live in Ramnagar and done my schooling from MPHIC .
    </div>
    <div className='flex justify-center my-4'>
       <a href='#Contact'> <button className='text-purple-600 bg-white w-20 p-2 rounded-md '>Contact</button></a>
    </div>
    </div>
  )
}
