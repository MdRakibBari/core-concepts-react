export default function UseEffect(){
    function eventAdding(){
        setTimeout(() =>{
            alert("Too Late Right")
        }, 5000)
    }
    
    return(
        <div>
            <button onClick={eventAdding}>Click Here</button>
        </div>
    )
}