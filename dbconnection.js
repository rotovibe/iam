var mysql = require('mysql');
var connection = mysql.createPool({
    host: '165.227.109.102',
    user: 'root',
    password: 'secret',
    database: 'iam-proto'
});
module.exports = connection;