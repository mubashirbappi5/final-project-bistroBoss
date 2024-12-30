import React from 'react';
import imgbg from '../../../assets/home/chef-service.jpg'
const Hero = () => {
    return (
        <div style={{ backgroundImage: `url(${imgbg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}  className='p-20 my-20 bg-fixed'>
            <div className='p-10 bg-white flex flex-col justify-center items-center gap-4'>
                <h1 className='text-3xl font-thin text-center'>Bistro Boss</h1>
                <p className='text-center font-thin'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>

            </div>
            
        </div>
    );
};

export default Hero;