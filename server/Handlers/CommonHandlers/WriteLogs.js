const db = require("../../model/data");

//writeLogs on database
const writeLogs = (messages) => {
    db.Log.create({
        messages: messages
    });
}

module.exports = writeLogs;