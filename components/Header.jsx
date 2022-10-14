import React, { useState, useEffect} from 'react';
import Link from 'next/link';
import { getCategories } from '../services';



const Header = () => {

    const [categories, setCategories] = useState([])
    useEffect(() => {
      getCategories()
        .then((newCategories) => setCategories(newCategories))
    }, [])

  return (
    
    <div className='bg-white fixed z-10 w-full px-10 '>
       
        <div className='border-b w-full inline-block py-8 '>
            <div className='md:float-left block'>
                <Link href="/">
                    <span className='cursor-pointer font-bold text-4xl text-black'>
                        HoverBlog
                    </span>
                </Link>
            </div>
            <div className='hidden md:float-left md:contents'>
                {categories.map((category) => (
                    <Link key={category.slug} href={`/category/${category.slug}`}>
                        <span className='md:float-right mt-2 align-middle text-black ml-4 font-semibold cursor-pointer'>
                            {category.name}
                        </span>
                    </Link>
                ))}
            </div>
        </div>

    </div>
    
  )
}

export default Header