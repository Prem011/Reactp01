import React, { useEffect, useRef } from 'react';


const Page8 = () => {

  const scrollContainerRef = useRef(null);

  const scrollNext = () => {
    if (scrollContainerRef.current) {
      const maxScrollLeft = scrollContainerRef.current.scrollWidth - scrollContainerRef.current.clientWidth;
      if (scrollContainerRef.current.scrollLeft >= maxScrollLeft) {
        scrollContainerRef.current.scrollLeft = 0; // Reset to the start if at the end
      } else {
        scrollContainerRef.current.scrollBy({
          left: 1559.2, // Adjust scroll amount
          behavior: 'smooth',
        });
      }
    }
  };

  // useEffect(() => {
  //   const interval = setInterval(scrollNext, 3000); // Auto-scroll every 3 seconds
  //   return () => clearInterval(interval); // Cleanup on component unmount
  // }, []);

  return (
    <div className='w-full mt-[2vw]' >

      <h1 className='text-[2.3vw] font-black ml-[5vw] text-[#353535]' ><span className='text-[#FFA800]' >GAME</span> PREVIEWS</h1>

      <div className='w-[80vw] mx-auto h-[19.102vw] mt-[4vw] flex justify-center items-center gap-[3vw]'>
        <div className='w-[95%] h-full'>
          <div
            className='w-full h-full flex justify-center items-center gap-[1vw] overflow-hidden p-2'
            ref={scrollContainerRef} // Ref added for horizontal scrolling
          >
            <div className='flex flex-nowrap h-[19.102vw] p-[1%] gap-[6.3vw]'>

              <div className='w-[23vw] h-full rounded-[2vw] flex justify-center items-center font-black text-[1.5vw] bg-[url(./public/LostDog/locationspreview.png)] bg-cover bg-no-repeat '/>
              <div className='w-[23vw] h-full rounded-[2vw] flex justify-center items-center font-black text-[1.5vw] bg-[url(./public/LostDog/locationspreview.png)] bg-cover bg-no-repeat '/>
              <div className='w-[23vw] h-full rounded-[2vw] flex justify-center items-center font-black text-[1.5vw] bg-[url(./public/LostDog/Abilities.png)] bg-cover bg-no-repeat '/>
              <div className='w-[23vw] h-full rounded-[2vw] flex justify-center items-center font-black text-[1.5vw] bg-[url(./public/LostDog/artifacts.png)] bg-cover bg-no-repeat '/>
              <div className='w-[23vw] h-full rounded-[2vw] flex justify-center items-center font-black text-[1.5vw] bg-[url(./public/LostDog/locationspreview.png)] bg-cover bg-no-repeat '/>
              <div className='w-[23vw] h-full rounded-[2vw] flex justify-center items-center font-black text-[1.5vw] bg-[url(./public/LostDog/Abilities.png)] bg-cover bg-no-repeat '/>
              <div className='w-[23vw] h-full rounded-[2vw] flex justify-center items-center font-black text-[1.5vw] bg-[url(./public/LostDog/artifacts.png)] bg-cover bg-no-repeat '/>

            </div>
          </div>
        </div>

        {/* Scroll button */}
        <div className='w-[5vw] h-full flex justify-center items-center'>
          <div
            className='w-[5vw] h-[7vw] p-2 rounded-[1vw] bg-[#353535] flex justify-center items-center cursor-pointer'
            onClick={scrollNext}
          >
            <img src="https://img.icons8.com/?size=100&id=VjUxG2ZHfWSs&format=png&color=ffffff" alt="" />
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Page8
