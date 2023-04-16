import { Router } from 'express'
import { getTipos } from '../Controllers/tipo.controller.js'

const router = Router()

router.get("/tipos", getTipos)


export default router