import React from 'react'

const Page6 = () => {
  return (
    <div className='w-full  z-0  flex flex-col relative overflow-hidden' >

      <div className='absolute  w-[105.4vw] flex justify-center items-center  ml-[-5vw] mt-[-5vw] top-[16.5%] h-[59vw] bg-[#FFC700] rotate-[-8deg] overflow-hidden'/>
             
      <div className='absolute  w-[98.4vw] flex justify-center items-center  ml-[-5vw] mt-[-2vw] top-[65%] h-[26vw] bg-[#FFC700] rotate-[8deg] overflow-hidden'/>
            

       {/* <div className='w-[20vw] absolute  top-[21.5%]  z-15 h-[20vw] bg-[#FFF280] mt-[13vw] rounded-full blur-3xl' />  */}

      <div className='w-full h-[90vw] z-50 '>
      <h1 className='font-cheeseburga mt-[16vw] ml-[3vw] font-black text-[8.6vw]  text-[#ffffff]   tracking-wide' >TOKENOMICS</h1>

        <div className='flex justify-between items-center' >

          <div className='w-[50vw]  flex flex-col justify-center ml-[3vw] gap-[3vw] ' >
            <div className='w-[30vw] shadow-xl shadow-[#353535]/90 h-[8.5vw] bg-[#353535] rounded-[2vw] pl-[2vw] flex flex-col justify-center' >
              <h1 className='text-[1.5vw] font-black text-white' >LIQUIDITY</h1>
              <h1 className='text-[3vw] font-black text-[#FFF280]' >LOCKED</h1>
            </div>
            <div className='w-[30vw] shadow-xl shadow-[#353535]/90 h-[8.5vw] bg-[#353535] rounded-[2vw] pl-[2vw] flex flex-col justify-center' >
              <h1 className='text-[1.5vw] font-black text-white' >CONTRACT</h1>
              <h1 className='text-[3vw] font-black text-[#FFF280]' >RENOUNCED</h1>
            </div>
            <div className='w-[30vw] shadow-xl shadow-[#353535]/90 h-[8.5vw] bg-[#353535] rounded-[2vw] pl-[2vw] flex flex-col justify-center' >
              <h1 className='text-[1.5vw] font-black text-white' >TAXES</h1>
              <h1 className='text-[3vw] font-black text-[#FFF280]' >0%</h1>
            </div>
           
          </div>

          <div className='w-[60vw]  flex justify-center' >
            <img className='w-full' src="./cashDog.png" alt="" />
          </div>

        </div>

      </div>
      
        
      
    </div>
  )
}

export default Page6
