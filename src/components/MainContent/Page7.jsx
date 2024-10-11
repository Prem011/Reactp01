import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import GameOne from '../SubContent/GameOne';
// import GameOne from './../SubContent/GameOne';
// import GameOne from './../SubContent/GameTwo';
import GameTwo from '../SubContent/GameTwo';

const Page7 = () => {
  // Separate refs for the two scroll containers
  const merchandiseScrollRef = useRef(null);
  const gamesScrollRef = useRef(null);

  const scrollNextimg = () => {
    if (merchandiseScrollRef.current) {
      const container = merchandiseScrollRef.current;
      const maxScrollLeft = container.scrollWidth - container.clientWidth;

      if (container.scrollLeft + container.clientWidth >= maxScrollLeft) {
        container.scrollTo({ left: 0, behavior: 'smooth' }); // Scroll back to the start
      } else {
        container.scrollBy({ left: 1548.8, behavior: 'smooth' }); // Adjust this value as needed
      }
    }
  };

  const scrollNext2 = () => {
    if (gamesScrollRef.current) {
      const container = gamesScrollRef.current;
      const maxScrollLeft = container.scrollWidth - container.clientWidth;

      if (container.scrollLeft + container.clientWidth >= maxScrollLeft) {
        container.scrollTo({ left: 0, behavior: 'smooth' }); // Scroll back to the start
      } else {
        container.scrollBy({ left: 2120, behavior: 'smooth' }); // Adjust this value as needed
      }
    }
  };

  const scrollBack = () => {
    if (merchandiseScrollRef.current) {
      const container = merchandiseScrollRef.current;

      if (container.scrollLeft === 0) {
        container.scrollTo({ left: container.scrollWidth, behavior: 'smooth' }); // Scroll to the end
      } else {
        container.scrollBy({ left: -1700, behavior: 'smooth' }); // Adjust this value as needed
      }
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      scrollNextimg();
      scrollNext2();
    }, 3000); // Automatically scroll every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='w-full relative z-20 overflow-hidden bg-white'>
      {/* Background yellow shape */}
      <div className='absolute w-[105vw] z-0 flex justify-center items-center mt-[-2vw] top-[47vw] h-[44vw] bg-[#FFC700] rotate-[-8deg] overflow-hidden'>
        {/* <div className='w-[20vw] h-[20vw] bg-[#FFF280] mt-[13vw] rounded-full blur-3xl' /> */}
      </div>

      <div className='absolute w-[98.4vw] flex justify-center items-center ml-[-5vw] mt-[-2vw] top-[55%] h-[35vw] bg-[#FFC700] rotate-[8deg] overflow-hidden' />

      {/* Title */}
      <h1 className='font-cheeseburga text-center font-black text-[8.6vw] text-[#FFA800] tracking-wide z-10 relative'>
        merchandise
      </h1>

      {/* Merchandise Box */}
      <div className='flex items-center'>
        {/* Left Arrow - Scroll Back */}
        <div className='w-[5vw] m-auto h-[5vw] rounded-full bg-zinc-800 flex justify-center items-center cursor-pointer' onClick={scrollBack}>
          <img className='p-5' src="https://img.icons8.com/?size=100&id=39776&format=png&color=ffffff" alt="scroll back" />
        </div>

        {/* Scrollable Container for Merchandise */}
        <div className='w-[64.531vw] z-10 flex h-[42.188vw] rounded-[2vw] mx-auto  relative overflow-x-auto overflow-y-hidden noScrollBar' ref={merchandiseScrollRef}>
          <div className='flex flex-nowrap'>
            {/* Pink T-Shirt Image */}
            <div className='w-[64.531vw] h-[42.188vw] bg-[url(./public/page7/pink_tee_bck.png)] rounded-[1vw] bg-cover bg-center bg-no-repeat flex justify-center items-center'>
              <img src="./public/page7/pink_tshirt.png" alt="Pink T-Shirt" />
            </div>

            {/* Blue Cap */}
            <div className='w-[64.531vw] h-[42.188vw] bg-[url(./public/page7/blue_cap_bck.png)] rounded-[1vw] bg-cover bg-center bg-no-repeat flex justify-center items-center'>
              <img src="./public/page7/cap_mockup.png" alt="Blue Cap" />
            </div>

            {/* Yellow T-Shirt */}
            <div className='w-[64.531vw] h-[42.188vw] bg-[url(./public/page7/yellow_tee_bck.png)] rounded-[1vw] bg-cover bg-center bg-no-repeat flex justify-center items-center'>
              <img src="./public/page7/yellow_tshirt.png" alt="Yellow T-Shirt" />
            </div>

            {/* Black Hoodie */}
            <div className='w-[64.531vw] h-[42.188vw] bg-[url(./public/page7/black_hoodie_bck.png)] rounded-[1vw] bg-cover bg-center bg-no-repeat flex justify-center items-center'>
              <img src="./public/page7/black_hoodie.png" alt="Black Hoodie" />
            </div>
          </div>
        </div>

        {/* Right Arrow - Scroll Next */}
        <div className='w-[5vw] m-auto h-[5vw] rounded-full bg-zinc-800 flex justify-center items-center cursor-pointer' onClick={scrollNextimg}>
          <img className='p-5' src="https://img.icons8.com/?size=100&id=39777&format=png&color=ffffff" alt="scroll next" />
        </div>
      </div>

      {/* Games Section */}
      <div className='relative z-10 mt-[5vw]'>
        <h1 className='font-cheeseburga text-center font-black text-[11.458vw] text-white tracking-wide'>
          Games
        </h1>

        <p className='text-center text-[2vw] font-black text-[#353535]'>
          Stay tuned for upcoming games!
        </p>
      </div>

      <div className='flex items-center mt-[2vw] mx-auto '>
        {/* Scrollable Container for Games */}
        <div className='w-[87.963vw] h-[49.479vw] mt-[5vw] mb-[5vw] z-10 flex rounded-[2vw] mx-autorelative overflow-x-auto overflow-y-hidden noScrollBar border-8 border-white mx-auto ' ref={gamesScrollRef}>
          <div className='flex flex-nowrap '>
            {/* Game-1 */}
            <div className='w-[87.963vw] h-[49.479vw] bg-[url(./public/page7/alabay_guard_prev.png)] rounded-[1vw] bg-cover bg-center bg-no-repeat flex justify-center items-center relative'>
             <div className='w-full h-full flex justify-center items-center' >
             <Link to={'/gameOne'} className='rounded-full w-[17vw] h-[5vw] mt-[27vw] bg-[#843AFC] inline-flex justify-center items-center text-[1.6vw] font-black gap-[.5vw] text-white'>Discover
                <img className='w-[2.8vw]' src="https://img.icons8.com/?size=100&id=39803&format=png&color=ffffff" alt="" />
              </Link>
             </div>
            </div>

            {/* Game-2 */}
            <div className='w-[87.963vw] h-[49.479vw] bg-[url(./public/page7/alabay_lost_heritage_prev.png)] rounded-[1vw] bg-cover bg-center bg-no-repeat flex justify-center items-center'>
              <Link to={'/gameTwo'} className='rounded-full w-[17vw] h-[5vw] mt-[27vw] bg-[#45D689] inline-flex justify-center items-center text-[1.6vw] font-black gap-[.5vw] text-white'>Discover
                <img   className='w-[2.8vw]' src="https://img.icons8.com/?size=100&id=39803&format=png&color=ffffff" alt="" />
              </Link>
            </div>

            <div className='w-[87.963vw] h-[49.479vw] bg-[url(./public/page7/alabay_guard_prev.png)] rounded-[1vw] bg-cover bg-center bg-no-repeat flex justify-center items-center'>
              <Link to={'/gameOne'} className='rounded-full w-[17vw] h-[5vw] mt-[27vw] bg-[#843AFC] inline-flex justify-center items-center text-[1.6vw] font-black gap-[.5vw] text-white'>Discover
                <img className='w-[2.8vw]' src="https://img.icons8.com/?size=100&id=39803&format=png&color=ffffff" alt="" />
              </Link>
            </div>
          </div>
        </div>

        {/* <div className='w-[5vw] h-full flex justify-center items-center'>
          <div
            className='w-[5vw] h-[7vw] p-2 rounded-[1vw] absolute bg-[#353535] flex justify-center items-center cursor-pointer'
            
          >
            <img src="https://img.icons8.com/?size=100&id=VjUxG2ZHfWSs&format=png&color=ffffff" alt="" />
          </div>
        </div> */}

      </div>
    </div>
  );
};

export default Page7;
