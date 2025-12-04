'use client'
import {useState} from 'react'
import { useRouter } from 'next/navigation'



export default function page(){

  const [form,setForm] = useState({
    partsNo:'',
    dur:'10'
  });

  const [input,setInput]=useState('');
  const router=useRouter()


  const handleChange=(e)=>{
    const {name,value}=e.target;
    setForm((prevData)=>({
      ...prevData,
      [name]:value,
    })
    )
  } 

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(form.dur===''|| form.partsNo===''){
      setInput('Fill the details');
      return
    }
    setInput('');
    const roomId = Math.random().toString(36).slice(2);
    console.log(roomId);
    router.push(`/room/${roomId}`);
  }
  

   return (
    <div className='min-h-screen bg-[#FAF8F1] text-black/85 flex items-center justify-center'>
      <div className="flex flex-col min-h-[300px] w-[450px] md:w-[600px] p-6 rounded-2x shadow-sm border border-black/20" >
        <p className='mb-4 text-xl md:text-2xl font-Normal'>You are the Room Host</p>

        <form
        onSubmit={handleSubmit}
        className='w-full space-y-4'>
          <div className='flex flex-col text-md md:text-lg'>
            <label htmlFor="ParticipantsNo">Number of Participants:</label>
            <input type="number" min='1' max='20' className='border w-full border-black/60 p-2 my-2 outline-none'
            name='partsNo'
            value={form.partsNo}
            onChange={handleChange}/>
          </div>
         <div className='flex flex-col text-md md:text-lg'>
            <label htmlFor="RoomTime">Room Duration:</label>
            <select className='border my-2 p-2 outline-none' name='dur' value={form.dur} onChange={handleChange}>
              <option value='10'>
                10min
              </option>
              <option value='20'>
                20min
              </option>
              <option value='30'>
                30min
              </option>
              <option value='40'>
                40min
              </option>
              <option value='50'>
                50min
              </option>
              <option value='60'>
                60min
              </option>
            </select>
          </div>
            {(input&&<p className='text-[#ce0000]'>{input}</p>)}
          <div className='text-md md:text-lg'>
            <button className='bg-black/85 text-white w-full p-2'>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
