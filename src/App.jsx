import { useState } from "react"
import Popup from "./Components/Popup"


function App() {

let [show,setShow]=useState(false)
let handleTogmo=()=>{
  setShow(true);
}
let close=()=>{
  setShow(false)
}
  return (
    <>

    <div className="w-screen h-screen  flex justify-center items-center">

    {!show?<button onClick={handleTogmo} className="border-2 px-5 py-3 bg-purple-600 fixed text-white border-black ">open model</button>:null}
    {show?<Popup onCl={close}/>:null}
    </div>
    </>
  )
}

export default App
