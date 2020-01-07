
const db = require("../../model/data");
const writeLogs = require("./WriteLogs");

const DeleteBookHandler = async(req, res, table, body1, body2, deleteItem) => {

    try {
        const data = await db[table].findByPk(req.body[body1]);
        if (data && data.dataValues[body2] === req.body[body2]) { 
            await data.destroy(); 
            res.json('successfully deleted');
            writeLogs(`Deleted ${deleteItem}:  ${req.body[body1]},  ${req.body[body2]}`)
        } else {
            res.status(400).json("Not found");
        }
    
    } catch {res.status(400).json("Failed to delete") };
}

module.exports = DeleteBookHandler;