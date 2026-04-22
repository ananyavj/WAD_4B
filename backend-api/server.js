const express = require('express');
const cors = require('cors');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Dummy Database (In-Memory)
let users = [
  { id: 1, name: 'Alice Smith', email: 'alice@example.com', role: 'Admin' },
  { id: 2, name: 'Bob Jones', email: 'bob@example.com', role: 'User' },
  { id: 3, name: 'Charlie Brown', email: 'charlie@example.com', role: 'Editor' }
];

// GET: Fetch all users
app.get('/api/users', (req, res) => {
  res.json(users);
});

// GET: Health check endpoint (useful for Render)
app.get('/', (req, res) => {
  res.send('Backend API is running successfully!');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
