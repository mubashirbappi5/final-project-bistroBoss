import React, { useEffect, useState } from 'react';
import ShareTitle from '../../Shared/ShareTitle';
import Menu from '../../Shared/Menu';
import UseMenu from '../../../Hooks/UseMenu';

const PopularMenu = () => {
    const [menu] = UseMenu()
    
            const populerMenu = menu.filter(item=>item.category === 'popular')
          
           
       
    
    return (
        <div>
            <section>
            <ShareTitle title={'FROM OUR MENU'} subtitle={'---Check it out---'} />

            </section>
            <section className='grid mb-10  grid-cols-1 md:grid-cols-2 gap-8'>
                {
                    populerMenu.map(item=><Menu key={item._id}item={item}/>)
                }

            </section>


        </div>
    );
};

export default PopularMenu;