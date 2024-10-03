const express = require("express");
const mongoose = require("mongoose");

const app = express();

// Step 1: Connect to the "instagram" database for the "reels" collection
const whatsappConnection=mongoose.createConnection("mongodb://localhost:27017/whatsapp");

// Define the schema and model for "reels" collection in "instagram"
const whatsappSchema=new mongoose.Schema({});
const whatsappModel=whatsappConnection.model("users",whatsappSchema);
// Step 2: Connect to the "twitter" database for the "tillu" collection
const twitterConnection = mongoose.createConnection("mongodb://localhost:27017/twitter");

// Define the schema and model for "tillu" collection in "twitter"
const usersSchema = new mongoose.Schema({});
const user = twitterConnection.model("users", usersSchema, "users"); // explicitly mention "tillu" collection

// Step 3: Create routes to fetch data from both collections

// Route to fetch reels from the "instagram" database
app.get("/whatsapp/users", async (req, res) => {
  try {
    const whatsapp = await whatsappModel.find(); // Retrieve all reels
    res.json(whatsapp); // Send response with reels data
  } catch (err) {
    res.status(500).send("Error fetching reels from Instagram database");
  }
});

// Route to fetch tillu from the "twitter" database
app.get("/twitter/users", async (req, res) => {
  try {
    const tillu = await user.find(); // Retrieve all documents from "tillu" collection
    res.json(tillu); // Send response with tillu data
  } catch (err) {
    res.status(500).send("Error fetching data from Twitter database");
  }
});

// Start the Express server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
