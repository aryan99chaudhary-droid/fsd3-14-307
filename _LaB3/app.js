import http from 'http';
import * as team from "./teams.js";

const PORT = 5000;
const server = http.createServer(req, res => {
  if (req.url === '/' && req.method === 'GET') {
    const teams = team.getAllTeams();
    res.write(JSON.stringify(teams));
  }else{
    res.statusCode = 404;
  }
  res.end();
});
server.listen(PORT, () => {
  console.log('Server is running');
});