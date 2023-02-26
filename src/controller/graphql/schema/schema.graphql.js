import { buildSchema } from "graphql"

const productos=
    `type producto {
        _id:String,
        id:Int,
        title: String,
        price: Int,
        thumbnail: String
    }
    input productoInput {
        title: String,
        price: Int,
        thumbnail: String
    }`

    const users=
    `type user {
        _id:String
        id:Int,
        nombre: String,
        email: String,
        fotoUrl: String
    }
    input userInput {
        nombre: String,
        email: String,
        password: String,
        direccion: String,
        edad: Int,
        telefono: String,
        fotoUrl: String
    }`

    const carritos=
    `type carrito {
        _id:String
        userID: String,
        id:Int,
        productos: [producto]
    }
    input carritoInput {
        userID: String,
        productos: productoInput
    }`


export const graphqlSchema = buildSchema(`
    ${productos}
    ${users}
    ${carritos}

    type stringResponse{
        message: String
    }

    type Query {
        getProducts: [producto],
        getProductById(id: Int): producto,
        getUsers: [user],
        getUserById(id: Int): user,
        getCarritos: [carrito],
        getCarritoById(id: Int): carrito
    }
    type Mutation {
        addProduct(producto: productoInput): producto,
        deleteProductById(id: Int): stringResponse,
        updateProductById(producto: productoInput, id: Int): stringResponse,
        addUser(user: userInput): user,
        deleteUserById(id: Int): stringResponse,
        updateUserById(producto: productoInput, id: Int): stringResponse,
        addCarrito(carrito: carritoInput): carrito,
        deleteCarritoById(id: Int): stringResponse,
        updateCarritoById(producto: productoInput, id: Int): stringResponse 
    }
`)