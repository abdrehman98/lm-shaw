const express = require('express')
const app = express()
const port = 3000

let data ={
    message = "Default"
}
var newMessage = false

//Root Page
app.get('/', (req, res) => res.send('<h>This is a backend Server for Sending Hello Around the World</h>'))

//Setter
app.get('/set', (req, res) => {
    data.message = req.query.message
    newMessage = true
    res.send("Sent")
});

//getter
app.get('/get', (req, res) => {
    res.send(data.message)
    if(newMessage){
        newMessage = false
        data.message = "Default"
    }
});

// set port, listen for requests
const PORT = process.env.PORT || 80;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});