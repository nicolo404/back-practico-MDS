const Tbl_avisomail = require('../Models/tbl_avisomailModel');

class tbl_avisomailController {
    async getAll(req, res) {
        try {
          const result = await Tbl_avisomail.getAll();
          res.json(result);
        } catch (error) {
          res.status(500).send('Error al obtener los elementos');
        }
      }

    async create(req, res) {
        try {
          const newItem = req.body;
          const result = await Tbl_avisomail.create(newItem);
          res.json({ message: 'Elemento creado' , result});
        } catch (error) {
          res.status(500).send('Error al crear el elemento');
        }
      }
    
    async delete(req, res) {
      const { id } = req.params;
        try {
          console.log(id);
          const result = await Tbl_avisomail.delete(id);
          res.json({ message: 'Elemento eliminado', result });
        } catch (error) {
          res.status(500).send('Error al eliminar el elemento '+id);
        }
      }  
    
    }
    
module.exports = new tbl_avisomailController();