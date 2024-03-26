const express = require('express');
const cors = require('cors');

const path = require('path');

const db = require('./connection'); // Import the MongoDB connection file
const conversationRoutes = require('./routes/conversationRoutes');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 8080; 

require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

app.use(cors()); // Enable CORS for all routes

app.use(express.static('uploads'));


app.get('/', (req, res) => {
  res.send('Server is working !!!');
});

app.use(conversationRoutes);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
