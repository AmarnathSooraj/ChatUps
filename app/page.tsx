import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className=" bg-[#FAF8F1]  px-4 md:px-10 w-full overflow-hidden relative">
        <div className="md:hidden absolute top-8 bg-[#142572] text-white font-medium text-xl px-3">
          Sign Up
        </div>
        <div className=" text-black/85 flex flex-col md:justify-around place-content-center md:place-items-center min-h-screen md:flex-row w-full"> 
            {/* Left side */}
            <div className="md:max-w-[75%]">
              <div className="space-y-3 md:space-y-5">
                <p className="text-7xl md:text-9xl font-medium">Chat<span className="bg-[#142572] text-white">Ups</span>.</p>
                <p className="font-josefin text-lg md:text-xl">
                  "A fast, secure chat app that keeps you connected to the people
                  who matter most."
                </p>

                <div className="flex text-md md:text-lg">
                  <button className="mr-8 py-3 px-6 bg-black/85 rounded-xs text-white">
                    Join Now
                  </button>
                  <button className="mr-8 py-3 px-6 bg-black/85 rounded-xs text-white">
                    Create a Room
                  </button>
                </div>
              </div>
            </div>

            {/* Right side form */}
            <div className="hidden md:block min-w-[30%]">
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
          </div>
      </main>
    </>
  );
}
