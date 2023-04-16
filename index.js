import express from 'express';
import {PORT} from './config.js';
import cors from 'cors'

import indexRoutes from './Routes/index.routes.js'
import activoRoutes from './Routes/activos.routes.js'
import tipoRoutes from './Routes/tipos.routes.js'

const app = express(PORT);

app.use(cors())
app.use(express.json())
app.use(indexRoutes)
app.use(activoRoutes)
app.use(tipoRoutes)


app.listen(PORT)
console.log(`Server is listening on port ${PORT}`);
