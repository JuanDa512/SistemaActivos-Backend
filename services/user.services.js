import { pool } from "../DataAccess/db.js"

export const getUsersServices = async (data) => {
   
    const [result] = await pool.query(
        "SELECT * FROM usuarios WHERE id = ?", [data]
    );
    return result
};

export const updateUserServices = async (info, id) => {
    
    const [result] = await pool.query(
        "UPDATE usuarios SET ? WHERE id = ?", [
            info,
            id        
    ]);
    return result
};