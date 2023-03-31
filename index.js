import express from 'express';
import {PORT} from './config.js';

import indexRoutes from './Routes/index.routes.js'
import activoroutes from './Routes/activos.routes.js'

const app = express(PORT);

app.use(express.json())
app.use(activoroutes)
app.use(indexRoutes)

app.listen(PORT)
console.log(`Server is listening on port ${PORT}`);
