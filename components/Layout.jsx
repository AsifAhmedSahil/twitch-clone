import React from 'react'
import Main from './Main'
import Sidemenu from './Sidemenu'

const Layout = () => {
  return (
    <div className='pt-[60px] flex w-full'>
        <Sidemenu/>
        <Main/>
    </div>
  )
}

export default Layout