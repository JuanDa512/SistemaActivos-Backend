import { pool } from "../DataAccess/db.js"

export const login = async (req, res) => {
    try {
        const [result] = await pool.query(
            "SELECT * FROM usuarios WHERE username = ? AND password = ?", [
                req.body.username,
                req.body.password
            ]
        );
        res.json(result)
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};