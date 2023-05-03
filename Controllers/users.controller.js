import { pool } from "../DataAccess/db.js"

export const getUsers = async (req, res) => {
    try {
        const [result] = await pool.query(
            "SELECT * FROM usuarios WHERE id = ?", [req.params.id]
        );
        res.json(result[0])
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const updateUser = async (req, res) => {
    console.log(req.body)
    try {
        const [result] = await pool.query(
            "UPDATE usuarios SET ? WHERE id = ?", [
                req.body,
                req.params.id        
        ]);
    
        if (result.affectedRows === 0) {
            return res.status(404).json({ Message: "Activo no Encontrado" });
        }
        return res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};