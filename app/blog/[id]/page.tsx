import { blogById } from '@/app/services/blogs';
import React from 'react';

const BlogBYIdPage = async({params}:{params:Promise<{id:string}>}) => {
    const {id} = await params
    const blog=await blogById(Number(id))
    return (
        <div className='container m-auto mt-5'>
            <div className='w-1/2 m-auto  shadow-amber-300 shadow-lg px-2 py-4 rounded-2xl'>
                <h1>{blog?.title}</h1>
                <h1>{blog?.content}</h1>
                <h1>{blog?.slug}</h1>
                <h1>{blog?.id}</h1>
            </div>

        </div>
    );
};

export default BlogBYIdPage;