import React, { useEffect, useState } from 'react';
import ShareTitle from '../../Shared/ShareTitle';
import Menu from '../../Shared/Menu';

const PopularMenu = () => {
    const [menu,setmenu]=useState([])
    useEffect(()=>{
        fetch('menu.json')
        .then(res=>res.json())
        .then(data=>{
            const populerMenu = data.filter(item=>item.category === 'popular')
          
            setmenu(populerMenu)
        })

    },[])
    return (
        <div>
            <section>
            <ShareTitle title={'FROM OUR MENU'} subtitle={'---Check it out---'} />

            </section>
            <section className='grid mb-10  grid-cols-1 md:grid-cols-2 gap-8'>
                {
                    menu.map(item=><Menu key={item._id}item={item}/>)
                }

            </section>


        </div>
    );
};

export default PopularMenu;