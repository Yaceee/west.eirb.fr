const mysql = require('mysql')

var con = mysql.createConnection({
    host: "localhost",
    user: "new_user",
    password: "password",
    database: "WST"
});
  