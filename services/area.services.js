import { pool } from "../DataAccess/db.js"

export const getAreasServices = async () => {
   
    const [result] = await pool.query(
        "SELECT * FROM area;"
    );
    return result
}
export const getAreaServices = async (data) => {
   
    const [result] = await pool.query(
        "SELECT * FROM area WHERE id = ?", [data]
    );
    return result
}