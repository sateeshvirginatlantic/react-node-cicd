import { useEffect, useState } from "react";

function App() {

  const [message,setMessage] = useState("");

  useEffect(()=>{

    fetch("http://backend:5000/api")
    .then(res => res.json())
    .then(data => setMessage(data.message))

  },[])

  return (

    <div style={{textAlign:"center"}}>

      <h1>React + Node CI/CD Demo</h1>

      <p>{message}</p>

    </div>

  )

}

export default App;