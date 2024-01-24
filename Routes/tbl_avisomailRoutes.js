const express = require('express');
const router = express.Router();
const tbl_avisomailController = require('../Controllers/tbl_avisomailController');

router.get('/tbl_avisomail', async (req, res) => {
    await tbl_avisomailController.getAll(req, res);
  });

router.get('/tbl_avisomail/:id', (req, res) => {
    tbl_avisomailController.getById(req, res);
  });
router.post('/create-tbl_avisomail', (req, res) => {
    tbl_avisomailController.create(req, res);
  });

router.delete('/delete-tbl_avisomail/:id', (req, res) => {
    tbl_avisomailController.delete(req, res);
  });
router.put('/update-tbl_avisomail/:id', (req, res) => {
    tbl_avisomailController.update(req, res);
  });

module.exports = router;