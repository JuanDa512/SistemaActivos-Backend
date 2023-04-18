import { Router } from 'express'
import { getAreas } from '../Controllers/area.controller.js'

const router = Router()

router.get("/areas", getAreas)


export default router