import { loginServices } from "../services/login.services.js";

export const login = async (req, res) => {
    try {
        const username = req.body.username;
        const password = req.body.password;
        const result = await loginServices(username, password)
        res.json(result)
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};