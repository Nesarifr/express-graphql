import { graphqlHTTP } from "express-graphql"
import {graphqlSchema} from "../graphql/schema/schema.graphql.js"
import { root } from "../../services/graphql/productos.graphql.services.js"


export const productosGraphqlController = async (req, res) => {
    return graphqlHTTP({
        schema: graphqlSchema,
        rootValue: root,
        graphiql: true
    })
}