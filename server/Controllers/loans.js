const express = require("express");
const router = express.Router();

const db = require("../model/data");



 // //L3 - Get the User currently borrowing a Book -- ALL USERS WHO...

//1.
router.get("/", function(req, res) {
    db.Loan.findAll().then(function(loans) {
        ret.json(loans, res);
    });
});
// then calculate ? loans
// return users list with loans' numbers
router.get("/:loanID", function(req, res) {
    db.Loan.findByPk(req.params.loanID).then(function(loan) {
        if (loan) {
            ret.json(loan, res);
        } else {
            res.end();
        }
    });
});

//L5 updated Loans
router.put("/:loanID", function(req, res) {
    db.Loan.findByPk(req.params.loanID).then(function(loan) {
        if (loan) {
            loan.dueDate = new Date(req.body.dueDate);
            loan.save().then(function(loan) {
                ret.json(loan, res);
            });
        } else {
            res.end();
        }
    });
});

//L4 Remove
router.delete("/:loanID", function(req, res) {
    db.Loan.findByPk(req.params.loanID)
        .then(function(loan) {
            if (loan) {
                return loan.destroy();
            } else {
                res.end();
            }
        })
        .then(function() {
            res.end();
        });
});

// L2 - Get a list of a User’s current Loans -- userID
router.get("/:userID/loans", function(req, res) {
    db.Loan.findAll({ where: { userId: req.params.userID } }).then(function(loans) {
        ret.json(loans, res);
    });
});

// //L1 - Loan a Book to a User (if it is not already out on Loan), specifying the Due Date
router.post("/:userID/loans/:bookID", (req, res) => {
    db.User.findByPk(req.params.userID).then(function(user) {
        if (user) {
            db.Book.findByPk(req.params.bookID).then(function(book) {
                if (book) {
                    db.Loan.findOrCreate({
                        where: { UserId: req.params.userID, BookId: req.params.bookID }
                    }).spread(function(loan, created) {
                        loan.dueDate = new Date(req.body.dueDate);
                        loan.save().then(function(loan) {
                            res.json(loan);
                        });
                    });
                }
            });
        } else {
            res.end();
        }
    });
});



module.exports = router;
