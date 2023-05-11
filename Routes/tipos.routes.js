import { Router } from 'express'
import { getTipo, getTipos } from '../Controllers/tipo.controller.js'

const router = Router()

router.get("/tipos", getTipos)
router.get("/tipo/:id", getTipo)


export default router