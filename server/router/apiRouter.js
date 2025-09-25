const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const port = 3000;
const User = require('../models/UserModel');

const router = express.Router();

const userDataDir = path.join(__dirname, '..', 'data');
if (!fs.existsSync(userDataDir)) {
  fs.mkdirSync(userDataDir);
}

const userDataFile = path.join(userDataDir, 'users.json');

// Initialize users.json if it doesn't exist
if (!fs.existsSync(userDataFile)) {
  fs.writeFileSync(userDataFile, JSON.stringify([]));
}

const saveUsersToFile = (users) => {
  fs.writeFileSync(userDataFile, JSON.stringify(users, null, 2));
};

const loadUsersFromFile = () => {
  if (fs.existsSync(userDataFile)) {
    const data = fs.readFileSync(userDataFile);
    return JSON.parse(data);
  }
  return [];
};

// Example route
router.get('/', (req, res) => {
  res.json({ message: 'Welcome to the API!' });
});

router.get('/users', (req, res) => {
    User.find({}, { _id:0 }).then(users => {
        res.status(200).json({
            message: 'List of users',
            data: users
        });
    }).catch(err => {
        res.status(500).json({
            message: 'Error fetching users',
            error: err
        });
    });
});

module.exports = router;
