import React from 'react';

const SubMainpage = ({main}) => {
    const {post, email} = main
    return (
        <div className=' p-3 bg-slate-200 m-4 rounded-xl'>
            <p className='font-bold mb-5'>{email}</p>
          <div className='bg-white p-2 rounded-xl'>
          <h1>{post}</h1>
          </div>
        </div>
    );
};

export default SubMainpage;