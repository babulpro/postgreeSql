import React from 'react';
import { getBlogData } from '../services/blogs';
import Link from 'next/link';

const BlogPage = async () => {
    const blogs=await getBlogData()
    return (
        <div className='container mt-0 m-auto '>
             <h1 className=' text-2xl text-center underline'>All blogs are her</h1>
             <div className='grid grid-cols-2 md:grid-cols-3 gap-6'>
                {blogs.length>0 &&
                blogs.map((blog)=>(
                    <div key={blog.id} className=' mb-10 shadow-2xl p-2'>
                        <h1>{blog.title}</h1>                                                 
                        <h1>{blog.slug}</h1>
                        <Link key={blog.id} href={`/blog/${blog.id}`}>Details</Link>
                         
                    </div>
                ))
                }
             </div>
        </div>
    );
};

export default BlogPage;