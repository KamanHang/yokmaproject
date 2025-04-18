const express = require('express');
const cors  = require('cors');
const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');
dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

const client = new MongoClient(process.env.db_url);

const connectDB = async() => {
    try {
        await client.connect();
        console.log("Connected to MongoDB Server");
    } catch (error) {
        console.error("Error connecting to MongoDB", error);
    }
}
connectDB()