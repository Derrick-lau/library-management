
const db = require("../../model/data");
    
const SearchHandler = async(req, res, table, query1, query2) => {
    
    try {
        
        if( req.query[query1].length > 0 || req.query[query2].length > 0 ) {
            const AllData = await db[table].findAll();
            const data = await AllData.map(data => data.dataValues);
            
            // filter data from database that includes data from client
            const filteredData1 = await data.map(mappedData => {
            
                                                // incase it is the date, stringify 
                if(req.query[query1].length > 0 && JSON.stringify(mappedData[query1]).includes(req.query[query1])|| req.query[query2].length > 0 && mappedData[query2].includes(req.query[query2])){
                    return mappedData;
                }
            })
            //filter item in array which is undefined
            const filteredData2 = await filteredData1.filter(i => i !== undefined); 
            res.json( filteredData2);
            
        } else { res.json(undefined) }; // req.body is empty
    } 
    catch {res.status(400).json('Wrong Input')}

}

module.exports = SearchHandler;