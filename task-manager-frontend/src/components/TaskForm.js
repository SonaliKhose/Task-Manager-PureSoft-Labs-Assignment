import React, { useState, useEffect } from 'react';

const TaskForm = ({ onTaskAdded, editingTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');

  useEffect(() => {
    if (editingTask) {
      // Populate fields with the task data when editing
      setTitle(editingTask.title);
      setDescription(editingTask.description);
      setDueDate(editingTask.due_date);
    }
  }, [editingTask]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedTask = {
      title,
      description,
      due_date: dueDate,
      id: editingTask?.id, // Include the ID when editing
    };
    await onTaskAdded(updatedTask);
    setTitle('');
    setDescription('');
    setDueDate('');
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white shadow rounded">
      <div className="mb-4">
        <label className="block text-sm font-medium">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium">Due Date</label>
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      <button
        type="submit"
        className={`px-4 py-2 rounded ${
          editingTask ? 'bg-green-500' : 'bg-blue-500'
        } text-white`}
      >
        {editingTask ? 'Update Task' : 'Add Task'}
      </button>
    </form>
  );
};

export default TaskForm;
