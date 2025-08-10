const fs = require('fs');
const path = './tasks.json';

const command = process.argv[2]; //Recognize the command from the command line arguments
const argument = process.argv[3]; //Recognize the argument from the command line arguments
const secondArgument = process.argv[4]; //Recognize the argument from the command line arguments
const loadTasks = () => {
    try {
       const dataBuffer = fs.readFileSync(path, 'utf8'); // Read the tasks from the JSON file
    
       return JSON.parse(dataBuffer); // Parse the JSON data & Return the parsed tasks
       
    } catch (error) {
        console.error("Error loading tasks:", error);
        return []; // Return an empty array if there's an error
    }
}


const saveTasks = (tasks) => {
        try {
    const dataJSON = JSON.stringify(tasks, null, 2); // Convert tasks to JSON string
        fs.writeFileSync(path, dataJSON); // Write the tasks to the JSON file
        console.log("Tasks saved successfully.");
        }catch (error) {
            console.error("Error saving tasks:", error);
        }
}
const addTask = (task) => {
    const tasks = loadTasks(); // Load existing tasks
    tasks.push({ id: Date.now(), task }); // Add a new task with a unique ID
    saveTasks(tasks); // Save the updated tasks
    console.log("Task added successfully:", task);
}
// Remove task either by ID or 1-based index
const removeTask = (idOrIndex) => {
    const tasks = loadTasks();
    const idNumber = Number(idOrIndex);    // Convert input to number

    // Try to find task by ID first
    let index = tasks.findIndex(task => task.id === idNumber);

    // If not found by ID, treat input as 1-based index
    if (index === -1) {
        index = idNumber - 1; // Convert to zero-based index
    }

    // Check if index is valid
    if (index >= 0 && index < tasks.length) {
        const removed = tasks.splice(index, 1)[0]; // Remove task from array
        saveTasks(tasks);                           // Save updated list
        console.log(`Removed task: ${removed.task} (ID: ${removed.id})`);
    } else {
        console.log("Task not found by ID or number.");
    }
};


const listTasks = () => {
        tasks = loadTasks() // Load existing tasks
        tasks.forEach((task,index) => console.log(`${index+1}- ${task.task} (ID: ${task.id})`)
            
        );
        console.log("Tasks are here :",tasks)
}
const updateTask = (idOrIndex, newTask) => {
  const tasks = loadTasks();
  const idNumber = Number(idOrIndex);

  // Find index by ID first
  let index = tasks.findIndex(t => t.id === idNumber);

  // If not found by ID, treat as 1-based index
  if (index === -1) {
    index = idNumber - 1;
  }

  // Check if index is valid
  if (index >= 0 && index < tasks.length) {
    tasks[index].task = newTask;   // Update task text
    saveTasks(tasks);               // Save changes
    console.log(`Task updated to: ${newTask} (ID: ${tasks[index].id})`);
  } else {
    console.log("Task not found by ID or number.");
  }
};

if(command==="add"){
    addTask(argument)
}else if(command==="remove"){
    removeTask(argument)    
}else if(command==="list"){
    listTasks() 
}else if(command==="update"){
    updateTask(argument,secondArgument)    
}else{
    console.log("Command not found")
}