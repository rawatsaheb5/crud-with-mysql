const postSchema = ` CREATE TABLE IF NOT EXISTS Posts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT,
    image TEXT,
    userId INT,
    FOREIGN KEY(userId) REFERENCES Users(id) ON DELETE CASCADE
)`;

module.exports = postSchema;