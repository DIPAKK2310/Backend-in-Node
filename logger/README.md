📜 Event-Driven Logger in Node.js
This project demonstrates a basic event-driven architecture in Node.js using the EventEmitter class.
It logs application messages and system memory usage to a file every few seconds.

🚀 Features
Uses custom events to handle logging.

Records logs into Eventlog.txt.

Automatically logs system memory usage at regular intervals.
__________________________________________________________________________________

[!Image of architecture](./logger.png)


Demonstrates how to emit and listen for events in Node.js.

📂 Project Structure

.
├── Eventlog.txt       # Log file (created automatically)
├── logger.js          # Main script
└── README.md          # Documentation

🛠️ Requirements
Node.js (v14+ recommended)

📄 Code Overview
1️⃣ Importing Required Modules

const fs = require('fs');     // File system module for writing logs
const os = require('os');     // OS module to get system information
const EventEmitter = require('events'); // Event-driven architecture


2️⃣ Creating a Logger Class

class Logger extends EventEmitter {
    log(message) {
        this.emit('log', message); // Emit a 'log' event with the message
    }
}

3️⃣ Setting Up the Logger

const logger = new Logger();
const logFile = './Eventlog.txt';

4️⃣ Log Writing Function

const logToFile = (message) => {
    const logMessage = `${new Date().toISOString()} - ${message}\n`;
    fs.appendFile(logFile, logMessage, (err) => {
        if (err) console.error('Error writing to log file:', err);
    });
};

5️⃣ Event Listener

logger.on('log', logToFile);

6️⃣ Periodic Memory Usage Logging

setInterval(() => {
    const memoryUsage = (os.freemem() / os.totalmem()) * 100;
    logger.log(`Memory usage is ${memoryUsage.toFixed(2)}%`);
}, 3000);

7️⃣ Initial Log Messages

logger.log("Application is running...");
logger.log("Application event occurred...");

▶️ Running the Script
Save the script as logger.js.

Open a terminal in the project folder.

Run:

node logger.js
Check Eventlog.txt for log entries.


📚 Concepts Demonstrated
Event-Driven Architecture — Using EventEmitter to handle asynchronous actions.

File I/O in Node.js — Using fs.appendFile to write logs.

System Monitoring — Accessing system information via the os module.