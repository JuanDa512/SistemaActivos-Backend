import { pool } from "../DataAccess/db.js"

export const getActivos = async (req, res) => {
    try {
        const [result] = await pool.query(
            "SELECT activos.id, activos.id_responsable, activos.id_rfid, activos.nombre_activo, activos.descripcion, activos.valor_compra, activos.fecha_compra, responsable.nombre, responsable.apellido, responsable.cargo, tipo_activo.tipo, area.name_area, activos.estado  FROM activos, responsable, area, tipo_activo WHERE activos.id_responsable=responsable.id AND activos.id_area=area.id AND activos.id_tipo_activo=tipo_activo.id"
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
}
    
export const createActivo = async (req, res) => {
    try {
        const { nombre_activo, descripcion, id_tipo_activo, valor_compra } = req.body;
        console.log(req.body);
        const [result] = await pool.query(
            "INSERT INTO activos(id_tipo_activo, nombre_activo, descripcion, valor_compra) VALUES (?, ?, ?, ?)",
            [parseInt(id_tipo_activo), nombre_activo, descripcion, valor_compra]
        );
        res.json({
            id: result.insertId,
            id_tipo_activo,
            nombre_activo, 
            descripcion,
            valor_compra,
        });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const updateActivo = async (req, res) => {
    console.log(req.body)
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

export const getActivoArea = async (req, res) => {
    try {
        const [result] = await pool.query(
            "SELECT activos.id, activos.id_area, area.name_area, activos.id_rfid, activos.nombre_activo, responsable.nombre, responsable.apellido, responsable.cargo FROM activos, responsable, area WHERE activos.id_responsable = responsable.id AND activos.id_area = area.id AND activos.id_area = ?", [req.params.id]
        );
        res.json(result);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const getActivoRfid = async (req, res) => {
    try {
        const [result] = await pool.query(
            "SELECT activos.id, activos.id_area, area.name_area, activos.id_rfid, activos.nombre_activo, responsable.nombre, responsable.apellido, responsable.cargo FROM activos, responsable, area WHERE activos.id_responsable = responsable.id and activos.id_area = area.id AND activos.id_rfid = ?", [req.params.id]
        );
        res.json(result[0]);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}