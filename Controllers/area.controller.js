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
}
export const getArea = async (req, res) => {
    try {
        const [result] = await pool.query(
            "SELECT * FROM area WHERE id = ?", [req.params.id]
        );
    
        if (result.length === 0) {
            return res.status(404).json({ Message: "Area no Encontrado" });
        }
        res.json(result[0]);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}
