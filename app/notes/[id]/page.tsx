import { NoteById } from '@/app/services/notes';
import { notFound } from 'next/navigation';
import React from 'react';

const SingleNotePage =async ({params}:{ params: Promise<{id:string}>}) => {

    const {id} =await params
    const note=await NoteById(Number(id))
    if(!note){
        return notFound()
    }

     
     
    return (
        <div className='container mt-5  m-auto'>
           <div className='shadow-sm shadow-amber-400 p-2 '>
             <h1>{note?.id}</h1>
            <h1>{note?.content}</h1>
            <h1>{note?.important && <strong>Important</strong>}</h1>
            

           </div>
            
        </div>
    );
};

export default SingleNotePage;