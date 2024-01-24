const Tbl_categoriaentrada = require("../Models/tbl_categoriaentradaModel");
const moment = require('moment-timezone');

class Tbl_categoriaentradaController {
    async getAll(req, res) {
        try {
        const data = await Tbl_categoriaentrada.getAll();
        res.json(data);
        } catch (error) {
        res.json(error);
        }
    }
    async getById(req, res) {
        try {
        console.log("controlador: "+req.params.id);
        const data = await Tbl_categoriaentrada.getById(req.params.id);
        res.json(data);
        } catch (error) {
        res.json(error);
        }
    }
    async create(req, res) {
        try {
        const newItem = req.body;
        console.log("controlador: ")
        console.log(newItem)
        const data = await Tbl_categoriaentrada.create(newItem);
        res.json({message: 'Categoria creada', data: data});
        } catch (error) {
        res.json(error);
        }
    }
    async delete(req, res) {
        try {
        const itemId = req.params.id;
        const data = await Tbl_categoriaentrada.delete(itemId);
        res.json(data);
        } catch (error) {
        res.json(error);
        }
    }
    async update(req, res) {
        try {
        const itemId = req.params.id;
        const updatedItem = req.body;
        const data = await Tbl_categoriaentrada.update(itemId, updatedItem);
        res.json({message: 'Categoria actualizada', data: data});
        } catch (error) {
        res.json(error);
        }
    }
    }
    
module.exports = new Tbl_categoriaentradaController();