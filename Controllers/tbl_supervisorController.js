const Tbl_supervisor = require("../Models/tbl_supervisorModel");

class Tbl_supervisorController {
    async getAll(req, res) {
        try {
        const data = await Tbl_supervisor.getAll();
        res.json(data);
        } catch (error) {
        res.json(error);
        }
    }
    
    async getById(req, res) {
        try {
        const data = await Tbl_supervisor.getById(req.params.id);
        res.json(data);
        } catch (error) {
        res.json(error);
        }
    }
    
    async create(req, res) {
        try {
        const newItem = req.body;
        const data = await Tbl_supervisor.create(newItem);
        res.json(data);
        } catch (error) {
        res.json(error);
        }
    }
    
    async delete(req, res) {
        try {
        const itemId = req.params.id;
        const data = await Tbl_supervisor.delete(itemId);
        res.json(data);
        } catch (error) {
        res.json(error);
        }
    }
    
    async update(req, res) {
        try {
        const itemId = req.params.id;
        const updatedItem = req.body;
        const data = await Tbl_supervisor.update(itemId, updatedItem);
        res.json(data);
        } catch (error) {
        res.json(error);
        }
    }
    }

    module.exports = new Tbl_supervisorController();