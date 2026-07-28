import {writeFile, readFile,appendFile  } from "fs/promises";
//await writeFile("stud.text", '')
//const data = await readFile
const addContent = async(fname , content) =>{
 await writeFile(fname,content);
 console.log(`${content} written in file: ${fname}`);
 

};

const readContent  = async (fname ) =>{
  const data = await readFile(fname,'utf-8');
  return data;
};

await addContent("notes.txt","Fs is easy in JS");
//console.log("Contents\n",readContent("notes.txt"));

const appendData = async (fname,content)=>{
  await appendFile(fname,"\n"+content);
  console.log("data append ");
}

await addContent("notes.txt","FS is easy in JS");
console.log("Content\n", await readContent("notes.txt"));
await appendData("notes.txt","it can add, read and update content");
console.log("Updated Contents\n",await readContent("notes.txt"));

