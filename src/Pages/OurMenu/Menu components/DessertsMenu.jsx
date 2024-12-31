import React from 'react';
import UseMenu from '../../../Hooks/UseMenu';
import Menu from '../../Shared/Menu';

const DessertsMenu = () => {
    const [menu] = UseMenu()
    const dessertmenu = menu.filter(items=>items.category==='dessert')
    return (
        <div className='my-20'>
             <section className='grid gird-cols-1 md:grid-cols-2 gap-8 mb-10 w-10/12 mx-auto '>
                {
                    dessertmenu.map(item=><Menu item={item}></Menu>)
                }

            </section>
            
        </div>
    );
};

export default DessertsMenu;