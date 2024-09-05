import { useState } from "react"

export default function Counter(){
    const [number, setNumber] = useState(0)
    const first = () =>{
        const newNumber = number + 1
        setNumber(newNumber)
    }
    const second = () =>{
        const minus = number - 1
        setNumber(minus )
    }
    return(
        <div>
            <h1>Counter : {number}</h1>
            <button onMouseEnter={first}>Add</button>
            <button onMouseEnter={second}>Remove</button>
        </div>
    )
}