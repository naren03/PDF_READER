const express = require('express');
const path = require('path');

const db = require('./connection'); // Import the MongoDB connection file
const conversationRoutes = require('./routes/conversationRoutes');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 8080; 

require('dotenv').config({ path: path.resolve(__dirname, '../.env') });


app.get('/', (req, res) => {
  res.send('Server is working !!!');
});

app.use(conversationRoutes);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
