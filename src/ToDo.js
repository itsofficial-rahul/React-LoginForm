import React, { useState } from "react"
function ToDo() {
    const [data, setdata] = useState()
    const [item, setitem] = useState([])
    const [date, setdate] = useState()
    function Sub() {
        setitem((olditem) => {
            return [...olditem, data]

        })
        setdata("")

    }
    function DeletItem(id) {
        console.log("deleted", id)
        setitem((olditem) => {
            return olditem.filter((arre, index) => {
                return index != id;
            })
        })
    }
    return (
        <div>
            <input type="text" value={data} onChange={(e) => setdata(e.target.value)}></input>
            <input type="date" value={date} name="date" onChange={(e) => setdate(e.target.value)}></input>
            <button onClick={() => Sub()}>add</button>
            {
                item.map((items, index) => {
                    return (
                        <div>
                            {index + 1}.&nbsp;&nbsp;
                            {items}&nbsp;&nbsp;&nbsp;&nbsp;
                            <button onClick={() => DeletItem(index)}>delet</button>
                            &nbsp;&nbsp;&nbsp;&nbsp; <input type="date" name="date" value={date}></input>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default ToDo;