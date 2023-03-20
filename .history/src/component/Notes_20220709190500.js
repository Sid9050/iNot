import React, { useContext, useEffect, useRef,useState } from 'react'
import NoteContext from '../context/NoteContext'
import AddNote from './AddNote'
import NoteItem from './NoteItem'

export const Notes = (props) => {
    const context = useContext(NoteContext)
    const { notes, getNotes,editNote } = context
    useEffect(() => {
        getNotes()
        //eslint-disable-next-line
    }, [])

    const ref = useRef(null)
    const refClose=useRef(null)
    const [note, setNote] = useState({id:"",etitle:"",edescription:"",etag:""})


    const updateNote = (currentNote) => {
        ref.current.click()
        setNote({id:currentNote._id, etitle:currentNote.title,edescription:currentNote.description,etag:currentNote.tag})
        props.showAlert("Updated successfully")
    }
    
    const onChange=(e)=>{
        setNote({...note,[e.target.name]:e.target.value})
    }

    const handleClick=(e)=>{
        e.preventDefault();
        editNote(note.id,note.etitle,note.edescription,note.etag)
        refClose.current.click()
    }

    return (
        <>
            <AddNote />
            <button type="button" ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">Title</label>
                                    <input type="text" className="form-control" id="title" name='etitle'  min={5} required value={note.etitle} onChange={onChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">Description</label>
                                    <input type="text" className="form-control" id="description" name="edescription" value={note.edescription}  min={5} required onChange={onChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="tag" className="form-label">Tag</label>
                                    <input type="text" className="form-control" id="tag" name="etag" value={note.etag} onChange={onChange} />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" ref={refClose} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button disabled={note.etitle.length<3||note.edescription.length<5} type="button" className="btn btn-primary" onClick={handleClick}>Update Note</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='row my-3'>
                
                <h2>Your Notes</h2>
                <div className='container mx-2'>
                    {notes.length===0 && "There are no Notes to display"}
                </div>
                {notes.map((notes) => {
                    return <NoteItem key={notes._id} updateNote={updateNote} notes={notes} />
                })}
            </div>
        </>
    )
}
