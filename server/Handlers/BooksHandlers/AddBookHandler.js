
const db = require("../../model/data");
const writeLogs = require("../GeneralHandlers/WriteLogs");

const AddBookHandler = async(req, res) => {

    try {
        const {title, isbn, authors} = req.body;
        const book1 = await db.Book.create({ title: title, isbn: isbn});
        // put authors into an array
        const namesArray = await authors.split(', '); 
        // loop authors' array and add to the book
        for(const name of namesArray) {
            let author1 = await db.Author.findOrCreate({where:{name: name }});
            await book1.addAuthor(author1[0]); 
        }
        res.json("Successfully Added");
        writeLogs(`Added book Title: '${title}' , ISBN: ${isbn}, Authors: ${authors}`);
    } 
    catch {res.status(400).json("Failed to add") };
}

module.exports = AddBookHandler;