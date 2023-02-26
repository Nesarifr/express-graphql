import express from "express"
import {routerProducts} from './api/productos.routes.js'
import {routerCarrito} from './api/carritos.routes.js'
import {routerLogin} from './api/login.routes.js'
import {routerRegister} from './api/register.routes.js'
import {routerHome} from './api/home.routes.js'
import {routerUsers} from './api/users.routes.js'

import {routerProductosGraphql} from './graphql/productos.graphql.routes.js'

const router = express.Router()

/* ------------------- rutas /api ------------------- */
router.use('/', routerHome );
router.use('/api/productos', routerProducts );
router.use('/api/carrito', routerCarrito );
router.use('/api/login', routerLogin );
router.use('/api/register', routerRegister );
router.use('/api/users', routerUsers );


/* ------------------- rutas /api/graphql ------------------- */
router.use('/api/graphql/productos', routerProductosGraphql );
// router.use('/api/graphql/carrito', routerCarrito );
// router.use('/api/graphql/users', routerUsers );

export {router as apiRouter}