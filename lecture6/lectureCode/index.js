let random = require('random-name')
const express = require('express')
const app = express()

fs = require('fs');

console.log('Javascript outside the browser');
console.log('random name of the day : ' + random());



fs.writeFileSync('someData.txt', "My Program wrote this");
const data = fs.readFileSync('someData.txt');
console.log(`File contains : ${data}`)


const someObject = { size: 'XL', color: 'red' };
fs.writeFileSync('someData.json', JSON.stringify(someObject));
const extractedData = fs.readFileSync('someData.json');
const recoveredObject = JSON.parse(extractedData)

app.get('/', function (req, res) {
  res.send({ this: 'is awesome' })
})

app.listen(3000)




/*
fs.writeFile('someData.txt', "My program wrote this", (err) => {
  if (err) {
    console.log("I couldn't write that to the file")
  }
  else {
    console.log("Writing has finished")
  }
});
*/

