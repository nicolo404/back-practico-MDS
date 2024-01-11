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
          console.log(result);
          res.json(result[0]);
        }
      });
    }
  
    async create(req, res) {
      try {
        const newItem = req.body;
        Tbl_usuarioModel.create(newItem, (err, result) => {
          if (err) {
            // Log de error
            console.error('Error al crear un nuevo elemento:', err);
    
            // Enviar respuesta de error al cliente
            res.status(500).send('Error interno del servidor al crear un nuevo elemento');
          } else {
            // Log informativo
            console.log('Elemento creado con éxito:');
    
            // Enviar respuesta con ID del nuevo elemento
            res.status(201).json({ mensaje: 'Elemento creado con éxito', id: result.insertId });
          }
        });
      } catch (error) {
        // Este bloque catch captura errores síncronos y no se ejecutará en el contexto asincrónico de la función async
        console.error('Error al crear un nuevo elemento (síncrono):', error);
        res.status(500).send('Error interno del servidor al crear un nuevo elemento (síncrono)');
      }
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