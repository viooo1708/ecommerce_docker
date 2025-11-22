const express = require('express');
const cors = require('cors');
const app = express();

// Aktifkan CORS agar Flutter bisa akses
app.use(cors());
app.use(express.json());

// Dummy data pengguna
let users = [
  { id: 1, name: "Alice", email: "alice@example.com", role: "customer" },
  { id: 2, name: "Bob", email: "bob@example.com", role: "seller" },
  { id: 3, name: "Charlie", email: "charlie@example.com", role: "admin" }
];

// Root endpoint
app.get('/', (req, res) => {
  res.send('User Service is running!');
});

// GET semua user
app.get('/users', (req, res) => {
  res.json(users);
});

// GET detail user berdasarkan ID
app.get('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find(u => u.id === userId);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

// POST tambah user baru
app.post('/users', (req, res) => {
  const { name, email, role } = req.body;
  if (!name || !email || !role) {
    return res.status(400).json({ message: 'Name, email, and role are required' });
  }

  const newUser = {
    id: users.length + 1,
    name,
    email,
    role
  };

  users.push(newUser);
  res.status(201).json(newUser);
});

// Jalankan server di port 4000
const PORT = process.env.PORT || 4000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`User Service is running on port ${PORT}`);
});
