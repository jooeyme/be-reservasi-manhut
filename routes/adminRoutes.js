const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");

router.get('/', adminController.getAdmin);
router.patch('/edit/:id', adminController.updateAdmin);
router.delete('/delete/:id', adminController.deleteAdmin);


module.exports = router;