import { getAreaServices, getAreasServices } from "../services/area.services.js";

export const getAreas = async (req, res) => {
    try {
        const result = await getAreasServices()
        res.json(result)
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}
export const getArea = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await getAreaServices(id)
    
        if (result.length === 0) {
            return res.status(404).json({ Message: "Area no Encontrado" });
        }
        res.json(result[0]);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}
