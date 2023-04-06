import { pool } from "../DataAccess/db.js"

export const getActivos = async (req, res) => {
    try {
        const [result] = await pool.query(
            "SELECT * FROM activos ORDER BY fecha_compra ASC"
        );
        res.json(result)
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const getActivo = async (req, res) => {
    try {
        const [result] = await pool.query(
            "SELECT * FROM activos WHERE id = ?", [req.params.id]
        );
    
        if (result.length === 0) {
            return res.status(404).json({ Message: "Activo no Encontrado" });
        }
        res.json(result[0]);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
;}

export const createActivo = async (req, res) => {
    try {
        const { nombre, descripcion, tipo, valor_compra, responsable } = req.body;
        console.log(req.body);
        const [result] = await pool.query(
            "INSERT INTO activos(nombre, descripcion, tipo, valor_compra, responsable) VALUES (?, ?, ?, ?, ?)",
            [nombre, descripcion, tipo, valor_compra, responsable]
        );
        res.json({
            id: result.insertId,
            nombre, 
            descripcion,
            tipo,
            valor_compra,
            responsable,
        });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const updateActivo = async (req, res) => {
    try {
        const [result] = await pool.query(
            "UPDATE activos SET ? WHERE id = ?", [
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

export const deleteActivo = async (req, res) => {
    try {
        const [result] = await pool.query(
            "DELETE FROM activos WHERE id = ?", [req.params.id]
        );
    
        if (result.affectedRows === 0) {
            return res.status(404).json({ Message: "Activo no Encontrado" });
        }
        return res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};