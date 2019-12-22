const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser')
const booksRouter = require("./controllers/books")
const server = express();

// interpret JSON body of requests
server.use(bodyParser.json());

// interpret url-encoded queries
server.use(bodyParser.urlencoded({ extended: false }));

// allow CORS
server.use(cors());

// allow CORS preflight for all routes
server.options("*", cors());



server.use("/books", booksRouter);

// handle errors last
server.use((err, req, res, next) => {
    res.status = err.status || 500;
    res.send(err);
});

//start the server running
server.listen(3000, () => {
    console.log("server listening");
});
