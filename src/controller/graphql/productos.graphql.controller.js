import { graphqlHTTP } from "express-graphql"
import {graphqlSchema} from "../graphql/schema/schema.graphql.js"
import { root } from "../../services/graphql/productos.graphql.services.js"


export const productosGraphqlController = async () => {
    console.log("llegamos aca");
    const response =  graphqlHTTP({
        schema: graphqlSchema,
        rootValue: root,
        graphiql: true
    })
    console.log(response);
    return response;
}