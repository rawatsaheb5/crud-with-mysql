const pool  = require("../config/db");


const createPost = async (req, res) => {
    
    try {
        const { title, description, image, userId } = req.body;
        if (!title || !userId ||  !description || !image ) {
            return res.status(400).json({message:"all fields are required"})
        }
        const response = await pool.query(
            `INSERT INTO Posts (title, description, image, userId) VALUES(?,?,?,?)`,
            [title, description, image, userId]
        )
        res.status(201).json('post created successfully')
    }
    catch (error) {
        console.log(error);
    return res.status(500).json({ message: "internal server error" });
    }
}
const deletePost = async (req, res) => {
    
    try {
        const id = req.params.id;
        if (!id ) {
            return res.status(400).json({message:"id is required"})
        }
        const response = await pool.query(
            `DELETE FROM Posts WHERE id = ?`,
            [id]
        )
        res.status(201).json('post deleted successfully')
    }
    catch (error) {
        console.log(error);
    return res.status(500).json({ message: "internal server error" });
    }
}
module.exports = {
    createPost,
    deletePost,
}