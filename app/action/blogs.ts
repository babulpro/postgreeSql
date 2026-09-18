'use server'

import { redirect } from "next/navigation";
import { addBlog } from "../services/blogs";
import { revalidatePath } from "next/cache";

 

export const createNewBlog=async(formData:FormData)=>{
    const title = formData.get('title') as string;
    const slug = formData.get('slug') as string;
    const content = formData.get('content') as string
    await addBlog(title,slug,content)
    revalidatePath("/blog")
    redirect("/blog")

    

}