const express = require("express");
const mongoose = require("mongoose")
const app = express();
require ("dotenv/config");

const citySchema = require("./models/city")
const busModel = require("./models/bus")
const tripModel = require("./models/trip")

mongoose.connect("mongodb://localhost:27017/bus_db")
.then(()=>console.log("db coonected"))
.catch((e)=>console.log("db connection failde"))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 8000;
const MODE = process.env.NODE_ENV || "production";


app.get("/",async(req,res)=>{
  try {
    // const db = await citySchem/
    const sourceId = new mongoose.Types.ObjectId("66d04e395e12db0e0a7af193");
    // method 1 
    // const trips = await tripModel.find({source: sourceId});
    // method 2 
    const trips = await tripModel.find({source: "66d04e395e12db0e0a7af193"});
    // both giving empty []
    console.log(trips.length)
    return res.send(trips)
  } catch (error) {
 
  }
})


app.listen(PORT, () => {
  console.log(`App is running at ${PORT} in ${MODE} mode`);
});
