const express = require('express');
const path = require('path');
const app = express();

// Set the port from the environment variable (AWS Elastic Beanstalk uses process.env.PORT)
// Default to 8080 if not set.
const PORT = process.env.PORT || 8080;

// Serve static files from the current directory
app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
