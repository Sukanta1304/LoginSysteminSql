const express= require("express");
const cors= require("cors");
const userRoute = require("./routes/userRoute");
require("dotenv").config();

const app= express();

app.use(express.json());
app.use(cors());

app.get("/",(req,res)=>{
    res.send("Welcome...")
})

app.use("/user", userRoute)

app.listen(process.env.PORT, ()=>{
    console.log("Server started")
})