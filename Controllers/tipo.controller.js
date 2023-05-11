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

export const getTipo = async (req, res) => {
    try {
        const [result] = await pool.query(
            "SELECT * FROM tipo_activo WHERE id = ?", [req.params.id]
        );
    
        if (result.length === 0) {
            return res.status(404).json({ Message: "Tipo no Encontrado" });
        }
        res.json(result[0]);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}