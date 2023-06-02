const express = require('express');
const app = express();
var cors = require('cors');

// Middleware to parse JSON
app.use(express.json());
app.use(cors());

const data = [
    {
        "id": 1,
        "name": "aaa",
        "age": 66,
        "isActive": 1
    },
    {
        "id": 2,
        "name": "bbb",
        "age": 77,
        "isActive": 0
    },
    {
        "id": 3,
        "name": "ccc",
        "age":778,
        "isActive": 0
    },
    {
        "id": 5,
        "name": "eee",
        "age": 99,
        "isActive": 1
    },
    {
        "id": 6,
        "name": "ddd",
        "age": 100,
        "isActive": 1
    }
]

// Data storage
let data1 = [];

// GET route
app.get('/api/data', (req, res) => {
    res.json(data);
  });

  // GET item by id
app.get('/api/data/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = data.findIndex(item => item.id === id);
    if (index !== -1) {
      res.json(data[index]);
    } else {
      res.status(404).json({ error: 'Item not found' });
    }
  });

// POST route
app.post('/api/data', (req, res) => {
  const newItem = req.body;
  data.push(newItem);
  res.status(201).json(newItem);
});

// PUT route
app.put('/api/data/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const updatedItem = req.body;

  // Find the item by id and update it
  const index = data.findIndex(item => item.id === id);
  if (index !== -1) {
    data[index] = { ...data[index], ...updatedItem };
    res.json(data[index]);
  } else {
    res.status(404).json({ error: 'Item not found' });
  }
});

// DELETE route
app.delete('/api/data/:id', (req, res) => {
  const id = parseInt(req.params.id);

  // Find the item by id and remove it
  const index = data.findIndex(item => item.id === id);
  if (index !== -1) {
    const deletedItem = data[index];
    data.splice(index, 1);
    res.json(deletedItem);
  } else {
    res.status(404).json({ error: 'Item not found' });
  }
});

// Start the server
const port = 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// GET http://localhost:3001/api/data/1

// POST http://localhost:3001/api/data/1
// {
//     "id": 1,
//     "name": "bbbbbbbbb",
//     "age": 88,
//     "isActive": 1
// }

// PUT http://localhost:3001/api/data/1
// {
//     "name": "bbbbbbbbb",
//     "age": 88,
//     "isActive": 1
// }

// DELETE http://localhost:3001/api/data/1 

