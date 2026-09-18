import { eq, desc } from "drizzle-orm";
import { db } from "../../db";
import { blogs } from "../../db/schema";

export const getBlogData = async () => {
  return db.select().from(blogs).orderBy(desc(blogs.id));
}

export const addBlog = async (title: string, slug: string, content: string) => {
  await db.insert(blogs).values({ title, slug, content });
}

export const blogById = async (id: number) => {
  const [blog] = await db.select().from(blogs).where(eq(blogs.id, id));
  return blog;
}