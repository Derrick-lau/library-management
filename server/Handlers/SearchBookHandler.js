
const db = require("../model/data");
const ret = require("./return");

const SearchHandler = async(req, res) => {
    try{
        const {title, authors} = req.query;
        if( title.length > 0 || authors.length > 0 ) {
            const AllBooks = await db.Book.findAll({ include: [{model:db.Author}]});
            // get books' id name isbn authors
            const booksData = await AllBooks.map(book => book.dataValues);
            // Join books with authors
            const AuthorsJoined = await booksData.map(mappedbook => {
                mappedbook.Authors = mappedbook.Authors.map( author=> author.dataValues.name).join(", ");
                    return mappedbook;
            })
            // filter books that includes requested name OR authors
            const filteredBooks1 = await AuthorsJoined.map(mappedbook => {
                if(title.length > 0 && mappedbook.title.includes(title)|| authors.length > 0 && mappedbook.Authors.includes(authors)){
                    return mappedbook;
                }
            })
            //filter item in array which is undefined
            const filteredBooks2 = await filteredBooks1.filter(item => item !== undefined); 
            ret.json( filteredBooks2, res);
        } else { res.json(undefined) }; // req.body is empty
    } catch {res.status(400).json('Wrong Input')}
}

module.exports = SearchHandler;