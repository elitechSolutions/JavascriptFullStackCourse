import './App.css';
import { useEffect, useState } from 'react';

function App() {
  let [myNumber, setMyNumber] = useState(3);

  const incrementNumber = () => {
    myNumber = myNumber + 2
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



