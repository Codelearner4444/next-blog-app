import { assets, blog_data } from '@/Assets/assets'
import Image from 'next/image'
import React from 'react'

const BlogItem = ({title,description,category,image}) => {
  return (
    <div className='max-w-[330px] sm:max-w-[300] bg-white border border-fuchsia-500 hover:shadow-[-5px_5px_15px_magenta]'>
    <Image src={image} alt='' width={400} height={400} className='border-b border-fuchsia-500'/>  
    <p className='ml-5 mt-5 px-1 inline-block bg-fuchsia-500 text-white text-sm'>{category}</p>
    <div className='p-5'>
        <h5 className='mb-2 text-la font-medium tracking-tight text-fuchsia-900'>{title}</h5>
        <p className='mb-3 text-sm tracking-tight text-fuchsia-700'>{description}</p>
    <div className='inline-flex items-center py-2 font-semibold text-center'>
        Read more <Image src={assets.arrow} className='ml-2' alt='' width={12} />
    </div>
    </div>
    </div>
  )
}

export default BlogItem
