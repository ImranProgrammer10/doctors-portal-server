const express = require('express')
const app = express()
const cors=require('cors')
require('dotenv').config()
const { MongoClient, ServerApiVersion } = require('mongodb');

const port =process.env.PORT|| 5000

app.use(cors());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.xq8ej.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

console.log(uri)


app.get('/', (req, res) => {
  res.send('Hello dOCTORS PORTAL!')
})

app.listen(port, () => {
  console.log(` listening on port ${port}`)
})