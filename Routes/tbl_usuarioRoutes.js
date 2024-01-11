const express = require('express');
const router = express.Router();
const tbl_usuarioController = require('../Controllers/tbl_usuarioController');

router.get('/tbl_usuario', async (req, res) => {
    await tbl_usuarioController.getAll(req, res);
  });
router.get('/tbl_usuario/:id', (req, res) => {
    tbl_usuarioController.getById(req, res);
  });
router.post('/crear-tbl_usuario', tbl_usuarioController.create);
router.delete('/delete-tbl_usuario/:id', (req, res) => {
    tbl_usuarioController.delete(req, res);
  });


module.exports = router;

