const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 8000;

app.use( express.json() );
app.use( express.urlencoded({ extended:true}) );

require("./server/config/jokes.config");

// app.get("/api", (req,res)=>{
//     res.json({message: "Hello World"});
// });
require("./server/routes/jokes.routes")(app)






app.listen(port,()=> console.log(`Listening on port: ${port}`));