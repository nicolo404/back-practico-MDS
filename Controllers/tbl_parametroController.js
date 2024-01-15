const Tbl_parametro = require("../Models/tbl_parametroModel.js");

class Tbl_parametroController {
    constructor() {}
    getAll(req, res) {
        Tbl_parametro.getAll()
        .then((response) => {
            res.status(200).json(response);
        })
        .catch((error) => {
            console.log(error);
            res.status(500).json(error);
        });
    }
    getById(req, res) {
        Tbl_parametro.getById(req.params.id, (err, data) => {
        if (err) {
            res.status(500).json(err);
        } else {
            res.status(200).json(data);
        }
        });
    }
    create(req, res) {
        const newItem = req.body;
        Tbl_parametro.create(newItem, (err, data) => {
        if (err) {
            res.status(500).json(err);
        } else {
            res.status(201).json(data);
        }
        });
    }
    delete(req, res) {
        Tbl_parametro.delete(req.params.id, (err, data) => {
        if (err) {
            res.status(500).json(err);
        } else {
            res.status(200).json(data);
        }
        });
    }
    update(req, res) {
        const updatedItem = req.body;
        Tbl_parametro.update(req.params.id, updatedItem, (err, data) => {
        if (err) {
            res.status(500).json(err);
        } else {
            res.status(200).json(data);
        }
        });
    }
    }   

    module.exports = new Tbl_parametroController();