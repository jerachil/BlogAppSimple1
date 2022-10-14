import React from 'react';
import Link from 'next/link';

const FeaturedPostCard = ({ post }) => {
  return (
    <div className='pb-10 pl-5' >
      <div className='relative w-500px'>
        <Link key={post.id} href={`/post/${post.slug}`}>
        <img src={post.featuredImage.url} className="cursor-pointer transition duration-500 transform hover:-translate-y-5 "/>
        </Link>    
          <div className='absolute bottom-0 right-0 left-0 px-2 py-4 bg-gray-800 opacity-70'>
            <h3 className='text-white font-bold text-xl'>{post.title} </h3>
          
          </div>
      
      </div>
      
    </div>
  )
}

export default FeaturedPostCard