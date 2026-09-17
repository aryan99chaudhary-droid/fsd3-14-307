import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("<h1>Hello, World!</h1>");
});

app.listen(3000, () => {
    console.log("Server is running at http://localhost:3000");
});

app.post('/login', (req, res) => {
    
    res.send('User Login');
});

app.put('/update', (req, res) => {
    res.send('Update User');
});

app.delete('/delete', (req, res) => {
    res.send('Delete User');
});