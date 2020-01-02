const express = require("express");
const router = express.Router();
const db = require("../model/data");
const SearchBook = require("../Handlers/SearchBookHandler");

router.get("/search",  (req, res) => {
    SearchBook(req, res);
})

router.post("/add", async(req, res) => {
    try {
        const {title, isbn, authors} = req.body;
        if( title.length > 0 ) {
            const book1 = await db.Book.create({ title: title, isbn: isbn});
            const namesArray = await authors.split(', '); // put authors into an array
            await namesArray.forEach(async name => {
                let author1 = await db.Author.findOrCreate({where:{name: name }});
                await book1.addAuthor(author1[0]); // map authors' array and add to the book
            });
            res.json("Successfully Added");
        } else { res.status(400).json("wrong information")};
    }
    catch {res.status(400).json("Failed to add") };
});


router.delete("/delete", async(req, res) => {
    const {id, isbn} = req.body;
    const book = await db.Book.findByPk(id);
    if (book && book.dataValues.isbn === isbn) { 
        await book.destroy(); 
        res.json('successfully deleted');
        // 
    } else {
        res.status(400).json("Not found");
    }
});

module.exports = router;
