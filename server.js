const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('<h>This is a backend Server for Sending Hello Around the World</h>'))

// set port, listen for requests
const PORT = process.env.PORT || 80;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});