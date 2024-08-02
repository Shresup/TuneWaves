import React from 'react'
import {assets} from '../assets/assets'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='bg-[#171515] min-h-screen pl-[4vw]'>

        <img src={assets.tunewaves_logo} className='mt-5 mr-12 w-[max(10vw,100px)] hidden sm:block' alt="" />
        <img src={assets.tunewaves_small} className='mt-5 w-[mx(5vw,40px)] mr-3 sm:hidden block' alt="" />

        <div className='flex flex-col gap-5 mt-10'>

          <NavLink to='/add-song' className='flex items-center gap-2.5 text-gray-800 h-8 bg-white border border-black pr-[max(8vw,10px)] drop-shadow-[-4px_4px_#c4c4c4] text-sm font-medium cursor-pointer'>
                <img src={assets.add_song} className='w-5' alt="" />
                <p className='hidden sm:block'>Add Song</p>
          </NavLink>

          <NavLink to='/list-song' className='flex items-center gap-2.5 text-gray-800 h-8 bg-white border border-black pr-[max(8vw,10px)] drop-shadow-[-4px_4px_#c4c4c4] text-sm font-medium cursor-pointer'>
                <img src={assets.song_icon} className='w-5' alt="" />
                <p className='hidden sm:block'>List Song</p>
          </NavLink>

          <NavLink to='/add-album' className='flex items-center gap-2.5 text-gray-800 h-8 bg-white border border-black pr-[max(8vw,10px)] drop-shadow-[-4px_4px_#c4c4c4] text-sm font-medium cursor-pointer'>
                <img src={assets.add_album} className='w-5' alt="" />
                <p className='hidden sm:block'>Add Album</p>
          </NavLink>

          <NavLink to='/list-album' className='flex items-center gap-2.5 text-gray-800 h-8 bg-white border border-black pr-[max(8vw,10px)] drop-shadow-[-4px_4px_#c4c4c4] text-sm font-medium cursor-pointer'>
                <img src={assets.album_icon} className='w-5' alt="" />
                <p className='hidden sm:block'>List Album</p>
          </NavLink>

        </div>
    </div>
  )
}

export default Sidebar
