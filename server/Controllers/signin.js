const express = require("express");
const router = express.Router();
const signinAuthentication = require("../Handlers/SiginHandler");


router.post("/", (req, res) => {
    signinAuthentication(req, res)
})

module.exports = router;