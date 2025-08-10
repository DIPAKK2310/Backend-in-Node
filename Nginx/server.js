import { createServer } from 'http';
import fs from 'fs';
import path from 'path';

const PORT = 8000;

const server = createServer((req,res) =>{

}
);
server.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})