'use strict';

const mysql = require('mysql2/promise');
const url = process.env.MYSQL_URL;

mysql.createConnection(url).then((connection) => {  // <1>
  console.log('Connexion réussie :-)');             // <2>
  connection.end();                                 // <3>
});
