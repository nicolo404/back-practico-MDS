const Tbl_usuarioModel = require('../Models/tbl_usuarioModel');

class tbl_usuarioController {
    async getAll(req, res) {
        try {
          const result = await Tbl_usuarioModel.getAll();
          res.json(result);
        } catch (error) {
          res.status(500).send('Error al obtener los elementos');
        }
      }
  
    getById(req, res) {
      const itemId = req.params.id;
      Tbl_usuarioModel.getById(itemId, (err, result) => {
        if (err) {
          res.status(500).send(`Error al obtener el elemento con ID ${itemId}`);
        } else {
          res.json(result[0]);
        }
      });
    }
  
    create(req, res) {
      const newItem = req.body;
      Tbl_usuarioModel.create(newItem, (err, result) => {
        if (err) {
          res.status(500).send('Error al crear un nuevo elemento');
        } else {
          res.status(201).send('Elemento creado con éxito');
        }
      });
    }
  
    update(req, res) {
      const itemId = req.params.id;
      const updatedItem = req.body;
      Tbl_usuarioModel.update(itemId, updatedItem, (err, result) => {
        if (err) {
          res.status(500).send(`Error al actualizar el elemento con ID ${itemId}`);
        } else {
          res.send('Elemento actualizado con éxito');
        }
      });
    }
  
    delete(req, res) {
      const itemId = req.params.id;
      Tbl_usuarioModel.delete(itemId, (err, result) => {
        if (err) {
          res.status(500).send(`Error al eliminar el elemento con ID ${itemId}`);
        } else {
          res.send('Elemento eliminado con éxito');
        }
      });
    }
  }

  module.exports = new tbl_usuarioController();