const db = require("../../model/data");
const writeLogs = require("./WriteLogs");

const UpdateHandler = async (
req, res, table, para1, updateItem2, updateItem3, 
updateItem4, updatedItem 
) => {
    const data = db[table].findByPk(req.params[para1]);
        if (data) {
            //update items
            data[updateItem2] = req.body[updateItem2];
            data[updateItem3] = req.body[updateItem3];
            data[updateItem4] = req.body[updateItem4];
            await data.save;
            await res.json('updated sucessfully');
            writeLogs(`Updated ${updatedItem}  id: ${req.params[para1]}`);
        } else {res.status(403).json('Update denied')};
}

module.exports =  UpdateHandler
