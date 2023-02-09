const express = require('express');

const app = express();

app.use(express.json())

// check if server is responding to our request
app.get('/', (req, res) => res.send('Welcome to the server'));

// mount the specified middleware function at the path which is being specified
const encryption = require('./routes/encryption');
app.use('/encryption', encryption);

const PORT = process.env.PORT || 8081;

// start server and listen on port 8081 for connections
app.listen(PORT, async() => {
    console.log('Server up on http://localhost:8081');
})

