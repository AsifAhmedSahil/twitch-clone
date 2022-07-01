/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { FaGithub } from 'react-icons/fa';
import Image from 'next/image';



const account = () => {
    const { data: session } = useSession()
    if (session) {
      return (
        <div className='pt-[100px] flex flex-col max-w-[400px] w-full mx-auto p-4'>
          <h2 className='font-bold text-2xl'>Welcome, {session.user.name}</h2>
          <p className='p-4'>Signed in as  {session.user.email}</p>
          <div className='pb-4 m-auto'>
              <Image className='rounded-full' src={session.user.image} alt="/" width={100} height={100}/>
          </div>
          <button  className='flex justify-center items-center p-3 bg-gray-600 border border-gray-600 my-2'  onClick={() => signOut()}>Sign out</button>
        </div>
      )
    }
    return (
      <div className='flex flex-col pt-[100px] p-4 mx-auto w-full max-w-[400px]'>
        <h2 className='font-bold text-3xl'>Login</h2>
        <p className='py-4'>Choose the account you want to sign in with.</p>
        <button className='flex justify-center items-center p-3 bg-gray-600 border border-gray-600 my-2' onClick={() => signIn()}> <FaGithub className='mr-2'/>Sign in with <span className='font-bold pl-1'>Github</span></button>
      </div>
    )
} 

export default account