const express = require('express')
const app = express()
const cors = require('cors');
app.use(cors())
const myList = []
// Returns the full list of elements
app.get('/list', (req, res) => {
  res.send(myList);
});

// Adds a new element to the list
app.post('/list', (req, res) => {
  const parameters = req.query;
  if (!parameters.title || !parameters.description) {
    res.send({ error: 'Could not add element to list' })
  } else {
    myList.push({ title: parameters.title, description: parameters.description })
  }
  res.send({ message: "Element has been added" })
})

// Deletes an element based on the ID
app.delete('/list/:elementId', (req, res) => {
  const elementId = req.params.elementId;
  if (myList[elementId] !== undefined) {
    myList.splice(elementId, 1);
    res.send({ message: "Element has been deleted" })
  } else {
    res.send({ error: "Could not find element with such ID" })
  }

})

app.listen(3000)