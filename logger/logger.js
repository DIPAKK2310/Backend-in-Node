// Import the built-in 'fs' module to work with the file system (reading/writing files)
const fs = require('fs');

// Import the built-in 'os' module to get system information like memory usage
const os = require('os');

// Import the built-in 'events' module so we can create and use custom events
const EventEmitter = require('events');


// Create a Logger class that extends EventEmitter
// This allows Logger to send ("emit") and listen for ("on") custom events
class Logger extends EventEmitter {
    // 'log' method takes a message and emits a 'log' event with that message
    log(message) {
        this.emit('log', message);
    }
}

// Create an instance of Logger
const logger = new Logger();

// Path for the file where logs will be stored
const logFile = './Eventlog.txt';


// Function to handle writing log messages to the file
// 'message' is the string passed when we emit the 'log' event
const logToFile = (message) => {

    // Create the full log line: current time (ISO format) + message + newline
    const logMessage = `${new Date().toISOString()} - ${message}\n`;

    // Append the log message to the file
    fs.appendFile(logFile, logMessage, (err) => {
        if (err) {
            // Print an error if writing to the file fails
            console.error('Error writing to log file:', err);
        }
    });
};


// Register the 'logToFile' function as a listener for the 'log' event
logger.on('log', logToFile);


// Every 3 seconds, check memory usage and log it
setInterval(() => {
    // Calculate memory usage percentage: free memory / total memory * 100
    const memoryUsage = (os.freemem() / os.totalmem()) * 100;

    // Emit a 'log' event with the memory usage string
    logger.log(`Memory usage is ${memoryUsage.toFixed(2)}%`);
}, 3000);


// Log some startup messages
logger.log("Application is running...");
logger.log("Application event occurred...");
