
const db = require("../../model/data");
const writeLogs = require("../GeneralHandlers/WriteLogs");

const AddUsersHandler = async(req, res) => {

    try {
        const {name, barcode, memberType} = req.body;
        await db.User.create({name: name,barcode: barcode, memberType: memberType});
        res.json("Successfully Added");
        writeLogs(`Added User Name: '${name}' , Barcode: ${barcode}, MemberType: ${memberType}`);
    } 
    catch {res.status(400).json("Failed to add") };
}

module.exports = AddUsersHandler;