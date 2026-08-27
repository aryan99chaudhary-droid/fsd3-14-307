import http from 'http';
import {createReadStream} from 'fs';
import {readFile} from 'fs/promises';

const server = http.createServer((req, res) => {
    res.end('Hello, World!\n');
});
const PORT = 3000;
server.listen(PORT, () => {
    res.statusCode = 200;
    res.end(`
        <h1>Hello, World!</h1>
        <p>Server running on port ${PORT}</p>
    `);
});