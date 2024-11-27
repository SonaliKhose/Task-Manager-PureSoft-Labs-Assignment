const express = require('express');
const router = express.Router();
const db = require('./database');

// Create a new task
router.post('/tasks', (req, res) => {
  const { title, description, due_date, status } = req.body;
  db.run(
    `INSERT INTO tasks (title, description, due_date, status) VALUES (?, ?, ?, ?)`,
    [title, description, due_date, status || 'Pending'],
    function (err) {
      if (err) return res.status(500).send(err.message);
      res.status(201).json({ id: this.lastID });
    }
  );
});

// Get all tasks
router.get('/tasks', (req, res) => {
  db.all(`SELECT * FROM tasks`, [], (err, rows) => {
    if (err) return res.status(500).send(err.message);
    res.json(rows);
  });
});

// Update a task
router.put('/tasks/:id', (req, res) => {
  const { title, description, due_date, status } = req.body;
  db.run(
    `UPDATE tasks SET title = ?, description = ?, due_date = ?, status = ? WHERE id = ?`,
    [title, description, due_date, status, req.params.id],
    function (err) {
      if (err) return res.status(500).send(err.message);
      res.json({ updated: this.changes });
    }
  );
});

// Delete a task
router.delete('/tasks/:id', (req, res) => {
  db.run(`DELETE FROM tasks WHERE id = ?`, req.params.id, function (err) {
    if (err) return res.status(500).send(err.message);
    res.json({ deleted: this.changes });
  });
});

module.exports = router;
