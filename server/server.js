const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.json({status: 'OK', message: new Date().toISOString() });
});

app.get('/health', (req, res) => {
    res.json({status: 'OK', message: 'Server is healthy'});
});

app.get('/api/users', (req, res) => {
    res.json({
        users: [
            'alice',
            'Bob',
            'Charlie',
            'John',
            'Jane'
        ]
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});