
const db = require("../../model/data");
const writeLogs = require("../CommonHandlers/WriteLogs");

const AddBookHandler = async(req, res) => {
    try {
        const {title, isbn, authors} = req.body;
        const book = await db.Book.create({ title: title, isbn: isbn});
        await AddAuthorHandler(authors, book)
        res.json("Successfully Added");
        writeLogs(`Added book Title: '${title}' , ISBN: ${isbn}, Authors: ${authors}`);
        
    } catch {res.sendStatus(400)};
}

const AddAuthorHandler = async(authors, book) => {
    try {
        // put authors into an array
        const namesArray = await authors.split(', '); 
        // loop authors' array and add to the book
        for(const name of namesArray) {
            let author = await db.Author.findOrCreate({where:{name: name }});
            await book.addAuthor(author[0]); 
        }
    } catch {res.sendStatus(400)};
}

module.exports = AddBookHandler;