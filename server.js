const express = require("express");

const app = express();
const cors = require("cors");
const jobRoute = require("./routes/job");
const connection = require("./config/bd");

app.use(express.json());
app.use(cors());
app.use("/",jobRoute);

app.listen(process.env.PORT || 8080,async()=>{
    await connection;
    console.log("server started")
})