import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Review from "../components/Review.jsx"
import Card from "../components/Card.jsx"

function App() {
  const [count, setCount] = useState(0);
  const Info ={
    name:'Ekam',
    age:24
  }
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">Tailwind test</h1>
      <Review username="Sarah Dayan" />
       <Card Tutorial="ChaiAurReact" userObject={Info}/>
       <Card Tutorial="ChaiAurCode" userObject={Info} btnText='Visit me'/>
    </>
  );
}
export default App;
