const express = require("express");
 

const router = express.Router();

const {addUser,getAllUser,getUserById,updateDetails,deleteUser}=  require("../controllers/user")


router.post("/addUser",addUser);
router.get("/getAllUser",getAllUser);
router.get("/getUserById/:id",getUserById);
router.put("/updateDetails/:id",updateDetails);
router.delete("/delete/:id",deleteUser);




// router.post("/login",signIn)

module.exports = router;