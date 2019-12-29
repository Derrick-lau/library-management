const express = require("express");
const router = express.Router();

const db = require("../model/data");
const ret = require("../lib/return");

router.post("/search", async (req, res) => {
    try{
        const {title, authors} = req.body;
        if(title.length > 0 ){
            const AllBooks = await db.Book.findAll({ include: [{model:db.Author}]});//query all books from database
            const booksData = await AllBooks.map(book => book.dataValues);// retrieve books' id name isbn authors
            const filteredBooks1 = await booksData.map(mappedbook => {// filter books that includes desired name or authors
            mappedbook.Authors = mappedbook.Authors.map( author=> author.dataValues.name).join(", ");
                if(mappedbook.title.includes(title) || mappedbook.Authors.includes(authors)) {
                    return mappedbook;
                } 
                else return undefined;
            })
            const filteredBooks2 = await filteredBooks1.filter(item => item !== undefined); //filter array's item that is undefined
            res.json( filteredBooks2);
        } else {res.json(undefined)}
    } catch {err =>  res.status(400).json(err)}
})

router.get("/:bookID", function(req, res) {
    if (req.query.allEntities == "true") {
        db.Book.findByPk(req.params.bookID, { include: [db.Author] }).then(function(book) {
            if (book) {
                ret.json(book, res);
            } else {
                res.end();
            }
        });
    } else {
        db.Book.findByPk(req.params.bookID).then(function(book) {
            if (book) {
                ret.json(book, res);
            } else {
                res.end();
            }
        });
    }
});

router.post("/", function(req, res) {
    db.Book.create({ title: req.body.title, isbn: req.body.isbn }).then(function(book) {
        ret.json(book, res);
    });
});

router.post("/:bookID/authors", function(req, res) {
    db.Book.findByPk(req.params.bookID, { include: [db.Author] }).then(function(book) {
        if (book) {
            db.Author.findOrCreate({ where: { name: req.body.name } }).spread(function(
                author,
                created
            ) {
                book.addAuthor(author);
                book.reload().then(function(book) {
                    ret.json(book, res);
                });
            });
        } else {
            res.end();
        }
    });
});

router.post("/:bookID/authors/:authorID", function(req, res) {
    db.Book.findByPk(req.params.bookID, { include: [db.Author] }).then(function(book) {
        if (book) {
            db.Author.findByPk(req.params.authorID).then(function(author) {
                if (author) {
                    book.addAuthor(author);
                    book.reload().then(function(book) {
                        ret.json(book, res);
                    });
                }
            });
        } else {
            res.end();
        }
    });
});

router.put("/:bookID", function(req, res) {
    db.Book.findByPk(req.params.bookID).then(function(book) {
        if (book) {
            book.title = req.body.title;
            book.isbn = req.body.isbn;
            book.save().then(function(book) {
                ret.json(book, res);
            });
        } else {
            res.end();
        }
    });
});

router.delete("/:bookID", function(req, res) {
    db.Book.findByPk(req.params.bookID)
        .then(function(book) {
            if (book) {
                return book.destroy();
            } else {
                res.end();
            }
        })
        .then(function() {
            res.end();
        });
});

module.exports = router;
