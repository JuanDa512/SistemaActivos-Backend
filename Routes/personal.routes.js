import { Router } from 'express'
import { getPersonal } from '../Controllers/personal.controller.js'

const router = Router()

router.get("/personal", getPersonal)


export default router