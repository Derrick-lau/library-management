const express = require("express");
const router = express.Router();
const verifyToken = require("../Handlers/CommonHandlers/verifyToken");
const AddUsersHandler = require("../Handlers/UsersHandlers/AddUsersHandler");
const DeleteHandler = require("../Handlers/CommonHandlers/DeleteHandler");
const SearchHandler = require("../Handlers/CommonHandlers/SearchHandler");
const UpdateHandler = require("../Handlers/CommonHandlers/UpdateHandler")

router.post("/add", verifyToken, (req, res) => {
    AddUsersHandler(req, res)
});

router.get("/search", verifyToken, (req, res) => {
    SearchHandler(req, res, 'User', 'name', 'barcode')
});

router.put("/:userID", verifyToken, (req, res) => {
    UpdateHandler(req, res, 'User', 'userID', 'name', 'barcode', 'memberType', 'User')
});

router.delete("/delete", verifyToken, (req, res) => {
    DeleteHandler(req, res, 'User', 'id', 'barcode', 'User')
});

module.exports = router;
