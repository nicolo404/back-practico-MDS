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
    getById(itemId) {
        return new Promise((resolve, reject) => {
        getConnection()
            .then((connection) => {
            connection.query(
                "SELECT * FROM tbl_supervisor WHERE i_idsupervisor = ?",
                [itemId],
                (err, result) => {
                connection.release();
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
                }
            );
            })
            .catch((error) => {
            reject(error);
            });
        });
    }
    update(itemId, updatedItem) {
        return new Promise((resolve, reject) => {
        getConnection()
            .then((connection) => {
            connection.query(
                "UPDATE tbl_supervisor SET ? WHERE i_idsupervisor = ?",
                [updatedItem, itemId],
                (err, result) => {
                connection.release();
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
                }
            );
            })
            .catch((error) => {
            reject(error);
            });
        });
    }
    
    create(newItem) {
        return new Promise((resolve, reject) => {
        getConnection()
            .then((connection) => {
            connection.query(
                "INSERT INTO tbl_supervisor SET ?",
                [newItem],
                (err, result) => {
                connection.release();
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
                }
            );
            })
            .catch((error) => {
            reject(error);
            });
        });
    }
    
    delete(itemId) {
        return new Promise((resolve, reject) => {
        getConnection()
            .then((connection) => {
            connection.query(
                "DELETE FROM tbl_supervisor WHERE i_idsupervisor = ?",
                [itemId],
                (err, result) => {
                connection.release();
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
                }
            );
            })
            .catch((error) => {
            reject(error);
            });
        });
    }
    
    
}

module.exports = new Tbl_supervisor();