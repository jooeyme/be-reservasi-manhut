const express = require("express");
const router = express.Router();
const bookingController = require("../controllers/bookingController");
const {authenticate, authorize} = require("../middleware/authRole")


// Definisikan rute untuk mendapatkan semua pengguna
router.get("/",  bookingController.findAllBooking);
router.get("/my_booking", authenticate, authorize(["user"], "user"), bookingController.findAllBookingByUserId);
router.post("/room", authenticate, authorize(["user"], "user"), bookingController.createBookingRoom);
router.post("/tool", authenticate, authorize(["user"], "user"),  bookingController.createBookingTool);
router.get("/:id",  authenticate, authorize(["user","admin","admin_staff"], "user"), bookingController.showBookingById);
router.patch("/:id", authenticate, authorize(["admin","admin_staff"], "admin"), bookingController.editBooking);
router.delete("/delete/:id", authenticate, authorize(["user","admin","admin_staff"], "user"), bookingController.deleteBooking);
router.get("/room/:room_id",  bookingController.getBookingByRoomId);

module.exports = router;