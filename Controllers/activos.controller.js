import { getActivosServices, getActivoServices, 
    createActivoServices, updateActivoServices, 
    deleteActivoServices, getActivoAreaServices, 
    getActivoRfidServices } from "../services/activos.services.js"

export const getActivos = async (req, res) => {
    try {
        const result = await getActivosServices()
        res.json(result)
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const getActivo = async (req, res) => {
    try {
        const id = req.params.id
        const result = await getActivoServices(id)

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
        const activo = req.body
        const result = await createActivoServices(activo)
        res.json({
            id: result.insertId,
        });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const updateActivo = async (req, res) => {
    try {
        const info = req.body;
        const id = req.params.id;

        const [result] = await updateActivoServices(info, id)

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
        const id = req.params.id;
        const [result] = await deleteActivoServices(id)
    
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
        const id = req.params.id;
        const result = await getActivoAreaServices(id)
        res.json(result);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const getActivoRfid = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await getActivoRfidServices(id)
        res.json(result[0]);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}