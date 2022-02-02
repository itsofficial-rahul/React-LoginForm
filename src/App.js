
import './App.css';
import { useState } from 'react';
function App() {
  const [name, setname] = useState("")
  const [pass, setpass] = useState("")
  function Reset() {
    setname("")
    setpass("")
  }
  function submit() {
    if (name.length <5) {
      alert("lengh of name should be grtter then 5 ")
      setname("")
      setpass("")
    }
    else if (pass.length < 5) {
      alert("length of pass should be grtter then 5 ")
      setname("")
      setpass("")
    }
    else {
      console.log(name, pass)
      setname("")
      setpass("")
    }
  }
  return (
    <div className='iinput'>
      <div id="h">
        <h2 >Log in Form</h2>
        <hr style={{ width: "2px" }} />
      </div>
      <input id='in1' type="text" value={name} placeholder='Enter name' onChange={(e) => setname(e.target.value)}></input>
      <div>
        <br></br>
        <input id='in1' type="text" value={pass} placeholder='Enter password' onChange={(e) => setpass(e.target.value)}></input>
      </div>
      <button id='btn1' onClick={() => submit()}>submit</button>
      <button id='btn2' onClick={() => Reset()}>reset</button>
    </div>
  )
}
export default App;
