import { getTipoServices, getTiposServices } from "../services/tipo.services.js";

export const getTipos = async (req, res) => {
    try {
        const result = await getTiposServices();
        res.json(result)
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const getTipo = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await getTipoServices(id)
    
        if (result.length === 0) {
            return res.status(404).json({ Message: "Tipo no Encontrado" });
        }
        res.json(result[0]);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}