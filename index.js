import express from 'express';
import {PORT} from './config.js';
import cors from 'cors'

import indexRoutes from './Routes/index.routes.js'
import activoroutes from './Routes/activos.routes.js'

const app = express(PORT);

app.use(cors())
app.use(express.json())
app.use(indexRoutes)
app.use(activoroutes)


app.listen(PORT)
console.log(`Server is listening on port ${PORT}`);
