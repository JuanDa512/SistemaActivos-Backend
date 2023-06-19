import { pool } from "../DataAccess/db.js"

export const loginServices = async (username, password) => {
   
    const [result] = await pool.query(
        "SELECT * FROM usuarios WHERE username = ? AND password = ?", [
            username,
            password
        ]
    );
   return result
};