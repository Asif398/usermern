require('dotenv').config()
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")
const app = express();


const authRoutes = require("./routes/user");

app.use(express.json());
app.use(cors());
const DB =process.env.DATABASE;


mongoose.connect(DB,
  {
    useNewUrlParser: true,
   
  }
).then(()=>{
    console.log('MongoDB Connect');
}).catch((error)=>{
console.log(error.message);
});



//routes
app.use("/api",authRoutes);

const port = process.env.PORT|| 8000;
app.listen(port,()=>{
console.log(`Server is up and running ...${port}`);
})


