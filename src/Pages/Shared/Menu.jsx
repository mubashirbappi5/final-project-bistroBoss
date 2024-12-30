import React from 'react';

const Menu = ({item}) => {
    console.log(item)
    const{name,image,recipe,price}=item
  
    return (
        <div className='flex gap-4'>
            <div >
                <img style={{borderRadius:'0 200px 200px 200px'}} src={image} alt="" />
            </div>
            <div>
                <h1 className='text-xl'>{name}.................</h1>
                <p className='font-thin'>{recipe}</p>
            </div>
            <h2 className='text-xl text-[#D99904]'>{price}</h2>
            
        </div>
    );
};

export default Menu;