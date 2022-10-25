import React from 'react';
import { useSession, signOut, getSession, signIn } from 'next-auth/react';

const Account = () => {
const { data: session, status } = useSession();

if(status === 'authenticated') {
    return (
        <div className='bg-white shadow-lg rounded-lg p-8 mb-8 mx-64 w-96'>
            <h3 className='text-xl mb-8 font-semibold border-b pb-4 '>Welcome {session.user.name}</h3>
            <button 
        type='button' 
        onClick={() => signOut()}
        className='transition duration-500 ease hover:bg-indigo-900 inline-block bg-pink-600 text-lg rounded-full text-white px-8 py-3 cursor-pointer'
        >Sign out</button>
        </div>
        
    )
}else{
    return (
        <div className='bg-white shadow-lg rounded-lg p-8 mb-8 mx-64 w-96'>
            <h3 className='text-xl mb-8 font-semibold border-b pb-4 '>You do not have access to this page.</h3>
            <button 
        type='button' 
        onClick={() => signIn()}
        className='transition duration-500 ease hover:bg-indigo-900 inline-block bg-pink-600 text-lg rounded-full text-white px-8 py-3 cursor-pointer'
        >Sign in</button>
        </div>
      )
}
}

export default Account