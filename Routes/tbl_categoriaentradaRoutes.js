const express = require('express');
const router = express.Router();
const tbl_categoriaentradaController = require('../Controllers/tbl_categoriaentradaController');

router.get('/tbl_categoriaentrada', async (req, res) => {
    await tbl_categoriaentradaController.getAll(req, res);
  });
router.get('/only_one-tbl_categoriaentrada/:id', async (req, res) => {
    await tbl_categoriaentradaController.getById(req, res);
  });
router.post('/crear-tbl_categoriaentrada', async (req, res) => {
    await tbl_categoriaentradaController.create(req, res);
  });
router.put('/update-tbl_categoriaentrada/:id', async (req, res) => {
    await tbl_categoriaentradaController.update(req, res);
  });
  router.delete('/delete-tbl_categoriaentrada/:id', async (req, res) => {
    await tbl_categoriaentradaController.delete(req, res);
  }); 

module.exports = router;