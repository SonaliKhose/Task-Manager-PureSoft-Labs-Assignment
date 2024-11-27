import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const TaskList = ({ tasks, onDelete, onUpdate }) => {
  return (
    <div className="mt-6">
      {tasks.map((task) => (
        <div
          key={task.id}
          className="p-4 mb-2 bg-gray-100 rounded shadow flex justify-between items-center"
        >
          <div>
            <h3 className="text-lg font-semibold">{task.title}</h3>
            <p>{task.description}</p>
            <p className="text-sm text-gray-500">{task.due_date}</p>
            <p className="text-sm text-gray-500">Status: {task.status}</p>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={() => onUpdate(task)}
              className="text-blue-500 hover:text-blue-700"
            >
              <FaEdit />
            </button>
            <button
              onClick={() => onDelete(task.id)}
              className="text-red-500 hover:text-red-700"
            >
              <FaTrash />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
