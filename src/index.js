const mongoose = require('mongoose');
const app = require('../app'); // Path to your app.js
const { config } = require('../config/config');
const logger = require('../config/logger');

// Database connection state
let isConnected = false;

// Export the functional handler
module.exports = async (req, res) => {
    // Ensure DB is connected before handling the request

    // Hand over the request/response to the Express app
    return app(req, res);
};
