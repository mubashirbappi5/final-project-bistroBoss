import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import img1 from '../../../assets/home/slide1.jpg'
import img2 from '../../../assets/home/slide2.jpg'
import img3 from '../../../assets/home/slide3.jpg'
import img4 from '../../../assets/home/slide4.jpg'

import {Autoplay, Pagination } from 'swiper/modules';
import ShareTitle from '../../Shared/ShareTitle';

const Category = () => {
    return (
        
        <div className=''>
            <section>
                <ShareTitle title={'ORDER ONLINE'} subtitle={'---From 11:00am to 10:00pm---'} />

            </section>
             <Swiper
        slidesPerView={4}
        spaceBetween={10}
        centeredSlides={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay,Pagination]}
        className="mySwiper mb-10 "
      >
        <SwiperSlide>
            <img src={img1} />
            <h1 className=' md:text-3xl font-bold -mt-10 text-center text-white uppercase'>Salads</h1>
        
        </SwiperSlide>
        <SwiperSlide>
            <img src={img2} />
            <h1 className='md:text-3xl font-bold -mt-10 text-center text-white uppercase' >Soups</h1>
        </SwiperSlide>
        <SwiperSlide><img src={img3} />
        <h1 className=' md:text-3xl font-bold -mt-10 text-center text-white uppercase'>pizzas</h1>
        
        </SwiperSlide>
        <SwiperSlide>
            <img src={img4} />
            <h1 className='md:text-3xl font-bold -mt-10 text-center text-white uppercase'>desserts</h1>
        
        </SwiperSlide>
        
        
      </Swiper>
        </div>
    );
};

export default Category;