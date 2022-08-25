const mysql = require('mysql2/promise');

// const connection = mysql.createPool({
//   host: 'localhost',
//   port: 33060,
//   user: 'root',
//   password: 'root',
//   database: 'trybecashdb',
//   waitForConnections: true,
//   connectionLimit: 10,
//   queueLimit: 0});

const connection = mysql.createPool({
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE_NAME,
  waitForConnections: process.env.MYSQL_WAIT_FOR_CONNECTIONS,
  connectionLimit: process.env.MYSQL_CONNECTION_LIMIT,
  queueLimit: process.env.MYSQL_QUEUE_LIMIT
});

module.exports = connection;
