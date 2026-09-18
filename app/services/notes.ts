import { revalidatePath } from "next/cache";
import { eq, desc } from "drizzle-orm";
import { db } from "../../db";
import { notes } from "../../db/schema";

export const getNotes = async () => {
  return db.select().from(notes).orderBy(desc(notes.id));
}

export const addNote = async (content: string, important: boolean) => {
  await db.insert(notes).values({ content, important });
}

export const NoteById = async (id: number) => {
  const [note] = await db.select().from(notes).where(eq(notes.id, id));
  return note;
}

export const toggleImportance = async (id: number) => {
  const note = await NoteById(id);
  if (note) {
    await db.update(notes).set({ important: !note.important }).where(eq(notes.id, id));
  }
}


export const toggleNoteImportance = async (formData: FormData) => {
  const id = Number(formData.get("id"))
  await toggleImportance(id)
  revalidatePath(`/notes/${id}`)
  revalidatePath("/notes")
}