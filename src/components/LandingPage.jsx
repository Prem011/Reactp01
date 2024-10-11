import React from 'react';
import AllPages from './MainContent/AllPages';

const LandingPage = () => {
  return (
    <div className="w-full h-[60vw] bg-cover bg-[url('/landingBg.jpg')] flex justify-center items-center  noScrollBar ">
        <div className='w-full h-[92vh] flex justify-center items-center relative '>
            <AllPages/>
        </div>
    </div>
  );
};

export default LandingPage;
