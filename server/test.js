const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;

app.use(cors()); // Enable CORS for all routes

app.use(express.static('uploads'));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
