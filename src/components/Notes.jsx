import React from 'react'

const Notes = (prop) => {
    const { date,ondelete,task } = prop;
   
    return (
        <>

            <div className="p-4">
                <div className="grid-notes rounded d-flex flex-column justify-content-between" style={{ backgroundColor:'white' }}>
                    <p className="info">{task}</p>
                    <div className="bottom-icons d-flex justify-content-between">
                        <div className="date">{date}</div>
                        <div className="icon-delete" onClick={ondelete}><i className="fa-solid fa-xmark"></i></div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Notes