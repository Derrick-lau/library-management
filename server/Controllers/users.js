const express = require("express");
const router = express.Router();
const verifyToken = require("../Handlers/GeneralHandlers/verifyToken");
const AddUsersHandler = require("../Handlers/UsersHandlers/AddUsersHandler");
const DeleteHandler = require("../Handlers/GeneralHandlers/DeleteHandler");
const SearchHandler = require("../Handlers/GeneralHandlers/SearchHandler");
const UpdateHandler = require("../Handlers/GeneralHandlers/UpdateHandler")

router.post("/add", verifyToken, (req, res) => {
    AddUsersHandler(req, res)
});

router.get("/search", verifyToken, (req, res) => {
    SearchHandler(req, res, 'User', 'name', 'barcode')
});

router.put("/:userID", (req, res) => {
    UpdateHandler(req, res, 'User', 'userID', 'name', 'barcode', 'memberType', 'User')
});

router.delete("/delete", verifyToken, (req, res) => {
    DeleteHandler(req, res, 'User', 'id', 'barcode', 'User')
});

module.exports = router;
