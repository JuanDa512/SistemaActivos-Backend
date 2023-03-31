import { Router } from 'express'
import { getActivos} from '../Controllers/activos.controller.js'
import { getActivo} from '../Controllers/activos.controller.js'
import { createActivo} from '../Controllers/activos.controller.js'
import { updateActivo} from '../Controllers/activos.controller.js'
import { deleteActivo} from '../Controllers/activos.controller.js'

const router = Router()

router.get("/activos", getActivos)
router.get("/activos/:id", getActivo)
router.post("/activos", createActivo)
router.put("/activos/:id", updateActivo)
router.delete("/activos/:id", deleteActivo)

export default router