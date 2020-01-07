const express = require("express");
const router = express.Router();
const signinAuthentication = require("../Handlers/SignInHandlers/SiginHandler");


router.post("/", (req, res) => {
     signinAuthentication(req, res);
})

module.exports = router;
