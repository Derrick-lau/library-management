const express = require("express");
const router = express.Router();
const verifyToken = require("../Handlers/GeneralHandlers/verifyToken");
const SearchHandler = require("../Handlers/GeneralHandlers/SearchHandler")

router.get("/search", verifyToken, (req, res) => {
    SearchHandler(req, res, 'Log', 'createdAt')
})

module.exports = router;
