import React, { useContext, useState } from 'react'
import noteContext from '../context/notes/noteContext';

const Addnotes = (props) => {
    const context = useContext(noteContext);
    const {addNote} = context;
    const [note, setNote] = useState({title:"", description:"", tag:""})
    const addbtn =(e)=>{
        e.preventDefault();
       addNote(note.title, note.description, note.tag);
       setNote({title:"", description:"", tag:""})
       props.showAlert("Note Added Successfully","success")
    }
    const onChange = (e)=>{
      setNote({...note, [e.target.name]: e.target.value})
    }
  return (
    <div className="container my-5">
    <h2>Add notes</h2>
    <form>
  <div className="mb-3 my-3">
    <label htmlFor="title" className="form-label">
      Title
    </label>
    <input
      type="text"
      className="form-control"
      id="title"
      name="title"
      aria-describedby="emailHelp"
      onChange={onChange}
      minLength={5}
      required
      value={note.title}
    />
    <div id="emailHelp" className="form-text">
      Add a title to remember your note content.
    </div>
  </div>
  <div className="mb-3">
    <label htmlFor="description" className="form-label">
      Description
    </label>
    <input
      type="text"
      className="form-control"
      id="description"
      name="description"
      onChange={onChange}
      minLength={5}
      required
      value={note.description}
      />
  </div>
  <div className="mb-3">
    <label htmlFor="tag" className="form-label">
      Tag
    </label>
    <input
      type="text"
      className="form-control"
      id="tag"
      name="tag"
      onChange={onChange}
      minLength={3}
      required
      value={note.tag}
      />
      <div id="emailHelp" className="form-text">
      Tag will help you to categories your note.
    </div>
  </div>
  
 
  <button type="submit" className="btn btn-primary" onClick={addbtn} disabled={note.title.length<5 || note.description.length<5}>
    Add Note
  </button>
</form>
</div>
  )
}

export default Addnotes