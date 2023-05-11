import { pool } from "../DataAccess/db.js"
import moment from 'moment';

export const getDepreciacion = async (req, res) => {
    try {
        const {id_tipo_activo, date} = req.body

        const [tipo] = await pool.query(
            "SELECT * FROM tipo_activo WHERE id = ?", [id_tipo_activo]
        )
        const [activos] = await pool.query(
            "SELECT activos.id, activos.nombre_activo, activos.valor_compra, activos.fecha_compra FROM activos WHERE activos.id_tipo_activo = ?", [id_tipo_activo]
        )
        const depreciacion = []
        for (let index = 0; index < activos.length; index++) {
            var fecha_compra = moment(activos[index].fecha_compra)
            var fecha_depre = moment(date).add(29, 'days')
            var dias = fecha_compra.get('date')
            var n = 0

            var valor_neto = activos[index].valor_compra - (activos[index].valor_compra*0.13)
            var depre_mes = ((valor_neto*(tipo[0].depreciacion/100))/12).toFixed(3)
            if (dias<20) {
                n++
                var meses = fecha_depre.diff(fecha_compra, 'months')
                n=n+meses
                var depre_acumulada = depre_mes*n
                var valor_residual = valor_neto-depre_acumulada                   
                depreciacion.push({
                    id_activo: activos[index].id,
                    nombre_activo: activos[index].nombre_activo,
                    valor_compra: activos[index].valor_compra,
                    valor_neto: valor_neto,
                    depre_mes: depre_mes,
                    depre_acumulada: depre_acumulada.toFixed(3),
                    valor_residual: valor_residual.toFixed(3),
                    fecha_compra: fecha_compra.format('DD-MM-YYYY'),
                    fecha_depre: fecha_depre.format('DD-MM-YYYY'),
                })
            } else {
                var meses = fecha_depre.diff(fecha_compra, 'months')
                n=n+meses
                var depre_acumulada = depre_mes*n
                var valor_residual = valor_neto-depre_acumulada                   
                depreciacion.push({
                    id_activo: activos[index].id,
                    nombre_activo: activos[index].nombre_activo,
                    valor_compra: activos[index].valor_compra,
                    valor_neto: valor_neto,
                    depre_mes: depre_mes,
                    depre_acumulada: depre_acumulada.toFixed(),
                    valor_residual: valor_residual.toFixed(),
                    fecha_compra: fecha_compra.format('DD-MM-YYYY'),
                    fecha_depre: fecha_depre.format('DD-MM-YYYY'),
                })
            }
        }
        res.json(depreciacion)
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}