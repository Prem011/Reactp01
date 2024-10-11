import React from 'react'

const Page9 = () => {
  return (
    <div className='w-full mt-[10vw]' >
       
       <h1 className='font-cheeseburga text-left ml-[3.5vw]  font-black text-[8.6vw] text-[#FFA800] tracking-wide z-10 relative'>
       social media <br />
       links
      </h1>

      <div className="flex justify-between items-center">

        <div  className='ml-[8vw]' >
          <div className="relative bgPage9 text-white w-[25vw]  h-[17vw] p-6 rounded-[1.5vw] shadow-lg border-8 border-blue-600">

            {/* Speech bubble tail */}
            <div className="absolute top-[-7px] right-[-24px]  w-[2vw] h-[2vw] bg-[#80B3FF] border-e-8 border-t-8 border-b-8 border-blue-600 rounded-tr-full"></div>

            <div className='flex flex-col items-center justify-center  w-full h-full gap-[2vw]' >

                <div className="w-[80%]  flex mx-auto items-center gap-[1.5vw]">

                <div className='w-[3.5vw] h-[3.5vw] rounded-full bg-zinc-900' >
                  <img className='p-4 cursor-pointer' src="./twitter logo 1.png" alt="" />
                </div>
                <span className="text-white text-[1.4vw] font-black cursor-pointer hover:scale-105">Twitter Link</span>
                </div>

                <div className="w-[80%]  flex mx-auto items-center gap-[1.5vw]">

                <div className='w-[3.5vw] h-[3.5vw] rounded-full flex justify-center items-center bg-zinc-900' >
                  <img className='p-[.7vw] cursor-pointer' src="./Mask group.png" alt="" />
                </div>

                <span className="text-white text-[1.4vw] font-black cursor-pointer hover:scale-105">Telegram Link</span>
                </div>

            </div>


          </div>        
        </div>

        <div>
          <img src="./contact.png" alt="" />
        </div>

      </div>

    </div>
  )
}

export default Page9


