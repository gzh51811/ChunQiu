const express = require('express');
const routers = express.Router();
const MongoClient = require('mongodb').MongoClient;
// const ObjectID = require('mongodb').ObjectID;
// Connection URL
const url = 'mongodb://localhost:27017';
// Database Name
const dbName = 'student';
// Use connect method to connect to the server
routers.get('/', function (req, res) {
    MongoClient.connect(url, function (err, client) {
        // console.log("Connected successfully to server");
        const db = client.db(dbName);
        const collection = db.collection('shopping');
        // var app = req.query;
            let data = collection.find('shopping').toArray( (err, res) => {
                if (err) {
                    console.log(err);
                } else {
                    client.close();
                    console.log(res);
                    // res.send(result);
                }
            });
    });
});
module.exports = routers;