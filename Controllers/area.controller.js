import { pool } from "../DataAccess/db.js"

export const getAreas = async (req, res) => {
    try {
        const [result] = await pool.query(
            "SELECT * FROM area;"
        );
        res.json(result)
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};