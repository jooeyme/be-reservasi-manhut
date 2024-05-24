const express = require("express");
const router = express.Router();
const roomController = require("../controllers/roomController");
const upload = require("../middleware/uploadGambar");
const authRole = require("../middleware/authRole")



router.get("/",  roomController.findAllRoom);
router.post("/",  upload.single('gambar_room'), roomController.createRoom);
router.get("/:id",  roomController.showRoomById);
router.patch("/edit/:id",  upload.single('gambar_room'), roomController.editRoom);
router.delete("/:id",  roomController.deleteRoom);

module.exports = router;