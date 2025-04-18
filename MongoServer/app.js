const express = require('express');
const cors  = require('cors');
const { MongoClient } = require('mongodb');
const app = express();

app.use(cors());
app.use(express.json());

const db_url = "mongodb://localhost:27017";

const client = new MongoClient(db_url);

const connectDB = async() => {
    try {
        await client.connect();
        console.log("Connected to MongoDB Server");
    } catch (error) {
        console.error("Error connecting to MongoDB", error);
    }
}
connectDB()