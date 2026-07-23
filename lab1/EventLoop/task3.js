console.log("1:start");
setTimeout(()=>console.log("2: setTimeout"));
setImmediate(()=>console.log("2: setImmediate"));
process.nextTick(()=> console.log("4: nextTick"));
console.log("5:end");


