import express from 'express';
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

dotenv.config();

const app = express();

// this is gonna be the main root
app.get("/products", (req, res) => {
    res.send(data.products);
});


app.listen(5000, () => {
    connectDB();
    console.log("Backend server is running on port 5000 (http://localhost:5000)");
});