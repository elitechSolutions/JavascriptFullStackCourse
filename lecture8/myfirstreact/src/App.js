import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [myNumber, setMyNumber] = useState(0);

  useEffect(() => {
    console.log("This happens once, when the component is mounted");
    setMyNumber(10);
  }, [])

  useEffect(() => {
    console.log("This happens every time 'myNumber' is modified")
  }, [myNumber])

  const incrementNumber = () => {
    setMyNumber(myNumber + 1);
  }

  return (
    <div>
      <h1>My first react app</h1>
      <p>Number is {myNumber}</p>
      <button onClick={incrementNumber} >
        add 1
      </button >
    </div>
  );
}

export default App;
