import { useEffect, useState } from 'react'
import './MyStyle.css'
import FriendsTwo from './FriendsTwo'
export default function Friends(){
    const [data, setData] = useState([])
    
        useEffect(() =>{
            fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(data => setData(data))
        }, [])
    return (
        <div className='add'>
            {
                data.map(single => <FriendsTwo name ="single.name" address = "single.address.street"></FriendsTwo>)
            }
        </div>
    )
}