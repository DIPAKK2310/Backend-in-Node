// ===============================
// 📦 Import required Node modules
// ===============================
import { createServer } from 'http';       // Built-in HTTP module to create a web server
import fs from 'fs';                       // Built-in File System module to read files
import path from 'path';                   // Built-in Path module to work with file paths
import { fileURLToPath } from 'url';       // Helper to get __dirname in ES modules

// ==================================================
// 📍 Emulate __dirname in ES module (not available by default)
// ==================================================
// Convert the current file's URL into a file path
const __filename = fileURLToPath(import.meta.url);
// Get the directory name of the current file
const __dirname = path.dirname(__filename);

// =====================
// ⚙️ Server Config
// =====================
const PORT = 8000; // Port number where the server will run

// ======================================================
// 🌐 Create the HTTP server
// ======================================================
const server = createServer((req, res) => {
  console.log(`📥 Incoming request: ${req.url}`);

  // Determine which file to serve:
  // - If user requests "/", serve "index.html"
  // - Else serve the requested file from the "public" folder
  const filePath = path.join(
    __dirname,
    'public',
    req.url === '/' ? 'index.html' : req.url
  );

  console.log(`📂 Serving file: ${filePath}`);

  // Get file extension (e.g., .html, .css, .js)
  // If no extension, default to ".html"
  const extName = path.extname(filePath).toLowerCase() || '.html';

  // Map of file extensions to MIME types
  // (MIME types tell the browser how to handle the file)
  const mimeTypes = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.json': 'application/json',
  };

  // Get the correct content type based on the file extension
  const contentType = mimeTypes[extName] || 'application/octet-stream';

  // ================================================
  // 📄 Read the requested file and send it as response
  // ================================================
  fs.readFile(filePath, (err, content) => {
    if (err) {
      // If file not found (ENOENT = Error NO ENTry)
      if (err.code === 'ENOENT') {
        console.warn(`❌ File not found: ${filePath}`);
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 Not Found</h1>', 'utf-8');
      } else {
        // Any other server error
        console.error(`💥 Server error: ${err.code}`);
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      // ✅ File found — send it to the client
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
});

// =======================
// 🚀 Start the server
// =======================
server.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
