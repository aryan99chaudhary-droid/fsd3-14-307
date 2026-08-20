import http from 'http';

const server = http.createServer((req, res) => {
    console.log(`Received request: ${req.method} ${req.url}`);
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, World!\n');
});
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    
});