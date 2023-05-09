import { Router } from 'express'
import { getLecturaMonitoreo, registrarLectura, registrarLecturaArea } from '../Controllers/monitoreo.controller.js'


const router = Router()

router.post("/monitoreoarea", registrarLecturaArea)
router.post("/monitoreo", registrarLectura)
router.get("/lectura/:id", getLecturaMonitoreo)

export default router