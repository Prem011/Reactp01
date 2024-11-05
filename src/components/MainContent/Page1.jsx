import React from 'react';

const Page1 = () => {
  return (
    <div className='h-full text-3xl font-bold z-0 bg-[#FFFFFF] rounded-2xl flex flex-col relative overflow-hidden' style={{ fontFamily: 'Montserrat, sans-serif' }}>
      
      <div className='absolute w-[98.4vw] flex justify-center items-center rounded-3xl ml-[-5vw] mt-[-2vw] top-[-10%] h-[54vw] bg-[#FFC700] rotate-[8deg] overflow-hidden'>
        <div className='w-[20vw] h-[20vw] bg-[#FFF280] mt-[13vw] rounded-full blur-3xl' />
      </div>            

      {/* Yellow Line */}
      <div className='bg-[#FFF280] z-10 w-[7vw] h-[1vh] 
                        sm:w-[10vw] sm:h-[5vh]
                        md:w-[15vw] md:h-[5vh]
                        lg:w-[10vw] lg:h-[5vh]
                        xl:w-[10vw] xl:h-[5vh]
                        2xl:w-[10vw] 2xl:h-[5vh]
                        rounded-lg p-2 mx-auto mt-[1.5vw]' />

      <div className='w-full h-full z-10 lg:flex lg:justify-between 2xl:flex 2xl:justify-between flex'>
        {/* Image */}

        <img src="/jumpingDog.png" alt="Jumping Dog" 
             className='
                        w-[50vw] h-full mt-[2.2vw] object-contain
                        xs:w-[100vw] xs:mt-[-10vw]
                        sm:w-[100vw] sm:mt-[-10vw]
                        md:w-[40vw] md:mt-[1.5vw]
                        lg:w-[35vw] lg:mt-[1vw]
                        xl:w-[30vw] xl:mt-[0.5vw]
                        2xl:w-[25vw] 2xl:mt-[0.5vw]'
        />

        <div className='w-[50vw] h-full mt-[2.2vw] flex flex-col items-end mr-[4vw] gap-[1vw]
                        sm:w-[45vw] sm:mt-[2vw] sm:mr-[3vw]
                        md:w-[40vw] md:mt-[1.5vw] md:mr-[3vw]
                        lg:w-[35vw] lg:mt-[1vw] lg:mr-[2.5vw]
                        xl:w-[30vw] xl:mt-[0.5vw] xl:mr-[2vw]
                        2xl:w-[25vw] 2xl:mt-[0.5vw] 2xl:mr-[1.5vw]'>
          {/* Title Section */}
          <h1 className="font-montserrat font-black text-[5vw] text-[#F76902D1] leading-10 py-[2vw]
                      sm:text-[4.5vw] sm:py-[1.8vw]
                      md:text-[4vw] md:py-[1.5vw]
                      lg:text-[3.5vw] lg:py-[1.2vw]
                      xl:text-[3vw] xl:py-[1vw]
                      2xl:text-[2.5vw] 2xl:py-[0.8vw]">
            History of
          </h1>

          <h1 className='font-cheeseburga font-black text-[11vw] text-[#ffffff] leading-10 py-[4vw] tracking-wide
                         sm:text-[10vw] sm:py-[3.5vw]
                         md:text-[9vw] md:py-[3vw]
                         lg:text-[8vw] lg:py-[2.5vw]
                         xl:text-[7vw] xl:py-[2vw]
                         2xl:text-[6vw] 2xl:py-[1.5vw]'>
            ALABAY
          </h1>

          <h1 className='w-[30vw] py-[2vw] text-right font-kumbh text-[1.8vw] leading-[2.3vw] text-[#353535]
                         sm:w-[28vw] sm:text-[1.7vw] sm:leading-[2.2vw]
                         md:w-[26vw] md:text-[1.6vw] md:leading-[2.1vw]
                         lg:w-[24vw] lg:text-[1.5vw] lg:leading-[2vw]
                         xl:w-[22vw] xl:text-[1.4vw] xl:leading-[1.9vw]
                         2xl:w-[20vw] 2xl:text-[1.3vw] 2xl:leading-[1.8vw]'>
            The Central Asian Shepherd Dog, also known as Alabay, has been a guardian of livestock and property for centuries. Originating from Central Asia, these dogs are renowned for their courage, strength, and loyalty.
          </h1>
        </div>
      </div>
      
    </div>
  );
};

export default Page1;
