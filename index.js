const express = require('express');
const app = express(); // Fixed typo here

app.get('/', (req, res) => {
    console.log("first server");
    
    return res.send("Hello sir, this is the home page");
});

app.get('/about', (req, res) => {
    
    return res.send("Hello sir, this is the About page");
});

// Use app.listen directly
app.listen(8000, () => { // Fixed the port number
    console.log("Server started on port 8000");
});
