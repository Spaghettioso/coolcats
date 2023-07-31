const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const bp = require('body-parser')
require("dotenv").config

const PORT = process.env.port || 8082

const app = express()
app.use(cors())
app.use(bp.json())

app.get("/", (request, response)=>{
    response.status(200).json("hey ho")
})

app.listen(PORT, ()=> console.log(`App is listening on port ${PORT}`))
