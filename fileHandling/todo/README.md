# Todo CLI App

This is a simple command-line Todo app built with Node.js that lets you add, list, remove, and update tasks saved in a JSON file.

---

## Files

- `todo.js`: Main script containing the todo app logic.
- `tasks.json`: JSON file where tasks are stored.

---

## How to Use

Run the commands from the terminal inside this folder:

### Add a task

```bash
node todo.js add "Your task here"
List all tasks
bash
Copy
Edit
node todo.js list
Remove a task by ID or number
bash
Copy
Edit
node todo.js remove <task_id_or_number>
Example:

bash
Copy
Edit
node todo.js remove 2
node todo.js remove 1691673829836
Update a task by ID or number
bash
Copy
Edit
node todo.js update <task_id_or_number> "New task text"
Example:

bash
Copy
Edit
node todo.js update 2 "Buy groceries and milk"
node todo.js update 1691673829836 "Clean the house"
Notes
Task IDs are generated using timestamps.

When listing tasks, each task is shown with a number (index) and its unique ID.

You can use either the task number or ID for removing and updating tasks.

