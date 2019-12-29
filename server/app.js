const createError = require("http-errors");
const express = require("express");
const cors = require("cors");
const db = require("./model/data");


const booksRouter = require("./routes/books");
const usersRouter = require("./routes/users");
const loansRouter = require("./routes/loans");
const searchRouter = require("./routes/search");

const app = express();

// interpret JSON body of requests
app.use(express.json());

// interpret url-encoded queries
app.use(express.urlencoded({ extended: false }));

// allow CORS
app.use(cors());

// allow CORS preflight for all routes
app.options("*", cors());

app.use("/books", booksRouter);
app.use("/users", usersRouter);
app.use("/loans", loansRouter);
app.use("/search", searchRouter);

// handle errors last
app.use(function(err, req, res, next) {
    res.status = err.status || 500;
    res.send(err);
});

// connect to the database and start the server running
db.initialiseDatabase(false, null);
app.listen(5000, () => {
    console.log("server listening");
});
