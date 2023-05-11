import express from 'express';
import {PORT} from './config.js';
import cors from 'cors'

import indexRoutes from './Routes/index.routes.js'
import activoRoutes from './Routes/activos.routes.js'
import tipoRoutes from './Routes/tipos.routes.js'
import areaRoutes from './Routes/areas.routes.js'
import personalRoutes from './Routes/personal.routes.js'
import userRoutes from './Routes/users.routes.js'

import monitoreoRoutes from './Routes/monitoreo.routes.js'
import depreciacionRoutes from './Routes/depreciacion.routes.js'

const app = express(PORT);

app.use(cors())
app.use(express.json())
app.use(indexRoutes)
app.use(activoRoutes)
app.use(tipoRoutes)
app.use(areaRoutes)
app.use(personalRoutes)
app.use(userRoutes)
app.use(monitoreoRoutes)
app.use(depreciacionRoutes)


app.listen(PORT)
console.log(`Server is listening on port ${PORT}`);
