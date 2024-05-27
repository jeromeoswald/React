const express = require("express");
// used to parse JSON Payloads in incoming request,
//make it available in req.body
const bodyParser = require ("body-parser");
// file operation, create, read folder, file/folder exists or not
const fs = require ("fs-extra");
// to manage file & directory paths
const path = require ("path");
// const { log } = require("console");

const app = express();
const PORT = 3000;
const folderPath = path.join(__dirname,"texts");

// check whether the folder is there or not
if(!fs.existsSync(folderPath)){
    fs.mkdirSync(folderPath);
}

//Enpoint to create a text file
app.post("/createFile",async (req, res)=>{
try {
    await fs.ensureDir(folderPath)
    const time =new Date().toISOString();
    const fileName = `${time}.txt`;
    const filePath = path.join(folderPath, fileName);

    await fs.writeFile(filePath, time)
    res.send("File Created successfully")
} catch (error) {
    console.log(error);
    res.status(500).send("Error writing a file");
}
    
});


// app.get("/home",(req, res)=>{
//     console.log("HELLO");
//     res.send("Welcome to React Part One!!")
// });

// app.get("/",(req, res)=>{
//     console.log("HI");
//     res.send("Welcome to Node.js Part One!!")
// });

app.listen (PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});