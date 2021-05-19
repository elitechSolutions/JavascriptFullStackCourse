import { useState } from 'react';
import Fruit from './components/Fruit'
import { TextField, Button, Grid } from '@material-ui/core';

function App() {
  const [fruits, setFruits] = useState([
    { name: 'apple', color: 'red' },
    { name: 'banana', color: 'yellow' },
    { name: 'pear', color: 'green' },
    { name: 'pineapple', color: 'brown' }]
  )
  const [newFruitName, setNewFruitName] = useState('');
  const [newFruitColor, setNewFruitColor] = useState('');

  const addFruit = () => {
    fruits.push({ name: newFruitName, color: newFruitColor });
    setFruits([...fruits]);
    setNewFruitColor('');
    setNewFruitName('');
  }

  const removeFruit = (fruitId) => {
    fruits.splice(fruitId, 1)
    setFruits([...fruits]);
  }

  return (
    <div style={{ background: '#D0D0D0', height: '100vh', paddingTop: '1em' }}>
      {
        fruits.map((fruit, id) =>
          <Fruit color={fruit.color} name={fruit.name} onFruitDelete={() => { removeFruit(id) }} />
        )
      }
      <Grid container spacing={3} style={{ width: '50vw', paddingLeft: '10em' }}>
        <Grid item xs={4}>
          <TextField variant="outlined" label="name" onChange={(e) => { setNewFruitName(e.target.value); }} value={newFruitName} />
        </Grid>
        <Grid item xs={4}>
          <TextField variant="outlined" label="name" onChange={(e) => { setNewFruitColor(e.target.value); }} value={newFruitColor} />
        </Grid>
        <Grid item xs={4}>
          <Button variant="contained" color='secondary' onClick={addFruit}>+ add fruit</Button>
        </Grid>
      </Grid>

    </div>
  );
}

export default App;
