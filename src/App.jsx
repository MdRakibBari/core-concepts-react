import './App.css'
import StatePractice from './StatePractice'
import UseEffect from './useEffect'
import Friends from './Friends'

function App() {

  const employee =[
    {name: "Faruk", age: 45},
    {name: "Sihab", age: 39}
  ]
   return (
    <>
      <h2>React Core Concepts Part 2</h2>
      <Friends></Friends>
      {/* <StatePractice></StatePractice> */}
      {/* <UseEffect></UseEffect> */}
    </>
  )
}

export default App
