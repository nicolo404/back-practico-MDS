const express = require("express");
const router = express.Router();
const tbl_supervisorController = require("../Controllers/tbl_supervisorController");

router.get("/tbl_supervisor", async (req, res) => {
    await tbl_supervisorController.getAll(req, res);
    });

    module.exports = router;