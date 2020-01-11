  
const db = require("../../model/data");
const writeLogs = require("../CommonHandlers/WriteLogs");

const UpdateHandler = async (req, res, table, para1, updateItem1) => {

    const data = await db[table].findByPk(req.params[para1])
        if (data) {

            //update items
            data[updateItem1] = req.body[updateItem1];
            await data.save();
            res.json('updated sucessfully');
            writeLogs(`Updated ${table}  id: ${req.params[para1]}`);
        } else {res.sendStatus(400)};
}

module.exports =  UpdateHandler