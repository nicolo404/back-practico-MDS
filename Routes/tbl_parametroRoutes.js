const express = require('express');
const router = express.Router();
const tbl_parametroController = require('../Controllers/tbl_parametroController');

router.get('/tbl_parametro', async (req, res) => {
    await tbl_parametroController.getAll(req, res);
    });

router.get('/tbl_parametro/:id', async (req, res) => {
    await tbl_parametroController.getById(req, res);
    });

router.post('/tbl_parametro', async (req, res) => {
    await tbl_parametroController.create(req, res);
    });
router.put('/tbl_parametro/:id', async (req, res) => {
    await tbl_parametroController.update(req, res);
    });
router.delete('/tbl_parametro/:id', async (req, res) => {
    await tbl_parametroController.delete(req, res);
    });

module.exports = router;