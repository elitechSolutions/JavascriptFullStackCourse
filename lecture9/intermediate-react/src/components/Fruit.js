import { useState } from 'react';
import { Paper, Button, Chip, Badge } from '@material-ui/core';

function Fruit(props) {
  return (
    <Paper style={{ margin: '1em', padding: '1em' }}>
      <div>
        <Badge badgeContent={props.color} color='secondary'>
          <Chip label={props.name} style={{ marginBottom: '0.5em' }} />
        </Badge>
      </div>
      <Button variant='contained' color='primary' onClick={props.onFruitDelete}>delete</Button>
    </Paper>
  );
}

export default Fruit;
