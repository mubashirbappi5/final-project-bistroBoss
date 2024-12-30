import React from 'react';
import Banner from '../HomeComponents/Banner';
import Category from '../HomeComponents/Category';
import Hero from '../HomeComponents/Hero';
import PopularMenu from '../HomeComponents/PopularMenu';
import Contact from '../HomeComponents/Contact';
import RECOMMENDS from '../HomeComponents/RECOMMENDS';
import Featured from '../HomeComponents/Featured';
import TESTIMONIALS from '../HomeComponents/TESTIMONIALS';

const Home = () => {
    return (
        <div>
          
            <Banner/>
            <div className='w-10/12 mx-auto'>
            <Category/>
            <Hero/>
            <PopularMenu/>
            <Contact/>
            <RECOMMENDS/>
            <Featured/>
            <TESTIMONIALS/>

            </div>
            
            
        </div>
    );
};

export default Home;