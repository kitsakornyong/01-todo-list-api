const express = require('express');
const app = express();
app.use(express.json());

app.get('/todos', (req, res) => {
    res.json([{ id: 1, task: 'Learn Node.js', completed: false }]);
});

app.post('/todos', (req, res) => {
    const todo = { id: Date.now(), ...req.body }; res.status(201).json(todo);
});

app.delete('/todos/:id', (req, res) => {
    res.json({ message: `Todo ${req.params.id} deleted` });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
