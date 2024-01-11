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
    console.log(itemId);
    getConnection().then((connection) => {
      connection.query('SELECT * FROM tbl_usuario WHERE I_IDPERFIL = ?', [itemId], (err, result) => {
        connection.release();
        callback(err, result);
      });
    }).catch((error) => {
      callback(error, null);
    });
  }
  
  create(newItem, callback) {
    getConnection().then((connection) => {
      connection.query('INSERT INTO tbl_usuario SET ?', newItem, (err, result) => {
        connection.release();
        callback(err, result);
      });
    }).catch((error) => {
      callback(error, null);
    });
  }

  delete(itemId, callback) {
    getConnection().then((connection) => {
      connection.query('DELETE FROM tbl_usuario WHERE I_IDPERFIL = ?', [itemId], (err, result) => {
        connection.release();
        callback(err, result);
      });
    }).catch((error) => {
      callback(error, null);
    });
  }

  update(itemId, updatedItem, callback) {
    getConnection().then((connection) => {
      connection.query('UPDATE tbl_usuario SET ? WHERE I_IDPERFIL = ?', [updatedItem, itemId], (err, result) => {
        connection.release();
        callback(err, result);
      });
    }).catch((error) => {
      callback(error, null);
    });  
  }
  
}
  
  module.exports = new Tbl_usuario();