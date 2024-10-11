import React from 'react'

const Page4 = () => {
  return (
    <div className='h-full text-3xl font-bold z-0 bg-[#FFFFFF]  flex flex-col relative overflow-hidden' style={{ fontFamily: 'Montserrat, sans-serif' }}>
      
    <div className='absolute  w-[98.4vw] flex justify-center items-center  ml-[-5vw] top-[-24vw] h-[54vw] bg-[#FFC700] rotate-[8deg] '>
        {/* <div className='w-[50vw] h-[10vw]  bg-[#FFF280] rounded-full blur-3xl' /> */}
    </div>   

    <div className='w-full flex z-50 mt-[3vw]' >

        <div className='w-[55%] ml-[3vw]'>
            <h1 className='font-cheeseburga font-black text-[8.6vw]  text-[#ffffff]  py-[4vw] tracking-wide' >Road map</h1>

            <h1 className=' w-[30vw] ml-[4vw] mt-[19.5vw] text-[2vw] leading-[2vw]' >
                Our journey is just beginning. Explore our roadmap to see the exciting milestones and future plans we have in store. 
                <br />
                <br />

                <span className='text-[#FFA800]' >
                Join us as we grow and achieve new heights.
                </span>
            </h1>

        </div>

       <div className='w-[55vw] mt-[3vw]' >
       <img src="./touristDog.png" className='w-full shadow-current' alt="" />
       </div>
    </div>

    </div>
  )
}

export default Page4
