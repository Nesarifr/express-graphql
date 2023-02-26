import Express from "express";
import { productosGraphqlController } from "../../controller/graphql/productos.graphql.controller.js";

export const routerProductosGraphql = Express.Router();

routerProductosGraphql.use(Express.json());
routerProductosGraphql.use(Express.urlencoded({ extended: true }));

routerProductosGraphql.use('/', productosGraphqlController);