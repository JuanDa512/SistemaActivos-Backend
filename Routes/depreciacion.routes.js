import { Router } from 'express'
import { getDepreciacion } from '../Controllers/depreciacion.controller.js'


const router = Router()

router.post("/depreciacion", getDepreciacion)


export default router