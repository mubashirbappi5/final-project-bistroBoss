import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import useAdmin from '../../Hooks/useAdmin';

const Desboard = () => {
   const [isAdmin] = useAdmin()
   console.log(isAdmin)
    return (
        <div className='grid grid-cols-12'>

            <section className='min-h-screen bg-orange-300 col-span-2'>

                <h1 className='text-2xl font-bold m-5'>BISTRO BOSS</h1>
              {
                isAdmin?<>
                <ul className='menu font-semibold'>
                <li><NavLink to={'/'} >Admin Home</NavLink></li>
                <li><NavLink to={'alluser'}>All Users</NavLink></li>
                <li><NavLink to={'additem'}>Add Item</NavLink></li>
                <li><NavLink to={'manageitem'}>Manage Items</NavLink></li>
                </ul>
                </>:<>
                  <ul className='menu font-semibold'>
                <li><NavLink to={'/'} >User Home</NavLink></li>
                <li><NavLink to={'des'} >Reservation</NavLink></li>
                <li><NavLink to={'h'}>Payment history</NavLink></li>
                <li><NavLink to={'mycart'}>My cart</NavLink></li>
                <li><NavLink to={'h'}>Add review</NavLink></li>
                <li><NavLink to={'h'}>My booking</NavLink></li>
               
                </ul>
                </>
              }

            </section>
            <section className='col-span-10 '>
                <Outlet/>

            </section>
            
        </div>
    );
};

export default Desboard;