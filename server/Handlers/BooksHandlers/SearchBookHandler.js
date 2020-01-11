
const db = require("../../model/data");

const SearchHandler = async(req, res) => {
    try{
        if( req.query.title.length > 0 || req.query.authors.length > 0 ) {
            const {title, authors} = req.query;
            const AllData = await db.Book.findAll({ include: [{model:db.Author}]});

            // get books' id name isbn authors
            const Data = await Promise.all(AllData.map(data => data.dataValues));
            
            // Join books with authors
            const NamesJoined = await  Promise.all(Data.map(mappedbook => {
                mappedbook.Authors = mappedbook.Authors.map( author=> author.dataValues.name).join(", ");
                    return mappedbook;
            }))
            // filter books that includes requested name OR authors
            const filteredBooks1 = await Promise.all(NamesJoined.map(mappedbook => {
                if(title.length > 0 && mappedbook.title.includes(title)|| authors.length > 0 && mappedbook.Authors.includes(authors)){
                    return mappedbook;
                }
            }))
            //filter item in array which is undefined
            const filteredBooks2 = await Promise.all(filteredBooks1.filter(item => item !== undefined)); 
            res.json( filteredBooks2);
            
            
        } else { res.sendStatus(400)}; //req book is empty
    } catch {res.sendStatus(400)}
}

module.exports = SearchHandler;