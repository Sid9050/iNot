import React,{useContext} from 'react'
import NoteContext from '../context/NoteContext';


const NoteItem = (props) => {
    const { notes,updateNote } = props;
    const context = useContext(NoteContext)
    const {deleteNote}=context

    return (
        <div className='col-md-3'>
            <div className="card my-3">
                    <div className="card-body">
                        <h5 className="card-title">{notes.title}</h5>
                        <p className="card-text">{notes.description}</p>
                        <i className="fa-solid fa-trash mx-2" onClick={()=>{deleteNote(notes._id);props.showAlert("Updated successfully","success")}}></i>
                        <i className="fa-solid fa-file-pen mx-2" onClick={()=>{updateNote(notes);props.showAlert("Updated successfully","success")}}></i>
                    </div>
            </div>
        </div>
    )
}

export default NoteItem