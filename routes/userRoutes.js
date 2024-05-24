const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get('/', userController.getUser);
router.patch('/edit/:id', userController.updateUser);
router.delete('/delete/:id', userController.deleteUser);

module.exports = router;