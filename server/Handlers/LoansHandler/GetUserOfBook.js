
const db = require("../../model/data");

const GetUserOfBook = async(req, res) => {
    try {
        //get UserId by BookId on Loan
        const data = await db.Loan.findOne({ where: { BookId: req.query.bookID } });
        const UserId = data.dataValues.UserId
        //get user by userId
        let user = {}
        await getUser(user, UserId)
        res.json([user])

    } catch {res.sendStatus(400)}
}

const getUser = async(user, UserId) => {
        let User = await db.User.findOne({where:{id: UserId }});
        user.id = User.dataValues.id
        user.name = User.dataValues.name;
        user.barcode = User.dataValues.barcode;
        user.memberType = User.dataValues.memberType;
}

module.exports = GetUserOfBook;