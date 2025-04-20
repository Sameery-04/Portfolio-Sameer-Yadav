const express = require('express');
const router = express.Router()

// const {}
const {postcontact}=require('../controllers/Contact')

router.post("/getcontact", postcontact);

module.exports=router
