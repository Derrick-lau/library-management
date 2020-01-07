const express = require("express");
const router = express.Router();
const SearchBook = require("../Handlers/BooksHandlers/SearchBookHandler");
const verifyToken = require("../Handlers/GeneralHandlers/verifyToken");
const AddBookHandler = require("../Handlers/BooksHandlers/AddBookHandler");
const DeleteHandler = require("../Handlers/GeneralHandlers/DeleteHandler");



router.post("/add", verifyToken, (req, res) => {
    AddBookHandler(req, res)
});

router.get("/search", verifyToken, (req, res) => {
    SearchBook(req, res);
    
})

router.delete("/delete", verifyToken, (req, res) => {

    DeleteHandler(req, res, 'Book', 'id', 'isbn', 'Book')
});

module.exports = router;
