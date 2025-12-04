'use client';

import { useParams } from 'next/navigation';
export default function MyClientComponent() {

  const params = useParams();
  const roomPath = params.roomId;
  return (
    <div className='vt323'>
      <div className={`bg-[#2a2a2a] min-h-screen text-[#a96000] relative`}>

        <div className='px-4 py-2 flex items-center justify-between'>
          <ul className='flex space-x-2'>
            <li className='w-3 h-3 bg-[#ff6b02] rounded-full'></li>
            <li className='w-3 h-3 bg-[#ffca0b] rounded-full'></li>
            <li className='w-3 h-3 bg-[#5ed000] rounded-full'></li>
          </ul>
          <div>~amarnathps/</div>
          <div>cOLOR</div>
        </div>

        <hr/>

        <div className='my-4 px-2 md:px-4'>
          <div className=' md:w-[75%] pixelify large-text'>
            WELCOME TO THE CHAT 
          </div>
          <div>
            &gt;Room ID: {roomPath}AMARNATH
          </div>
        </div>
      </div>
    </div>
  );
}