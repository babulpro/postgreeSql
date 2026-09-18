import { createNewBlog } from '@/app/action/blogs';
import React from 'react';

const NewBlogPage = () => {
    return (
        <div className='container mt-0 m-auto'>
            <h1 className='text-center  text-2xl underline m-4'>Create New Blog</h1>
            <div className=' md:w-2/3 m-auto shadow-xs shadow-amber-200'>
                <form action={createNewBlog} className=' p-5'>
                    <div>
                        <label>title<input type='text' name='title' className=' bg-slate-900 ml-5 rounded-2xl px-2 py-1 mb-10'/></label>
                    </div>

                    <div>
                        <label>slug<input type='text' name='slug' className=' bg-slate-900 ml-5 rounded-2xl px-2 py-1 mb-10'/></label>
                    </div>
                    <div>
                        <label>content<input type='text' name='content' className=' bg-slate-900 ml-5 rounded-2xl px-2 py-1'/></label>
                    </div>
                    <button type='submit' className='bg-amber-500 px-5 py-1 rounded-md mt-5'>Create New Blog</button>

                </form>
            </div>
            
        </div>
    );
};

export default NewBlogPage;