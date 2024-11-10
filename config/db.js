const mysql = require('mysql2/promise');
const dotenv = require('dotenv')
const userSchema = require('../schema/user');
const postSchema = require('../schema/post');
dotenv.config();
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    password: process.env.DB_PASSWORD,
    user:process.env.DB_USER
});
const createTable = async (tableQuery, tableName) => {
    try {
        await pool.query(tableQuery);
        console.log(`${tableName} is created`);
    } catch (error) {
        console.error(`Error in creating ${tableName} table => `, error);
    }
};

createTable(userSchema, 'Users');
createTable(postSchema, 'Posts');
module.exports = pool;