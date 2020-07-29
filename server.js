const express = require('express')
const app = express()
const port = 3000

let data1 ={
    message : "Default",
    check : false
}

let data2 ={
    message : "Default",
    check : false
}


//Root Page
app.get('/', (req, res) => res.send('<h>This is a backend Server for Sending Hello Around the World</h>'))

//Setter for Dev 1
app.get('/set1', (req, res) => {
    data1.message = req.query.message
    data1.check = true
    res.send("Sent")
});

//getter for Dev 1
app.get('/get1', (req, res) => {
    res.send(data1)
    if(data1.check){
        data1.check = false
        data1.message = "Default"
    }
});

//Setter for Dev 2
app.get('/set2', (req, res) => {
    data2.message = req.query.message
    data2.check = true
    res.send("Sent")
});

//getter for Dev 2
app.get('/get2', (req, res) => {
    res.send(data2)
    if(data2.check){
        data2.check = false
        data2.message = "Default"
    }
});

// set port, listen for requests
const PORT = process.env.PORT || 80;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});