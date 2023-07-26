import React, { useState } from 'react'
let global_id = 0;
import "./App.css"
import Notes from './components/Notes'
const App = () => {

  const [val, setval] = useState('');
  const [color, setcolor] = useState('');
  const [list, setlist] = useState([

  ])
  const getdate = () => {
    let d = new Date();
    return d.toLocaleString()
  }
 
  //Adding a Note
  const addNote = () => {
    if (val.trim() != '') {
      const newNote = {
        info: val,
        id: global_id++,
        date: getdate()
      };
      setlist([...list, newNote]);
      setval('');
      // setcolor('');
    }
  }
  const darkMode=()=>{
    const body=document.body;
    const note=document.querySelector('.grid-notes');
    const darkbutton=document.querySelector(".darkbtn");
   if(body.style.backgroundColor=="black"&& darkbutton.innerText=="White Mode")
   {
    body.style.backgroundColor="white";
    darkbutton.innerText="Dark Mode"
    
   }
  else{
    body.style.backgroundColor="black";
     darkbutton.innerText="White Mode"
   }
  }
  return (
    <>
      <div className="container-fluid">
        {/* input  */}
        <div className="p-4">
          <div className="input-group flex-nowrap">
            <span className="input-group-text" id="addon-wrapping"><i class="fa-solid fa-note-sticky"></i></span>
            <input type="text" value={val} onChange={(e) => setval(e.target.value)} className="form-control" placeholder="Add Note" aria-label="Username" aria-describedby="addon-wrapping" />
            <button onClick={addNote} className="btn btn-outline-secondary" type="button" id="button-addon2">Add Note</button>

          </div>
          <div className="container-fluid p-1 pt-3 d-flex justify-content-evenly">
           {/* <button className="btn btn-dark darkbtn" onClick={darkMode}>Dark Mode</button>          */}
          </div>
        </div>
        <div>
          <div className="note-container"> {list.map((item) => {
            return (<>
              <Notes key={item.id} color={color}task={item.info} date={item.date} />
            </>
            )
          })}</div>
        </div>
      </div>
    </>
  )
}

export default App