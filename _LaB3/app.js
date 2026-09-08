import http from 'http';
import * as team from "./
teams.js";

const PORT = 5000;
const sendJason = (res,statusCode,data) => {
  res.writeHead(statusCode, { 'Content-Type': 'application/json' });
  res.end(data === "undefined" ? "" : JSON.stringify(data));
};

const parseJSONBody = (req)=>{
  new Promise((resolve, reject) => {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk.toString();
    });
    req.on('end', () => {
      try {
        const jsonData = JSON.parse(body);
        resolve(jsonData);
      } catch (error) {
        reject(error);
      }
    });
  });
};

const server = http.createServer((req, res) => {});
server.listen(PORT, () => {
  console.log('Server is running');
});