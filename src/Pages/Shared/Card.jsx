import React from 'react';

const Card = ({item}) => {
    const{name,image,recipe,price}=item
    return (
        
            <div className="card rounded-none bg-base-100 border">
  <figure>
    <img
      src={image}
      alt="card" />
  </figure>
  <div className="card-body text-center bg-[#F3F3F3] flex flex-col justify-center items-center">
    <h2 className="card-title">{name}</h2>
    <p className='font-thin'>{recipe}</p>
    <div className="card-actions justify-end">
      <button className="btn  border-2 border-b-[#BB8506] text-[#BB8506] focus:bg-black focus:border-none hover:bg-black hover:border-none uppercase">Add to Cart</button>
    </div>
  </div>
</div>
            
      
    );
};

export default Card;