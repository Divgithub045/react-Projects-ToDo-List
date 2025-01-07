import React,{useState} from "react"
import './App.css'
function App() {
  const [count,setCount]=useState(0);
  console.log("Hi from App");
  return (
   
    <>
    <h1>Simple Counter <br /> <hr /></h1>
    <div className="main">
    <h2>{count}</h2>
    <button onClick={()=>{setCount(count+1)}}>+</button>
    <button onClick={()=>{
      if (count>0) {
      setCount(count-1)
    }}}>-</button>
    <button onClick={()=>{setCount(0)}}>0</button>
    </div>
    </>
  )
}

export default App
