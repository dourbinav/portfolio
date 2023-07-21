import React, { useState } from 'react'

export default function Contact() {
  const [message,setmessage]=useState("")
  const [name,setname]=useState("")
  const [mail,setmail]=useState("")
  const[done,setdone]=useState(false)

  function handlechange(event){
    setmessage(event.target.value)
  }
  function submit(){
    setdone(true)
    setmessage("")
    setmail("")
    setname("")
    setTimeout(() => {
      setdone(false)
    }, 1000);
    
  }
  return (
    <div id='Contact' className='bg-gray-200 mt-24  p-2'>
        <h1 className='font-bold text-3xl text-center text-purple-600 pt-10 mb-4'>CONTACT</h1>
        <div className='h-[5px] w-[30px] bg-purple-600 m-auto rounded-md'></div>
        <div className=' text-center pt-4'>
          Feel free to Contact me by submitting the form below and I will get
          back to you as soon as possible
        </div>
        <div className='bg-white  md:mx-48 my-4  '> 
            <div className='p-4 gap-2'>
            <div>Name:</div>
            <input type='text' placeholder='Enter Your name' value={name} onChange={(e)=>{(setname(e.target.value))}} className='my-2 required bg-gray-200 text-center h-10 w-full  rounded-md '></input>
            <label >Email-Address:</label>
            <input type='email'placeholder='Email Address' value={mail} onChange={(e)=>{(setmail(e.target.value))}} className='required my-2 bg-gray-200 text-center h-10  w-full rounded-md  '></input>
            <label>Your Message:</label>
            <textarea placeholder='Your message' rows='7' cols='33'value={message} onChange={handlechange} className='bg-gray-200 rounded-md my-2  w-full '></textarea>
            </div>
            <div className='p-2 w-full flex justify-center '>
                <button type='Submit' onClick={submit} className='bg-purple-500 rounded-md h-10  w-full md:w-36  text-center   font-semibold text-white '>Submit</button>
                {done && <div className='absolute rounded-md bg-yellow-400 p-2  text-2xl'>thanks &#128512; </div>}
            </div>
        </div>
    </div>
  )
}
