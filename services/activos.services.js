import { pool } from "../DataAccess/db.js"

export const getActivosServices = async () => {
    const [result] = await pool.query(
        "SELECT activos.id, activos.id_responsable, activos.id_rfid, activos.nombre_activo, activos.descripcion, activos.valor_compra, activos.fecha_compra, responsable.nombre, responsable.apellido, responsable.cargo, tipo_activo.tipo, area.name_area, activos.estado  FROM activos, responsable, area, tipo_activo WHERE activos.id_responsable=responsable.id AND activos.id_area=area.id AND activos.id_tipo_activo=tipo_activo.id"
    );
    return(result)
};

export const getActivoServices = async (data) => {
    const [result] = await pool.query(
        "SELECT * FROM activos WHERE id = ?", [data]
    );
    return(result)
}

export const createActivoServices = async (data) => {
    const { nombre_activo, descripcion, id_tipo_activo, valor_compra } = data;
    const [result] = await pool.query(
        "INSERT INTO activos(id_tipo_activo, nombre_activo, descripcion, valor_compra) VALUES (?, ?, ?, ?)",
        [parseInt(id_tipo_activo), nombre_activo, descripcion, valor_compra]
    );
    return(result)
};

export const updateActivoServices = async (data, id) => {
    const [result] = await pool.query(
        "UPDATE activos SET ? WHERE id = ?", [
            data,
            id        
    ]);
    return(result)
};

export const deleteActivoServices = async (id) => {  
    const [result] = await pool.query(
        "DELETE FROM activos WHERE id = ?", [id]
    );
    return(result)
};

export const getActivoAreaServices = async (id) => {
    const [result] = await pool.query(
        "SELECT activos.id, activos.id_area, area.name_area, activos.id_rfid, activos.nombre_activo, responsable.nombre, responsable.apellido, responsable.cargo FROM activos, responsable, area WHERE activos.id_responsable = responsable.id AND activos.id_area = area.id AND activos.id_area = ?", [id]
    );  
    return result
}

export const getActivoRfidServices = async (id) => {
    const [result] = await pool.query(
        "SELECT activos.id, activos.id_area, area.name_area, activos.id_rfid, activos.nombre_activo, responsable.nombre, responsable.apellido, responsable.cargo FROM activos, responsable, area WHERE activos.id_responsable = responsable.id and activos.id_area = area.id AND activos.id_rfid = ?", [id]
    );
    return result
}