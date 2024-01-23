const express = require("express");

const app = express()

app.get("/cities", (req, res) => {
    res.send("Here are the cities")
})