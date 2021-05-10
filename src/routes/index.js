const express = require("express");
const router = express.Router();

const {
  getRombels,
  postRombel,
  editRombel,
  deleteRombel,
} = require("../controllers/rombel");

router.get("/rombels", getRombels);
router.post("/rombel", postRombel);
router.patch("/rombel/:id", editRombel);
router.delete("/rombel/:id", deleteRombel);

module.exports = router;
