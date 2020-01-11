const express = require("express");
const router = express.Router();
const verifyToken = require("./VerifyToken");
const AddUsersHandler = require("../Handlers/UsersHandlers/AddUsersHandler");
const DeleteHandler = require("../Handlers/CommonHandlers/DeleteHandler");
const SearchHandler = require("../Handlers/CommonHandlers/SearchHandler");
const UpdateHandler = require("../Handlers/CommonHandlers/UpdateHandler");


router.get("/search", verifyToken, (req, res) => {
    SearchHandler(req, res, 'User', 'name', 'barcode')
});

router.post("/add", verifyToken, (req, res) => {
    AddUsersHandler(req, res)
});

router.put("/:userID", verifyToken, (req, res) => {
    UpdateHandler(req, res, 'User', 'userID', 'name', 'barcode', 'memberType')
});

router.delete("/delete", verifyToken, (req, res) => {
    DeleteHandler(req, res, 'User', 'id', 'barcode', 'User')
});



module.exports = router;
