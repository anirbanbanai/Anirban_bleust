import React from 'react';
import LeftSideBar from '../components/LeftSidebar';
import RightSideBar from '../components/RightSideBar';

const layout = ({children}) => {
    return (
       <div>
          <RightSideBar/>
         <div className='grid md:grid-cols-5'>
            <LeftSideBar />
           <div className='col-span-4 max-md:pt-20'>
           {children}
           </div>
        </div>
      
       </div>
    );
};

export default layout;