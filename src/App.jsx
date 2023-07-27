import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import "./App.css"
let global_id = 0;
import Notes from './components/Notes'
const App = () => {

  const [val, setval] = useState('');
  const [white, setwhite] = useState('white');
  const [list, setlist] = useState([

  ])
  //Date 
  const getdate = () => {
    let d = new Date();
    return d.toLocaleString()
  }
  //Delete
  const deleteNote = (id) => {
    setlist((previtem) => previtem.filter((item) => item.id !== id));
    console.log("Delete")
  }
  //Adding a Note
  const addNote = () => {
    if (val.trim() != '') {
      const newNote = {
        info: val,
        id: uuidv4(),
        date: getdate()
      };
      setlist([...list, newNote]);
      setval('');
      console.log(newNote.id);
    }
  }
  //Dark Theme
  const dark = () => {
    const body = document.body;
    if (body.style.backgroundColor == "white") {
      body.style.backgroundColor = "black"
      setwhite('white');
    }
    else
      body.style.backgroundColor = "white"
  }
  const note = document.querySelector(".grid-notes");




  return (
    <>
      <div className="container-fluid">
        {/* input  */}
        <div className="p-4">
          <div className="input-group flex-nowrap">
            <span className="input-group-text bg-black text-light" id="addon-wrapping"><i className="fa-solid fa-note-sticky"></i></span>
            <input type="text" value={val} onChange={(e) => setval(e.target.value)} className="form-control" placeholder="Add Note" aria-label="Username" aria-describedby="addon-wrapping" />
            <button onClick={addNote} className="btn btn-dark" type="button" id="button-addon2">Add Note</button>
            <button className="btn btn-dark mx-1" onClick={dark}>Dark Theme</button>
          </div>
          <div className="container-fluid p-1 pt-3 d-flex justify-content-evenly">
          </div>
        </div>
        <div>
          <div className="note-container"> {list.map((item) => {
            return (<>
              <Notes key={item.id} color={white} task={item.info} date={item.date} ondelete={() => { deleteNote(item.id) }} />
            </>
            )
          })}</div>
        </div>
      </div>
    </>
  )
}

export default App