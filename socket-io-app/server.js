const express = require('express');
const http = require('http');
const cors = require('cors');
const socketSetup = require('./socket'); // We'll create this next

const app = express();
app.use(cors());
app.use(express.json());

const server = http.createServer(app);
socketSetup(server); // Initialize Socket.io

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
