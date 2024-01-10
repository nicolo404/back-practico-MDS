const getConnection = require('../database/dbmysql').getConnection;

class Tbl_usuario {
  getAll() {
    return new Promise((resolve, reject) => {
      getConnection().then((connection) => {
        connection.query('SELECT * FROM	tbl_usuario', (err, result) => {
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
      getConnection.query('SELECT * FROM tbl_avisomail WHERE id = ?', [itemId], callback);
    }
  
    create(newItem, callback) {
      getConnection.query('INSERT INTO tbl_avisomail SET ?', newItem, callback);
    }
  
    update(itemId, updatedItem, callback) {
      getConnection.query('UPDATE tbl_avisomail SET ? WHERE id = ?', [updatedItem, itemId], callback);
    }
  
    delete(itemId, callback) {
      getConnection.query('DELETE FROM tbl_avisomail WHERE id = ?', [itemId], callback);
    }
  }
  
  module.exports = new Tbl_usuario();