const mysql2= require("mysql2");
const pool=mysql2.createPool({
    host:'localhost',
    port:3306,
    user:"root",
    password:"manager",
    database:"project"
});
module.exports=pool;