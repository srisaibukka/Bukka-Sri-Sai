
const express = require('express');
const app = express();

// Home Route
app.get('/', (req, res) => {
    res.status(200).send('Welcome to my Express Server!');
});

// About Route
app.get('/about', (req, res) => {
    res.status(200).json({
        name: 'Sri Sai',
        section: 'Your Section'
    });
});

// Time Route
app.get('/time', (req, res) => {
    res.status(200).json({
        currentTime: new Date().toString()
    });
});

// 404 Route
app.use((req, res) => {
    res.status(404).send('404 - Page Not Found');
});


 // Start Server
const PORT = process.env.PORT || 3000;

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Express Server running on port ${PORT}`);
});
