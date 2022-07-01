import Image from 'next/image'
import React from 'react'

const LiveChannelItems = ({img,profile_img,title,user,game}) => {
  return (
    <div className='p-2'>
        <Image src={img} alt="/"/>
        <div className='flex pt-2'>
            <div>
                <Image src={profile_img} width='60' height='60' className='rounded-full' alt='/'/>
            </div>
            <div>
              <p className='font-bold text-sm'>{title}</p>
              <p className='text-gray-500 text-sm'>{user}</p>
              <p className='text-gray-500 text-sm'>{game}</p>
            </div>
        </div>
    </div>
  )
}

export default LiveChannelItems