import { pool } from "../DataAccess/db.js"

export const getTipos = async (req, res) => {
    try {
        const [result] = await pool.query(
            "SELECT * FROM tipo_activo;"
        );
        res.json(result)
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};