import { pool } from "../DataAccess/db.js"
import { getUsersServices, updateUserServices } from "../services/user.services.js";

export const getUsers = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await getUsersServices(id)
        res.json(result[0])
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const updateUser = async (req, res) => {
    console.log(req.body)
    try {
        const info = req.body
        const id = req.params.id
        const result = await updateUserServices(info, id)
    
        if (result.affectedRows === 0) {
            return res.status(404).json({ Message: "Activo no Encontrado" });
        }
        return res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};