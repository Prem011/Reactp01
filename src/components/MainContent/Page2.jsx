import React, { useEffect, useRef } from 'react';

const Page2 = () => {
  const scrollContainerRef = useRef(null);

  const scrollNext = () => {
    if (scrollContainerRef.current) {
      const maxScrollLeft = scrollContainerRef.current.scrollWidth - scrollContainerRef.current.clientWidth;
      if (scrollContainerRef.current.scrollLeft >= maxScrollLeft) {
        scrollContainerRef.current.scrollLeft = 0; // Reset to the start if at the end
      } else {
        scrollContainerRef.current.scrollBy({
          left: 1200, // Adjust scroll amount
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
    <div className='w-full h-full bg-[#fff]'>
      {/* Title section */}
      <div className='w-full mx-auto flex justify-center items-center text-3xl font-black'>
        <div className='w-[15vw] gap-9 flex justify-center items-center  '>
          <p>ALL</p>
          <p className='text-[#FFA800]'>PHOTOS</p>
          <p>VIDEOS</p>
        </div>
      </div>

      {/* Photo section */}
      <div className='w-[80vw] mx-auto h-[17vw] mt-[4vw] flex justify-center items-center gap-[3vw]'>
        <div className='w-[95%] h-full'>
          <div
            className='w-full h-full flex justify-center items-center gap-[1vw] overflow-hidden p-2'
            ref={scrollContainerRef} // Ref added for horizontal scrolling
          >
            <div className='flex flex-nowrap h-[17vw] p-[1%] gap-[2vw]'>
              <div className='w-[23vw] h-full rounded-[2vw] flex justify-center items-center font-black text-[1.5vw] bg-[url(./locationspreview.png)] bg-cover bg-no-repeat '/>
              <div className='w-[23vw] h-full rounded-[2vw] flex justify-center items-center font-black text-[1.5vw] bg-[url(./Abilities.png)] bg-cover bg-no-repeat '/>
              <div className='w-[23vw] h-full rounded-[2vw] flex justify-center items-center font-black text-[1.5vw] bg-[url(./artifacts.png)] bg-cover bg-no-repeat '/>
              <div className='w-[23vw] h-full rounded-[2vw] flex justify-center items-center font-black text-[1.5vw] bg-[url(./locationspreview.png)] bg-cover bg-no-repeat '/>
              <div className='w-[23vw] h-full rounded-[2vw] flex justify-center items-center font-black text-[1.5vw] bg-[url(./Abilities.png)] bg-cover bg-no-repeat '/>
              <div className='w-[23vw] h-full rounded-[2vw] flex justify-center items-center font-black text-[1.5vw] bg-[url(./artifacts.png)] bg-cover bg-no-repeat '/>
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

      {/* Project Vision Title */}
      <h1 className='font-cheeseburga font-black text-[10vw] text-[#FFA800] text-center mt-[14vw] leading-10 py-[4vw] tracking-wide'>
        PROJECT VISION
      </h1>
    </div>
  );
};

export default Page2;
