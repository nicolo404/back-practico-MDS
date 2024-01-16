const express = require("express");
const router = express.Router();
const tbl_supervisorController = require("../Controllers/tbl_supervisorController");

router.get("/tbl_supervisor", async (req, res) => {
    await tbl_supervisorController.getAll(req, res);
    });
router.get("/tbl_supervisor/:id", async (req, res) => {
    await tbl_supervisorController.getById(req, res);
    });
router.post("/crear-tbl_supervisor", async (req, res) => {
    await tbl_supervisorController.create(req, res);
    });
router.put("/update-tbl_supervisor/:id", async (req, res) => {
    await tbl_supervisorController.update(req, res);
    });
router.delete("/delete-tbl_supervisor/:id", async (req, res) => {
    await tbl_supervisorController.delete(req, res);
    });

    module.exports = router;