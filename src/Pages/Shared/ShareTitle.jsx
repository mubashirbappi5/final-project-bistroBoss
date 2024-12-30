import React from 'react';

const ShareTitle = ({title,subtitle}) => {
    return (
        <div className='text-center md:w-3/12 mx-auto my-6 space-y-2'>
            <p className='font-thin text-[#D99904]'>{subtitle}</p>
          
            <h1 className='text-3xl font-bold border-y-2 py-2'>{title}</h1>
           
        </div>
    );
};

export default ShareTitle;