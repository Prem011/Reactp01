import React from 'react';

const Page1 = () => {
  return (
    <div className='h-full text-3xl font-bold z-0 bg-[#FFFFFF] rounded-2xl flex flex-col relative overflow-hidden' style={{ fontFamily: 'Montserrat, sans-serif' }}>
      
      <div className='absolute w-[98.4vw] flex justify-center items-center rounded-3xl ml-[-5vw] mt-[-2vw] top-[-10%] h-[54vw] bg-[#FFC700] rotate-[8deg] overflow-hidden'>
        <div className='w-[20vw] h-[20vw] bg-[#FFF280] mt-[13vw] rounded-full blur-3xl' />
      </div>            

      <div className='bg-[#FFF280] z-10 w-[7vw] h-[1vh] rounded-lg p-2 mx-auto mt-[1.5vw]' />

      <div className='w-full h-full z-10 flex justify-between   '>
        {/* Image */}
        <img src="/jumpingDog.png" alt="Jumping Dog" className='w-[50vw]  h-full mt-[2.2vw] object-contain' />

        <div className='w-[50vw] h-full mt-[2.2vw] flex flex-col items-end mr-[4vw] gap-[1vw]' > 
          <h1 className="font-montserrat font-black text-[5vw] text-[#F76902D1] leading-10 py-[2vw]  ">History of</h1>
          <h1 className='font-cheeseburga font-black text-[11vw] text-[#ffffff] leading-10 py-[4vw] tracking-wide' >ALABAY</h1>
          <h1 className='w-[30vw] py-[2vw] text-right font-kumbh text-[1.8vw] leading-[2.3vw] text-[#353535]
'>
            The Central Asian Shepherd Dog, also known as Alabay, has been a guardian of livestock and property for centuries. Originating from Central Asia, these dogs are renowned for their courage, strength, and loyalty.
          </h1>

        </div>

      </div>
      
    </div>
  );
};

export default Page1;
