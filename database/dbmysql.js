
const mysql = require('mysql2');

// Configuración de la conexión a la base de datos
const connection = mysql.createConnection({
  host: '10.200.5.34',
  user: 'nsilva',
  password: 'NicoSilva2024@',
  database: 'entradas_test'
});

// Función para conectar a la base de datos
function connectToDatabase() {
  return new Promise((resolve, reject) => {
    connection.connect((err) => {
      if (err) {
        reject(err);
      } else {
        console.log('Conexión exitosa a la base de datos MySQL');
        resolve();
      }
    });
  });  
}

// Función para realizar consultas a la base de datos
function getTables() {
    return new Promise((resolve, reject) => {
      const query = 'SHOW TABLES';
      connection.query(query, (error, results, fields) => {
        if (error) {
          reject(error);
        } else {
          const tables = results.map(result => result[Object.keys(result)[0]]);
          resolve(tables);
          console.log('Tablas en la base de datos:', tables);
        }
      });
    });
  }

// Exportar la función de conexión para ser utilizada en otros archivos
module.exports = {
  connectToDatabase,
  getTables    
};
