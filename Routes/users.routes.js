import { Router } from 'express'
import { getUsers, updateUser } from '../Controllers/users.controller.js'

const router = Router()

router.get("/usuarios/:id", getUsers)
router.put("/usuarios/:id", updateUser)


export default router