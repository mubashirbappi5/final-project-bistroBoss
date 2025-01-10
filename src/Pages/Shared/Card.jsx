import React from 'react';
import useAuth from '../../Hooks/useAuth';
import { useNavigate, useLocation } from 'react-router-dom';
import useAxios from '../../Hooks/useAxios';
import useCarts from '../../Hooks/useCarts';

const Card = ({item}) => {
    const {user}=useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const axisosinstans = useAxios()
    const [,refetch] = useCarts()
    const{name,image,recipe,price,_id}=item
    const handlecart = (cart)=>{
      if(user && user.email){
        const caritem = {
          menuId : _id,
          email:user.email,
          name,
          image,
          price
        }
        console.log(cart)
        axisosinstans.post('/carts',caritem)
        .then(res=>{
          console.log(res.data)
          refetch();
        })
        
      }
      else{
        alert('your are not login')
        navigate('/login',{state:{from:location}})


      }
      
    }
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
      <button onClick={()=>{handlecart(item)}} className="btn  border-2 border-b-[#BB8506] text-[#BB8506] focus:bg-black focus:border-none hover:bg-black hover:border-none uppercase">Add to Cart</button>
    </div>
  </div>
</div>
            
      
    );
};

export default Card;