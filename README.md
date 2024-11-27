Task Management System
A simple Task Management System built with Node.js, SQLite, and React. It allows users to perform basic CRUD operations (Create, Read, Update, Delete) on tasks. It also includes the ability to toggle the status of tasks between "Pending" and "Completed."

Features
Create new tasks with title, description, due date, and status.
View all tasks with their details and current status.
Update task details (title, description, due date, and status).
Delete tasks.
Toggle task status between "Pending" and "Completed."
Tech Stack
Backend: Node.js, Express.js, SQLite
Frontend: React, Tailwind CSS
Installation
Clone the repository:

git clone <repository-url>
cd <project-folder>
Backend:

Install dependencies:

cd backend
npm install
Start the server:

npm start
Frontend:

Install dependencies:

cd frontend
npm install
Start the React development server:

npm start
API Endpoints
GET /tasks: Retrieve all tasks.
POST /tasks: Create a new task.
PUT /tasks/:id: Update an existing task.
DELETE /tasks/:id: Delete a task.
PUT /tasks/:id/status: Toggle task status (Pending ↔ Completed).
