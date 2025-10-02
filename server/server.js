const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const connectDB = require('./config/connection');
const apiRouter = require('./router/apiRouter');
const User = require('./models/UserModel');

// Connect to MongoDB
connectDB();
const app = express();
const port = 3000;

app.use('/api', apiRouter);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    service: 'github-actions-server'
  });
});

const userDataDir = path.join(__dirname, 'data');
if (!fs.existsSync(userDataDir)) {
  fs.mkdirSync(userDataDir);
}

const userDataFile = path.join(userDataDir, 'users.json');

// Initialize users.json if it doesn't exist
if (!fs.existsSync(userDataFile)) {
  fs.writeFileSync(userDataFile, JSON.stringify([]));
}

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});