const express = require('express')
const app = express()
const cors = require('cors');
app.use(cors())
const myList = []
// Returns the full list of elements
app.get('/fruits', (req, res) => {
  res.send(myList);
});

// Adds a new element to the list
app.post('/fruits', (req, res) => {
  const parameters = req.query;
  if (!parameters.name || !parameters.description) {
    res.send({ error: 'Could not add element to list' })
  } else {
    myList.push({ name: parameters.name, description: parameters.description })
    res.send({ message: "Element has been added" })
  }
})

// Deletes an element based on the ID
app.delete('/fruits/:elementId', (req, res) => {
  const elementId = req.params.elementId;
  if (myList[elementId] !== undefined) {
    myList.splice(elementId, 1);
    res.send({ message: "Element has been deleted" })
  } else {
    res.send({ error: "Could not find element with such ID" })
  }

})

app.listen(3000)