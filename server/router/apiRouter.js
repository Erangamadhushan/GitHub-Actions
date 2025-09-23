const express = require('express');
const app = express();
const port = 3000;
const User = require('../models/UserModel');

const router = express.Router();

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
