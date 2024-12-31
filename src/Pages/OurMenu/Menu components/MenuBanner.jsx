import React from 'react';
import HeroCover from '../../Shared/HeroCover';
import menuimg from '../../../assets/menu/banner3.jpg'
const MenuBanner = () => {
    return (
        <div>
            <HeroCover img={menuimg} title={'OUR MENU'} subtitle={'Would you like to try a dish?'}/>
            
        </div>
    );
};

export default MenuBanner;