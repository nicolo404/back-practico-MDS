const mysql = require('mysql2');

// Configuración del pool de conexiones
const pool = mysql.createPool({
  host: '10.200.5.34',
  user: 'nsilva',
  password: 'NicoSilva2024@',
  database: 'entradas_test',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

const getConnection = () => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        reject(err);
        console.log('Error al conectar a la base de datos');
      } else {
        resolve(connection);
        console.log('Conexión exitosa a la base de datos');
      }
    });
  });
}

function getTables() {
  return new Promise((resolve, reject) => {
    pool.query('SHOW TABLES', (err, result) => {
      if (err) {
        reject(err);
      } else {
        const tables = result.map(row => Object.values(row)[0]);
        resolve(tables);
        console.log('Tablas de la base de datos:', tables);
      }
    });
  });
}

module.exports = { getConnection , getTables};
