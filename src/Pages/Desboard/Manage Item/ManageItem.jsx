import React from 'react';
import UseMenu from '../../../Hooks/UseMenu';
import ShareTitle from '../../Shared/ShareTitle';
import useAxios from '../../../Hooks/useAxios';
import { Link } from 'react-router-dom';

const ManageItem = () => {
    const [menu,refetch] = UseMenu()
    const axiossecure = useAxios();
    const handledelete =async (id)=>{
       const res =await axiossecure.delete(`/menu/${id}`)
       console.log(res.data)
       if(res.data.deletedCount > 0){
        refetch();
       }
      

    }
    return (
        <div>
     <ShareTitle title={'MANAGE ALL ITEMS'} subtitle={'---Hurry Up!---'}></ShareTitle>
     <section className='w-10/12 mx-auto'>
      <h1 className='capitalize text-lg font-semibold'>total menu {menu.length}</h1>
     <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead className='bg-orange-400'>
      <tr>
        <th>
        No.
        </th>
        <th>ITEM IMAGE</th>
        <th>ITEM NAME</th>
        <th>PRICE</th>
        <th>ACTION</th>
        <th>ACTION</th>
        <th></th>
      </tr>
    </thead>
    {
        menu.map((item,idx)=> <tbody key={idx}>
    
        <tr>
          <th>
            {idx+1}
            
          </th>
          <td>
            <div className="flex items-center gap-3">
              <div className="avatar">
                <div className="mask mask-squircle h-12 w-12">
                  <img
                    src={item.image}
                    alt="Avatar Tailwind CSS Component" />
                </div>
              </div>
              
            </div>
          </td>
          <td>
          {item.name}
            <br />
            <span className="badge badge-ghost badge-sm">{item.category}</span>
          </td>
          <td>{item.price}</td>
          <th>
            <Link to={`updatemenu/${item._id}`} className="btn btn-ghost btn-xs">edit</Link>
          </th>
          <th>
            <button onClick={()=>handledelete(item._id)} className="btn btn-ghost btn-xs">delete</button>
          </th>
        </tr>
       
      </tbody>
     )
    }
   
  </table>
</div>
     </section>


            
        </div>
    );
};

export default ManageItem;