import Link from "next/link";
import { getNotes } from "../services/notes";

 


async function NotesPage() {
    const notes = await getNotes()
    return (
        <div className="container max-h-full m-auto">
            <h1 className="text-3xl underline  mb-10">All Notes</h1>
            <ul>
                {notes.length>0 &&
                notes.map((note)=>(
                     
                    <li className=" " key={note.id}>
                        {note.content} {note.important && <strong>(Important)</strong>}
                        <Link key={note.id} href={`/notes/${note.id}`}>Details</Link>
                    </li>
                ))
                }
            </ul>
            
            
            
        </div>
    );
}

export default NotesPage;