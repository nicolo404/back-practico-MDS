const getConnection = require("../database/dbmysql").getConnection;

class Tbl_categoriaentrada {
    getAll() {
        return new Promise((resolve, reject) => {
        getConnection()
            .then((connection) => {
            connection.query("SELECT * FROM tbl_categoriaentrada", (err, result) => {
                connection.release();
                console.log(result);
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
                console.log("itemId: "+itemId);
            connection.query(
                "SELECT * FROM tbl_categoriaentrada WHERE I_IDCATENTRADA = ?",
                [itemId],
                (err, result) => {
                connection.release();
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                    console.log(result);
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
                "UPDATE tbl_categoriaentrada SET ? WHERE I_IDCATENTRADA = ?",
                [updatedItem, itemId],
                (err, result) => {
                connection.release();
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                    console.log(result);
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

module.exports = new Tbl_categoriaentrada();