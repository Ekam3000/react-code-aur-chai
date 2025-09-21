import { useState } from 'react'
function App() {
const username ='Ekam'
const [counter, setCounter] = useState(5)
//let counter = 5 // not const as we need to change it

/*
const [counter, setCounter] = useState(5)
 setCounter(counter+1);

 or
 let [counter, setCounter] = useState(5)
  counter = counter+1;
  setCounter(counter);
*/
const addValue = () =>{
  console.log("value added "+Math.random());
  //counter = counter+1;
  setCounter(counter+1);

  // check both of these cases
  /*
  setCounter(counter+1);
  setCounter(counter+1);
  setCounter(counter+1);
  */
  
  /*
  setCounter((prevCounter)=>prevCounter+1);
  setCounter((prevCounter)=>prevCounter+1);
  setCounter((prevCounter)=>prevCounter+1);
  */

  
}
const subtractValue = () =>{
  console.log("value removed "+Math.random());
  //counter = counter+1;
  setCounter(counter-1);
}
  return (
    <>
      <h1>Hello react + vite with {username}</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <p>Counter Becomes:{counter}</p>
      <br /> <br />
      <button onClick={subtractValue}>Subtract value</button>
      <p>Counter Becomes:{counter}</p>
    </>
  )
}

export default App
