import React,{useContext} from 'react'
import NoteContext from '../context/NoteContext'

export const Notes = () => {
    const context = useContext(NoteContext)
    const{notes,setNotes}=context
  return (
    <div className='container my-3'>
      <h2>Your Notes</h2>
        {notes.map((notes)=>{
          
        })}
      </div>
  )
}
