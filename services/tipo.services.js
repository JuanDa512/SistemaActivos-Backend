import { pool } from "../DataAccess/db.js"

export const getTiposServices = async () => {

    const [result] = await pool.query(
        "SELECT * FROM tipo_activo;"
    );
    return result
};

export const getTipoServices = async (data) => {
   
    const [result] = await pool.query(
        "SELECT * FROM tipo_activo WHERE id = ?", [data]
    );
    return result
}