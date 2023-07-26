import React, { useState } from 'react'
let global_id = 0;
import "./App.css"
import Notes from './components/Notes'
const App = () => {

  const [val, setval] = useState('');
  const [color, setcolor] = useState('');
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
        id: ++global_id,
        date: getdate()
      };
      setlist([...list, newNote]);
      setval('');
    }
  }




  return (
    <>
      <div className="container-fluid">
        {/* input  */}
        <div className="p-4">
          <div className="input-group flex-nowrap">
            <span className="input-group-text bg-black text-light" id="addon-wrapping"><i class="fa-solid fa-note-sticky"></i></span>
            <input type="text" value={val} onChange={(e) => setval(e.target.value)} className="form-control" placeholder="Add Note" aria-label="Username" aria-describedby="addon-wrapping" />
            <button onClick={addNote} className="btn btn-dark" type="button" id="button-addon2">Add Note</button>

          </div>
          <div className="container-fluid p-1 pt-3 d-flex justify-content-evenly">
          </div>
        </div>
        <div>
          <div className="note-container"> {list.map((item) => {
            return (<>
              <Notes key={item.id} color={color} task={item.info} date={item.date}  ondelete={()=>{deleteNote(item.id)}}/>
            </>
            )
          })}</div>
        </div>
      </div>
    </>
  )
}

export default App