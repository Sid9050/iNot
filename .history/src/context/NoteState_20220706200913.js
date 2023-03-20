import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState=(props)=>{
    const notesInitial=[
        {
            "_id": "62b700d7cb3f2d8d094c178a6",
            "user": "62b5cafaa35626de62e91cea",
            "title": "First note",
            "description": "WAke early",
            "tag": "personal",
            "date": "2022-06-25T12:34:31.142Z",
            "__v": 0
          },
          {
            "_id": "62b701a543388c1be4042b6d5",
            "user": "62b5cafaa35626de62e91cea",
            "title": "First note2",
            "description": "WAke early",
            "tag": "personal",
            "date": "2022-06-25T12:37:57.121Z",
            "__v": 0
          },
          {
            "_id": "62b700d7cb3f2d8d094c178a4",
            "user": "62b5cafaa35626de62e91cea",
            "title": "First note",
            "description": "WAke early",
            "tag": "personal",
            "date": "2022-06-25T12:34:31.142Z",
            "__v": 0
          },
          {
            "_id": "62b701a543388c1be4042b6d3",
            "user": "62b5cafaa35626de62e91cea",
            "title": "First note2",
            "description": "WAke early",
            "tag": "personal",
            "date": "2022-06-25T12:37:57.121Z",
            "__v": 0
          },{
            "_id": "62b700d7cb3f2d8d094c178a2",
            "user": "62b5cafaa35626de62e91cea",
            "title": "First note",
            "description": "WAke early",
            "tag": "personal",
            "date": "2022-06-25T12:34:31.142Z",
            "__v": 0
          },
          {
            "_id": "62b701a543388c1be4042b6d1",
            "user": "62b5cafaa35626de62e91cea",
            "title": "First note2",
            "description": "WAke early",
            "tag": "personal",
            "date": "2022-06-25T12:37:57.121Z",
            "__v": 0
          }
        ]
    const [notes, setNotes] = useState(notesInitial)

    //Add Note
    const addNote=()=>
    return(
        <NoteContext.Provider value={{notes,setNotes}}>
            {props.children}
        </NoteContext.Provider>

    )
}

export default NoteState