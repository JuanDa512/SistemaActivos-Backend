import { Router } from 'express'
import { registrarLectura } from '../Controllers/monitoreo.controller.js'


const router = Router()

router.post("/monitoreoarea", registrarLectura)


export default router