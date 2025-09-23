const express = require('express');
const cors = require('cors');
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

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});