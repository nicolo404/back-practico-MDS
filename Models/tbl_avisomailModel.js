const getConnection = require("../database/dbmysql").getConnection;

class Tbl_avisomail {
    getAll() {
        return new Promise((resolve, reject) => {
        getConnection().then((connection) => {
            connection.query('SELECT * FROM tbl_avisomail', (err, result) => {
            connection.release();
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
            });
        }).catch((error) => {
            reject(error);
        });
        });
    }
    getById(itemId, callback) {
        console.log(itemId);
        getConnection().then((connection) => {
        connection.query('SELECT * FROM tbl_avisomail WHERE I_IDAVISOMAIL = ?', [itemId], (err, result) => {
            connection.release();
            callback(err, result);
        });
        }).catch((error) => {
        callback(error, null);
        });
    }
    
    create(newItem, callback) {
        getConnection().then((connection) => {
        connection.query('INSERT INTO tbl_avisomail SET ?', newItem, (err, result) => {
            connection.release();
            callback(err, result);
        });
        }).catch((error) => {
        callback(error, null);
        });
    }
    
    delete(itemId, callback) {
        getConnection().then((connection) => {
        connection.query('DELETE FROM tbl_avisomail WHERE I_IDAVISOMAIL = ?', [itemId], (err, result) => {
            connection.release();
            callback(err, result);
        });
        }).catch((error) => {
        callback(error, null);
        });
    }
    
    update(itemId, updatedItem, callback) {
        getConnection().then((connection) => {
        connection.query('UPDATE tbl_avisomail SET ? WHERE I_IDAVISOMAIL = ?', [updatedItem, itemId], (err, result) => {
            connection.release();
            callback(err, result);
        });
        }).catch((error) => {
        callback(error, null);
        });
    }
    }

module.exports = new Tbl_avisomail();