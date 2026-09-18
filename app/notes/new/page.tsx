import { createNote } from '../../action/notes';
import React from 'react';

const NewNote = () => {
    return (
        <div className='container m-auto mt-0 px-10 md:px-0'>
            <div className=''>
                <h1 className='text-center mt-10 text-4xl font-bold underline'>Create New Note</h1>
                <form action={createNote} className='mt-10'>
                    <div>
                        <label>Content <input type='text' name="content" className='bg-slate-500 rounded-2xl px-2 py-1 ml-5'/></label>
                    </div>
                    <div>
                        <label>Important <input type='checkbox' name="important" className='bg-slate-500 rounded-2xl px-2 py-1 ml-5 mt-5'/></label>
                    </div>
                    <button type='submit' className='mt-5 bg-amber-500 rounded-lg px-5 py-1'>Create</button>

                </form>

            </div>
        </div>
    );
};

export default NewNote;<h1>this is the new notes  page</h1>