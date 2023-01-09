//mysql connection
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'mysqldatabase-ae.mysql.database.azure.com',
    user: 'azureuser',
    password: 'Database1234',
    database: 'mysqlproject',
    port: 3306,
    ssl: true
});

connection.connect();

module.exports = {
    connection: connection
}