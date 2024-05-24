const express = require("express");
const router = express.Router();
const toolController = require("../controllers/toolController");
const upload = require("../middleware/uploadGambar")
const authRole = require("../middleware/authRole");



router.get("/", toolController.findAllTool);
router.post("/", upload.single('gambar_tool'), toolController.createTool);
router.get("/:id", toolController.showToolById);
router.patch("/edit/:id", upload.single('gambar_tool'), toolController.editTool);
router.delete("/:id", toolController.deleteTool);

module.exports = router;