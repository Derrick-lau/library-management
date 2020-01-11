
const db = require("../../model/data");
const writeLogs = require("../CommonHandlers/WriteLogs");

const AddUsersHandler = async(req, res) => {

    try {
        const {name, barcode, memberType} = req.body;
        await db.User.create({name: name,barcode: barcode, memberType: memberType});
        res.json("Successfully Added");
        writeLogs(`Added User Name: '${name}' , Barcode: ${barcode}, MemberType: ${memberType}`);
    } 
    catch {res.sendStatus(400)};
}

module.exports = AddUsersHandler;