const express = require("express");
const router = express.Router();
const y=require('../controller/recipiesController.js')

router.get("/api/recepies",y.getrecepie);
router.get("/api/recepies/search/:recepie_Name",y.getFilterController)
router.post("/api/recepies",y.addrecepie);
router.delete("/api/recepies/:recepie_Id",y.removeRecepie)
router.put('/api/recepies/:recepie_Id',y.updateRecepie)
//method for users table
router.get("/user",y.allUser)
router.post("/user",y.addUser);

module.exports = router;
