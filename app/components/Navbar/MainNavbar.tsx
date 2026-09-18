import Link from 'next/link';
import React from 'react';

function MainNavbar() {
    const linksItem=[
        {name:"Home",links:"/"},
        {name:"Notes",links:"/notes"},
        {name:"New Note",links:"/notes/new"},
        {name:"Blog",links:"/blog"},
        {name:"New Blog",links:"/blog/new"},
    ]
    return (
        <div className='bg-slate-700 flex justify-center items-center'>
            {linksItem.length>0 &&
             linksItem.map((item)=><Link href={`${item.links}`} key={item.name} className="mr-10 hover:text-amber-500">{item.name}</Link>)
            }
            
        </div>
    );
}

export default MainNavbar;