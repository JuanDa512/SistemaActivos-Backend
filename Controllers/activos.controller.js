import { pool } from "../DataAccess/db.js"

export const getActivos = async (req, res) => {
    try {
        const [result] = await pool.query(
            "SELECT activos.id, activos.nombre_activo, activos.descripcion, activos.valor_compra, activos.fecha_compra, responsable.nombre, responsable.apellido, responsable.cargo, tipo_activo.tipo, area.name_area FROM activos, responsable, area, tipo_activo WHERE activos.id_responsable=responsable.id AND activos.id_area=area.id AND activos.id_tipo_activo=tipo_activo.id"
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
        const { nombre_activo, descripcion, valor_compra } = req.body;
        console.log(req.body);
        const [result] = await pool.query(
            "INSERT INTO activos(nombre_activo, descripcion, valor_compra) VALUES (?, ?, ?)",
            [nombre_activo, descripcion, valor_compra]
        );
        res.json({
            id: result.insertId,
            nombre_activo, 
            descripcion,
            valor_compra,
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