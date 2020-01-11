
const db = require("../../model/data");
const writeLogs = require("../CommonHandlers/WriteLogs");

const DeleteHandler = async(req, res, table, body1) => {

    try {
        const data = await db[table].findByPk(req.body[body1]);
        if (data) { 
            await data.destroy(); 
            res.json('successfully deleted');
            writeLogs(`Deleted ${table}:  ${req.body[body1]}`)
        } else {
            res.sendStatus(400);
        }
    
    } catch {res.sendStatus(400)};
}

module.exports = DeleteHandler;