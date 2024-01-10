const express = require('express');
const router = express.Router();
const tbl_usuarioController = require('../Controllers/tbl_usuarioController');

router.get('/tbl_usuario', async (req, res) => {
    await tbl_usuarioController.getAll(req, res);
  });

module.exports = router;