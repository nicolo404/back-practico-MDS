const express = require('express');
const router = express.Router();
const tbl_categoriaentradaController = require('../Controllers/tbl_categoriaentradaController');

router.get('/tbl_categoriaentrada', async (req, res) => {
    await tbl_categoriaentradaController.getAll(req, res);
  });

module.exports = router;