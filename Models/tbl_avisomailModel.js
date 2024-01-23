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
    
    
    create(newItem) {
        return new Promise((resolve, reject) => {
        getConnection().then((connection) => {
            connection.query('INSERT INTO tbl_avisomail SET ?', [newItem], (err, result) => {
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

    delete(id) {
        return new Promise((resolve, reject) => {
        getConnection().then((connection) => {
            console.log("delete id"+id);
            connection.query('DELETE FROM tbl_avisomail WHERE i_idpatron = ?', [id], (err, result) => {
            connection.release();
            if (err) {
                console.log("error: "+err);
                reject(err);
            } else {
                console.log("result: "+result);
                resolve(result);
            }
            });
        }).catch((error) => {
            console.log("error catch: "+error);
            reject(error);
        });
        });
    }
    
    }

module.exports = new Tbl_avisomail();