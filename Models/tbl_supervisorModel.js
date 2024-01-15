const getConnection = require("../database/dbmysql").getConnection;

class Tbl_supervisor {
    getAll() {
        return new Promise((resolve, reject) => {
        getConnection()
            .then((connection) => {
            connection.query("SELECT * FROM tbl_supervisor", (err, result) => {
                connection.release();
                if (err) {
                reject(err);
                } else {
                resolve(result);
                }
            });
            })
            .catch((error) => {
            reject(error);
            });
        });
    }
    getById(itemId, callback) {
        console.log(itemId);
        getConnection()
        .then((connection) => {
            connection.query(
            "SELECT * FROM tbl_supervisor WHERE I_IDTIPOENTRADA = ?",
            [itemId],
            (err, result) => {
                connection.release();
                callback(err, result);
            }
            );
        })
        .catch((error) => {
            callback(error, null);
        });
    }
    
    create(newItem, callback) {
        getConnection()
        .then((connection) => {
            connection.query(
            "INSERT INTO tbl_supervisor SET ?",
            newItem,
            (err, result) => {
                connection.release();
                callback(err, result);
            }
            );
        })
        .catch((error) => {
            callback(error, null);
        });
    }
    
    delete(itemId, callback) {
        getConnection()
        .then((connection) => {
            connection.query(
            "DELETE FROM tbl_supervisor WHERE I_IDTIPOENTRADA = ?",
            [itemId],
            (err, result) => {
                connection.release();
                callback(err, result);
            }
            );
        })
        .catch((error) => {
            callback(error, null);
        });
    }
    
    update(itemId, updatedItem, callback) {
        getConnection()
        .then((connection) => {
            connection.query(
            "UPDATE tbl_supervisor SET ? WHERE I_IDTIPOENTRADA = ?",
            [updatedItem, itemId],
            (err, result) => {
                connection.release();
                callback(err, result);
            }
            );
        })
        .catch((error) => {
            callback(error, null);
        });
    }
}

module.exports = new Tbl_supervisor();