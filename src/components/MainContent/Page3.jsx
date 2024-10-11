import React from 'react'

const Page3 = () => {
  return (
    <div className='w-full bg-[#FFFFFF] flex flex-col relative overflow-hidden' >

      <div className='absolute  w-[98.4vw] flex justify-center items-center  ml-[-5vw] mt-[-2vw] top-[25vw] h-[54vw] bg-[#FFC700] rotate-[-8deg] '>
        <div className='w-[50vw] h-[25vw] mt-[20vw] bg-[#FFF280] rounded-full blur-3xl' />
      </div>  

      <div className='w-full z-50' >
          <img src="./group.png" className=' shadow-current mx-auto w-[85vw]' alt="" />

        <h1 className='text-center mx-auto text-[1.5vw] font-bold w-[75vw] my-[4vw] ' >
        Our mission is to honor the heritage of the Alabay by creating a vibrant, loyal, and powerful community. Just as the Alabay protects its flock, we aim to build a pack that <br /> stands strong together.
        </h1>
      </div>

      
    </div>
  )
}

export default Page3
