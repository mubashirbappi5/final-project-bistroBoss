import React from 'react';
import MenuBanner from '../Menu components/MenuBanner';
import OfferMenu from '../Menu components/OfferMenu';
import DessertsCover from '../Menu components/DessertsCover';
import DessertsMenu from '../Menu components/DessertsMenu';
import PizzaCover from '../Menu components/PizzaCover';
import PizzaMenu from '../Menu components/PizzaMenu';

const OurMenu = () => {
    return (
        <div>
           
            <MenuBanner/>
            <div className='w-10/12 mx-auto'>
            <OfferMenu/>
            <DessertsCover/>
            <DessertsMenu/>
            <PizzaCover/>
            <PizzaMenu/>
            </div>
        </div>
    );
};

export default OurMenu;