const express = require('express');
const http = require('http');
const path = require('path');
const fs = require('fs');
const cors = require('cors');

const app = express();

const PORT = process.env.PORT || 3000;

// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to parse JSON bodies
app.use(express.json());


app.use(cors());
// Middleware to handle CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // Allow all origins
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'); // Allow specific methods
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Allow specific headers
    next();
});

// Route to serve the index.html file
app.get('/contact', (req, res) => { 
    res.sendFile(path.join(__dirname, 'src', 'index.html'));
});
app.get('/', (req, res) => {

    res.send('<h1>Welcome to the GitHub Actions Server</h1><p>Use /contact to access the contact page.</p>');
})

app.listen(PORT, () => {
    console.log(`Server is runningon http://localhost:${PORT}`);
})

