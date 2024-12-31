import React from 'react';
import ShareTitle from '../../Shared/ShareTitle';
import UseMenu from '../../../Hooks/UseMenu';
import Menu from '../../Shared/Menu';

const OfferMenu = () => {
    const [menu] = UseMenu()
    const offermenu = menu.filter(items=>items.category ==='offered')
    return (
        <div>
            <section>
                <ShareTitle title={"TODAY'S OFFER"} subtitle={"---Don't miss---"}></ShareTitle>
            </section>
            <section className='grid gird-cols-1 md:grid-cols-2 gap-8 mb-10  '>
                {
                    offermenu.map(item=><Menu item={item}></Menu>)
                }

            </section>
            
        </div>
    );
};

export default OfferMenu;