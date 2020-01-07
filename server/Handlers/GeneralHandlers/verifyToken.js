const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const {authorization} = req.headers
    if(!authorization){
        return res.sendStatus(403);
    } else {
        try {
            const verified = jwt.verify(authorization, "shhh");
            req.barcode = verified;
            next();
        } catch {res.sendStatus(403)}
    }
}

module.exports = verifyToken;