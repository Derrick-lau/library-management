
const db = require("../../model/data");
const writeLogs = require("../CommonHandlers/WriteLogs");

const AddBookHandler = async(req, res) => {
    try {
        const {title, isbn, authors} = req.body;
        const book = await db.Book.create({ title: title, isbn: isbn});
        AddAuthorHandler(res, authors, title, isbn, book)

    } catch {res.status(400).json("Failed to add") };
}

const AddAuthorHandler = async(res, authors, title, isbn, book) => {
    try {
        // put authors into an array
        const namesArray = await authors.split(', '); 
        // loop authors' array and add to the book
        for(const name of namesArray) {
            let author = await db.Author.findOrCreate({where:{name: name }});
            await book.addAuthor(author[0]); 
        }
        res.json("Successfully Added");
        writeLogs(`Added book Title: '${title}' , ISBN: ${isbn}, Authors: ${authors}`);

    } catch {res.status(400).json("Failed to add")};
}

module.exports = AddBookHandler;