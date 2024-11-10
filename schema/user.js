
const userSchema = `CREATE TABLE IF NOT EXISTS Users (

    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL,
    username VARCHAR(100) NOT NULL UNIQUE

    


)`

module.exports = userSchema;