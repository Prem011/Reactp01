import React from 'react'
import Page1 from './Page1'
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import Page5 from './Page5';
import Page6 from './Page6';
import Page7 from './Page7';
import Page8 from './Page8';
import Page9 from './Page9';

const AllPages = () => {
  return (
    <div className='absolute bottom-[-88vh] bg-white rounded-s-[2vw] rounded-e-[2vw] h-full w-[90%] overflow-y-auto editedScrollbar '>

        <Page1/>
        <Page2/>
        <Page3/>
        <Page4/>
        <Page5/>
        <Page6/>
        <Page7/>
        <Page8/>
        <Page9/>

    </div>
  )
}

export default AllPages
