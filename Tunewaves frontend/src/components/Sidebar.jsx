import React from 'react'
import {assets} from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Sidebar = () => {

  const navigate = useNavigate();


  return (
    <div className='w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex'>
      <div className='bg-[#121212] h-[25%] rounded flex flex-col justify-around'>
        <div className='flex items-center gap-3 pl-8 cursor-pointer'>
          <img className='w-12 h-12' src={assets.tune_waves} />
          <p className='font-bold text-size-20px'>Tune Waves</p>
        </div>
        <div onClick={()=>navigate('/')} className='flex items-center gap-3 pl-8 ml-3 cursor-pointer'>
          <img className='w-6' src={assets.home_icon} />
          <p className='font-bold ml-3'>Home</p>
        </div>
        <div className='flex items-center gap-3 pl-8 ml-3 cursor-pointer'>
          <img className='w-6' src={assets.search_icon} />
          <p className='font-bold ml-3'>Search</p>
        </div>
      </div>
      <div className='bg-[#121212] h-[75%] rounded'>
        <div className='p-4 flex items-center justify-between'>
          <div className='flex items-center gap-3'>
            <img className='w-8' src={assets.stack_icon} alt=''/>
            <p className='font-bold'>Your Library</p>
          </div>
          <div className='flex items-center gap-3'>
          <img className='w-5' src={assets.arrow_icon} alt=''/>
          <img className='w-5' src={assets.plus_icon} alt=''/>
          </div>
        </div>
        <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4'>
           <h1>Create your first Playlist</h1>
           <p className='font-light'>It's easy we will help you</p>
           <button className='px-4 py-1.5 bg-white text-size-[15px] text-black rounded-full mt-4'>Create Playlist</button>
        </div>
        <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4 mt-4'>
           <h1>Let's find some podcast to follow</h1>
           <p className='font-light'>We will keep you updated with the latest episodes</p>
           <button className='px-4 py-1.5 bg-white text-size-[15px] text-black rounded-full mt-4'>Browse Podacst</button>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
