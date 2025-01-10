import React from 'react';
import { useLoaderData } from 'react-router-dom';

import ShareTitle from '../../Shared/ShareTitle';
import { useForm } from 'react-hook-form';
import useAxiospublic from '../../../Hooks/useAxiospublic';
import useAxios from '../../../Hooks/useAxios';

const hosting_api = `https://api.imgbb.com/1/upload?key=36b71bb785bb540bd73f7987317c5207`
const UpdateMenu = () => {
    const {name,category,image,recipe,price,_id}=useLoaderData()
    const axiosPublic = useAxiospublic()
    const axiossecure = useAxios()
    const { register, handleSubmit,reset, } = useForm();
    const onSubmit = async (data) =>{ console.log(data);
        const imageFile = { image: data.image[0] }
    const res = await axiosPublic.post(hosting_api,imageFile,{
        
        headers: {
             'content-type': 'multipart/form-data'
        }}
    )
    console.log(res.data)
    if(res.data.success){
      
        const menuItem = {
            name:data.name,
            recipe:data.recipe,
            category:data.category,
            price:parseFloat(data.price),
            image:res.data.data.display_url

        }
        reset()
       
        console.log(menuItem)
      const menures = await axiossecure.patch(`/menu/${_id}`,menuItem)
        console.log(menures.data)
    }

    }
    return (
        <div>
            <div>
            <ShareTitle  title={'UPDATE ITEM'} />

            <section className='w-10/12 mx-auto p-4 border mb-10'>
            <form className='space-y-4' onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full ">
            <div className="label">
            <span className="label-text">Recipe name*</span>
            </div>
      <input  {...register("name",{required:true})} defaultValue={name} name='name' type="text" placeholder="Recipe name" className="input input-bordered w-full " required />
      </div>
      <div className='flex gap-4'>
     <div className="form-control w-full ">
     <div className="label">
            <span className="label-text">Category*</span>
            </div>
     <select defaultValue={category}  className="select select-bordered w-full " {...register("category",{required:true})} name='category' required>
      <option disabled value={'defual'}>Select a category</option>
        <option value="salad">Salad</option>
        <option value="pizza">Pizza</option>
        <option value="soup">Soups</option>
        <option value="dessert">Desserts</option>
        <option value="drinks">Drinks</option>
      </select>
     </div>
      <div className="form-control w-full ">
            <div className="label">
            <span className="label-text">Price*</span>
            </div>
      <input  {...register("price",{required:true})} defaultValue={price} name='price' type="number" placeholder="Price" className="input input-bordered w-full "required />
      </div>
        
      </div>

      <div className="form-control w-full ">
      <div className="label">
            <span className="label-text">Recipe Details**</span>
            </div>
            <textarea {...register("recipe",{required:true})} defaultValue={recipe} name='recipe' className="textarea textarea-bordered" placeholder="Bio" rows={5}required></textarea>

      </div>
      <div className="form-control w-full  ">
           
            <input {...register("image",{required:true})}required  name='image' type="file" className="file-input w-full max-w-xs" />
            </div>
      
      <input className='btn bg-[#D1A054] text-white' type="submit" value={'Add Item'} />
    </form>
            </section>
            
        </div>
            
        </div>
    );
};

export default UpdateMenu;