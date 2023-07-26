import React from 'react'

const Notes = (prop) => {
    const { date, color } = prop;
    //  document.querySelector('.grid-notes').style.backgroundColor="black"
    //  const formattedDate = date ? date.toLocaleString() : '';
    return (
        <>

            <div className="p-4">
                <div className="grid-notes rounded d-flex flex-column justify-content-between" style={{ backgroundColor: prop.color }}>
                    <p className="info">{prop.task}</p>
                    <div className="bottom-icons d-flex justify-content-between">
                        <div className="date">{date}</div>
                        <div className="icon-delete"><i class="fa-solid fa-xmark"></i></div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Notes