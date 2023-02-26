import { buildSchema } from "graphql"

const prouctos=
    `type producto {
        _id:String,
        id:Int,
        title: String,
        price: Int,
        thumbnail: String
    }, 
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
    },
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
    },
    input carritoInput {
        userID: String,
        productos: [producto]
    }`


export const graphqlSchema = buildSchema(`
    ${prouctos},
    ${users},
    ${carritos},

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
        deleteProductById(id: Int): String,
        updateProductById(producto: productoInput, id: Int): producto,
        addUser(user: userInput): user,
        deleteUserById(id: Int): String,
        updateUserById(producto: productoInput, id: Int): user,
        addCarrito(carrito: carritoInput): carrito,
        deleteCarritoById(id: Int): String,
        updateCarritoById(producto: productoInput, id: Int): carrito 
    }
`)