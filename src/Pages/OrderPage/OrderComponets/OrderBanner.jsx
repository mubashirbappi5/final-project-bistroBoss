import React from 'react';
import HeroCover from './../../Shared/HeroCover';
import ordercover from '../../../assets/shop/banner2.jpg'

const OrderBanner = () => {
    return (
        <div>
            <HeroCover img={ordercover} title={'Our Shop'} subtitle={'Would you like to try a dish?'}/>
            
        </div>
    );
};

export default OrderBanner;