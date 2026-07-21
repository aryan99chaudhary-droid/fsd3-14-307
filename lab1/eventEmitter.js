import { EventEmitter } from "node:events";

const task = new EventEmitter();

const sayHi = (name) =>{
    console.log(`Loggedin ${name}`);
    
};

task.on("greet",sayHi);
task.on("greet",()=>{
    console.log("Logged Out");
    
});

task.once("greet",()=>{
    console.log("System Starting...");
    
});

task.on("greet",(name)=>{
    console.log(`System is Shutting Down ${name}`);
    
});

task.emit('greet','Akhil Singh');
task.emit("greet","Sonia Singh");
task.emit("greet","Rahul Singh");
task.emit("greet","Manager");
