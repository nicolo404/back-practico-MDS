const express = require('express');
const router = express.Router();
const tbl_tipoentradaController = require('../Controllers/tbl_tipoentradaController');

router.get('/tbl_tipoentrada', async (req, res) => {
    await tbl_tipoentradaController.getAll(req, res);
  });

module.exports = router;
