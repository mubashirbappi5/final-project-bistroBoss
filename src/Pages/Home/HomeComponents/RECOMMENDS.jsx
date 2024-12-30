import React, { useEffect, useState } from 'react';
import ShareTitle from '../../Shared/ShareTitle';
import Card from '../../Shared/Card';

const RECOMMENDS = () => {
    const [recommenditem,setrecommentitem] = useState([])
    useEffect(()=>{
        fetch('menu.json')
        .then(res=>res.json())
        .then(data=>{
            const recommedItems = data.filter(item=>item.price >= 14.8)
            setrecommentitem(recommedItems)
        })

    },[])
    return (
        <div>
            <section>
            <ShareTitle title={'CHEF RECOMMENDS'} subtitle={'---Should Try---'} />

            </section>
            <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10'>
                {
                    recommenditem.map(item=><Card key={item._id} item={item}/>)
                }

            </section>
            
        </div>
    );
};

export default RECOMMENDS;