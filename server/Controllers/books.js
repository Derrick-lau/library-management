const express = require("express");
const router = express.Router();
const SearchBook = require("../Handlers/BooksHandlers/SearchBookHandler");
const verifyToken = require("./VerifyToken");
const AddBookHandler = require("../Handlers/BooksHandlers/AddBookAndAuthorHandler");
const DeleteHandler = require("../Handlers/CommonHandlers/DeleteHandler");



router.post("/add", verifyToken, (req, res) => {
    AddBookHandler(req, res)
});

router.get("/search", verifyToken, (req, res) => {
    SearchBook(req, res);

})

router.delete("/delete", verifyToken, (req, res) => {

    DeleteHandler(req, res, 'Book', 'id', 'isbn')
});



module.exports = router;
