import React, { useEffect, useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import API from './api';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null); // New state for editing

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const { data } = await API.get('/tasks');
    setTasks(data);
  };

  const addTask = async (task) => {
    if (editingTask) {
      // Update the task if editing
      await API.put(`/tasks/${editingTask.id}`, task);
      setEditingTask(null); // Reset editing state
    } else {
      // Add a new task
      await API.post('/tasks', task);
    }
    fetchTasks();
  };

  const updateTask = (task) => {
    setEditingTask(task); // Set the task to be edited
  };

  const deleteTask = async (id) => {
    await API.delete(`/tasks/${id}`);
    fetchTasks();
  };

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold text-center mb-6">Task Manager</h1>
        <TaskForm onTaskAdded={addTask} editingTask={editingTask} />
        <TaskList tasks={tasks} onDelete={deleteTask} onUpdate={updateTask} />
      </div>
    </div>
  );
};

export default App;
