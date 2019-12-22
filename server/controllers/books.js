const express = require('express')
const router = express.Router();
const knex = require("../data");
const db = knex.knex;

router.put("/search", async(req, res) => {

    try {
        const {title, authors} = req.body
        console.log(req.body)
        const books = await db
            .select('Books.id', 'title', 'isbn', db.raw("group_concat(name, ', ') as authors"))
            .from('Books')
            .innerJoin('author_books', 'Books.id', 'author_books.BookId')
            .innerJoin('Authors', 'Authors.id', 'author_books.AuthorId')
            .groupBy('Books.id')
        const mappedbooks = await books.map(mappedbooks => {
            if(mappedbooks.title.includes(title) || mappedbooks.authors.includes(authors)) {
                return mappedbooks
            } else {
                return undefined
            }
        })
        const filteredBooks = await mappedbooks.filter(item => item !== undefined)
        res.json(filteredBooks)
    } 
    catch {
        res.status(400).json('cannot get the book')
    }
})

module.exports = router;
