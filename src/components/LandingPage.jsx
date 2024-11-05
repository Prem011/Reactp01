import React from 'react';
import AllPages from './MainContent/AllPages';

const LandingPage = () => {
  return (
    <div className="w-full h-screen bg-cover bg-center bg-[url('/landingBg.jpg')] flex justify-center items-center overflow-auto noScrollBar">
        <div className='w-full h-[92vh] flex justify-center items-center relative
            sm:h-[85vh]     
            md:h-[88vh]      
            lg:h-[90vh]      
            xl:h-[92vh]      
            2xl:h-[100vh]    
        '>
            <AllPages />
        </div>
    </div>
  );
};

export default LandingPage;
