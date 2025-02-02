
const mongoose = require('mongoose');
require('dotenv').config();


//define the MongoDb coonection URL
// never leave a space in between url
//const mongoURL = 'mongodb://localhost:27017/hotels'// replace 'mydatabase' with your database name

// online database mongoDB Atlas
const mongoURL = process.env.MONGODB_URL_LOCAL;
console.log(mongoURL);

//const mongoURL = process.env.MONGODB_URL_LOCAL;
//setup MongoDb connection
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

// get the default connection
// Mongoose maintains a default connection object representing the MongoDb connection

const db = mongoose.connection;

// Define event listeners for database connection


//also connected, disconnected, error already understood by mongoDb

db.on('connected', () => {
    console.log('Connected to mongoDb server');
});
db.on('error', (err) => {
    console.error('mongoDb connection error:', err)
});
db.on('disconnected', () => {
    console.log('MongoDb disconnected');
});

//Export the database connection
module.exports = db;