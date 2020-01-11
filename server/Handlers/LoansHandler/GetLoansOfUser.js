
const db = require("../../model/data");

const getLoansOfUser = async(req, res) => {
    try {
        //get loansList
        const data = await db.Loan.findAll({ where: { UserId: req.query.userID } });
        const loansList = await Promise.all(data.map((mappedData)=>{
            return mappedData.dataValues
        }))

        //assign isbn to loan obj
        await getISBN(loansList);
        res.json(loansList)

    } catch {res.sendStatus(400)}
}

const getISBN = async(loansList) => {
    for(let loan of loansList) {
        let book = await db.Book.findOne({where:{id: loan.BookId }});
        loan.isbn = book.dataValues.isbn;
    }
}

module.exports = getLoansOfUser;