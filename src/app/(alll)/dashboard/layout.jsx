import DashCharts from '@/app/components/DashCharts';
import React from 'react';

const layout = ({children}) => {
    return (
        <div className='m-5 p-5'>
            <DashCharts/>
            {children}
        </div>
    );
};

export default layout;