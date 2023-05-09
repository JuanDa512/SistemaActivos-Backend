import { Router } from 'express'
import { getArea, getAreas } from '../Controllers/area.controller.js'

const router = Router()

router.get("/areas", getAreas)
router.get("/area/:id", getArea)


export default router