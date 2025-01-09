import React from 'react';
import ShareTitle from '../../Shared/ShareTitle';
import { useQuery } from '@tanstack/react-query';
import useAxios from '../../../Hooks/useAxios';

const AllUsers = () => {
    const axisosecure = useAxios()
    const {data:users=[], refetch} = useQuery({
        queryKey:['users'],
        queryFn: async()=>{
      const res = await axisosecure.get('/users')
      return res.data

        }
    })

    const deleteuser = (id)=>{
     axisosecure.delete(`/users/${id}`)
     .then(res=>{
        alert ('delete confim')
        refetch()
     })
    }
    return (
        <div>
           <ShareTitle title={'MANAGE ALL USERS'} subtitle={'---How many??---'}></ShareTitle>

           <div>
            <h1>Total users:{users.length}</h1>

            <div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>email</th>
        <th></th>
      </tr>
    </thead>
    {
        users.map((user,idx)=><tbody>
        {/* row 1 */}
        <tr>
          <th>{idx+1}</th>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td><button onClick={()=>deleteuser(user._id)} className='btn'>remove</button></td>
        </tr>
      
      </tbody>)
    }
  </table>
</div>
            </div>
           </div>
        </div>
    );
};

export default AllUsers;