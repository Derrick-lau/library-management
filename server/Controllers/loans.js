const express = require("express");
const router = express.Router();

const verifyToken = require("./VerifyToken");
const DeleteHandler = require("../Handlers/LoansHandler/DeleteHandler");
const AddLoanHandler = require("../Handlers/LoansHandler/AddLoanHandler");
const UpdateHandler = require("../Handlers/LoansHandler/UpdateHandler");
const getLoansOfUser = require("../Handlers/LoansHandler/GetLoansOfUser");
const GetUserOfBook = require("../Handlers/LoansHandler/GetUserOfBook");




//Get a list of a User’s current Loans by userID
router.get("/search", verifyToken, (req, res) => {
    getLoansOfUser(req, res);
});


//Get the User currently borrowing a Book
router.get("/user", verifyToken, (req, res) => {
    GetUserOfBook(req, res);
});

//Loan a Book to a User (if it is not already out on Loan), specifying the Due Date
router.post("/book/:bookID/user/:userID", verifyToken, (req, res) => {
    AddLoanHandler(req, res)
});

router.put("/:loanID", verifyToken, (req, res) => {
    req.body.dueDate = new Date(req.body.dueDate)
    UpdateHandler(req, res, 'Loan', 'loanID', 'dueDate')
});

router.delete("/delete", verifyToken, (req, res) => {
    DeleteHandler(req, res, 'Loan', 'id')
});









module.exports = router;
