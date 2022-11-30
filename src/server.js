const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

const dbo = require("./db/connection");
var testData = require('../db.json')

app.get("/", (req, res) => res.send("I love Olamide"))

app.get("/inventory", async (req, res) => {
    var db = dbo.getDb()
    const prod = db.collection("Products");   
    const cursor = await prod.find().limit(25).toArray();
    
    return res.json(cursor)
})

app.post("/inventory/add", (req, res) => {
    var db = dbo.getDb()    
    db.collection("Products").insertOne(req.body);
    return res.send("Product added")
})

app.listen(port, () => {
    dbo.connectToServer(function (err) {
        if (err) console.error(err);
    })
    console.log(`Server is running on port: ${port}`);
});