import React from 'react';
import ShareTitle from '../../Shared/ShareTitle';
import useCarts from '../../../Hooks/useCarts';
import useAxios from '../../../Hooks/useAxios';
import { Link } from 'react-router-dom';

const Mycarts = () => {
    const [cart,refetch] = useCarts()
    const totalprice = cart.reduce((total,item)=>total+item.price,0)
   const axisosecure = useAxios()
    const handlecartsdelete = (id)=>{
         axisosecure.delete(`/carts/${id}`)
         .then(res=>{
            console.log(res.data)
            refetch();
         })

    }
    return (
        <div>
            
            <ShareTitle  title={'WANNA ADD MORE?'} subtitle={'---My Cart---'}/>


            <section className='w-11/12 mx-auto'>
               <div className='flex justify-between'>
               <h1>Total orders:{cart.length}</h1>
                <h1>Total price: {totalprice}</h1>
                {
                  cart.length >0 ? <Link to={'/desboard/pay'}><button className="btn">Pay</button></Link>:<Link className='btn' to={'/order'}>Add to Cart</Link>
                }

               </div>
               <div>
               <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        
        <th>Name</th>
        <th>Price</th>
       
        <th></th>
      </tr>
    </thead>
    {
        cart.map(item=> <tbody>
            {/* row 1 */}
            <tr>
              
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src={item.image}
                        alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{item.name}</div>
                    
                  </div>
                </div>
              </td>
              <td>
             {item.price}
              
              </td>
             
              <th>
                <button onClick={()=>handlecartsdelete(item._id)} className="btn btn-ghost btn-xs">Delete </button>
              </th>
            </tr>
           
            
           
      
          </tbody>)
    }
   
    {/* foot */}
    
  </table>
</div>

               </div>
            </section>
            
        </div>
    );
};

export default Mycarts;