import React, { useState } from 'react'
import { assets } from '../assets/assets'
import axios from 'axios';
import { url } from '../App';
import { toast } from 'react-toastify';

const AddAlbum = () => {

  const [image,setImage] = useState(false);
  const [colour,setColour] = useState('#121212');
  const [name,setName] = useState("");
  const [desc,setDesc] = useState("");
  const [loading,setloading] = useState(false);

  const onSubmitHandler = async (e) => {
      e.preventDefault();
      setloading(true);

      try {

        const formData = new FormData();

        formData.append('name',name);
        formData.append('desc',desc);
        formData.append('image',image);
        formData.append('bgColour', colour);

        const response = await axios.post(`${url}/api/album/add`,formData);

        if (response.data.success) {
          toast.success("Album Added");
          setDesc("");
          setImage(false);
          setName("");
          setColour('#121212');
        }
        else{
          toast.error('Something went Wrong :(');
        }

        
      } catch (error) {
        toast.error("Error Occured");
      }
      setloading(false);

  }

  return loading ? (
    <div className='grid place-items-center min-h-[80vh]'>
        <div className='w-16 h-16 place-self-center border-4 border-gray-500 border-t-gray-900 rounded-full animate-spin'></div>
      </div>
  ) : (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-start gap-8 text-gray-600'>
      <div className='flex flex-col gap-4'>
        <p>Upload Image</p>
        <input onChange={(e)=>setImage(e.target.files[0])} type="file" id='image' accept='image/*' hidden />
        <label htmlFor="image">
          <img className='w-24 cursor-pointer' src={image ? URL.createObjectURL(image) : assets.upload_area} alt="" />
        </label>
      </div>
      <div className='flex flex-col gap-2.5'>
        <p>Album Name</p>
        <input onChange={(e)=>setName(e.target.value)} value={name} className='bg-transparent outline-gray-900 border-2 border-gray-500 p-2.5 w-[max(40vw,250px)]' type="text" placeholder='Enter name' id="" />
      </div>
      <div className='flex flex-col gap-2.5'>
        <p>Album Description</p>
        <input onChange={(e)=>setDesc(e.target.value)} value={desc} className='bg-transparent outline-gray-900 border-2 border-gray-500 p-2.5 w-[max(40vw,250px)]' type="text" placeholder='Enter description' id="" />
      </div>

      <div className='flex flex-col gap-3'>
        <p>Background Color</p>
        <input onChange={(e)=>setColour(e.target.value)} value={colour} type="color" />
      </div>

      <button className='text-base bg-black text-white py-2.5 px-14 cursor-pointer font-bold' type='submit'>ADD</button>

    </form>
  )
}

export default AddAlbum
