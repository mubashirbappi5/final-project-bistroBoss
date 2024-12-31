import React from 'react';
import HeroCover from '../../Shared/HeroCover';
import dessertcover from '../../../assets/menu/dessert-bg.jpeg'
const DessertsCover = () => {
    return (
        <div className=''> 
           <HeroCover img={dessertcover} title={'DESSERTS'} subtitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}/> 
            
        </div>
    );
};

export default DessertsCover;