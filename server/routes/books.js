const express = require('express')
const router = express.Router();
const knex = require("../data");
const db = knex.knex;

router.put("/search", async(req, res, err) => {

    try {
        const {title, authors} = req.body
        const books = await db
            .select('Books.id', 'title', 'isbn', db.raw("group_concat(name, ', ') as authors"))
            .from('Books')
            .innerJoin('author_books', 'Books.id', 'author_books.BookId')
            .innerJoin('Authors', 'Authors.id', 'author_books.AuthorId')
            .groupBy('Books.id')
        const filteredBooks = await books.map(filteredBooks => {
            if(filteredBooks.title.includes(title) || filteredBooks.authors.includes(authors)) {
                return filteredBooks
            }
        })
        const filteredBooks2 = await filteredBooks.filter(item => item !== undefined)
        res.json(filteredBooks2)
    } catch {
        res.status(400).json('cannot get the book')
    }
})

module.exports = router;
