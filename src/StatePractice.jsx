import { useEffect } from "react";
import { useState } from "react"
import PracticeOne from "./PracticeOne";

export default function StatePractice(){
    const [data, setData] = useState([]);
    
    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setData(data))
    }, [])
    return(
        <div>
            {
                data.map(single => <PracticeOne name={single.name} address={single.address.street}></PracticeOne>)
            }
        </div>
    )
}