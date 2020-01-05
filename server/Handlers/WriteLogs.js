const db = require("../model/data");

const writeLogs = (messages) => {
    db.Log.create({
        messages: messages
    });
}

module.exports = writeLogs;