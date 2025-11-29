'use client'

import Link from "next/link";
import {useState} from 'react'
export default function Home() {

  const [sign,setSign] = useState(false);
  const [input,setInput] = useState('');

  let [formData,setForm] = useState({
    fname:"",
    email:"",
    mobileNo:"",
    password:"",
    conpassword:""
  })

  const handleSign = ()=>{
    setSign(!sign);
    console.log('hello')
  }

  const handleChange = (e) =>{

    const {name,value}= e.target;
    setForm((prevData) => ({
      ...prevData, // Spreads existing formData properties
      [name]: value, // Overwrites the specific property that 
    }));
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(formData);
    if(formData.fname==''|| formData.email=='' || formData.mobileNo == '' || formData.password == '' || formData.conpassword == ''){
      setInput('Fill all details');
      return
    }
    if(formData.password===formData.conpassword){
      return
    }
    setInput('Oops! Password do not match');
  }
  return (
    <>
      <main className=" bg-[#FAF8F1]  px-4 md:px-10 w-full overflow-hidden relative">
        <div className="md:hidden absolute top-8 bg-[#142572] text-white font-medium text-xl px-3 cursor-pointer" onClick={handleSign}>
          Sign Up
        </div>
        <div className=" text-black/85 flex flex-col md:justify-around place-content-center md:place-items-center min-h-screen md:flex-row w-full"> 
            {/* Left side */}
            <div className="md:max-w-[75%]">
              <div className="space-y-6 md:space-y-8">
                <p className="text-7xl md:text-9xl font-medium">Chat<span className="bg-[#142572] text-white">Ups</span>.</p>
                <p className="font-josefin text-lg md:text-xl">
                  "A fast, secure chat app that keeps you connected to the people
                  who matter most."
                </p>

                <div className="flex text-md md:text-lg">
                  <Link href='/join' className="mr-8 py-3 px-6 bg-black/85 rounded-xs text-white">
                    Join Now
                  </Link>
                  <Link href='/create' className="mr-8 py-3 px-6 bg-black/85 rounded-xs text-white">
                    Create a Room
                  </Link>
                </div>
              </div>
            </div>

            {/* Right side form */}
            <div className="hidden md:block min-w-[30%]">
              <form
              onSubmit={handleSubmit}
              className="space-y-5">
                <div className="flex border-b">
                  <input
                    className=" w-full p-2 focus-none outline-none"
                    type="text"
                    onChange={handleChange}
                    value={formData.fname}
                    name="fname"
                    placeholder="Name"/>
                </div>
                <div className="flex border-b">
                  <input className=" w-full p-2 focus-none outline-none" type="email" placeholder="Email"
                    value={formData.email}
                    name='email'
                   onChange={handleChange}
                  />
                </div>
                 <div className="flex border-b">
                  <input className=" w-full p-2 focus-none outline-none" type="text"
                    value={formData.mobileNo}
                    name='mobileNo'
                    onChange={handleChange}
                   placeholder="Mobile No"/>
                </div>
                <div className="flex border-b">
                  <input className=" w-full p-2 focus-none outline-none" type="password"
                    name='password'
                    value={formData.password}
                   onChange={handleChange}
                   placeholder="Password"/>
                </div>
                <div className="flex border-b">
                  <input className=" w-full p-2 focus-none outline-none" type="password" 
                  name='conpassword'
                  value={formData.conpassword}
                   onChange={handleChange}
                  placeholder="Confirm Password"/>
                </div>

                <div>
                  {(input && <p className='mb-1 text-[#d60404c4] font-normal'>{input}</p>)}
                <Link href='#' className="mr-4">Forgot password ?</Link>
                <Link href='#'>Already have an account ?</Link>
                </div>

                <div className="flex place-content-end">
                  <button className="text-white bg-black/85 px-4 py-2" >Sign Up</button>
                </div>
              </form>
            </div>
          </div>


          {/* {(sign&&
          <div className="z-200 absolute top-0 w-full bg-white/90 left-0 max-w-[80%] p-4 rouned-sm shadow-md">
            <div onClick={handleSign} className="cursor-pointer">X</div>
            <form className="space-y-6">
                  <div className="flex border-b">
                    <input className=" w-full p-2 focus-none outline-none" type="text" placeholder="Name"/>
                  </div>
                  <div className="flex border-b">
                    <input className=" w-full p-2 focus-none outline-none" type="email" placeholder="Email"/>
                  </div>
                  <div className="flex border-b">
                    <input className=" w-full p-2 focus-none outline-none" type="email" placeholder="Mobile No"/>
                  </div>
                  <div className="flex border-b">
                    <input className=" w-full p-2 focus-none outline-none" type="password" placeholder="Password"/>
                  </div>
                  <div className="flex border-b">
                    <input className=" w-full p-2 focus-none outline-none" type="password" placeholder="Confirm Password"/>
                  </div>
                  <div className="flex place-content-end">
                    <button className="text-white bg-black/85 px-4 py-2">Sign Up</button>
                  </div>
              </form>
            </div>
          )} */}
      </main>
    </>
  );
}
