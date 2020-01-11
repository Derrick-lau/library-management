
const db = require("../../model/data");
const writeLogs = require("../CommonHandlers/WriteLogs");

const AddLoanHandler = (req, res) =>{
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
                    writeLogs(`Added Loan: UserID:${req.params.userID}, BookID:${req.params.bookID}`)
                }
            });
        } else {
            res.sendStatus(400);
        }
    });
}

module.exports = AddLoanHandler;